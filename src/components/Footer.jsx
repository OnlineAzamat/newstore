import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from 'i18next';
1;
function Footer() {
	const { t } = useTranslation();

	function changeLang(langVal) {
		changeLanguage(langVal);
	}

	return (
		<footer>
			<div className="inner-wrapper">
				<div className="connected">
					<p>{t('footer connected links')}:</p>
					<ul>
						<li>
							<Link to="https://facebook.com/">
								<i className="fa fa-facebook"></i>
							</Link>
						</li>
						<li>
							<Link to="https://twitter.com/">
								<i className="fa fa-twitter"></i>
							</Link>
						</li>
						<li>
							<Link to="https://google.com/">
								<i className="fa fa-google"></i>
							</Link>
						</li>
						<li>
							<Link to="https://instagram.com/">
								<i className="fa fa-instagram"></i>
							</Link>
						</li>
					</ul>
				</div>
				<div className="footer-data">
					<div className="footer-data-inner">
						<div className="footer-item">
							<h4>NewStore</h4>
							<p>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Voluptatum, rerum corrupti maiores nobis ipsa sapiente iusto
								necessitatibus? Cupiditate sequi quos corrupti incidunt
								quibusdam. Provident, ea.
							</p>
						</div>
						<div className="footer-item">
							<h4 style={{ textTransform: 'uppercase' }}>{t('products')}</h4>
							<ul>
								<li>
									<Link to="/profile">{t('footer account')}</Link>
								</li>
								<li>
									<Link to="/products">{t('footer clothing')}</Link>
								</li>
								<li>
									<Link to="/about">{t('about')}</Link>
								</li>
								<li>
									<Link to="/contact">{t('footer help')}</Link>
								</li>
								<li>
									<select
										name="lang"
										className="form-select form-select-lang"
										onChange={(e) => changeLang(e.target.value)}
									>
										<option value="en">en</option>
										<option value="uz">uz</option>
										<option value="qq">qq</option>
									</select>
								</li>
							</ul>
						</div>
						<div className="footer-item">
							<h4 style={{ textTransform: 'uppercase' }}>{t('contact')}</h4>
							<ul>
								<li>
									<i className="fa fa-home"></i>
									Nukus, NY 1005, Uzb
								</li>
								<li>
									<i className="fa fa-inbox"></i>
									info@example.com
								</li>
								<li>
									<i className="fa fa-phone"></i>
									+998 01 234-56-78
								</li>
							</ul>
						</div>
					</div>
					<div className="copyright">
						<span>&#169; 2023 Copyright: NewStore</span>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
