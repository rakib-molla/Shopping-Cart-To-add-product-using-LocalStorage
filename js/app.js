const addProduct =()=> { 
    const productField = document.getElementById('product-name');
    const product = productField.value ;
    const quantityField = document.getElementById('product-quantity');
    const quantity =quantityField.value;
    productField.value = '';
    quantityField.value = '';
    displayProduct(product,quantity); // pass the value to displayProduct

    saveProductToLocalStorage(product,quantity);
}

const displayProduct =(product,quantity)=>{ 
    // console.log(product,quantity);
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerHTML = `${product}: ${quantity} `;
    ul.appendChild(li);
}

// browser a cart name kicu ache kina ta check kora holo  
const getStoredShoppingCart = ()=>{ 
    let cart = {}
    const storedCard = localStorage.getItem('cart');
    if(storedCard){
        cart = JSON.parse(storedCard);
    }
    return cart;
}

const saveProductToLocalStorage = (product,quantity)=>{
    const cart = getStoredShoppingCart();
    cart [product] = quantity;
    const cartStringifyField = JSON.stringify(cart);
    console.log(cartStringifyField);
    localStorage.setItem('cart', cartStringifyField);
}

const displayProductFromLocalStorage = ()=>{
    const savedCart = getStoredShoppingCart();
    console.log(savedCart);

    //for in loop use in Object 
    for(const product in savedCart){
        const quantity = savedCart[product];
        console.log(product, quantity);
        displayProduct(product, quantity);
    }
}

displayProductFromLocalStorage();



const clearCookie=()=> {
    
    if(localStorage.length === 0){
        confirm('no cookie available');
    }else{
        localStorage.clear();
    }
}