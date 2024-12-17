import Image from "next/image";

export default function Side(){
    return(
        <div className="side">
            <section className="side-main">
                <div className="side1-main">
                    <div className="side1">
                        <div className="s-head h">
                            <h1>MAIN MENU</h1>
                        </div>
                        <div className="side-m m">
                            <div className="side-img">
                               <Image src="/home.png" alt="img" width="20" height="10"/> 
                            </div>
                            <div className="side-t t">
                                <p>Dashborad</p>
                            </div>
                        </div>
                        <div className="side-m">
                            <div className="side-img">
                               <Image src="/car.png" alt="img" width="20" height="10"/> 
                            </div>
                            <div className="side-t">
                                <p>Car Rent</p>
                            </div>
                        </div>
                        <div className="side-m">
                            <div className="side-img">
                               <Image src="/chart.png" alt="img" width="20" height="10"/> 
                            </div>
                            <div className="side-t">
                                <p>Insight</p>
                            </div>
                        </div>
                        <div className="side-m">
                            <div className="side-img">
                               <Image src="/wallet.png" alt="img" width="20" height="10"/> 
                            </div>
                            <div className="side-t">
                                <p>Reimburse</p>
                            </div>
                        </div>
                        <div className="side-m">
                            <div className="side-img">
                               <Image src="/message.png" alt="img" width="20" height="10"/> 
                            </div>
                            <div className="side-t">
                                <p>Inbox</p>
                            </div>
                        </div>
                        <div className="side-m">
                            <div className="side-img">
                               <Image src="/calendar.png" alt="img" width="20" height="10"/> 
                            </div>
                            <div className="side-t">
                                <p>Calender</p>
                            </div>
                        </div>
                    </div>
                    <div className="s-head">
                            <h1>PREFERENCES</h1>
                        </div>
                        <div className="side-m">
                            <div className="side-img">
                               <Image src="/setting.png" alt="img" width="20" height="10"/> 
                            </div>
                            <div className="side-t">
                                <p>Settings</p>
                            </div>
                        </div>
                        <div className="side-m">
                            <div className="side-img">
                               <Image src="/warning.png" alt="img" width="20" height="10"/> 
                            </div>
                            <div className="side-t">
                                <p>Help & Center</p>
                            </div>
                        </div>
                        <div className="side-m">
                            <div className="side-img">
                               <Image src="/briefcase.png" alt="img" width="20" height="10"/> 
                            </div>
                            <div className="side-t">
                                <p>Dark Mode</p>
                            </div>
                            <div className="darkmode">
                            <Image src="/group.png" alt="img" width="50" height="50"/> 
                            </div>
                        </div>
                        <div className="side-m logout">
                            <div className="side-img">
                               <Image src="/logout.png" alt="img" width="20" height="10"/> 
                            </div>
                            <div className="side-t">
                                <p>Logout</p>
                            </div>
                        </div>
                </div>
            </section>
        </div>
    )
}
