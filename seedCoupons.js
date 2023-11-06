const mongoose = require("mongoose");
const Coupon = require("./model/Coupon.model");

const response = [
  {
    status: "show",
    _id: "6546bc6a81b0810008933ebf",
    title: { tr: "deneme", bn: "চেষ্টা করবে না", de: "Versuche", en: "trial" },
    couponCode: "free",
    endTime: "2023-12-05T22:00:00.000Z",
    minimumAmount: 100,
    logo: "",
    discountType: { type: "percentage", value: 99 },
    createdAt: "2023-11-04T21:49:30.363Z",
    updatedAt: "2023-11-04T21:49:30.363Z",
    __v: 0,
  },
  {
    status: "show",
    _id: "643970d0e58a401b6c62c756",
    title: {
      en: "Summer Gift Voucher",
      de: "sommer geschenkgutschein",
      hy: "ամառային նվեր - վաուչեր",
      af: "somer geskenkbewys",
      cs: "letní dárkový poukaz",
      bn: "গ্রীষ্মের উপহার ভাউচার",
      az: "yay hədiyyə vauçeri",
      ln: "sanza ya Zomi na Mibale",
    },
    couponCode: "SUMMER23",
    endTime: "2023-10-18T20:38:00.000Z",
    minimumAmount: 500,
    productType: "Grocery",
    logo: "https://i.ibb.co/23kQcB9/ins3.jpg",
    discountType: { type: "percentage", value: 10 },
    __v: 0,
    createdAt: "2023-10-26T05:19:35.484Z",
    updatedAt: "2023-10-26T05:19:35.484Z",
  },
  {
    status: "show",
    _id: "643970d0e58a401b6c62c755",
    title: {
      en: "winter gift voucher",
      de: "wintergeschenkgutschein",
      az: "qış hədiyyə vauçeri",
      ln: "zima Mpho Mpho Mpho",
      ar: "قسيمة هدايا الشتاء",
      pt: "voucher de presente de inverno",
      bn: "শীতকালীন উপহার ভাউচার",
    },
    couponCode: "WINTER23",
    endTime: "2024-05-31T14:19:00.000Z",
    minimumAmount: 1500,
    productType: "Grocery",
    logo: "https://i.ibb.co/wBBYm7j/ins4.jpg",
    discountType: { type: "fixed", value: 100 },
    __v: 0,
    createdAt: "2023-10-26T05:19:35.484Z",
    updatedAt: "2023-11-03T05:42:32.157Z",
  },
  {
    status: "show",
    _id: "643970d0e58a401b6c62c754",
    title: { en: "Summer Gift Voucher", de: "sommer geschenkgutschein" },
    couponCode: "SUMMER21",
    endTime: "2023-12-20T00:56:00.000Z",
    minimumAmount: 1000,
    productType: "Cloths",
    logo: "https://i.ibb.co/4thS4Z1/ins2.jpg",
    discountType: { type: "percentage", value: 10 },
    __v: 0,
    createdAt: "2023-10-26T05:19:35.484Z",
    updatedAt: "2023-10-26T05:19:35.484Z",
  },
  {
    status: "show",
    _id: "643970d0e58a401b6c62c753",
    title: {
      en: "August Gift Voucher",
      de: "august geschenkgutschein",
      hy: "օգոստոսյան նվեր վաուչեր",
      af: "augustus geskenkbewys",
      cs: "augustový dárkový poukaz",
      az: "avqust hədiyyə vauçeri",
      ln: "sánzá ya zómi na mɔ̌kɔ́",
      ar: "قسيمة هدايا أغسطس",
      pt: "voucher presente agosto",
    },
    couponCode: "AUGUST21",
    endTime: "2023-10-31T08:30:00.000Z",
    minimumAmount: 2000,
    productType: "Grocery",
    logo: "https://i.ibb.co/PDLPDHc/ins1.jpg",
    discountType: { type: "percentage", value: 50 },
    __v: 0,
    createdAt: "2023-10-26T05:19:35.484Z",
    updatedAt: "2023-10-26T05:19:35.484Z",
  },
];
async function seedData() {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:admin@supershop.3msu4cx.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    // Check if the connection is successful
    if (mongoose.connection.readyState !== 1) {
      console.error("Failed to connect to the database");
      return;
    }

    for (const productData of response) {
      // Create and save a new Coupon document using Mongoose
      const coupon = new Coupon(productData);
      await coupon.save();
    }

    console.log(`${response.length} coupons seeded into the database.`);
  } catch (err) {
    console.error("Error connecting to the database:", err);
  } finally {
    mongoose.connection.close();
  }
}

seedData();
