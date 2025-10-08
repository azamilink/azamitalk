import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ALLOWED_EXT = ['.jpeg', '.jpg', '.png', '.gif', '.pdf', '.doc', '.docx', '.txt'];

export async function POST(request: Request) {
    try {
        const form = await request.formData();
        const file = form.get('file') as File | null;

        if (!file || typeof (file as any).arrayBuffer !== 'function') {
            return new Response(JSON.stringify({ error: 'Tidak ada file yang diupload' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const arrayBuffer = await (file as any).arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        if (buffer.length > MAX_FILE_SIZE) {
            return new Response(JSON.stringify({ error: 'Ukuran file melebihi batas 5MB' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const originalname = (file as any).name || 'file';
        const ext = path.extname(originalname).toLowerCase();
        if (!ALLOWED_EXT.includes(ext)) {
            return new Response(JSON.stringify({ error: 'Jenis file tidak diizinkan' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const uploadDir = path.join(process.cwd(), 'public', 'unggahan');
        if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const filename = `${path.parse(originalname).name}-${uniqueSuffix}${ext}`;
        const filePath = path.join(uploadDir, filename);

        fs.writeFileSync(filePath, buffer);

        const result = {
            message: 'File berhasil diupload',
            file: {
                filename,
                originalname,
                size: buffer.length,
                path: `/unggahan/${filename}`,
                mimetype: (file as any).type || 'application/octet-stream',
            },
        };

        return new Response(JSON.stringify(result), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        const msg = err instanceof Error ? err.message : 'Terjadi kesalahan internal';
        return new Response(JSON.stringify({ error: msg }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export async function OPTIONS() {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}
