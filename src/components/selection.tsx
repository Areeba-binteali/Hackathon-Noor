import { RiArrowDropDownLine } from "react-icons/ri";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";


export default function Selection() {
    return (
        <div className="selection">
            <section className="selection-main">
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
                                <div className="para">
                                    <p>Select your city</p>
                                </div>
                                <div className="changes para">
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
                                <div className="para">
                                    <p>Select your date</p>
                                </div>
                                <div className="changes para">
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
                                <div className="para">
                                    <p>Select your time</p>
                                </div>
                                <div className="changes para">
                                    <p>07.00</p>
                                </div>
                                <div className="drop-down">
                                    <RiArrowDropDownLine />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="mid">
                    <div className="up-arrow">
                    <FaArrowUpLong />
                    </div>
                    <div className="down-arrow">
                    <FaArrowDownLong />
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
                                <div className="para">
                                    <p>Select your city</p>
                                </div>
                                <div className="changes para">
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
                                <div className="para">
                                    <p>Select your date</p>
                                </div>
                                <div className="changes para">
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
                                <div className="para">
                                    <p>Select your time</p>
                                </div>
                                <div className="changes para">
                                    <p>01.00</p>
                                </div>
                                <div className="drop-down">
                                    <RiArrowDropDownLine />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}
