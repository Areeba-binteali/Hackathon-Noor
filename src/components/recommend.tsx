import Head from 'next/head';
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

export default function Popular() {
    return (
        <div className="popular">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet"></link>
            </Head>
            <main>
                {/* <div className="pop-product">
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
                </div> */}
            </main >
        </div >
    )
}