import { CCarousel, CCarouselCaption, CCarouselItem, CImage } from "@coreui/react";
import { useTranslation } from "react-i18next";
// update soon...

export default function Hero() {
    const { t } = useTranslation()
    return(
        <div className="container pt-5 pb-5">
            <CCarousel controls indicators>
                <CCarouselItem>
                    <CImage className="d-block w-100 rounded" src={t('mainslider img1')} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100 rounded" src={t('mainslider img2')} alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                    <CImage className="d-block w-100 rounded" src={t('mainslider img3')} alt="slide 3" />
                </CCarouselItem>
            </CCarousel>
        </div>
    )
}