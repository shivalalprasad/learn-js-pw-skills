class product {
  constructor(name, price, quantity,productDescription,productImage,productCategory,productReviews,productRating) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.productDescription = productDescription;
    this.productImage = productImage;
    this.productCategory = productCategory;
    this.productReviews = productReviews;
    this.productRating = productRating;
  }



  wishlist() {
    //connet to user db and add the item in user wishlist
    console.log("addding to wishlist...");
  }

  addToCart() {
    //connet to user db and add the item in user cart
    console.log("addding to cart...");
  }

  buyNow() {
    //connet to user db and add the item in user orderds and the staus of order
    console.log(`you are buying the product ${this.name}`);
    console.log("Redirectiring to payment page");
    var paymentSucessFull = true;
    if (paymentSucessFull == true) {
      console.log("Payment is sucessfull ");
      console.log("Hey! Your order is placed successfully ");
      console.log(`Your order id is ${Math.floor(Math.random() * 84568446546)}`)
      console.log(`${this.name} tracking link will be sent to your email id`)
      console.log(`it will also contain in your orders section`)
      //connet to user db and add the item in user orderds and the staus of the order is sucessfull
    } else {
      console.log("Payment failed please try again")
      console.log("if any amount deducted from your account it will be refunded within 7 days")
      //connet to user db and add the item in user orderds and the staus of the order is failed
    }
  }

  displayProduct(x) {
    console.log(`display product`)
    for (const key of Object.keys(x)) {
      if (typeof x[key] !== 'function') {
        console.log(`${key}: ${x[key]}`)
      }
      else(console.log("function hided"))
    }
  }
}

var fghjk=function name(params) {
  console.log("function showed")
}

console.log("dfghnjmk,l.");
let iqoo_neo_6 = new product("iqoo neo 6", 29999,fghjk, "midrange flagship", "./images/iqoo_neo_6.jpg", "mobile", "awesome phone, good camera, good battery, good sound,imensive performance", 4.9)
console.log(iqoo_neo_6);
iqoo_neo_6.wishlist();
iqoo_neo_6.addToCart();

iqoo_neo_6.buyNow();
iqoo_neo_6.displayProduct(iqoo_neo_6);



// for ( [key, value] of Object.entries(iqoo_neo_6)) {
//   console.log(`${key}: ${value}`);
// }

// let objd =  Object.entries(iqoo_neo_6)

// console.log(objd)

// for ([key, value] of Object.entries(iqoo_neo_6)) {
//   console.log(`${key}: ${value}`);
// }

// console.log(Object.entries(iqoo_neo_6));

// console.log(Object.keys(iqoo_neo_6));

// console.log(Object.values(iqoo_neo_6));
