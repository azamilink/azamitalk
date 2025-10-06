import Link from 'next/link';

export default function Portfolio() {
    return (
        <section id="portfolio" className="portfolio section">
            <div className="container section-title" data-aos="fade-up">
                <span>Portfolio</span>
                <h2>Portfolio</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>

            <div className="container">
                <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
                    <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                        <li data-filter="*" className="filter-active">
                            All
                        </li>
                        <li data-filter=".filter-app">App</li>
                        <li data-filter=".filter-product">Product</li>
                        <li data-filter=".filter-branding">Branding</li>
                        <li data-filter=".filter-books">Books</li>
                    </ul>

                    <div className="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                            <img src="/img/portfolio/app-1.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>App 1</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                <a href="/img/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                                    <i className="bi bi-zoom-in"></i>
                                </a>
                                <Link href="/portfolio-detail" title="More Details" className="details-link">
                                    <i className="bi bi-link-45deg"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                            <img src="/img/portfolio/product-1.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Product 1</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                <a href="/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" className="glightbox preview-link">
                                    <i className="bi bi-zoom-in"></i>
                                </a>
                                <Link href="/portfolio-detail" title="More Details" className="details-link">
                                    <i className="bi bi-link-45deg"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                            <img src="/img/portfolio/branding-1.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Branding 1</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                <a href="/img/portfolio/branding-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" className="glightbox preview-link">
                                    <i className="bi bi-zoom-in"></i>
                                </a>
                                <Link href="/portfolio-detail" title="More Details" className="details-link">
                                    <i className="bi bi-link-45deg"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                            <img src="/img/portfolio/books-1.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Books 1</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                <a href="/img/portfolio/books-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-book" className="glightbox preview-link">
                                    <i className="bi bi-zoom-in"></i>
                                </a>
                                <Link href="/portfolio-detail" title="More Details" className="details-link">
                                    <i className="bi bi-link-45deg"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                            <img src="/img/portfolio/app-2.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>App 2</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                <a href="/img/portfolio/app-2.jpg" title="App 2" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                                    <i className="bi bi-zoom-in"></i>
                                </a>
                                <Link href="/portfolio-detail" title="More Details" className="details-link">
                                    <i className="bi bi-link-45deg"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                            <img src="/img/portfolio/product-2.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Product 2</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                <a href="/img/portfolio/product-2.jpg" title="Product 2" data-gallery="portfolio-gallery-product" className="glightbox preview-link">
                                    <i className="bi bi-zoom-in"></i>
                                </a>
                                <Link href="/portfolio-detail" title="More Details" className="details-link">
                                    <i className="bi bi-link-45deg"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                            <img src="/img/portfolio/branding-2.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Branding 2</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                <a href="/img/portfolio/branding-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link">
                                    <i className="bi bi-zoom-in"></i>
                                </a>
                                <Link href="/portfolio-detail" title="More Details" className="details-link">
                                    <i className="bi bi-link-45deg"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                            <img src="/img/portfolio/books-2.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Books 2</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                <a href="/img/portfolio/books-2.jpg" title="Branding 2" data-gallery="portfolio-gallery-book" className="glightbox preview-link">
                                    <i className="bi bi-zoom-in"></i>
                                </a>
                                <Link href="/portfolio-detail" title="More Details" className="details-link">
                                    <i className="bi bi-link-45deg"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                            <img src="/img/portfolio/app-3.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>App 3</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                <a href="/img/portfolio/app-3.jpg" title="App 3" data-gallery="portfolio-gallery-app" className="glightbox preview-link">
                                    <i className="bi bi-zoom-in"></i>
                                </a>
                                <Link href="/portfolio-detail" title="More Details" className="details-link">
                                    <i className="bi bi-link-45deg"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-product">
                            <img src="/img/portfolio/product-3.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Product 3</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                <a href="/img/portfolio/product-3.jpg" title="Product 3" data-gallery="portfolio-gallery-product" className="glightbox preview-link">
                                    <i className="bi bi-zoom-in"></i>
                                </a>
                                <Link href="/portfolio-detail" title="More Details" className="details-link">
                                    <i className="bi bi-link-45deg"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding">
                            <img src="/img/portfolio/branding-3.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Branding 3</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                <a href="/img/portfolio/branding-3.jpg" title="Branding 2" data-gallery="portfolio-gallery-branding" className="glightbox preview-link">
                                    <i className="bi bi-zoom-in"></i>
                                </a>
                                <Link href="/portfolio-detail" title="More Details" className="details-link">
                                    <i className="bi bi-link-45deg"></i>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item isotope-item filter-books">
                            <img src="/img/portfolio/books-3.jpg" className="img-fluid" alt="" />
                            <div className="portfolio-info">
                                <h4>Books 3</h4>
                                <p>Lorem ipsum, dolor sit amet consectetur</p>
                                <a href="/img/portfolio/books-3.jpg" title="Branding 3" data-gallery="portfolio-gallery-book" className="glightbox preview-link">
                                    <i className="bi bi-zoom-in"></i>
                                </a>
                                <Link href="/portfolio-detail" title="More Details" className="details-link">
                                    <i className="bi bi-link-45deg"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
