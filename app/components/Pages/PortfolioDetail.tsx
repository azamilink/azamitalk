import Script from 'next/script';

function PortfolioDetail() {
    return (
        <>
            <div className="page-title">
                <div className="container d-lg-flex justify-content-between align-items-center">
                    <h1 className="mb-2 mb-lg-0">Portfolio Details</h1>
                    <nav className="breadcrumbs">
                        <ol>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li className="current">Portfolio Details</li>
                        </ol>
                    </nav>
                </div>
            </div>

            <section id="portfolio-details" className="portfolio-details section">
                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4">
                        <div className="col-lg-8">
                            <div className="portfolio-details-slider swiper init-swiper">
                                <Script type="application/json" className="swiper-config">
                                    {`
                                      {
                                        "loop": true,
                                        "speed": 600,
                                        "autoplay": {
                                          "delay": 5000
                                        },
                                        "slidesPerView": "auto",
                                        "pagination": {
                                          "el": ".swiper-pagination",
                                          "type": "bullets",
                                          "clickable": true
                                        }
                                      }
                                    `}
                                </Script>

                                <div className="swiper-wrapper align-items-center">
                                    <div className="swiper-slide">
                                        <img src="/img/portfolio/app-1.jpg" alt="" />
                                    </div>

                                    <div className="swiper-slide">
                                        <img src="/img/portfolio/product-1.jpg" alt="" />
                                    </div>

                                    <div className="swiper-slide">
                                        <img src="/img/portfolio/branding-1.jpg" alt="" />
                                    </div>

                                    <div className="swiper-slide">
                                        <img src="/img/portfolio/books-1.jpg" alt="" />
                                    </div>
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="portfolio-info" data-aos="fade-up" data-aos-delay="200">
                                <h3>Project information</h3>
                                <ul>
                                    <li>
                                        <strong>Category</strong>: Web design
                                    </li>
                                    <li>
                                        <strong>Client</strong>: ASU Company
                                    </li>
                                    <li>
                                        <strong>Project date</strong>: 01 March, 2020
                                    </li>
                                    <li>
                                        <strong>Project URL</strong>: <a href="#">www.example.com</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="portfolio-description" data-aos="fade-up" data-aos-delay="300">
                                <h2>Exercitationem repudiandae officiis neque suscipit</h2>
                                <p>Autem ipsum nam porro corporis rerum. Quis eos dolorem eos itaque inventore commodi labore quia quia. Exercitationem repudiandae officiis neque suscipit non officia eaque itaque enim. Voluptatem officia accusantium nesciunt est omnis tempora consectetur dignissimos. Sequi nulla at esse enim cum deserunt eius.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default PortfolioDetail;
