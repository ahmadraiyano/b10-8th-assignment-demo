const getStoredCart = () => {

    const storedCartStr = localStorage.getItem('cart');
    if(storedCartStr){
        const storedCart = JSON.parse(storedCartStr);
        return storedCart;
    }
    else{
        return [];
    }

};

const addToStoredCart = (id) => {

    const storedCart = getStoredCart();
    if(storedCart.includes(id)) {
        console.log(id, "already exist")
    }
    else {
        storedCart.push(id);
        
        const storedCartStr = JSON.stringify(storedCart);

        localStorage.setItem('cart', storedCartStr);
    }

};

export {addToStoredCart, getStoredCart}