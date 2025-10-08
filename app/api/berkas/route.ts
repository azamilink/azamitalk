import fs from 'fs';
import path from 'path';
import { FilesListResponse, UploadedFile } from '../../types/file';

export const runtime = 'nodejs';

export async function GET() {
    try {
        const uploadDir = path.join(process.cwd(), 'public', 'unggahan');

        if (!fs.existsSync(uploadDir)) {
            return new Response(JSON.stringify({ files: [] }), {
                status: 200,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const files: UploadedFile[] = fs.readdirSync(uploadDir).map((filename) => {
            const filePath = path.join(uploadDir, filename);
            const stats = fs.statSync(filePath);

            return {
                filename: filename,
                originalname: filename,
                size: stats.size,
                path: `/unggahan/${filename}`,
                uploadedAt: stats.birthtime,
                mimetype: getMimeType(filename),
            };
        });

        const response: FilesListResponse = { files };
        return new Response(JSON.stringify(response), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error reading files:', error);
        return new Response(JSON.stringify({ error: 'Gagal membaca file' }), {
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
            'Access-Control-Allow-Methods': 'GET, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}

// Helper function untuk menentukan MIME type
function getMimeType(filename: string): string {
    const ext = path.extname(filename).toLowerCase();
    const mimeTypes: { [key: string]: string } = {
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
