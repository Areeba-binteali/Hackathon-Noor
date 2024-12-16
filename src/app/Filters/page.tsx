import Sidebar from "@/components/sidebar"
import Selections from "@/components/selection"
import Products from "@/components/products"

export default function Filter() {
    return (
        
        <div className="filter">
            <div className="Side-bar">
                <Sidebar />
            </div>
            <div className="side2">
                    <Selections />
                <div className="product-cards">
                    <Products />
                </div>

            </div>
        </div>
    )
}