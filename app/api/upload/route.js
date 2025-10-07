import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

export async function POST(request) {
    try {
        const form = await request.formData();
        const file = form.get('file');

        if (!file || typeof file.arrayBuffer !== 'function') {
            return new Response(JSON.stringify({ error: 'Tidak ada file yang diupload' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const uploadDir = path.join(process.cwd(), 'public', 'uploads');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const originalname = file.name || 'file';
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const filename = `${path.parse(originalname).name}-${uniqueSuffix}${path.extname(originalname)}`;
        const filePath = path.join(uploadDir, filename);

        fs.writeFileSync(filePath, buffer);

        const result = {
            message: 'File berhasil diupload',
            file: {
                filename,
                originalname,
                size: buffer.length,
                path: `/uploads/${filename}`,
                mimetype: file.type || 'application/octet-stream',
            },
        };

        return new Response(JSON.stringify(result), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
