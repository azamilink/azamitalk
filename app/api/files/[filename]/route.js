import fs from 'fs';
import path from 'path';

export const runtime = 'nodejs';

export async function DELETE(request, { params }) {
    try {
        const { filename } = params || {};

        if (!filename) {
            return new Response(JSON.stringify({ error: 'Filename diperlukan' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const filePath = path.join(process.cwd(), 'public', 'uploads', filename);

        if (!fs.existsSync(filePath)) {
            return new Response(JSON.stringify({ error: 'File tidak ditemukan' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        fs.unlinkSync(filePath);

        return new Response(JSON.stringify({ message: 'File berhasil dihapus' }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error deleting file:', error);
        return new Response(JSON.stringify({ error: 'Gagal menghapus file' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
