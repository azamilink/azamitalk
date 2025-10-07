'use client';

import { useState } from 'react';
import Head from 'next/head';
import FileUpload from '../components/FileUpload';
import FileList from '../components/FileList';

export default function Home() {
    const [refreshFiles, setRefreshFiles] = useState(false);

    const handleUploadSuccess = () => {
        // Trigger refresh file list
        setRefreshFiles((prev) => !prev);
    };

    return (
        <div className="container">
            <Head>
                <title>File Upload App</title>
                <meta name="description" content="Upload dan kelola file dengan Next.js" />
            </Head>

            <main>
                <h1>File Upload Manager</h1>
                <p>Upload dan kelola file Anda dengan mudah</p>

                <FileUpload onUploadSuccess={handleUploadSuccess} />
                <FileList key={refreshFiles} />
            </main>

            <style jsx>{`
                .container {
                    min-height: 100vh;
                    padding: 0 20px;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                main {
                    padding: 40px 0;
                }

                h1 {
                    color: #333;
                    margin-bottom: 10px;
                }

                p {
                    color: #666;
                    margin-bottom: 30px;
                }
            `}</style>

            <style jsx global>{`
                * {
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                    padding: 0;
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
                    background-color: #f5f5f5;
                }
            `}</style>
        </div>
    );
}
