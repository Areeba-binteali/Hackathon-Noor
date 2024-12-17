import Image from "next/image";
import { SlOptions } from "react-icons/sl";

export default function Cards() {
    return (
        <div className="Cards">
            <div className="colors">
                <div className="top">
                    <div className="h-top">
                        <h1>Top 5 Car Rental </h1>
                    </div>
                    <div className="top-i">
                        <SlOptions />
                    </div>
                </div>
                <div className="middle">
                    <div className="middle-1">
                        <div className="middle-img">
                            <Image src="/circle.png" alt="img" width="180" height="100" />
                        </div>
                        <div className="middle-t">
                            <div className="heads-1">
                                <h1>72,030</h1>
                            </div>
                            <div className="p-middle">
                                <p>Rental Car</p>
                            </div>
                        </div>
                    </div>
                    <div className="middle-2">
                        <div className="same">
                            <div className="same-img">
                                <Image src="/mark1.png" alt="img" width="10" height="10" />
                            </div>
                            <div className="same-p">
                                <p>Sport Car</p>
                            </div>
                            <div className="same-h">
                                <h1>17,439</h1>
                            </div>
                        </div>
                        <div className="same">
                            <div className="same-img">
                                <Image src="/mark2.png" alt="img" width="10" height="10" />
                            </div>
                            <div className="same-p">
                                <p>SUV</p>
                            </div>
                            <div className="same-h">
                                <h1>9,478</h1>
                            </div>
                        </div>
                        <div className="same">
                            <div className="same-img">
                                <Image src="/mark3.png" alt="img" width="10" height="10" />
                            </div>
                            <div className="same-p">
                                <p>Coupe</p>
                            </div>
                            <div className="same-h">
                                <h1>18,197</h1>
                            </div>
                        </div>
                        <div className="same">
                            <div className="same-img">
                                <Image src="/mark4.png" alt="img" width="10" height="10" />
                            </div>
                            <div className="same-p">
                                <p>Hatchback</p>
                            </div>
                            <div className="same-h">
                                <h1>17,439</h1>
                            </div>
                        </div>
                        <div className="same">
                            <div className="same-img">
                                <Image src="/mark5.png" alt="img" width="10" height="10" />
                            </div>
                            <div className="same-p">
                                <p>MPV</p>
                            </div>
                            <div className="same-h">
                                <h1>17,439</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="transaction-part">
                <div className="transaction-h">
                    <div className="h-top">
                        <h1>Recent Transaction</h1>
                    </div>
                    <div className="top-b">
                        <button>View All</button>
                    </div>
                </div>
                <div className="car-rents">
                    <div className="imgs">
                        <Image src="/1.png" alt="img" width="150" height="50" />
                    </div>
                    <div className="flex">
                        <div className="rentals-he">
                            <div className="hdgs">
                                <h1>Nissan GT - R</h1>
                            </div>
                            <div className="prghs">
                                <p>Sport Car</p>
                            </div>
                        </div>
                        <div className="rentals-h">
                            <div className="prghs">
                                <p>20 July</p>
                            </div>
                            <div className="hdgs">
                                <h1>$80.00</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="car-rents">
                    <div className="imgs">
                        <Image src="/2.png" alt="img" width="150" height="50" />
                    </div>
                    <div className="flex">
                        <div className="rentals-he">
                            <div className="hdgs">
                                <h1>Koegnigsegg</h1>
                            </div>
                            <div className="prghs">
                                <p>Sport Car</p>
                            </div>
                        </div>
                        <div className="rentals-h">
                            <div className="prghs">
                                <p>19 July</p>
                            </div>
                            <div className="hdgs">
                                <h1>$99.00</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="car-rents">
                    <div className="imgs">
                        <Image src="/3.png" alt="img" width="150" height="50" />
                    </div>
                    <div className="flex">
                        <div className="rentals-he">
                            <div className="hdgs">
                                <h1>Rolls - Royce</h1>
                            </div>
                            <div className="prghs">
                                <p>Sport Car</p>
                            </div>
                        </div>
                        <div className="rentals-h">
                            <div className="prghs">
                                <p>18 July</p>
                            </div>
                            <div className="hdgs">
                                <h1>$96.00</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="car-rents arr">
                    <div className="imgs">
                        <Image src="/4.png" alt="img" width="150" height="50" />
                    </div>
                    <div className="flex">
                        <div className="rentals-he">
                            <div className="hdgs">
                                <h1>CR - V</h1>
                            </div>
                            <div className="prghs">
                                <p>SUV</p>
                            </div>
                        </div>
                        <div className="rentals-ha">
                            <div className="prghs">
                                <p>17 July</p>
                            </div>
                            <div className="hdgs">
                                <h1>$80.00</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}