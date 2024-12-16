import Image from "next/image";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function Popular() {
    return (
        <div className="popular">
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

                    </div>
                </div>

            </section>
        </div>

    )
}