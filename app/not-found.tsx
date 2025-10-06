'use client';

import Link from 'next/link';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export default function NotFound() {
    return (
        <Container fluid className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
            <Row className="w-100">
                <Col md={{ span: 6, offset: 3 }} className="text-center">
                    <Card className="shadow-lg p-5 border-0">
                        <Card.Body>
                            <h1 className="display-1 text-danger fw-bold">404</h1>
                            <h2 className="card-title fw-bold mt-3">Halaman tidak ditemukan</h2>
                            <p className="card-text text-muted mt-3">Maaf, kami tidak dapat menemukan halaman yang Anda cari. Silakan periksa kembali URL-nya.</p>
                            <Link href="/" passHref>
                                <Button variant="primary" size="lg" className="mt-4">
                                    Kembali ke Beranda
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
