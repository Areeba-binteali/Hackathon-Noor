import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function Products() {
    return (
        <div className="popular">
            <section className="products-all">
                <div className="container rr ">
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

                    </div>

                </div>
                <div className="container">
                    <div className="products">
                        <div className="single-product">
                            <div className="p-head">
                                <div className="title-name">
                                    <h2 className="p-title">All New Rush</h2>
                                    <p className="name">SUV</p>
                                </div>
                                <span className="like"><FaRegHeart /></span>
                            </div>
                            <div className="image">
                                <Image src="/11.png" width="100" height="100" alt="features"></Image>
                            </div>
                            <div className="features">
                                <div className="feature-img diff"><Image src="/img1.png" width="100" height="100" alt="features"></Image></div>
                                <div className="feature-img"> <Image src="/img2.png" width="100" height="100" alt="features"></Image></div>
                                <div className="feature-img"><Image src="/img3.png" width="100" height="100" alt="features"></Image></div>
                            </div>
                            <div className="price-rent">
                                <h3 className="price"><span className="price-size">$72.00/ </span>day<span className="discount">$80.00</span></h3>
                                <span className="button">Rent Now</span>
                            </div>
                        </div>
                        <div className="single-product">
                            <div className="p-head">
                                <div className="title-name">
                                    <h2 className="p-title">CR  - V</h2>
                                    <p className="name">SUV</p>
                                </div>
                                <span className="like  h-icon"><FaHeart /></span>
                            </div>
                            <div className="image">
                                <Image src="/5.png" width="100" height="100" alt="features"></Image>
                            </div>
                            <div className="features">
                                <div className="feature-img diff"><Image src="/img1.png" width="100" height="100" alt="features"></Image></div>
                                <div className="feature-img"><Image src="/img2.png" width="100" height="100" alt="features"></Image></div>
                                <div className="feature-img"><Image src="/img3.png" width="100" height="100" alt="features"></Image></div>
                            </div>
                            <div className="price-rent">
                                <h3 className="price"><span className="price-size">$88.00/</span> day</h3>
                                <span className="button">Rent Now</span>
                            </div>
                        </div>
                        <div className="single-product">
                            <div className="p-head">
                                <div className="title-name">
                                    <h2 className="p-title">All New Terios</h2>
                                    <p className="name">SUV</p>
                                </div>
                                <span className="like"><FaRegHeart /></span>
                            </div>
                            <div className="image">
                                <Image src="/6.png" width="100" height="100" alt="features"></Image>
                            </div>
                            <div className="features">
                                <div className="feature-img diff"><Image src="/img1.png" width="100" height="100" alt="features"></Image></div>
                                <div className="feature-img"><Image src="/img2.png" width="100" height="100" alt="features"></Image></div>
                                <div className="feature-img"><Image src="/img3.png" width="100" height="100" alt="features"></Image></div>
                            </div>
                            <div className="price-rent">
                                <h3 className="price"><span className="price-size">$74.00/ </span>day</h3>
                                <span className="button">Rent Now</span>
                            </div>
                        </div>
                        <div className="single-product">
                            <div className="p-head">
                                <div className="title-name">
                                    <h2 className="p-title">CR  - V</h2>
                                    <p className="name">SUV</p>
                                </div>
                                <span className="like"><FaRegHeart /></span>
                            </div>
                            <div className="image">
                                <Image src="/7.png" width="100" height="100" alt="features"></Image>
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
                                    <h2 className="p-title">MG ZX Exclusice</h2>
                                    <p className="name">Hatchback</p>
                                </div>
                                <span className="like h-icon"><FaHeart /></span>
                            </div>
                            <div className="image">
                                <Image src="/10.png" width="100" height="100" alt="features"></Image>
                            </div>
                            <div className="features">
                                <div className="feature-img diff"><Image src="/img1.png" width="100" height="100" alt="features"></Image></div>
                                <div className="feature-img"> <Image src="/img2.png" width="100" height="100" alt="features"></Image></div>
                                <div className="feature-img"><Image src="/img3.png" width="100" height="100" alt="features"></Image></div>
                            </div>
                            <div className="price-rent">
                                <h3 className="price"><span className="price-size">$76.00/ </span>day<span className="discount">$80.00</span></h3>
                                <span className="button">Rent Now</span>
                            </div>
                        </div>
                        <div className="single-product">
                            <div className="p-head">
                                <div className="title-name">
                                    <h2 className="p-title">New MG ZS</h2>
                                    <p className="name">SUV</p>
                                </div>
                                <span className="like"><FaRegHeart /></span>
                            </div>
                            <div className="image">
                                <Image src="/9.png" width="100" height="100" alt="features"></Image>
                            </div>
                            <div className="features">
                                <div className="feature-img diff"><Image src="/img1.png" width="100" height="100" alt="features"></Image></div>
                                <div className="feature-img"><Image src="/img2.png" width="100" height="100" alt="features"></Image></div>
                                <div className="feature-img"><Image src="/img3.png" width="100" height="100" alt="features"></Image></div>
                            </div>
                            <div className="price-rent">
                                <h3 className="price"><span className="price-size">$80.00/</span> day</h3>
                                <span className="button">Rent Now</span>
                            </div>
                        </div>
                        <div className="single-product">
                            <div className="p-head">
                                <div className="title-name">
                                    <h2 className="p-title">MG ZX Exclusice</h2>
                                    <p className="name">Hatchback</p>
                                </div>
                                <span className="like h-icon"><FaHeart /></span>
                            </div>
                            <div className="image">
                                <Image src="/10.png" width="100" height="100" alt="features"></Image>
                            </div>
                            <div className="features">
                                <div className="feature-img diff"><Image src="/img1.png" width="100" height="100" alt="features"></Image></div>
                                <div className="feature-img"> <Image src="/img2.png" width="100" height="100" alt="features"></Image></div>
                                <div className="feature-img"><Image src="/img3.png" width="100" height="100" alt="features"></Image></div>
                            </div>
                            <div className="price-rent">
                                <h3 className="price"><span className="price-size">$76.00/ </span>day<span className="discount">$80.00</span></h3>
                                <span className="button">Rent Now</span>
                            </div>
                        </div>
                        <div className="single-product">
                            <div className="p-head">
                                <div className="title-name">
                                    <h2 className="p-title">New MG ZS</h2>
                                    <p className="name">SUV</p>
                                </div>
                                <span className="like"><FaRegHeart /></span>
                            </div>
                            <div className="image">
                                <Image src="/9.png" width="100" height="100" alt="features"></Image>
                            </div>
                            <div className="features">
                                <div className="feature-img diff"><Image src="/img1.png" width="100" height="100" alt="features"></Image></div>
                                <div className="feature-img"><Image src="/img2.png" width="100" height="100" alt="features"></Image></div>
                                <div className="feature-img"><Image src="/img3.png" width="100" height="100" alt="features"></Image></div>
                            </div>
                            <div className="price-rent">
                                <h3 className="price"><span className="price-size">$80.00/</span> day</h3>
                                <span className="button">Rent Now</span>
                            </div>
                        </div>
                    </div>
                    <div className="button show">
                        <button>Show More Cars</button>
                    </div>
                </div>

            </section >


        </div >

    )
}