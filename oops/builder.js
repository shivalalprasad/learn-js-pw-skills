class product{
    #productName;
    #productPrice;
    #productDescription;
    #productImage;
    #productCategory;
    #productReviews;
    #productRating;

    constructor(builder) {
        // valuidations before object creation
            this.varname = builder.varname;
       
        if(typeof builder.productName == "string" && builder.productName.length > 0){
            this.#productName = builder.productName;
        }else{
            console.log(`Product ${builder.varname} Name is invalid`);
        };
        if (builder.productPrice > 0) {
            this.#productPrice = builder.productPrice;
        } else {
            console.log(`Product ${builder.varname} Price is invalid`);
        }
        if(typeof builder.productDescription == "string" && builder.productDescription.length > 0){
            this.#productDescription = builder.productDescription;
        }else{
            console.log(`Product ${builder.varname} Description is invalid`);
        };
        if(typeof builder.productImage == "string" && builder.productImage.length > 0){
            this.#productImage = builder.productImage;
        }else{
            console.log(`Product ${builder.varname} Image is invalid`);
        };
        if(typeof builder.productCategory == "string" && builder.productCategory.length > 0){
            this.#productCategory = builder.productCategory;
        }else{
            console.log(`Product ${builder.varname} Category is invalid`);
        };
        if(typeof builder.productReviews == "string" && builder.productReviews.length > 0){
            this.#productReviews = builder.productReviews;
        }else{
            console.log(`Product ${builder.varname} Reviews sre invalid`);
        };
        if(typeof builder.productRating == "number" && builder.productRating > 0){
            this.#productRating = builder.productRating;
        }else{
            console.log(`Product ${builder.varname} Rating is invalid`);
        };
    }

    diplayProduct(){
        console.log(`Product : ${this.varname}
Name: ${this.#productName},
Price: ${this.#productPrice},
Description: ${this.#productDescription},
Image: ${this.#productImage},
Category: ${this.#productCategory},
Reviews: ${this.#productReviews},
Rating: ${this.#productRating}`
        );
    }

    wishlist(){
        //connet to user db and add the item in user wishlist
        console.log("addding to wishlist...");
    }

    addToCart(){
        //connet to user db and add the item in user cart
        console.log("addding to cart...");
    }

    buyNow(){
        //connet to user db and add the item in user orderds and the staus of order
        console.log(`you are buying the product ${this.#productName}`);
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

    static get builder(){
        class builder{
            constructor(varname) {//default values
                this.varname= varname;
                this.productName = "";
                this.productPrice = 0
                this.productDescription = "";
                this.productImage = "";
                this.productCategory = "";
                this.productReviews = "";
                this.productRating = 0;
            }

            setName(Name) {
                    this.productName = Name;
                    return this
            }
            
            setPrice(Price) {
                    this.productPrice = Price;
                    return this
            }

            setDescription(Description) {
                    this.productDescription = Description;
                    return this
            }

            setImage(Image) {
                    this.productImage = Image;
                    return this
            }

            setCategory(Category) {
                    this.productCategory = Category;
                    return this
            }
            setReviews(Reviews) {
                    this.productReviews = Reviews;
                    return this
            }
            setRating(Rating) {
                    this.productRating = Rating;
                    return this
            }
            build() {
                return new product (this)
            }
        }
        return builder;
    }
}


let yes = new product.builder("yes").setName("iphone").setPrice(100000).setDescription("This is iphone").setImage("./iphone.png").setCategory("mobile").setReviews("good").setRating(4).build();
yes.diplayProduct();
yes.wishlist();
yes.addToCart();
yes.buyNow();

// not giving some values in the product no 
var no = new product.builder("no").setName("").setPrice(0).setDescription("This is iphone").setImage("./iphone.png").setCategory("mobile").setReviews("good").setRating(0).build();
