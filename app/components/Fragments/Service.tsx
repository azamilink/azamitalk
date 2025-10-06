import Link from 'next/link';

function Service() {
    return (
        <section id="services" className="services section light-background">
            <div className="container section-title" data-aos="fade-up">
                <span>Services</span>
                <h2>Services</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
            </div>
            <div className="container">
                <div className="row gy-4">
                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="bi bi-activity"></i>
                            </div>
                            <Link href="/service-detail" className="stretched-link">
                                <h3>Nesciunt Mete</h3>
                            </Link>
                            <p>Provident nihil minus qui consequatur non omnis maiores. Eos accusantium minus dolores iure perferendis tempore et consequatur.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="bi bi-broadcast"></i>
                            </div>
                            <Link href="/service-detail" className="stretched-link">
                                <h3>Eosle Commodi</h3>
                            </Link>
                            <p>Ut autem aut autem non a. Sint sint sit facilis nam iushref sint. Libero corrupti neque eum hic non ut nesciunt dolorem.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="bi bi-easel"></i>
                            </div>
                            <Link href="/service-detail" className="stretched-link">
                                <h3>Ledo Markt</h3>
                            </Link>
                            <p>Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus ea aut. Vel qui id voluptas adipisci eos earum corrupti.</p>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="400">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="bi bi-bounding-box-circles"></i>
                            </div>
                            <Link href="/service-detail" className="stretched-link">
                                <h3>Asperiores Commodit</h3>
                            </Link>
                            <p>Non et temporibus minus omnis sed dolor esse consequatur. Cupiditate sed error ea fuga sit provident adipisci neque.</p>
                            <Link href="/service-detail" className="stretched-link"></Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="bi bi-calendar4-week"></i>
                            </div>
                            <Link href="/service-detail" className="stretched-link">
                                <h3>Velit Doloremque</h3>
                            </Link>
                            <p>Cumque et suscipit saepe. Est maiores autem enim facilis ut aut ipsam corporis aut. Sed animi at autem alias eius labore.</p>
                            <Link href="/service-detail" className="stretched-link"></Link>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="600">
                        <div className="service-item position-relative">
                            <div className="icon">
                                <i className="bi bi-chat-square-text"></i>
                            </div>
                            <Link href="/service-detail" className="stretched-link">
                                <h3>Dolori Architechref</h3>
                            </Link>
                            <p>Hic molestias ea quibusdam eos. Fugiat enim doloremque aut neque non et debitis iure. Corrupti recusandae ducimus enim.</p>
                            <Link href="/service-detail" className="stretched-link"></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Service;
