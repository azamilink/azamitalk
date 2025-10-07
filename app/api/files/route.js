import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

export async function GET() {
    try {
        const uploadDir = path.join(process.cwd(), 'public', 'uploads');

        if (!fs.existsSync(uploadDir)) {
            return new Response(JSON.stringify({ files: [] }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const files = fs.readdirSync(uploadDir).map((filename) => {
            const filePath = path.join(uploadDir, filename);
            const stats = fs.statSync(filePath);

            return {
                filename: filename,
                originalname: filename,
                size: stats.size,
                path: `/uploads/${filename}`,
                uploadedAt: stats.birthtime,
                mimetype: getMimeType(filename),
            };
        });

        return new Response(JSON.stringify({ files }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Gagal membaca file' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

function getMimeType(filename) {
    const ext = path.extname(filename).toLowerCase();
    const mimeTypes = {
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.png': 'image/png',
        '.gif': 'image/gif',
        '.pdf': 'application/pdf',
        '.doc': 'application/msword',
        '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        '.txt': 'text/plain',
    };
    return mimeTypes[ext] || 'application/octet-stream';
}
