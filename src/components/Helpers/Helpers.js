const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
const calculateSubtotal = (cart) => {
   return cart.reduce((acc, item) => {
        return Math.round(acc + item.price * item.quantity);
    }, 0)
}

const calculateDiscount = (cart, discount) => {
    return Math.round((calculateSubtotal(cart) / 100 * discount));
}
const calculateTotal = (cart, discount, fee) => {
    let finalPrice = 0;
    finalPrice = calculateSubtotal(cart);
    finalPrice -= calculateDiscount(cart, discount);
    finalPrice -= fee;
    return Math.round(finalPrice);
}

export {capitalize, calculateSubtotal, calculateDiscount, calculateTotal};