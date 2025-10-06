import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import Header from './components/Templates/Header';
import Footer from './components/Templates/Footer';

export const metadata: Metadata = {
    title: 'Azamitalk Digital Media',
    description: 'Solusi Digital Marketing untuk Bisnis Anda',
    icons: {
        icon: '/favicon.ico',
        apple: '/apple-touch-icon.png',
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-scroll-behavior="smooth">
            <head>
                <meta charSet="utf-8" />

                {/* Vendor CSS file */}
                {/* <link href="/vendor/aos/aos.css" rel="stylesheet" /> */}
                <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                <link href="/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
                <link href="/vendor/glightbox/css/glightbox.min.css" rel="stylesheet" />
                <link href="/vendor/swiper/swiper-bundle.min.css" rel="stylesheet" />
                <link href="/css/main.css" rel="stylesheet" />

                {/* <!-- Vendor JS Files --> */}
                <Script src="/vendor/aos/aos.js" strategy="beforeInteractive"></Script>
                <Script src="/vendor/bootstrap/js/bootstrap.bundle.min.js" strategy="beforeInteractive"></Script>
                <Script src="/vendor/isotope-layout/isotope.pkgd.min.js" strategy="beforeInteractive"></Script>
                <Script src="/vendor/swiper/swiper-bundle.min.js" strategy="beforeInteractive"></Script>
                <Script src="/vendor/purecounter/purecounter_vanilla.js" strategy="beforeInteractive"></Script>
                <Script src="/vendor/php-email-form/validate.js" strategy="beforeInteractive"></Script>
                <Script src="/vendor/imagesloaded/imagesloaded.pkgd.min.js" strategy="beforeInteractive" />
                <Script src="/vendor/glightbox/js/glightbox.min.js" strategy="beforeInteractive" />
            </head>
            <body className="index-page">
                <Header />
                <main className="main">{children}</main>
                <Footer />

                <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center">
                    <i className="bi bi-arrow-up-short"></i>
                </a>

                {/* <div id="preloader"></div> */}

                {/* <!-- Template Main JS File --> */}
                <Script src="/js/main.js"></Script>
            </body>
        </html>
    );
}
