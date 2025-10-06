export default function Testimonials() {
    return (
        <section id="testimonials" className="testimonials section light-background">
            <div className="container section-title" data-aos="fade-up">
                <span>Testimonials</span>
                <h2>Testimonials</h2>
                <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>

                <div className="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper init-swiper" data-speed="600" data-delay="5000" data-breakpoints='{ "320": { "slidesPerView": 1, "spaceBetween": 40 }, "1200": { "slidesPerView": 3, "spaceBetween": 40 } }'>
                        <script type="application/json" className="swiper-config">
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
                                },
                                "breakpoints": {
                                    "320": {
                                    "slidesPerView": 1,
                                    "spaceBetween": 40
                                    },
                                    "1200": {
                                    "slidesPerView": 3,
                                    "spaceBetween": 20
                                    }
                                }
                                }
                            `}
                        </script>
                        <div className="swiper-wrapper">
                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        <i className=" bi bi-quote quote-icon-left"></i>
                                        <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                    <img src="/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                    <img src="/img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                    <h3>Sara Wilsson</h3>
                                    <h4>Designer</h4>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                    <img src="/img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                                    <h3>Jena Karlis</h3>
                                    <h4>Store Owner</h4>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                    <img src="/img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                                    <h3>Matt Brandon</h3>
                                    <h4>Freelancer</h4>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                    <img src="/img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                    <h3>John Larson</h3>
                                    <h4>Entrepreneur</h4>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
