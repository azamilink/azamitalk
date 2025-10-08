import { useState, ChangeEvent } from 'react';
import { UploadedFile } from '../types/file';

interface FileUploadProps {
    onUploadSuccess?: (file: UploadedFile) => void;
}

interface UploadState {
    file: File | null;
    uploading: boolean;
    message: string;
}

export default function UnggahBerkas({ onUploadSuccess }: FileUploadProps) {
    const [state, setState] = useState<UploadState>({
        file: null,
        uploading: false,
        message: '',
    });

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        if (selectedFile) {
            setState((prev) => ({ ...prev, file: selectedFile, message: '' }));
        }
    };

    const handleUpload = async () => {
        if (!state.file) {
            setState((prev) => ({ ...prev, message: 'Pilih file terlebih dahulu!' }));
            return;
        }

        setState((prev) => ({ ...prev, uploading: true, message: '' }));

        const formData = new FormData();
        formData.append('file', state.file);

        try {
            const response = await fetch('/api/unggah', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (response.ok) {
                setState({
                    file: null,
                    uploading: false,
                    message: 'File berhasil diupload!',
                });

                // Reset input file
                const fileInput = document.getElementById('file-input') as HTMLInputElement;
                if (fileInput) fileInput.value = '';

                // Panggil callback jika ada
                if (onUploadSuccess) {
                    onUploadSuccess((result as any).file);
                }
            } else {
                setState((prev) => ({
                    ...prev,
                    uploading: false,
                    message: `Error: ${(result as any).error}`,
                }));
            }
        } catch (error) {
            setState((prev) => ({
                ...prev,
                uploading: false,
                message: 'Terjadi kesalahan saat upload',
            }));
        }
    };

    return (
        <div className="file-upload">
            <h2>Upload File</h2>

            <div className="upload-form">
                <input id="file-input" type="file" onChange={handleFileChange} disabled={state.uploading} />

                <button onClick={handleUpload} disabled={state.uploading || !state.file} className="upload-button">
                    {state.uploading ? 'Uploading...' : 'Upload File'}
                </button>
            </div>

            {state.message && <div className={`message ${state.message.includes('Error') ? 'error' : 'success'}`}>{state.message}</div>}

            {state.file && (
                <div className="file-info">
                    <p>
                        <strong>File:</strong> {state.file.name}
                    </p>
                    <p>
                        <strong>Size:</strong> {(state.file.size / 1024).toFixed(2)} KB
                    </p>
                    <p>
                        <strong>Type:</strong> {state.file.type}
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
