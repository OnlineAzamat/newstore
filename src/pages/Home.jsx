import MainSlider from "../components/home/MainSlider";
import IconsHome from "../components/home/IconsHome";
import FlashSale from "../components/home/FlashSale";
import TopBrands from "../components/home/TopBrands";

export default function Hero() {
    return(
        <main className="Hero">
            <MainSlider />
            <IconsHome />
            <FlashSale />
            <TopBrands />
        </main>
    )
}