export interface UploadedFile {
    filename: string;
    originalname: string;
    size: number;
    path: string;
    mimetype: string;
    uploadedAt?: Date;
}

export interface FileUploadResponse {
    message: string;
    file: UploadedFile;
}

export interface FilesListResponse {
    files: UploadedFile[];
}

export interface ApiError {
    error: string;
}
