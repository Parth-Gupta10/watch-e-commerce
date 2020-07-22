import React, {useState, useEffect} from "react";
import {storeProducts} from "./data";
const product = React.createContext();
const {Provider} = product;

let productTemp = [];

function productList() {
  storeProducts.forEach(item => {
    const singleItem = {
      ...item
    };
    productTemp = [
      ...productTemp,
      singleItem
    ];
  });
}

productList();

let cartItems = [];

const ProductProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const [modalOpen, setModal] = useState(false);
  const [totalAmt, setTotalAmt] = useState(0);
  const [detailProduct, setDetailProduct] = useState(storeProducts[0]);
  const [modalProduct, setModalProduct] = useState([]);

  useEffect(() => {
    setProductsList();
  });

  function setProductsList() {
    setProducts(productTemp);
  }

  function addToCart(id) {
    console.log(id);
    products.forEach((item, i) => {
      if (i === id - 1) {
        item.inCart = true;
        item.count = 1;
        item.total = item.price;
        cartItems.push(item);
      }
    });
    setCart(cartItems);
    getTotal();
    // console.log(products);
    // console.log('store: ', storeProducts);
  }

  function getItem(id) {
    const product = products.find(item => item.id === id);
    return product;
  };

  function handleDetail(id) {
    const detailProduct = getItem(id);
    setDetailProduct(detailProduct);
  }

  function openModal(id) {
    const modalProduct = getItem(id);
    setModalProduct(modalProduct);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  function increaseCount(id) {
    cartItems.forEach((item, i) => {
      if (item.id === id) {
        item.count = item.count + 1;
        item.total =  item.price * item.count;
        getTotal();
      }
    });
    // console.log('inc: ', cartItems);
    setCart(cartItems);
  }

  function decreaseCount(id) {
    cartItems.forEach((item, i) => {
      if (item.id === id) {
        item.count = item.count - 1;
        item.total =  item.price * item.count;
        if (item.count === 0) {
          removeFromCart(item.id);
        }
        getTotal();
      }
    });
    // console.log('dec: ', cartItems);
    setCart(cartItems);
  }

  function removeFromCart(id) {
    let tempProducts = [...products];

    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    setProducts([...tempProducts]);

    cartItems = cartItems.filter(item => {
      return item.id !== id;
    });
    getTotal();
    setCart(cartItems);
  }

  function getTotal() {
    let total = 0;
    cartItems.forEach((item, i) => {
      total = total + item.total;
    });
    setTotalAmt(total);
  }

  function clearCart() {
    cartItems = []
    setCart(cartItems);
    productTemp = [];
    productList();
    setProductsList();
    getTotal();
  }

  return (<Provider value={{
      cart,
      setCart,
      products,
      modalOpen,
      totalAmt,
      addToCart,
      handleDetail,
      detailProduct,
      openModal,
      closeModal,
      modalProduct,
      increaseCount,
      decreaseCount,
      removeFromCart,
      clearCart
    }}>
    {children}
  </Provider>)
}

export {
  product,
  ProductProvider
};
