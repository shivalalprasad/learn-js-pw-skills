// call, apply & bind

// using objects


// call also called as function borrowing
let name = {
    firstName: "Shivalal",
    lastName: "Prasad",
    fullName: function (firstName, lastName) {
        ;
        console.log(`this is the function in side the object \n ${this.firstName} ${this.lastName}`);
    }
}

let name2 = {
    firstName: "Prasad",
    lastName: "Shivalal"
}

let details = function (city, state, country) {
    console.log(`${this.firstName} ${this.lastName}  ${city} ${state} ${country}`);


}
name.fullName()
name.fullName.call(name2)

details.call(name, "Kamareddy", "Telangana", "India")


// apply
console.log(`apply the this`);

details.apply(name2, ["Kamareddy", "Telangana", "India"])

// bind

let printFullName = name.fullName.bind(name2)

let printFullName2 = details.bind(name, "Kamareddy", "Telangana", "India")

console.log(`binding the this `);
printFullName()
console.log(`binding the this`);
printFullName2()

console.log(`\n\n\n\n Practice call, apply & bind in objects \n\n\n\n`)
// using the call, apply & bind in the file prototype.js


class Product {
    constructor(name, price, image, reviews, rating) {
        this.name = name;
        this.price = price;
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

const product1 = new Product("product1", 129, "./product1.jpg", "demo rating", 4.99)

// using it prototypes/functions
console.log(product1);

product1.wishlist();
product1.addToCart();
product1.buyNow();
//
class glases extends Product {
    constructor(name, price, image, reviews, rating, size, weight) {
        super(name, price, image, reviews, rating);
        this.size = size;
        this.weight = weight;
    }

    blocking() {
        console.log(`${this.name} is blocking harmful rays of light`)
    }

}

const LENSKARTBLU = new glases("LENSKART BLU", 455, "https://m.media-amazon.com/images/I/511xxWKkwtL._SX679_.jpg", "It is so comfortable but weighted Quality is like a Wow. I bought it at only just 520 from Amazon India online. If this was too costly don't buy it wait for some days. Thanks", 4, "Frame Size: Medium | Frame width: 136 mm | Frame Height: 41 mm | Frame Dimensions: (49-22-147)mm", "21 grams")

console.log(LENSKARTBLU);
LENSKARTBLU.blocking();

// tring parent functions
LENSKARTBLU.wishlist();
LENSKARTBLU.addToCart();
LENSKARTBLU.buyNow();

class watch {
    constructor(name, price, image, reviews, rating, dimension, weight, color, diameter, material) {
        this.name = name;
        this.price = price;
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
}

const casio = new watch("Casio Vintage Collection", 1695, "https://m.media-amazon.com/images/I/61ybeKQto8L._SY741_.jpg", "The watch is very light weight even lighter than I imagined!! Build quality is decent. Overall very good watch at this budget. Gives an antique vibe. Very comfortable to wear. The backlight is not so bright but overall good enough. And all the modes are very easy to access.", 4.4, "36.8 x 33.2 x 8.2mm", "58 grams", "silver", "38mm", "others")

console.log(casio);
console.dir(casio);

casio.showtime();

//using call

Product.prototype.wishlist.call(casio);
Product.prototype.addToCart.call(casio);
Product.prototype.buyNow.call(casio);



class backpack extends Product {
    constructor(name, price, image, reviews, rating, weight, color, material, capacity) {
        super(name, price, image, reviews, rating);
        this.weight = weight;
        this.color = color;
        this.material = material;
        this.capacity = capacity;
    }

    packup() {
        console.log(`${this.name} is packing up all the items`)
    }

}

let americanTourister = new backpack("American Tourister", 899, `https://m.media-amazon.com/images/I/616NO8EhwlL._SX679_.jpg`, `Like the size, number of compartments.`, 4, "400 grams", `blue`, `Polymer Plastic`, `32 liters`)

console.log(americanTourister);
americanTourister.packup();

americanTourister.wishlist();
americanTourister.addToCart();
americanTourister.buyNow();


class grocery {
    constructor(name, price, image, reviews, rating, quantity) {
        this.name = name,
            this.price = price,
            this.image = image,
            this.reviews = reviews,
            this.rating = rating,
            this.quantity = quantity;
    }

    fresh() {
        console.log(`${this.name} is fresh`)
    }

}


const toamto = new grocery(`tomato`, 20, `https://media.istockphoto.com/id/171579643/photo/tomato-greenhouse.webp?b=1&s=612x612&w=0&k=20&c=tIMKrDv_TlJrHCCjNunZlx7ZPvhgarA5haLWbPNUs_s=`, 3.5, `for cooking these are awesome`, `1 Kg`)

console.log(toamto);

toamto.fresh();

let toamtoWishlist = Product.prototype.wishlist.bind(toamto)
let toamtoAddToCart = Product.prototype.addToCart.bind(toamto)
let toamtoBuyNow = Product.prototype.buyNow.bind(toamto)

toamtoWishlist()
toamtoAddToCart()
toamtoBuyNow()


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

    category() {
        console.log(`${this.name} is the category of electronics product`)
    }
}

const drVaku = new electronics(`DR VAKU 10,000 Mah Power Bank`, 1299, `https://m.media-amazon.com/images/I/81wQ6pgtOFL._SL1500_.jpg`, `Excellent battery bank, charges fast, quickly, and has inbuilt safety protects from overcharging.

The look and feel is also good. If it would have been little slimmer and lighter, would have been the best. Anyways now as well, no complaints. I loved the product and also recommend.
`, 4.2, `22.7 x 11.2 x 3 cm; `, `Clear Bolt- Transparent`, `Plastic`)


console.log(drVaku);
drVaku.category()


drVaku.wishlist();
drVaku.addToCart();
drVaku.buyNow();






class mobile extends electronics {
    constructor(name, price, image, reviews, rating, dimension, color, material, Brand, OS, RAM, ROM, Processor) {
        super(name, price, image, reviews, rating, dimension, color, material);
        this.Brand = Brand;
        this.OS = OS;
        this.RAM = RAM;
        this.ROM = ROM;
        this.Processor = Processor;
    }

    call() {
        console.log(`calling from your mobile ${this.name} to ...`);
    }
    message() {
        console.log(`sending message from your mobile ${this.name} to ...`);
    }
}


const iqooNeo6 = new mobile(`IQOO Neo 6 `, 39499, `https://m.media-amazon.com/images/I/71WS-0ITj7L._SL1200_.jpg`, `Good camera I'm satisfied 😊
Battery 4/5
Performance overall good
Quality is good
Charging I'm a gamer so it's helping me a lot`, 4, `7.6 x 0.9 x 16.3 cm`, `Dark Nova`, `plastic`, `IQOO`, `Android`, `8 Gb`, `256 Gb`, `Snapdragon® 870 5G`)

console.log(iqooNeo6);

iqooNeo6.category();

iqooNeo6.call();
iqooNeo6.message();

iqooNeo6.wishlist();
iqooNeo6.addToCart();
iqooNeo6.buyNow();





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

const flashCharger = new charger(`Original 120W Flash Charging Fast Charger`, 2199, `https://m.media-amazon.com/images/I/21n5xp6enxL.jpg`, `Super item I have ever purchased`, 5, `5 x 4 x 4 cm`, `white`, `XILIOES ORIGINALS`, [`Iqoo Neo 7`, `Iqoo Neo 7 Pro`, `Iqoo Neo 6`, `Iqoo Neo 6 Pro`, `vivo X90`, `vivo X90 Pro`, `vivo X80`, `vivo X80 Pro`, `vivo X70`, `vivo X70Pro`, `Vivo`, `Oppo`, `Oneplus`, `Iphone`, `pixel`])



console.log(flashCharger);

flashCharger.charge();

flashCharger.category();

flashCharger.wishlist();
flashCharger.addToCart();
flashCharger.buyNow();




class WirlessCharging extends charger {
    constructor(name, price, iamge, reviews, rating, color, material, Brand, Commpatablewith) {
        super(name, price, iamge, reviews, rating, color, material, Brand, Commpatablewith)
    }

    charge() {
        console.log(`your device is charging wirelessly by your ${this.name}`);

    }
}

const unigen = new WirlessCharging(`UNIGEN UNIDOCK 250 23W 3-in-1 Wireless Charging Stand with 23W Type-C PD`, 2199, `https://m.media-amazon.com/images/I/61I5M7SZznL._SL1500_.jpg`, `Apple watch takes overnight to charge. Otherwise it gets charger in an hour with original charger`, 3.5, `white`, `Acrylonitrile Butadiene Styrene`, `XILIOES ORIGINALS`, [`AirPods`, `Galaxy Buds`, `Qi-enabled devices`, `iWatch Series 6/5/4/3/2`, `AirPods 2(wireless case) AirPods Pro`, `SAMSUNG Note 5`, `SAMSUNG Note 7`, `SAMSUNG Note FE`, `SAMSUNG Note 8`, `SAMSUNG Note 9`, `SAMSUNG Note 10`, `SAMSUNG 10+`, ` SAMSUNG Note 10 5G`, `SAMSUNG S6`, `SAMSUNG S6 Edge+`, `SAMSUNG S6 Active`, `SAMSUNG S7`, `SAMSUNG S7 Edge`, `SAMSUNG S7 Active`, `SAMSUNG S8`, `SAMSUNG S8+`, `SAMSUNG S8 Active`, `SAMSUNG S9`, `SAMSUNG S9+`, `SAMSUNG S10`, `SAMSUNG S10+`, `SAMSUNG S10 5G`, `Apple iPhone 15`, `Apple 14`,])


console.log(unigen);

unigen.charge();

unigen.category();

unigen.wishlist();
unigen.addToCart();
unigen.buyNow();








class CPU extends electronics {
    constructor(name, price, image, reviews, rating, dimension, color, material, Brand, OS, RAM, ROM, Processor, core, storage) {
        super(name, price, image, reviews, rating, dimension, color, material)
        this.Brand = Brand;
        this.OS = OS;
        this.RAM = RAM;
        this.ROM = ROM;
        this.Processor = Processor;
        this.core = core;
        this.storage = storage;
    }


    run() {
        console.log(`${this.name} is running with full max power`)
    }
}

const macMIni = new CPU(`Apple 2023 Mac mini`, 51990, `https://m.media-amazon.com/images/I/61jup8h--XL._SL1500_.jpg`, `As always, top notch and buttery smooth performance from the M2 chip. This is my 2nd apple product. Go for it.`, 4.7, `19.7 x 19.7 x 3.6 cm`, `silver`, `metal`, `Apple`, `Mac OS`, `8 GB`, `512 GB`, `M2`, 19, `8 TB`)



console.log(macMIni);

macMIni.run();

macMIni.category()




macMIni.wishlist();
macMIni.addToCart();
macMIni.buyNow()



class TV extends electronics {
    constructor(name, price, image, reviews, rating, dimension, material, Brand) {
        super(name, price, image, reviews, rating, dimension, material)
        this.Brand = Brand;
    }


    itsShowTime() {
        console.log(`we are watching Squid Game on ${this.name} TV it's awesome`)
    }
}


const SonyBravia = new TV(`Sony Bravia 65 inches 4K Ultra HD Smart LED Google TV`, 74990, `https://m.media-amazon.com/images/I/81MRU+3RJLL._SL1500_.jpg`, `Display quality is awesome and sony installation service is also satisfactory overall a good package`, 4.8, `8.7 x 146.3 x 85.2 cm`, `Plastic`, `SONY`)

console.log(SonyBravia);


SonyBravia.itsShowTime();

SonyBravia.category()




SonyBravia.wishlist();
SonyBravia.addToCart();
SonyBravia.buyNow()


let tvFeatures = function (...features) {
    console.log(`${this.name},
${this.price},
${this.image},
${this.reviews},
${this.rating},
${this.dimension},
${this.material},
${this.Brand}`)
    console.log(...features)
}


tvFeatures.apply(SonyBravia, [`Google TV `, `Watchlist`, `Google Assistant`, `Chromecast Built In`, `Built In Mic`, `Game menu `, `ALLM/eARC (HDMI 2.1 Compatible)`, `Apple Airplay`, `Apple Homekit`, `Alexa`])
