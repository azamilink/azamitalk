function About() {
    return (
        <section id="about" className="about section">
            <div className="container section-title" data-aos="fade-up">
                <span>
                    About Us
                    <br />
                </span>
                <h2>About</h2>
                <p>Kami percaya setiap klik punya cerita.</p>
                <p>Di sini, kami bantu brand Anda bersinar dengan strategi digital yang cerdas dan konten yang memikat. ✨</p>
            </div>

            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-6 position-relative align-self-start" data-aos="fade-up" data-aos-delay="100">
                        <img src="/img/about.png" className="img-fluid" alt="about" />
                        <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox pulsating-play-btn"></a>
                    </div>
                    <div className="col-lg-6 content" data-aos="fade-up" data-aos-delay="200">
                        <h3>Brand yang memahami pelanggannya akan selalu selangkah di depan.</h3>
                        <p className="fst-italic">Berikut 3 strategi digital efektif untuk meningkatkan nilai brand (brand value) secara berkelanjutan 👇</p>
                        <ul>
                            <li>
                                <i className="bi bi-check2-all"></i> <span>Bangun Brand Awareness Melalui Konten Berkualitas</span>
                            </li>
                            <li>
                                <i className="bi bi-check2-all"></i> <span>Bangun Engagement dan Komunitas Digital</span>
                            </li>
                            <li>
                                <i className="bi bi-check2-all"></i> <span>Gunakan Data & Teknologi untuk Personalisasi</span>
                            </li>
                        </ul>
                        <p>Semakin besar interaksi, semakin kuat loyalitas pelanggan.</p>
                        <p>Ingat: Konsistensi tone, visual, dan pesan adalah kunci membentuk identitas brand yang kuat.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
