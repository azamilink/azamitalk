'use client';

import { useState } from 'react';

export default function FileUpload({ onUploadSuccess }) {
    const [file, setFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [message, setMessage] = useState('');

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
            setMessage('');
        }
    };

    const handleUpload = async () => {
        if (!file) {
            setMessage('Pilih file terlebih dahulu!');
            return;
        }

        setUploading(true);
        setMessage('');

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            });

            const contentType = response.headers.get('content-type') || '';
            let result;

            if (contentType.includes('application/json')) {
                result = await response.json();
            } else {
                // If server returned HTML (e.g. an error page), read as text for debugging
                const text = await response.text();
                throw new Error(`Unexpected server response: ${text.substring(0, 200)}`);
            }

            if (response.ok) {
                setMessage('File berhasil diupload!');
                setFile(null);
                // Reset input file
                const inputEl = document.getElementById('file-input');
                if (inputEl) inputEl.value = '';

                // Panggil callback jika ada
                if (onUploadSuccess) {
                    onUploadSuccess(result.file);
                }
            } else {
                setMessage(`Error: ${result?.error || 'Unknown error'}`);
            }
        } catch (error) {
            console.error('Upload error:', error);
            setMessage('Terjadi kesalahan saat upload. Lihat console untuk detail.');
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="file-upload">
            <h2>Upload File</h2>

            <div className="upload-form">
                <input id="file-input" type="file" onChange={handleFileChange} disabled={uploading} />

                <button onClick={handleUpload} disabled={uploading || !file} className="upload-button">
                    {uploading ? 'Uploading...' : 'Upload File'}
                </button>
            </div>

            {message && <div className={`message ${message.includes('Error') ? 'error' : 'success'}`}>{message}</div>}

            {file && (
                <div className="file-info">
                    <p>
                        <strong>File:</strong> {file.name}
                    </p>
                    <p>
                        <strong>Size:</strong> {(file.size / 1024).toFixed(2)} KB
                    </p>
                    <p>
                        <strong>Type:</strong> {file.type}
                    </p>
                </div>
            )}

            <style jsx>{`
                .file-upload {
                    border: 2px dashed #ddd;
                    padding: 20px;
                    border-radius: 8px;
                    margin-bottom: 30px;
                }

                .upload-form {
                    display: flex;
                    gap: 10px;
                    align-items: center;
                    margin-bottom: 15px;
                }

                input[type='file'] {
                    flex: 1;
                    padding: 8px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }

                .upload-button {
                    padding: 8px 16px;
                    background-color: #0070f3;
                    color: white;
                    border: none;
                    border-radius: 4px;
                    cursor: pointer;
                }

                .upload-button:disabled {
                    background-color: #ccc;
                    cursor: not-allowed;
                }

                .upload-button:hover:not(:disabled) {
                    background-color: #0051a8;
                }

                .message {
                    padding: 10px;
                    border-radius: 4px;
                    margin: 10px 0;
                }

                .message.success {
                    background-color: #d4edda;
                    color: #155724;
                    border: 1px solid #c3e6cb;
                }

                .message.error {
                    background-color: #f8d7da;
                    color: #721c24;
                    border: 1px solid #f5c6cb;
                }

                .file-info {
                    background-color: #f8f9fa;
                    padding: 10px;
                    border-radius: 4px;
                    margin-top: 10px;
                }

                .file-info p {
                    margin: 5px 0;
                }
            `}</style>
        </div>
    );
}
