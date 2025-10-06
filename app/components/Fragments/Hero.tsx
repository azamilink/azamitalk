function Hero() {
    return (
        <section id="hero" className="hero section">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="fade-up">
                        <h1>Solusi Elegan dan Kreatif</h1>
                        <p>Kami adalah tim desainer berbakat yang membuat situs web, konten marketing, foto dan video berbasis AI</p>
                        <div className="d-flex">
                            <a href="#about" className="btn-get-started">
                                Get Started
                            </a>
                            <a href="https://youtube.com/shorts/JNwp1buuRIw" className="glightbox btn-watch-video d-flex align-items-center">
                                <i className="bi bi-play-circle"></i>
                                <span>Watch Video</span>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="100">
                        <img src="/img/hero-img.png" className="img-fluid animated" alt="hero" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
