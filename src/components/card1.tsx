import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";

export default function Carddetails() {
    return (
        <div className="card1">
            <section className="card1-main">
                <div className="card-1">
                    <div className="card-part1">
                        <h1>Details Rental</h1>
                    </div>
                    <div className="card-part2">
                        <Image src="/maps.png" alt="img" width="500" height="350" />
                    </div>
                    <div className="card-part3">
                        <div className="carrent-img">
                            <Image src="/look.png" alt="img" width="130" height="40" />
                        </div>
                        <div className="content-car">
                            <h1 className="nissan">Nissan GT - R  <span className="no">#9761</span></h1>
                            <p className="sport">Sport Car</p>
                        </div>
                    </div>
                    <div className="card-part4">

                        <div className="main">
                            <form action="../">
                                <div className="select">
                                    <input type="radio" id="pickup" />
                                    <label className="label">Pick-Up</label>
                                </div>
                            </form>
                            <div className="selectors">
                                <div className="location">
                                    <div className="heading-2">
                                        <h2>Location</h2>
                                    </div>
                                    <div className="compound">
                                        <div className="changes para c-card">
                                            <p>Semarang</p>
                                        </div>
                                        <div className="drop-down space">
                                            <RiArrowDropDownLine />
                                        </div>
                                    </div>
                                </div>

                                <div className="date">
                                    <div className="heading-2">
                                        <h2>Date</h2>
                                    </div>
                                    <div className="compound">
                                        <div className="changes para c-card">
                                            <p>20 July 2022</p>
                                        </div>
                                        <div className="drop-down">
                                            <RiArrowDropDownLine />
                                        </div>
                                    </div>
                                </div>

                                <div className="time">
                                    <div className="heading-2">
                                        <h2>Time</h2>
                                    </div>
                                    <div className="compound">
                                        <div className="changes para c-card">
                                            <p>07.00</p>
                                        </div>
                                        <div className="drop-down">
                                            <RiArrowDropDownLine />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="main">
                            <form action="../">
                                <div className="select">
                                    <input type="radio" id="pickup" />
                                    <label className="label">Drop-Off</label>
                                </div>
                            </form>
                            <div className="selectors">
                                <div className="location">
                                    <div className="heading-2">
                                        <h2>Location</h2>
                                    </div>
                                    <div className="compound">
                                        <div className="changes para c-card">
                                            <p>Semarang</p>
                                        </div>
                                        <div className="drop-down space">
                                            <RiArrowDropDownLine />
                                        </div>
                                    </div>
                                </div>

                                <div className="date">
                                    <div className="heading-2">
                                        <h2>Date</h2>
                                    </div>
                                    <div className="compound">
                                        <div className="changes para c-card">
                                            <p>21 July 2022</p>
                                        </div>
                                        <div className="drop-down">
                                            <RiArrowDropDownLine />
                                        </div>
                                    </div>
                                </div>

                                <div className="time">
                                    <div className="heading-2">
                                        <h2>Time</h2>
                                    </div>
                                    <div className="compound">
                                        <div className="changes para c-card">
                                            <p>01.00</p>
                                        </div>
                                        <div className="drop-down">
                                            <RiArrowDropDownLine />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="card-part5">
                        <div className="content-5">
                            <div className="nissan">
                            <h1>Total Rental Price</h1>
                            </div>
                            <div className="discount-p">
                            <p>Overall price and includes rental discount</p>
                            </div>
                        </div>

                        <div className="discount-price">
                            <h1>$80.00</h1>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}