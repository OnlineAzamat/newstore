import React, { useEffect, useState } from 'react';
import Timer from './Timer';
import { CCarousel, CCarouselItem } from '@coreui/react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function FlashSale() {
	const { t } = useTranslation();

	// axios get --> flash data
	const [flashData, setFlashData] = useState([]);

	useEffect(() => {
		getFlashData();
	}, []);

	function getFlashData() {
		axios
			.get('https://fakestoreapi.com/products?limit=10')
			.then((data) => {
				setFlashData(data.data);
			})
			.catch((err) => console.log(err));
	}

	// Timer
	const time = new Date('Aprel 11, 2023 09:00:00');
	time.setMinutes(time.getMinutes());

	return (
		<div className="container flash-sale">
			<div className="row justify-content-between align-items-center flash-sale__container">
				<div className="col-md-5">
					<h2>{t('flash sale')}</h2>
					<Timer expiryTimestamp={time} autoStart={true} />
				</div>
				<div className="col-md-6 d-flex align-items-center justify-content-center">
					<div className="inner-container">
						<CCarousel indicators={true} interval={3000}>
							{flashData.map((data) => {
								return (
									<CCarouselItem className="position-relative" key={data.id}>
										<Link to={`/cart/${data.id}`} className="flash-inner-item">
											<div className="flash-item__img">
												<img src={data.image} alt="img" />
											</div>
											<div className="flash-item__data">
												<p className="flash-item__data-title">
													{data.title.substring(0, 30) + '...'}
												</p>
												<div className="flash-item__data-price">
													<span className="flash-local-price">
														$ {Math.floor(data.price * 0.92)}
													</span>
													<br />
													<span className="price-text-decoration">
														$ {data.price}
													</span>
													<span className="product-mini__discount">-8%</span>
												</div>
												<div className="flash-item__slider__line"></div>
											</div>
										</Link>
									</CCarouselItem>
								);
							})}
						</CCarousel>
					</div>
				</div>
			</div>
		</div>
	);
}

export default FlashSale;
