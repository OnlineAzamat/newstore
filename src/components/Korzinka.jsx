import React from 'react'
import { useSelector, useDispatch, connect } from 'react-redux'
import { deleteCart } from '../redux/action';

const mapStateToProps = state => {
    return{
        korzina: state.addItem.products
    }
}

const ProductList = ({ products }) => {
    return(
        <div>
        {
            products.map(product => {
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>{product.img}</p>
                </div>
            })
        }
        </div>
    )
}

export default connect(mapStateToProps)(ProductList)