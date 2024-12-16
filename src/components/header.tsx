import { CiSearch } from "react-icons/ci";
import { CgOptions } from "react-icons/cg";
import { IoHeartSharp } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import Image from "next/image";
import Link from "next/link"

export default function Header() {
    return (
        <div className="header">
            <section className="header-main">
                <div className="h-main">
                    <div className="side">
                        <div className="h-sec1">
                            <h1 className="logo-h">MORENT</h1>
                        </div>

                        <form action=".//">
                            <div className="h-sec2">
                                <div className="h-i search">
                                    <CiSearch />
                                </div>
                                <div className="type">
                                    <input type="search" placeholder="Search something here" />
                                </div>
                                <div className="h-i option">
                                   <Link href="/Filters"><CgOptions /></Link> 
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="h-sec3">
                        <div className="h-icons">
                            <IoHeartSharp />
                        </div>
                        <div className="h-icons">
                            <IoMdNotifications />
                        </div>
                        <div className="h-icons">
                            <IoMdSettings />
                        </div>
                        <div className="h-ico">
                            <Image src="/h1.png" alt="image" width="40" height="30" />
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}