import React, { useState, useEffect, useRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Products() {
	const navigate = useNavigate();
	
	const { t } = useTranslation();
	const min = useRef(null);
	const max = useRef(null);

	const [data, setdata] = useState([]);
	const [filter, setFilter] = useState(data);
	const [loading, setLoading] = useState(false);
	const [like, setLike] = useState("heart");
	let componentMounted = true;

	useEffect(() => {
		getProducts();
	}, []);

	const getProducts = async () => {
		setLoading(true);
		const response = await fetch('https://fakestoreapi.com/products');
		if (componentMounted) {
			setdata(await response.clone().json());
			setFilter(await response.json());
			setLoading(false);
		}
	};

	const Loading = () => {
		return (
			<>
				<div className="col-md-3">
					<Skeleton height={350} />
				</div>
				<div className="col-md-3">
					<Skeleton height={350} />
				</div>
				<div className="col-md-3">
					<Skeleton height={350} />
				</div>
				<div className="col-md-3">
					<Skeleton height={350} />
				</div>
			</>
		);
	};

	const filterProduct = (cat) => {
		const updateList = data.filter((x) => x.category === cat);
		setFilter(updateList);
	};

	function NotFound() {
		return (
			<div className="notfound">
				<p style={{ textAlign: 'center', padding: '30px' }}>{t('not found')}</p>
			</div>
		);
	}

	const ShowProducts = () => {
		function toProduct(id) {
			navigate(`/products/${id}`);
		}

		function favoriteBtn(id) {
			window.localStorage.setItem("favorite1", id);
			// setLike("heart-fill"); // korip shigiw kerek --> cardlardin barligi heart-fill bolmasin
		}
		
		return (
			<>
				<div className="buttons d-flex flex-wrap gap-1 justify-content-center mb-5">
					<button
						className="btn btn-outline-dark me-2"
						onClick={() => setFilter(data)}
					>
						{t('all')}
					</button>
					<button
						className="btn btn-outline-dark me-2"
						onClick={() => filterProduct("men's clothing")}
					>
						{t('mens clothing')}
					</button>
					<button
						className="btn btn-outline-dark me-2"
						onClick={() => filterProduct("women's clothing")}
					>
						{t('womens clothing')}
					</button>
					<button
						className="btn btn-outline-dark me-2"
						onClick={() => filterProduct('jewelery')}
					>
						{t('jewelery clothing')}
					</button>
					<button
						className="btn btn-outline-dark me-2"
						onClick={() => filterProduct('electronics')}
					>
						{t('electronics')}
					</button>
				</div>
				<div className="cards">
					{filter[0] ? (
						filter.map((products) => {
							return (
								<div className='card-wrapper'>
									<div onClick={() => toProduct(products.id)} className="card__card" key={products.id + products.price}>
										<div className="card-img-container">
											<img
												src={products.image}
												alt="card-img"
											/>
										</div>
										<div className="card-body">
											<h5 className="card-title">
												{products.title.substring(0, 15)}
											</h5>
											<h6 className="installment-badge mt-1">${Math.floor(products.price / 1.2) / 10}/month</h6>
											<h5 className="card-text">${products.price}</h5>
										</div>
									</div>
									<button className='favorite-card__button' onClick={() => favoriteBtn(products.id)}><i className={`bi bi-${like}`}></i></button>
								</div>
							);
						})
					) : (
						<NotFound />
					)}
				</div>
			</>
		);
	};

	const priceFilter = () => {
		const updatePriceList = data.filter((a) => {
			return a.price >= min.current.value && a.price <= max.current.value;
		});
		setFilter(updatePriceList);
	};

	return (
		<div className="inner-products">
			<div className="products-filter">
				<div data-accordion-item className="bx--accordion__item">
					<p>Price</p>
					<div className="input-group mb-3">
						<span className="input-group-text">$</span>
						<input
							type="text"
							className="form-control"
							aria-label="Amount (to the nearest dollar)"
							placeholder="min"
							ref={min}
						/>
					</div>
					<div className="input-group mb-3">
						<span className="input-group-text">$</span>
						<input
							type="text"
							className="form-control"
							aria-label="Amount (to the nearest dollar)"
							ref={max}
							placeholder="max"
						/>
					</div>
					<button className="btn btn-warning" onClick={() => priceFilter()}>
						Submit
					</button>
				</div>
			</div>

			<div className="container my-5">
				<div className="row">
					<div className="col-12 mb-5">
						<h1 className="display-6 fw-bolder text-center">
							{t('latest products')}
						</h1>
						<hr />
					</div>
				</div>
				<div className="products-container row justify-content-center">
					{loading ? <Loading /> : <ShowProducts />}
				</div>
			</div>
		</div>
	);
}

export default Products;
