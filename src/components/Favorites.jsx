import axios from "axios"
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { useNavigate } from "react-router";

function Favorites() {
  const navigate = useNavigate();
  const [product, setProduct] = useState();
	const [loading, setLoading] = useState(false);

  axios.get(`https://fakestoreapi.com/products/${window.localStorage.getItem("favorite1")}`)
    .then((res) => {
      setProduct(res.data);
      setLoading(true);
    })
    .catch((err) => console.log(err));
  
  function toProduct(id) {
    navigate(`/products/${id}`);
  }

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
  
  return (
    <div className="favorites">
      {!loading ? <Loading /> : (
        <div className="products-container">
          <div className="cards">
            <div className='card-wrapper'>
              <div onClick={() => toProduct(window.localStorage.getItem("favorite1"))} className="card__card">
                <div className="card-img-container">
                  <img
                    src={product?.image}
                    alt="card-img"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    {product.title.substring(0, 15)}
                  </h5>
                  <h6 className="installment-badge mt-1">${Math.floor(product.price / 1.2) / 10}/month</h6>
                  <h5 className="card-text">${product.price}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Favorites