import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function Popular() {
    return (
        <div className="popular">
            {/* <main>
                <div className="pop-product">
                    <div className="prodd">
                        <div className="prod-head">
                            <h1>Popular Car</h1>
                        </div>
                        <div className="view">
                            <button>View All</button>
                        </div>
                    </div>
                    <div className="all-products">
                        <div className="product">
                            <div className="product-start">
                                <div className="h-prod">
                                    <h2 className="hh">Koenigsegg</h2>
                                </div>
                                <div className="h-icon">
                                    <FaHeart />
                                </div>
                            </div>
                            <div className="p-prod">
                                <p>Sport</p>
                            </div>
                            <div className="prod-img">
                                <img src="/1.png" alt="" />
                            </div>
                            <div className="imgs">
                                <div className="img">
                                    <img src="/img1-2.png" alt="" />
                                </div>
                                <div className="img">
                                    <img src="/img2.png" alt="" />
                                </div>
                                <div className="img">
                                    <img src="/img3.png" alt="" />
                                </div>
                            </div>
                            <div className="prod-last-1">
                                <div className="price">
                                    <p>$99.00/ <span className='span'>day</span></p>
                                </div>
                                <div className="prod-but">
                                    <button>Rent Now</button>
                                </div>
                            </div>

                        </div>
                        <div className="product">
                            <div className="product-start">
                                <div className="h-prod">
                                    <h2 className="hh">Nissan GT - R</h2>
                                </div>
                                <div className="h-icon-2">
                                    <FaRegHeart />
                                </div>
                            </div>
                            <div className="p-prod">
                                <p>Sport</p>
                            </div>
                            <div className="prod-img">
                                <img src="/2.png" alt="" />
                            </div>
                            <div className="imgs">
                                <div className="img">
                                    <img src="/img1-3.png" alt="" />
                                </div>
                                <div className="img">
                                    <img src="/img2.png" alt="" />
                                </div>
                                <div className="img">
                                    <img src="/img3.png" alt="" />
                                </div>
                            </div>
                            <div className="prod-last">
                                <div className="price-change">
                                    <div className="price">
                                        <p>$88.00/ <span className='span'>day</span></p>
                                        <p className='change'>$100.00</p>
                                    </div>
                                </div>
                                <div className="prod-but-c">
                                    <button>Rent Now</button>
                                </div>
                            </div>

                        </div>
                        <div className="product">
                            <div className="product-start">
                                <div className="h-prod">
                                    <h2 className="hh">Rolls - Royce</h2>
                                </div>
                                <div className="h-icon">
                                    <FaHeart />
                                </div>
                            </div>
                            <div className="p-prod">
                                <p>Sedan</p>
                            </div>
                            <div className="prod-img">
                                <img src="/3.png" alt="" />
                            </div>
                            <div className="imgs">
                                <div className="img">
                                    <img src="/img1.png" alt="" />
                                </div>
                                <div className="img">
                                    <img src="/img2.png" alt="" />
                                </div>
                                <div className="img">
                                    <img src="/img3-2.png" alt="" />
                                </div>
                            </div>
                            <div className="prod-last-1">
                                <div className="price">
                                    <p>$96.00/ <span className='span'>day</span></p>
                                </div>
                                <div className="prod-but">
                                    <button>Rent Now</button>
                                </div>
                            </div>

                        </div>
                        <div className="product">
                            <div className="product-start">
                                <div className="h-prod">
                                    <h2 className="hh">Nissan GT - R</h2>
                                </div>
                                <div className="h-icon-2">
                                    <FaRegHeart />
                                </div>
                            </div>
                            <div className="p-prod">
                                <p>Sport</p>
                            </div>
                            <div className="prod-img">
                                <img src="/1.png" alt="" />
                            </div>
                            <div className="imgs">
                                <div className="img">
                                    <img src="/img1-3.png" alt="" />
                                </div>
                                <div className="img">
                                    <img src="/img2.png" alt="" />
                                </div>
                                <div className="img">
                                    <img src="/img3.png" alt="" />
                                </div>
                            </div>
                            <div className="prod-last">
                                <div className="price-change">
                                    <div className="price">
                                        <p>$99.00/ <span className='span'>day</span></p>
                                        <p className='change'>$100.00</p>
                                    </div>
                                </div>
                                <div className="prod-but-c">
                                    <button>Rent Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main > */}
           <section className="products-all">
           <div className="container">
            <div className="nav">
                <h3 className="product-title">Popular Car</h3>
                <span className="view-btn">View All</span>
            </div>
                <div className="products">
                    <div className="single-product">
                        <div className="p-head">
                            <div className="title-name">
                            <h2 className="p-title">Koenigsegg</h2>
                            <p className="name">Sport</p>
                            </div>
                            <span className="like h-icon"><FaHeart /></span>
                        </div>
                        <div className="image">
                            <Image src="/1.png" width="100" height="100" alt="features"></Image>
                        </div>
                        <div className="features">
                            <div className="feature-img diff"><Image src="/img1.png" width="100" height="100" alt="features"></Image></div>
                           <div className="feature-img"> <Image src="/img2.png" width="100" height="100" alt="features"></Image></div>
                            <div className="feature-img"><Image src="/img3.png" width="100" height="100" alt="features"></Image></div>
                        </div>
                        <div className="price-rent">
                            <h3 className="price"><span className="price-size">$99.00/ </span>day</h3>
                            <span className="button">Rent Now</span>
                        </div>
                    </div>
                    <div className="single-product">
                        <div className="p-head">
                            <div className="title-name">
                            <h2 className="p-title">Nissan GT - R</h2>
                            <p className="name">Sport</p>
                            </div>
                            <span className="like"><FaRegHeart /></span>
                        </div>
                        <div className="image">
                            <Image src="/2.png" width="100" height="100" alt="features"></Image>
                        </div>
                        <div className="features">
                            <div className="feature-img diff"><Image src="/img1.png" width="100" height="100" alt="features"></Image></div>
                            <div className="feature-img"><Image src="/img2.png" width="100" height="100" alt="features"></Image></div>
                            <div className="feature-img"><Image src="/img3.png" width="100" height="100" alt="features"></Image></div>
                        </div>
                        <div className="price-rent">
                            <h3 className="price"><span className="price-size">$88.00/</span> day<span className="discount">$100.00</span></h3>
                            <span className="button">Rent Now</span>
                        </div>
                    </div>
                    <div className="single-product">
                        <div className="p-head">
                            <div className="title-name">
                            <h2 className="p-title">Rolls - Royce</h2>
                            <p className="name">Sedan</p>
                            </div>
                            <span className="like h-icon"><FaHeart /></span>
                        </div>
                        <div className="image">
                            <Image src="/3.png" width="100" height="100" alt="features"></Image>
                        </div>
                        <div className="features">
                            <div className="feature-img diff"><Image src="/img1.png" width="100" height="100" alt="features"></Image></div>
                            <div className="feature-img"><Image src="/img2.png" width="100" height="100" alt="features"></Image></div>
                            <div className="feature-img"><Image src="/img3.png" width="100" height="100" alt="features"></Image></div>
                        </div>
                        <div className="price-rent">
                            <h3 className="price"><span className="price-size">$96.00/ </span>day</h3>
                            <span className="button">Rent Now</span>
                        </div>
                    </div>
                    <div className="single-product">
                        <div className="p-head">
                            <div className="title-name">
                            <h2 className="p-title">Nissan GT - R</h2>
                            <p className="name">Sport</p>
                            </div>
                            <span className="like"><FaRegHeart /></span>
                        </div>
                        <div className="image">
                            <Image src="/4.png" width="100" height="100" alt="features"></Image>
                        </div>
                        <div className="features">
                            <div className="feature-img diff"><Image src="/img1.png" width="100" height="100" alt="features"></Image>
                            </div>
                            <div className="feature-img"><Image src="/img2.png" width="100" height="100" alt="features"></Image></div>
                            <div className="feature-img"><Image src="/img3.png" width="100" height="100" alt="features"></Image></div>
                        </div>
                        <div className="price-rent">
                            <h3 className="price"><span className="price-size">$88.00/</span> day<span className="discount">$100.00</span></h3>
                            <span className="button">Rent Now</span>
                        </div>
                    </div>
                    <div className="single-product">
                        <div className="p-head">
                            <div className="title-name">
                            <h2 className="p-title">Koenigsegg</h2>
                            <p className="name">Sport</p>
                            </div>
                            <span className="like h-icon"><FaHeart /></span>
                        </div>
                        <div className="image">
                            <Image src="/1.png" width="100" height="100" alt="features"></Image>
                        </div>
                        <div className="features">
                            <div className="feature-img diff"><Image src="/img1.png" width="100" height="100" alt="features"></Image></div>
                           <div className="feature-img"> <Image src="/img2.png" width="100" height="100" alt="features"></Image></div>
                            <div className="feature-img"><Image src="/img3.png" width="100" height="100" alt="features"></Image></div>
                        </div>
                        <div className="price-rent">
                            <h3 className="price"><span className="price-size">$99.00/ </span>day</h3>
                            <span className="button">Rent Now</span>
                        </div>
                    </div>
                    <div className="single-product">
                        <div className="p-head">
                            <div className="title-name">
                            <h2 className="p-title">Nissan GT - R</h2>
                            <p className="name">Sport</p>
                            </div>
                            <span className="like"><FaRegHeart /></span>
                        </div>
                        <div className="image">
                            <Image src="/2.png" width="100" height="100" alt="features"></Image>
                        </div>
                        <div className="features">
                            <div className="feature-img diff"><Image src="/img1.png" width="100" height="100" alt="features"></Image></div>
                            <div className="feature-img"><Image src="/img2.png" width="100" height="100" alt="features"></Image></div>
                            <div className="feature-img"><Image src="/img3.png" width="100" height="100" alt="features"></Image></div>
                        </div>
                        <div className="price-rent">
                            <h3 className="price"><span className="price-size">$88.00/</span> day<span className="discount">$100.00</span></h3>
                            <span className="button">Rent Now</span>
                        </div>
                    </div>
                    <div className="single-product">
                        <div className="p-head">
                            <div className="title-name">
                            <h2 className="p-title">Rolls - Royce</h2>
                            <p className="name">Sedan</p>
                            </div>
                            <span className="like h-icon"><FaHeart /></span>
                        </div>
                        <div className="image">
                            <Image src="/3.png" width="100" height="100" alt="features"></Image>
                        </div>
                        <div className="features">
                            <div className="feature-img diff"><Image src="/img1.png" width="100" height="100" alt="features"></Image></div>
                            <div className="feature-img"><Image src="/img2.png" width="100" height="100" alt="features"></Image></div>
                            <div className="feature-img"><Image src="/img3.png" width="100" height="100" alt="features"></Image></div>
                        </div>
                        <div className="price-rent">
                            <h3 className="price"><span className="price-size">$96.00/ </span>day</h3>
                            <span className="button">Rent Now</span>
                        </div>
                    </div>
                    <div className="single-product">
                        <div className="p-head">
                            <div className="title-name">
                            <h2 className="p-title">Nissan GT - R</h2>
                            <p className="name">Sport</p>
                            </div>
                            <span className="like"><FaRegHeart /></span>
                        </div>
                        <div className="image">
                            <Image src="/4.png" width="100" height="100" alt="features"></Image>
                        </div>
                        <div className="features">
                            <div className="feature-img diff"><Image src="/img1.png" width="100" height="100" alt="features"></Image>
                            </div>
                            <div className="feature-img"><Image src="/img2.png" width="100" height="100" alt="features"></Image></div>
                            <div className="feature-img"><Image src="/img3.png" width="100" height="100" alt="features"></Image></div>
                        </div>
                        <div className="price-rent">
                            <h3 className="price"><span className="price-size">$88.00/</span> day<span className="discount">$100.00</span></h3>
                            <span className="button">Rent Now</span>
                        </div>
                    </div>
                </div>
            </div>

           </section>
           </div>

    )
}