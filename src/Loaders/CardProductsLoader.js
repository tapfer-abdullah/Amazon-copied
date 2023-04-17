import { getShoppingCart } from "../utilities/fakedb";

const LoadCardData = async () =>{
    const LoadedInfo = await fetch("products.json");
    const Products = await LoadedInfo.json();
    

    // if you load data from database you have to use async await 
    const storedCart = getShoppingCart();
    // console.log(storedCart)
    const savedCard = [];

    for(const id in storedCart){
        const addedProducts = Products.find(pd => pd.id === id);
        if(addedProducts){
            const quantity = storedCart[id];
            addedProducts.quantity = quantity;
            savedCard.push(addedProducts);
        }
    }


    return savedCard;

}

export default LoadCardData;