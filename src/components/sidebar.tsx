import Image from "next/image";

export default function Sidebar() {
    return (
        <div className="sidebar">
            <section className="sidebar-main">
                <div className="main-sec">
                    <div className="component1">
                        <div className="small h">
                            <h1>TYPE</h1>
                        </div>
                        <div className="side">
                            <div className="s-img">
                                <Image src="/tick-square.png" alt="img" width="20" height="20"></Image>
                            </div>
                            <div className="side-text">
                                <p>SPORT <span className="numbers">(10)</span></p>
                            </div>
                        </div>
                        <div className="side">
                            <div className="s-img">
                                <Image src="/tick-square.png" alt="img" width="20" height="20"></Image>
                            </div>
                            <div className="side-text">
                                <p>SUV <span className="numbers">(12)</span></p>
                            </div>
                        </div>
                        <div className="side">
                            <div className="s-img">
                                <Image src="/Ceklist.png" alt="img" width="20" height="20"></Image>
                            </div>
                            <div className="side-text">
                                <p>MPV <span className="numbers">(16)</span></p>
                            </div>
                        </div>
                        <div className="side">
                            <div className="s-img">
                                <Image src="/Ceklist.png" alt="img" width="20" height="20"></Image>
                            </div>
                            <div className="side-text">
                                <p>SEDAN <span className="numbers">(20)</span></p>
                            </div>
                        </div>
                        <div className="side">
                            <div className="s-img">
                                <Image src="/Ceklist.png" alt="img" width="20" height="20"></Image>
                            </div>
                            <div className="side-text">
                                <p>COUPE <span className="numbers">(14)</span></p>
                            </div>
                        </div>
                        <div className="side">
                            <div className="s-img">
                                <Image src="/Ceklist.png" alt="img" width="20" height="20"></Image>
                            </div>
                            <div className="side-text">
                                <p>Hatchback<span className="numbers">(14)</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="component2">
                        <div className="small">
                            <h1>Capacity</h1>
                        </div>
                        <div className="side">
                            <div className="s-img">
                                <Image src="/tick-square.png" alt="img" width="20" height="20"></Image>
                            </div>
                            <div className="side-text">
                                <p>2 Person <span className="numbers">(10)</span></p>
                            </div>
                        </div>
                        <div className="side">
                            <div className="s-img">
                                <Image src="/Ceklist.png" alt="img" width="20" height="20"></Image>
                            </div>
                            <div className="side-text">
                                <p>4 Person <span className="numbers">(14)</span></p>
                            </div>
                        </div>
                        <div className="side">
                            <div className="s-img">
                                <Image src="/Ceklist.png" alt="img" width="20" height="20"></Image>
                            </div>
                            <div className="side-text">
                                <p>6 Person <span className="numbers">(12)</span></p>
                            </div>
                        </div>
                        <div className="side">
                            <div className="s-img">
                                <Image src="/tick-square.png" alt="img" width="20" height="20"></Image>
                            </div>
                            <div className="side-text">
                                <p>8 or More  <span className="numbers">(16)</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="component3">
                        <div className="small">
                            <h1>Price</h1>
                        </div>
                        <div className="price-line">
                            <Image src="/price.png" alt="" width="180" height="2"/>
                        </div>
                        <div className="large-h">
                            <h2>Max. $100.00</h2>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}