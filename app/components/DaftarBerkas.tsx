'use client';

import { useState, useEffect } from 'react';
import { UploadedFile, FilesListResponse } from '../types/file';

export default function FileList() {
    const [files, setFiles] = useState<UploadedFile[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const fetchFiles = async () => {
        try {
            const response = await fetch('/api/berkas');

            // Guard: if no content or non-JSON response, read text for diagnostics
            const contentType = response.headers.get('content-type') || '';

            let result: FilesListResponse | null = null;

            // If 204 No Content, treat as empty list
            if (response.status === 204) {
                result = { files: [] };
            } else if (contentType.includes('application/json')) {
                // Try to parse JSON, but guard against empty body
                const text = await response.text();
                if (!text) {
                    result = { files: [] };
                } else {
                    try {
                        result = JSON.parse(text) as FilesListResponse;
                    } catch (e) {
                        throw new Error(`Failed to parse JSON from /api/berkas: ${String(e)} - response text: ${text.substring(0, 200)}`);
                    }
                }
            } else {
                const text = await response.text();
                throw new Error(`Unexpected response from /api/berkas: ${text.substring(0, 200)}`);
            }

            if (response.ok && result) {
                setFiles(result.files || []);
            }
        } catch (error) {
            console.error('Error fetching files:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    const handleDelete = async (namaberkas: string) => {
        if (!confirm('Apakah Anda yakin ingin menghapus file ini?')) {
            return;
        }

        try {
            const response = await fetch(`/api/berkas/${namaberkas}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setFiles(files.filter((file) => file.filename !== namaberkas));
                alert('File berhasil dihapus');
            } else {
                alert('Gagal menghapus file');
            }
        } catch (error) {
            console.error('Error deleting file:', error);
            alert('Terjadi kesalahan saat menghapus file');
        }
    };

    const formatFileSize = (bytes: number): string => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const isImage = (mimetype: string): boolean => {
        return mimetype ? mimetype.startsWith('image/') : false;
    };

    const getFileIcon = (mimetype: string): string => {
        if (mimetype.includes('image')) return '🖼️';
        if (mimetype.includes('pdf')) return '📄';
        if (mimetype.includes('word')) return '📝';
        if (mimetype.includes('text')) return '📃';
        return '📁';
    };

    if (loading) {
        return <div>Loading files...</div>;
    }

    return (
        <div className="file-list">
            <h2>Daftar File</h2>

            {files.length === 0 ? (
                <p>Tidak ada file yang diupload</p>
            ) : (
                <div className="files-grid">
                    {files.map((file, index) => (
                        <div key={index} className="file-card">
                            <div className="file-preview">
                                {isImage(file.mimetype) ? (
                                    <img
                                        src={file.path}
                                        alt={file.originalname}
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            const nextSibling = e.currentTarget.nextSibling as HTMLElement;
                                            if (nextSibling) nextSibling.style.display = 'block';
                                        }}
                                    />
                                ) : null}
                                <div
                                    className="file-icon"
                                    style={{
                                        display: isImage(file.mimetype) ? 'none' : 'block',
                                    }}
                                >
                                    {getFileIcon(file.mimetype)}
                                </div>
                            </div>

                            <div className="file-details">
                                <h4>{file.originalname}</h4>
                                <p>Size: {formatFileSize(file.size)}</p>
                                <p>Type: {file.mimetype}</p>

                                <div className="file-actions">
                                    <a href={file.path} target="_blank" rel="noopener noreferrer" className="action-button view">
                                        Lihat
                                    </a>
                                    <a href={file.path} download={file.originalname} className="action-button download">
                                        Download
                                    </a>
                                    <button onClick={() => handleDelete(file.filename)} className="action-button delete">
                                        Hapus
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <style jsx>{`
                .file-list {
                    margin-top: 30px;
                }

                .files-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    gap: 20px;
                    margin-top: 20px;
                }

                .file-card {
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    padding: 15px;
                    background-color: white;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .file-preview {
                    height: 120px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin-bottom: 10px;
                    background-color: #f8f9fa;
                    border-radius: 4px;
                    overflow: hidden;
                }

                .file-preview img {
                    max-width: 100%;
                    max-height: 100%;
                    object-fit: contain;
                }

                .file-icon {
                    font-size: 48px;
                    color: #666;
                }

                .file-details h4 {
                    margin: 0 0 10px 0;
                    word-break: break-word;
                }

                .file-details p {
                    margin: 5px 0;
                    font-size: 14px;
                    color: #666;
                }

                .file-actions {
                    display: flex;
                    gap: 5px;
                    margin-top: 10px;
                }

                .action-button {
                    padding: 5px 10px;
                    border: none;
                    border-radius: 4px;
                    text-decoration: none;
                    font-size: 12px;
                    cursor: pointer;
                    text-align: center;
                    flex: 1;
                }

                .action-button.view {
                    background-color: #17a2b8;
                    color: white;
                }

                .action-button.download {
                    background-color: #28a745;
                    color: white;
                }

                .action-button.delete {
                    background-color: #dc3545;
                    color: white;
                }

                .action-button:hover {
                    opacity: 0.8;
                }
            `}</style>
        </div>
    );
}
