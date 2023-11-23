const mongoose = require("mongoose");
const Order = require("./model/Order.model");

async function seedData() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@supershop.3msu4cx.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    if (mongoose.connection.readyState !== 1) {
      console.error("Failed to connect to the database");
      return;
    }

    for (let i = 0; i < 10; i++) {
      const order = new Order({
        userId: {
          $oid: "655f72d129ebd9e4b78fff49",
        },
        firstName: "John",
        lastName: "Doe",
        email: "johndoe@gmail.com",
        address: "High Suite 150b",
        country: "United Kingdom",
        city: "London",
        zipCode: "1064",
        coupon: "",
        shipping: "fedex",
        payment: {
          paymentMethod: "cash",
          details: null,
        },
        phone: "06143286189",
        status: "Pending",
        totalAmount: 943.23,
        shippingCost: 20,
        products: [
          {
            prices: {
              discount: 16.340000000000003,
              originalPrice: 46.34,
              price: 30,
            },
            image: ["https://i.postimg.cc/8Ck40tYr/Pineapple-1-5lb.jpg"],
            tag: ['["fresh fruits","fruits","vegetable"]'],
            status: "show",
            _id: {
              $oid: "644500c2839a5e0c2f5c17c1",
            },
            sku: "",
            barcode: "",
            productId: "644500c2839a5e0c2f5c17c1",
            title: {
              en: "Pineapple Imported",
            },
            category: {
              _id: {
                $oid: "632aca454d87ff2494210c00",
              },
              name: {
                en: "Fresh Fruits",
              },
            },
            stock: 504,
            isCombination: false,
            __v: 0,
            createdAt: {
              $date: "2023-04-23T09:56:18.442Z",
            },
            updatedAt: {
              $date: "2023-11-05T11:02:16.507Z",
            },
            quantity: 4,
          },
          {
            prices: {
              discount: 13.659999999999997,
              originalPrice: 58.66,
              price: 45,
            },
            image: ["https://i.postimg.cc/5y7rNDFv/Radicchio-12ct.jpg"],
            tag: ['["fresh fruits","fruits","vegetable"]'],
            status: "show",
            _id: {
              $oid: "644500c2839a5e0c2f5c17ca",
            },
            sku: "",
            barcode: "",
            productId: "644500c2839a5e0c2f5c17ca",
            title: {
              en: "Radicchio",
            },
            category: {
              _id: {
                $oid: "632aca374d87ff2494210bf0",
              },
              name: {
                en: "Fresh Vegetable",
              },
            },
            stock: 80,
            isCombination: false,
            __v: 0,
            createdAt: {
              $date: "2023-04-23T09:56:18.442Z",
            },
            updatedAt: {
              $date: "2023-04-23T09:57:17.165Z",
            },
            quantity: 3,
          },
          {
            prices: {
              discount: 0,
              originalPrice: 134.63,
              price: 134.63,
            },
            image: ["https://i.postimg.cc/wvzZWXpt/Parsley-each.jpgg"],
            tag: ['["fresh fruits","fruits","vegetable"]'],
            status: "show",
            _id: {
              $oid: "644500c2839a5e0c2f5c17c9",
            },
            sku: "",
            barcode: "",
            productId: "",
            title: {
              en: "Parsley",
            },
            category: {
              _id: {
                $oid: "632aca374d87ff2494210bf0",
              },
              name: {
                en: "Fresh Vegetable",
              },
            },
            stock: 171,
            isCombination: false,
            __v: 0,
            createdAt: {
              $date: "2023-04-23T09:56:18.442Z",
            },
            updatedAt: {
              $date: "2023-11-06T16:14:05.285Z",
            },
            quantity: 2,
          },
          {
            prices: {
              discount: 16.94999999999999,
              originalPrice: 156.95,
              price: 140,
            },
            image: ["https://i.postimg.cc/NFXkHVKZ/Strawberries-9-25oz.jpg"],
            tag: ['["fresh fruits","fruits","vegetable"]'],
            status: "show",
            _id: {
              $oid: "644500c2839a5e0c2f5c17c8",
            },
            sku: "",
            barcode: "",
            productId: "63f3484bd3639309840c961a",
            title: {
              en: "Strawberrie",
            },
            category: {
              _id: {
                $oid: "632aca454d87ff2494210c00",
              },
              name: {
                en: "Fresh Fruits",
              },
            },
            stock: 422,
            isCombination: false,
            __v: 0,
            createdAt: {
              $date: "2023-04-23T09:56:18.442Z",
            },
            updatedAt: {
              $date: "2023-11-05T11:02:14.364Z",
            },
            quantity: 5,
          },
          {
            prices: {
              discount: 0,
              originalPrice: 157,
              price: 157,
            },
            image: ["https://i.postimg.cc/N0C2D4TD/Aloe-Vera-Leaf-each.jpg"],
            tag: ['["fresh fruits","fruits","vegetable"]'],
            status: "show",
            _id: {
              $oid: "644500c2839a5e0c2f5c17c2",
            },
            sku: "",
            barcode: "",
            productId: "",
            title: {
              en: "Aloe Vera Leaf",
            },
            category: {
              _id: {
                $oid: "632aca374d87ff2494210bf0",
              },
              name: {
                en: "Fresh Vegetable",
              },
            },
            stock: 14,
            isCombination: false,
            __v: 0,
            createdAt: {
              $date: "2023-04-23T09:56:18.442Z",
            },
            updatedAt: {
              $date: "2023-04-23T09:56:18.442Z",
            },
            quantity: 3,
          },
          {
            prices: {
              discount: 0,
              originalPrice: 71.18,
              price: 71.18,
            },
            image: ["https://i.postimg.cc/cJL8fjK6/Ahold-Acorn-Squash-1ct.jpg"],
            tag: ['["fresh fruits","fruits","vegetable"]'],
            status: "show",
            _id: {
              $oid: "644500c2839a5e0c2f5c17c5",
            },
            sku: "",
            barcode: "",
            productId: "",
            title: {
              en: "Ahold Acorn Squash",
            },
            category: {
              _id: {
                $oid: "632aca374d87ff2494210bf0",
              },
              name: {
                en: "Fresh Vegetable",
              },
            },
            stock: 767,
            isCombination: false,
            __v: 0,
            createdAt: {
              $date: "2023-04-23T09:56:18.442Z",
            },
            updatedAt: {
              $date: "2023-04-23T09:56:18.442Z",
            },
            quantity: 1,
          },
          {
            prices: {
              discount: 0,
              originalPrice: 98.03,
              price: 98.03,
            },
            image: [
              "https://i.postimg.cc/bvrsZtMt/Calabaza-Squash-Package-each.jpg",
              "https://i.postimg.cc/bvrsZtMt/Calabaza-Squash-Package-each.jpg",
              "https://i.postimg.cc/bvrsZtMt/Calabaza-Squash-Package-each.jpg",
            ],
            tag: ['["fresh fruits","fruits","vegetable"]'],
            status: "show",
            _id: {
              $oid: "644500c2839a5e0c2f5c17cc",
            },
            sku: "",
            barcode: "",
            productId: "",
            title: {
              en: "Calabaza Squash",
            },
            category: {
              _id: {
                $oid: "632aca374d87ff2494210bf0",
              },
              name: {
                en: "Fresh Vegetable",
              },
            },
            stock: 581,
            isCombination: false,
            __v: 0,
            createdAt: {
              $date: "2023-04-23T09:56:18.442Z",
            },
            updatedAt: {
              $date: "2023-11-06T16:13:25.041Z",
            },
            quantity: 1,
          },
        ],
        id: "2l0h",
        date: {
          $date: "2023-11-23T15:47:49.211Z",
        },
        __v: 0,
      });

      await order.save();
      console.log(`Order ${i + 1} created successfully`);
    }

    console.log("10 orders seeded into the database.");
  } catch (err) {
    console.error("Error connecting to the database:", err);
  } finally {
    mongoose.connection.close();
  }
}

seedData();
