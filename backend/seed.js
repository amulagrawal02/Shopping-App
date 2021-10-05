const mongoose = require("mongoose");
const Product = require("./models/product");

const products = [
  {
    name: "iPhone 12",
    src: "https://images.unsplash.com/photo-1565306257414-bbc84fdaaade?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGlwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "80,000",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    name: "Laptop",
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFjYm9va3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "1,50,000",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    name: "iPhone 12",
    src: "https://images.unsplash.com/photo-1565306257414-bbc84fdaaade?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGlwaG9uZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "80,000",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    name: "TV",
    src: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHZ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "2,50,000",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    name: "AirDots",
    src: "https://images.unsplash.com/photo-1511300961358-669ca3ad05af?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGVhcnBob25lc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "80,000",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    name: "Headphones",
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    price: "1,50,000",
    desc: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

async function seedDB() {
  await Product.insertMany(products);
  console.log("DB seeded");
}

module.exports = seedDB;
