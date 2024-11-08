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

const getStoredWishlist = () => {

    const storedWishlistStr = localStorage.getItem('wishlist');
    if(storedWishlistStr){
        const storedWishlist = JSON.parse(storedWishlistStr);
        return storedWishlist;
    }
    else{
        return [];
    }

};

const addToStoredWishlist = (id) => {

    const storedWishlist = getStoredWishlist();
    if(storedWishlist.includes(id)) {
        console.log(id, "already exist")
    }
    else {
        storedWishlist.push(id);
        
        const storedWishlistStr = JSON.stringify(storedWishlist);

        localStorage.setItem('wishlist', storedWishlistStr);
    }

};

export {addToStoredCart, getStoredCart, addToStoredWishlist, getStoredWishlist}