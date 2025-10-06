function Featured() {
    return (
        <section id="featured-services" className="featured-services section">
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-4 d-flex" data-aos="fade-up" data-aos-delay="100">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="bi bi-activity icon"></i>
                            </div>
                            <h4>
                                <a href="" className="stretched-link">
                                    Digital Marketing
                                </a>
                            </h4>
                            <p>Kami menciptakan strategi yang bukan hanya terlihat — tapi juga berbicara dan berdampak. 🚀</p>
                        </div>
                    </div>

                    <div className="col-lg-4 d-flex" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="bi bi-bounding-box-circles icon"></i>
                            </div>
                            <h4>
                                <a href="" className="stretched-link">
                                    Edit Foto & Video
                                </a>
                            </h4>
                            <p>Kami hadir untuk menghadirkan hasil editing yang cepat, presisi, dan berkualitas tinggi. 🎥</p>
                        </div>
                    </div>

                    <div className="col-lg-4 d-flex" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="bi bi-calendar4-week icon"></i>
                            </div>
                            <h4>
                                <a href="" className="stretched-link">
                                    Bangun Situs Web
                                </a>
                            </h4>
                            <p>kami membangun situs yang bukan hanya indah dilihat, tapi juga kuat, cepat, dan fungsional. 💻</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Featured;
