const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
const calculateSubtotal = (cart) => {
   return cart.reduce((acc, item) => {
        return acc + item.price;
    }, 0)
}

const calculateTotal = (cart, discount, fee) => {
    let finalPrice = 0;
    finalPrice = calculateSubtotal(cart);
    finalPrice -= (finalPrice / 100 * discount);
    finalPrice -= fee;
    return finalPrice;
}

export {capitalize, calculateSubtotal, calculateTotal};