'use client';

import { useState, useEffect } from 'react';

export default function FileList() {
    const [files, setFiles] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchFiles = async () => {
        try {
            const response = await fetch('/api/files');
            const contentType = response.headers.get('content-type') || '';
            let result;

            if (contentType.includes('application/json')) {
                result = await response.json();
            } else {
                const text = await response.text();
                throw new Error(`Unexpected server response when fetching files: ${text.substring(0, 200)}`);
            }

            if (response.ok) {
                setFiles(result.files || []);
            } else {
                console.error('Failed fetching files:', result);
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

    const handleDelete = async (filename) => {
        if (!confirm('Apakah Anda yakin ingin menghapus file ini?')) {
            return;
        }

        try {
            const response = await fetch(`/api/files/${filename}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setFiles(files.filter((file) => file.filename !== filename));
                alert('File berhasil dihapus');
            } else {
                alert('Gagal menghapus file');
            }
        } catch (error) {
            console.error('Error deleting file:', error);
            alert('Terjadi kesalahan saat menghapus file');
        }
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const isImage = (mimetype) => {
        return mimetype && mimetype.startsWith('image/');
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
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'block';
                                        }}
                                    />
                                ) : (
                                    <div className="file-icon">{getFileIcon(file.mimetype)}</div>
                                )}
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

// Helper function untuk icon file
function getFileIcon(mimetype) {
    if (mimetype.includes('image')) return '🖼️';
    if (mimetype.includes('pdf')) return '📄';
    if (mimetype.includes('word')) return '📝';
    if (mimetype.includes('text')) return '📃';
    return '📁';
}
