// Cartlarga item qosiw
export const addCart = (product) => {
    return{
        type : "ADDCART",
        payload : product
    }
}

// Cartdagi itemdi oshiriw
export const deleteCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}