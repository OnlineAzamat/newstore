import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function TopBrands() {
    const { t } = useTranslation();

    return (
        <div className='container topbrands'>
            <div className="inner-wrapper">
                <div className="title">
                    <h2>{t('top brands')}</h2>
                </div>
                <div className="topbrands__list">
                    <ul>
                        <li>
                            <Link to={"/products"}>
                                <div className="topbrands__item__image">
                                    <img src="https://images.zoodmall.com/app/homePageLayout/1594989896296.png" alt="brand" />
                                </div>
                                <div className="topbrands__item__name">Samsung</div>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/products"}>
                                <div className="topbrands__item__image">
                                    <img src="https://images.zoodmall.com/app/homePageLayout/1605625688424.png" alt="brand" />
                                </div>
                                <div className="topbrands__item__name">Artel</div>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/products"}>
                                <div className="topbrands__item__image">
                                    <img src="https://images.zoodmall.com/app/homePageLayout/1613723411561.png" alt="brand" />
                                </div>
                                <div className="topbrands__item__name">Apple</div>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/products"}>
                                <div className="topbrands__item__image">
                                    <img src="https://images.zoodmall.com/app/homePageLayout/1638774921287.png" alt="brand" />
                                </div>
                                <div className="topbrands__item__name">Lenovo</div>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/products"}>
                                <div className="topbrands__item__image">
                                    <img src="https://images.zoodmall.com/app/homePageLayout/1638774885503.png" alt="brand" />
                                </div>
                                <div className="topbrands__item__name">Neoline</div>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/products"}>
                                <div className="topbrands__item__image">
                                    <img src="https://images.zoodmall.com/app/homePageLayout/1638774946538.png" alt="brand" />
                                </div>
                                <div className="topbrands__item__name">Magicar</div>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/products"}>
                                <div className="topbrands__item__image">
                                    <img src="https://images.zoodmall.com/app/homePageLayout/1622007040166.jpg" alt="brand" />
                                </div>
                                <div className="topbrands__item__name">Infinix</div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-12 mt-5">
                <h2>NewStore: {t('shop happiness')}</h2>
                <p>{t('shop happiness t')}</p>
            </div>
        </div>
    )
}

export default TopBrands