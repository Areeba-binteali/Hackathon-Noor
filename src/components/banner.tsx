import Image from "next/image";

export default function Banner() {
    return (
        <div className="banner">
            <section className="banner-main">
                <div className="banner-m">
                    <div className="banner1">
                        <div className="heading1">
                            <h1>The Best Platform for Car Rental</h1>
                        </div>
                        <div className="paragraph-b">
                            <p>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                        </div>
                        <div className="button spy">
                            <button>Rental Car</button>
                        </div>
                        <div className="banner-img">
                            <Image src="/image 7.png" alt="image" width="300" height="100" />
                        </div>
                    </div>

                    <div className="banner2">
                        <div className="heading1">
                            <h1>Easy way to rent a car at a low price</h1>
                        </div>
                        <div className="paragraph-b">
                            <p>Providing cheap car rental services and safe and comfortable facilities.</p>
                        </div>
                        <div className="button spy1">
                            <button>Rental Car</button>
                        </div>
                        <div className="banner-img">
                            <Image src="/image 8.png" alt="image" width="250" height="100" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}