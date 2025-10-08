import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { ApiError } from '../../../types/file';

export default function handler(req: NextApiRequest, res: NextApiResponse<{ message: string } | ApiError>) {
    const { filename } = req.query;

    if (req.method !== 'DELETE') {
        return res.status(405).json({ error: 'Method tidak diizinkan' });
    }

    if (!filename || typeof filename !== 'string') {
        return res.status(400).json({ error: 'Filename diperlukan' });
    }

    try {
        const filePath = path.join('./public/uploads', filename);

        // Cek jika file exists
        if (!fs.existsSync(filePath)) {
            return res.status(404).json({ error: 'File tidak ditemukan' });
        }

        // Hapus file
        fs.unlinkSync(filePath);
        res.status(200).json({ message: 'File berhasil dihapus' });
    } catch (error) {
        console.error('Error deleting file:', error);
        res.status(500).json({ error: 'Gagal menghapus file' });
    }
}
