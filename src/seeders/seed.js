const db = require("../utils/database");
const {User, Product, Cart, Order, ProductInOrder, ProductInCart } = require('../models');
const initModels = require('../models/initModels');

initModels();

const users = [
    {
        username: "Angel",
        email: "ang3lcortes@outlook.com",
        password: "1234"
    },
    {
        username: "Juan",
        email: "juan@gmail.com",
        password: "1234"
    },
    {
        username: "Codi",
        email: "codi@gmail.com",
        password: "1234"
    },
    {
        username: "Jesus",
        email: "jesus@gmail.com",
        password: "1234"
    },
    {
        username: "Isaac",
        email: "isaac@gmail.com",
        password: "1234"
    },
];

const products = [
    {
        name: "IphoneX",
        price: "1250.00",
        productImage: "https://http2.mlstatic.com/D_NQ_NP_874010-MLA43711395815_102020-O.jpg",
        availableQty: 150,
        status: true,
        userId: 1,

    },
    {
        name: "Alienware",
        price: "2500.00",
        productImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…01s1Zx33/AJFvso+86nkB0kRIEREBERAREQEREBERAREQP//Z",
        availableQty: 30,
        status: true,
        userId: 2,

    },
    {
        name: "Logitech Superlight",
        price: "50.00",
        productImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…ZuUMMlMWREQckVVHwEIQJoQhAIQhAIQhAIQhAIQhAIQhA/9k=",
        availableQty: 200,
        status: true,
        userId: 3,

    },
    {
        name: "Artisan Hien",
        price: "60.00",
        productImage: "https://m.media-amazon.com/images/I/71yQr-cZOeL._AC_SX450_.jpg",
        availableQty: 20,
        status: true,
        userId: 1,

    },
    {
        name: "Skypad 3.0",
        price: "120.00",
        productImage: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD…AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH/9k=",
        availableQty: 15,
        status: true,
        userId: 1,

    },
];

const carts = [
    {
        userId: 2,
        totalPrice: 0,
    },
    {
        userId: 1,
        totalPrice: 0,
    }, {
        userId: 3,
        totalPrice: 0,
    }, {
        userId: 4,
        totalPrice: 0,
    }, {
        userId: 5,
        totalPrice: 0,
    },
]

const orders = [
     {
     userId: 1,
     totalPrice: 0,
     status: true,   
    },
    {
    userId: 2,
    totalPrice: 0,
    status: true,   
    },
    {
    userId: 3,
    totalPrice: 0,
    status: true,   
    },
    {
    userId: 4,
    totalPrice: 0,
    status: true,   
    },
    {
    userId: 5,
    totalPrice: 0,
    status: true,   
    },
    
]


const productInOrder = [
    {
       orderId: 1,
       productId: 2,
       quantity: 3,
       price: 0,
       status: true,
    },
    {
        orderId: 2,
        productId: 3,
        quantity: 1,
        price: 0,
        status: true,
     },
     {
        orderId: 3,
        productId: 3,
        quantity: 3,
        price: 0,
        status: true,
     },
     {
        orderId: 4,
        productId: 4,
        quantity: 4,
        price: 0,
        status: true,
     },
     {
        orderId: 5,
        productId: 1,
        quantity: 1,
        price: 0,
        status: true,
     },
]

const productInCart = [
    {
     cartId: 1,
     productId: 2,
     quantity: 2,
     price: 0,
     status: true,   
    },
    {
        cartId: 2,
        productId: 3,
        quantity: 2,
        price: 0,
        status: true,   
       },
       {
        cartId: 3,
        productId: 1,
        quantity: 2,
        price: 0,
        status: true,   
       },
       {
        cartId: 4,
        productId: 4,
        quantity: 2,
        price: 0,
        status: true,   
       },
       {
        cartId: 5,
        productId: 5,
        quantity: 2,
        price: 0,
        status: true,   
       },
]



db.sync({force: true}).then(() => {
    console.log('Seed syncronized');
    users.forEach( async (user) => await User.create(user))
    setTimeout(() => {
    products.forEach( async (product) => await Product.create(product))
    },100);
    setTimeout(() => {
    carts.forEach( async (cart) => await Cart.create(cart))
    },200);
    setTimeout(() => {
    orders.forEach( async (order) => await Order.create(order))
    },300);
    setTimeout(() => {
    productInOrder.forEach( async (productInOrder) => await ProductInOrder.create(productInOrder))
    },400);
    setTimeout(() => {
    productInCart.forEach( async (productInCart) => await ProductInCart.create(productInCart))
    },500);
})