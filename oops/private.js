//

class product{
    #productName;
    #productPrice;
    #productDescription;
    #productImage;
    #productCategory;
    #productReviews;
    #productRating;

    // constructor(productName, productPrice,productDescription,productImage,productCategory,productReviews,productRating) {
    //     // this.#productName = productName;
    //     // this.#productPrice = productPrice;
    //     // this.#productDescription = productDescription;
    //     // this.#productImage = productImage;
    //     // this.#productCategory = productCategory;
    //     // this.#productReviews = productReviews;
    //     // this.#productRating = productRating;
    // }


    wishlist(){
        //connet to user db and add the item in user wishlist
        console.log("added to wishlist");
    }

    addToCart(){
        //connet to user db and add the item in user cart
        console.log("added to cart");
    }

    buyNow(){
        //connet to user db and add the item in user orderds and the staus of order
        console.log("Redirectiring to payment page");
       var paymentSucessFull = true;
            if(paymentSucessFull==true){
                console.log("Payment is sucessfull ");
                console.log("Hey! Your order is placed successfully ");
                console.log(`Your order id is ${Math.floor(Math.random()*84568446546)}`) 
                console.log(`${this.productName} tracking link will be sent to your email id`)
                console.log(`it will also contain in your orders section`)
                //connet to user db and add the item in user orderds and the staus of the order is sucessfull
            }else{
                console.log("Payment failed please try again")
                console.log("if any amount deducted from your account it will be refunded within 7 days")
                //connet to user db and add the item in user orderds and the staus of the order is failed
            }
    }

    displayproduct(){
        console.log(`Name: ${this.#productName}, 
Price: ${this.#productPrice},
Description: ${this.#productDescription},
Image: ${this.#productImage},
Category: ${this.#productCategory},
Reviews: ${this.#productReviews},
Rating: ${this.#productRating}
`);
    }
}

let iqoo_neo_6 = new product("iqoo neo 6",29999,"midrange flagship","./images/iqoo_neo_6.jpg","mobile","awesome phone, good camera, good battery, good sound,imensive performance",4.9)

iqoo_neo_6.displayproduct();
iqoo_neo_6.wishlist();
iqoo_neo_6.addToCart();
iqoo_neo_6.buyNow();
