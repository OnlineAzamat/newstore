import React, { useState, useEffect, useRef } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Products() {
	const { t } = useTranslation();
	const min = useRef(null);
	const max = useRef(null);

	const [data, setdata] = useState([]);
	const [filter, setFilter] = useState(data);
	const [loading, setLoading] = useState(false);
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
			console.log(filter);
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
				{filter[0] ? (
					filter.map((products) => {
						return (
							<>
								<div
									className="col-md-3 col-3 mt-2 mb-2 p-1"
									key={products.id + products.price}
								>
									<div className="card">
										<img
											src={products.image}
											className="card-img-top product-img"
											alt="card-img"
										/>
										<div className="card-body">
											<h5 className="card-title">
												{products.title.substring(0, 15)}
											</h5>
											<p className="card-text">${products.price}</p>
											<Link
												to={`/products/${products.id}`}
												className="btn btn-primary"
											>
												{t('buy now')}
											</Link>
										</div>
									</div>
								</div>
							</>
						);
					})
				) : (
					<NotFound />
				)}
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
					<div class="input-group mb-3">
						<span class="input-group-text">$</span>
						<input
							type="text"
							class="form-control"
							aria-label="Amount (to the nearest dollar)"
							placeholder="min"
							ref={min}
						/>
					</div>
					<div class="input-group mb-3">
						<span class="input-group-text">$</span>
						<input
							type="text"
							class="form-control"
							aria-label="Amount (to the nearest dollar)"
							ref={max}
							placeholder="max"
						/>
					</div>
					<button className="btn btn-primary" onClick={() => priceFilter()}>
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
