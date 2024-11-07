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

export {addToStoredWishlist, getStoredWishlist}