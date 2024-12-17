import Side from "@/components/side1"
import Carddetails from "@/components/card1"
import Cards from "@/components/card2"

export default function Profile() {
    return (
        <div className="page3">
            <div className="profile">
                <Side />
            </div>
            <div className="columns">
                <div className="card-1">
                    <Carddetails />
                </div>
                <div className="card-2">
                    <Cards />
                </div>
            </div>
        </div>

    )
}