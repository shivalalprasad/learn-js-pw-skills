// product basic class

class Product {
    constructor(name, price, description, image, reviews, rating) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.reviews = reviews;
        this.rating = rating;
    }
    wishlist() {
        //connet to user db and add the item in user wishlist
        console.log("added to wishlist");
    }

    addToCart() {
        //connet to user db and add the item in user cart
        console.log("added to cart");
    }

    buyNow() {
        //connet to user db and add the item in user orderds and the staus of order
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
}

// start of experment

// creating a basic product
const product1 = new Product("product1", 129, "it's an demo product", "./product1.jpg", "demo rating", 4.99)

// using it prototypes/functions
console.log(product1);

product1.wishlist();
product1.addToCart();
product1.buyNow();

// end of experment

class glases extends Product {
    constructor(name, price, description, image, reviews, rating, size, weight) {
        super(name, price, description, image, reviews, rating);
        this.size = size;
        this.weight = weight;
    }

    blocking() {
        console.log(`${this.name} is blocking harmful rays of light`)
    }

}

// repeat exp

const LENSKARTBLU = new glases("LENSKART BLU", 455, " Zero Power Blue Cut Computer Glasses  Anti Glare, Lightweight & Blocks Harmful Rays | Grey Full Rim Square | 100% UV Protected | For Men and Women | Medium | LB E13529", "https://m.media-amazon.com/images/I/511xxWKkwtL._SX679_.jpg", "It is so comfortable but weighted Quality is like a Wow. I bought it at only just 520 from Amazon India online. If this was too costly don't buy it wait for some days. Thanks", 4, "Frame Size: Medium | Frame width: 136 mm | Frame Height: 41 mm | Frame Dimensions: (49-22-147)mm", "21 grams")

console.log(LENSKARTBLU);
LENSKARTBLU.blocking();

// tring parent functions
LENSKARTBLU.wishlist();
LENSKARTBLU.addToCart();
LENSKARTBLU.buyNow();






class watch {
    constructor(name, price, description, image, reviews, rating, dimension, weight, color, diameter, material) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image;
        this.reviews = reviews;
        this.rating = rating;
        this.dimension = dimension;
        this.weight = weight;
        this.color = color;
        this.diameter = diameter;
        this.material = material;
    }

    showtime() {
        console.log(`${this.name} is showing time`)
    }

    // __proto__ = Product.prototype

}
//
// repeat

// watch.prototype = Object.create(Product.prototype);

watch.prototype.wishlist = function () {
    //connet to user db and add the item in user wishlist
    console.log(`${this.name} is added to wishlist`);
}
watch.prototype.addToCart = function () {
    //connet to user db and add the item in user cart
    console.log(` ${this.name} is added to cart`);
}

watch.prototype.buyNow = function () {
    //connet to user db and add the item in user orderds and the staus of order
    console.log(`Redirectiring to payment page of $${this.name} which costs ₹${this.price}`);
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

// watch.prototype.constructor = watch;


//
const casio = new watch("Casio Vintage Collection", 1695, "Unisex Vintage COLLECTIONA-158WA-1Q Grey Dial Metal Watch - D011 (Not assigned,Not Assigned)", "https://m.media-amazon.com/images/I/61ybeKQto8L._SY741_.jpg", "The watch is very light weight even lighter than I imagined!! Build quality is decent. Overall very good watch at this budget. Gives an antique vibe. Very comfortable to wear. The backlight is not so bright but overall good enough. And all the modes are very easy to access.", 4.4, "36.8 x 33.2 x 8.2mm", "58 grams", "silver", "38mm", "others")


// Object.setPrototypeOf(Product, watch)


// Object.setPrototypeOf(watch) = Product

console.log(casio);
console.dir(casio);



casio.showtime();

// // tring parent functions
// watch.prototype.wishlist();
// watch.prototype.addToCart();
// watch.prototype.buyNow();

casio.wishlist();
casio.addToCart();
casio.buyNow();









class backpack extends Product {
    constructor(name, price, description, image, reviews, rating, weight, color, material, capacity) {
        super(name, price, description, image, reviews, rating);
        this.weight = weight;
        this.color = color;
        this.material = material;
        this.capacity = capacity;
    }

    packup() {
        console.log(`${this.name} is packing up all the items`)
    }

}

class grocery {
    constructor(name, price, image, reviews, rating) {
        this.name = name,
            this.price = price,
            this.image = image,
            this.reviews = reviews,
            this.rating = rating
    }

    fresh() {
        console.log(`${this.name} is fresh`)
    }

}

class furniture extends Product {
    constructor(name, price, image, reviews, rating, dimension, weight, color, material, finish) {
        super(name, price, image, reviews, rating);
        this.dimension = dimension;
        this.weight = weight;
        this.color = color;
        this.material = material;
        this.finish = finish;
    }

    comfort() {
        console.log(`${this.name} is comfortable`)
    }
}



// Big Category electronics is starting

class electronics extends Product {
    constructor(name, price, image, reviews, rating, dimension, color, material) {
        super(name, price, image, reviews, rating);
        this.dimension = dimension;
        this.color = color;
        this.material = material;
    }
}

class mobile extends electronics {
    category;
    constructor(name, price, image, reviews, rating, dimension, color, material, Brand, OS, RAM, ROM, Processor) {
        super(name, price, image, reviews, rating, dimension, color, material);
        this.Brand = Brand;
        this.OS = OS;
        this.RAM = RAM;
        this.ROM = ROM;
        this.Processor = Processor;
        this.category = "mobile";
    }

    call() {
        console.log(`calling from your mobile ${name} to ...`);
    }
    message() {
        console.log(`sending message from your mobile ${name} to ...`);
    }
}


class charger extends electronics {
    constructor(name, price, iamge, reviews, rating, dimension, color, material, Brand, Commpatablewith) {
        super(name, price, iamge, reviews, rating, dimension, color, material)
        this.Brand = Brand;
        this.Commpatablewith = Commpatablewith;
    }

    charge() {
        console.log(`${this.name} is plugged in and charging your phone`)
    }

}



class WirlessCharging extends charger {
    constructor(name, price, iamge, reviews, rating, color, material, Brand, Commpatablewith) {
        super(name, price, iamge, reviews, rating, color, material, Brand, Commpatablewith)
    }

    charge() {
        console.log(`your device is charging wirelessly by your ${this.name}`);

    }
}



class CPU extends electronics {
    constructor(name, price, image, reviews, rating, dimension, color, material, Brand, OS, RAM, ROM, Processor, Cores, Threads, Cache) {
        super(name, price, image, reviews, rating, dimension, color, material)
        this.Brand = Brand;
        this.OS = OS;
        this.RAM = RAM;
        this.ROM = ROM;
        this.Processor = Processor;
        this.Cores = Cores;
        this.Threads = Threads;
        this.Cache = Cache;
    }


    run() {
        console.log(`${this.name} is running with full max power`)
    }
}

class TV extends electronics {
    constructor(name, price, image, reviews, rating, dimension, color, material, Brand) {
        super(name, price, image, reviews, rating, dimension, color, material)
        this.Brand = Brand;
    }


    itsShowTime() {
        console.log(`we are watching Squid Game on ${this.name} TV it's awesome`)
    }
}

