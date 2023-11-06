const mongoose = require("mongoose");
const Category = require("./model/Categories.model"); // Replace with the actual path to your model

mongoose.connect(
  "mongodb+srv://admin:admin@supershop.3msu4cx.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const categoriesData = [
  {
    _id: "632aca6d4d87ff2494210c24",
    name: {
      en: "Fish & Meat",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    description: {
      en: "Fish & Meat",
    },
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1658340705/category%20icon/carp-fish_paxzrt.png",
    status: "show",
    children: [
      {
        _id: "632aca7e4d87ff2494210c34",
        name: {
          en: "Fish",
        },
        parentId: "632aca6d4d87ff2494210c24",
        parentName: "Fish & Meats",
        description: {
          en: "Fish",
        },
        icon: "",
        status: "show",
        children: [
          {
            _id: "632aca9b4d87ff2494210c4f",
            name: {
              en: "Rui",
            },
            parentId: "632aca7e4d87ff2494210c34",
            parentName: "Fish",
            description: {
              en: "Rui",
            },
            icon: "",
            status: "show",
            children: [],
          },
          {
            _id: "632aca944d87ff2494210c47",
            name: {
              en: "Tuna",
            },
            parentId: "632aca7e4d87ff2494210c34",
            parentName: "Fish",
            description: {
              en: "Tuna",
            },
            icon: "",
            status: "show",
            children: [],
          },
        ],
      },
      {
        _id: "632aca754d87ff2494210c2c",
        name: {
          en: "Meat",
        },
        parentId: "632aca6d4d87ff2494210c24",
        parentName: "Fish & Meats",
        description: {
          en: "Meat",
        },
        icon: "",
        status: "show",
        children: [
          {
            _id: "632aca864d87ff2494210c3c",
            name: {
              en: "Beef",
            },
            parentId: "632aca754d87ff2494210c2c",
            parentName: "Meat",
            description: {
              en: "Beef",
            },
            icon: "",
            status: "show",
            children: [],
          },
        ],
      },
    ],
  },
  {
    _id: "632aca2b4d87ff2494210be8",
    name: {
      en: "Fruits & Vegetable",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    description: {
      en: "Fruits & Vegetable",
    },
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1658340704/category%20icon/cabbage_n59uv3.png",
    status: "show",
    children: [
      {
        _id: "63f12afdcc480f0454f475dd",
        name: {
          en: "Baby Food",
        },
        parentId: "632aca2b4d87ff2494210be8",
        parentName: "Fruits & Vegetable",
        description: {
          en: "Baby Food",
        },
        icon: "",
        status: "show",
        children: [],
      },
      {
        _id: "632aca454d87ff2494210c00",
        name: {
          en: "Fresh Fruits",
        },
        parentId: "632aca2b4d87ff2494210be8",
        parentName: "Fruits & Vegetables",
        description: {
          en: "Fresh Fruits",
        },
        icon: "",
        status: "show",
        children: [
          {
            _id: "632aca594d87ff2494210c10",
            name: {
              en: "Orange",
            },
            parentId: "632aca454d87ff2494210c00",
            parentName: "Fresh Fruits",
            description: {
              en: "Orange",
            },
            icon: "",
            status: "show",
            children: [],
          },
          {
            _id: "632aca524d87ff2494210c08",
            name: {
              en: "Apple",
            },
            parentId: "632aca454d87ff2494210c00",
            parentName: "Fresh Fruits",
            description: {
              en: "Apple",
            },
            icon: "",
            status: "show",
            children: [],
          },
        ],
      },
      {
        _id: "632aca3d4d87ff2494210bf8",
        name: {
          en: "Dry Fruits",
        },
        parentId: "632aca2b4d87ff2494210be8",
        parentName: "Fruits & Vegetables",
        description: {
          en: "Dry Fruits",
        },
        icon: "",
        status: "show",
        children: [],
      },
      {
        _id: "632aca374d87ff2494210bf0",
        name: {
          en: "Fresh Vegetable",
        },
        parentId: "632aca2b4d87ff2494210be8",
        parentName: "Fruits & Vegetables",
        description: {
          en: "Fresh Vegetable",
        },
        icon: "",
        status: "show",
        children: [],
      },
    ],
  },
  {
    _id: "632aca0b4d87ff2494210bc4",
    name: {
      en: "Cooking Essentials",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    description: {
      en: "Cooking Essentials",
    },
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1658340704/category%20icon/frying-pan_vglm5c.png",
    status: "show",
    children: [
      {
        _id: "632aca184d87ff2494210bd4",
        name: {
          en: "Flour",
        },
        parentId: "632aca0b4d87ff2494210bc4",
        parentName: "Cooking Essential",
        description: {
          en: "Flour",
        },
        icon: "",
        status: "show",
        children: [],
      },
      {
        _id: "632aca144d87ff2494210bcc",
        name: {
          en: "Oil",
        },
        parentId: "632aca0b4d87ff2494210bc4",
        parentName: "Cooking Essential",
        description: {
          en: "Oil",
        },
        icon: "",
        status: "show",
        children: [],
      },
    ],
  },
  {
    _id: "632ac9e94d87ff2494210ba0",
    name: {
      en: "Biscuits & Cakes",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    description: {
      en: "Biscuits & Cakes",
    },
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1658340705/category%20icon/cookie_1_ugipqa.png",
    status: "show",
    children: [
      {
        _id: "632ac9f64d87ff2494210bb0",
        name: {
          en: "Biscuits",
        },
        parentId: "632ac9e94d87ff2494210ba0",
        parentName: "Biscuits & Cake",
        description: {
          en: "Biscuits",
        },
        icon: "",
        status: "show",
        children: [],
      },
      {
        _id: "632ac9ef4d87ff2494210ba8",
        name: {
          en: "Cakes",
        },
        parentId: "632ac9e94d87ff2494210ba0",
        parentName: "Biscuits & Cake",
        description: {
          en: "Cakes",
        },
        icon: "",
        status: "show",
        children: [],
      },
    ],
  },
  {
    _id: "632ac9864d87ff2494210b49",
    name: {
      en: "Household Tools",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    description: {
      en: "Household Tools",
    },
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1658340706/category%20icon/spray_pebsjt.png",
    status: "show",
    children: [
      {
        _id: "632ac9c24d87ff2494210b84",
        name: {
          en: "Water Filter",
        },
        parentId: "632ac9864d87ff2494210b49",
        parentName: "Household Tool",
        description: {
          en: "Water Filter",
        },
        icon: "",
        status: "show",
        children: [],
      },
      {
        _id: "632ac9ba4d87ff2494210b7c",
        name: {
          en: "Cleaning Tools",
        },
        parentId: "632ac9864d87ff2494210b49",
        parentName: "Household Tool",
        description: {
          en: "Cleaning Tools",
        },
        icon: "",
        status: "show",
        children: [],
      },
      {
        _id: "632ac9b24d87ff2494210b74",
        name: {
          en: "Pest Control",
        },
        parentId: "632ac9864d87ff2494210b49",
        parentName: "Household Tool",
        description: {
          en: "Pest Control",
        },
        icon: "",
        status: "show",
        children: [],
      },
      {
        _id: "632ac99d4d87ff2494210b64",
        name: {
          en: "Air Freshener",
        },
        parentId: "632ac9864d87ff2494210b49",
        parentName: "Household Tool",
        description: {
          en: "Air Freshener",
        },
        icon: "",
        status: "show",
        children: [],
      },
      {
        _id: "632ac9984d87ff2494210b5c",
        name: {
          en: "Luandry",
        },
        parentId: "632ac9864d87ff2494210b49",
        parentName: "Household Tool",
        description: {
          en: "Luandry",
        },
        icon: "",
        status: "show",
        children: [],
      },
      {
        _id: "632ac9934d87ff2494210b54",
        name: {
          en: "Cleaner",
        },
        parentId: "632ac9864d87ff2494210b49",
        parentName: "Household Tool",
        description: {
          en: "Cleaner",
        },
        icon: "",
        status: "show",
        children: [],
      },
    ],
  },
  {
    _id: "632ab4434d87ff2494210b0e",
    name: {
      en: "Pet Care",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    description: {
      en: "Pet Care",
    },
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1658340707/category%20icon/cat_tznwmq.png",
    status: "show",
    children: [
      {
        _id: "632ab45b4d87ff2494210b21",
        name: {
          en: "Dog Care",
        },
        parentId: "632ab4434d87ff2494210b0e",
        parentName: "Pet Cares",
        description: {
          en: "Dog Care",
        },
        icon: "",
        status: "show",
        children: [],
      },
      {
        _id: "632ab4524d87ff2494210b19",
        name: {
          en: "Cat Care",
        },
        parentId: "632ab4434d87ff2494210b0e",
        parentName: "Pet Cares",
        description: {
          en: "Cat Care",
        },
        icon: "",
        status: "show",
        children: [],
      },
    ],
  },
  {
    _id: "632ab2864d87ff2494210a8a",
    name: {
      en: "Beauty & Healths",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    description: {
      en: "Beauty & Healths",
    },
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1658340706/category%20icon/beauty_vfbmzc.png",
    status: "show",
    children: [
      {
        _id: "632ab2c34d87ff2494210ab2",
        name: {
          en: "Women",
        },
        parentId: "632ab2864d87ff2494210a8a",
        parentName: "Beauty & Healths",
        description: {
          en: "Women",
        },
        icon: "",
        status: "show",
        children: [
          {
            _id: "632ab3044d87ff2494210ae8",
            name: {
              en: "Bath",
            },
            parentId: "632ab2c34d87ff2494210ab2",
            parentName: "Women",
            description: {
              en: "Bath",
            },
            icon: "",
            status: "show",
            children: [],
          },
          {
            _id: "632ab2fd4d87ff2494210ae0",
            name: {
              en: "Cosmetics",
            },
            parentId: "632ab2c34d87ff2494210ab2",
            parentName: "Women",
            description: {
              en: "Cosmetics",
            },
            icon: "",
            status: "show",
            children: [],
          },
          {
            _id: "632ab2f84d87ff2494210ad8",
            name: {
              en: "Oral Care",
            },
            parentId: "632ab2c34d87ff2494210ab2",
            parentName: "Women",
            description: {
              en: "Oral Care",
            },
            icon: "",
            status: "show",
            children: [],
          },
          {
            _id: "632ab2f04d87ff2494210ad0",
            name: {
              en: "Skin Care",
            },
            parentId: "632ab2c34d87ff2494210ab2",
            parentName: "Women",
            description: {
              en: "Skin Care",
            },
            icon: "",
            status: "show",
            children: [],
          },
        ],
      },
      {
        _id: "632ab2b64d87ff2494210aa7",
        name: {
          en: "Men",
        },
        parentId: "632ab2864d87ff2494210a8a",
        parentName: "Beauty & Healths",
        description: {
          en: "Men",
        },
        icon: "",
        status: "show",
        children: [
          {
            _id: "632ab2df4d87ff2494210ac8",
            name: {
              en: "Body Care",
            },
            parentId: "632ab2b64d87ff2494210aa7",
            parentName: "Men",
            description: {
              en: "Body Care",
            },
            icon: "",
            status: "show",
            children: [],
          },
          {
            _id: "632ab2d54d87ff2494210ac0",
            name: {
              en: "Shaving Needs",
            },
            parentId: "632ab2b64d87ff2494210aa7",
            parentName: "Men",
            description: {
              en: "Shaving Needs",
            },
            icon: "",
            status: "show",
            children: [],
          },
        ],
      },
    ],
  },
  {
    _id: "632ab1e04d87ff2494210a6a",
    name: {
      en: "Jam & Jelly",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    description: {
      en: "Jam & Jelly",
    },
    icon: "https://i.postimg.cc/rmLvfsMC/strawberry-jam-1.png",
    status: "show",
    children: [],
  },
  {
    _id: "632ab14a4d87ff2494210a29",
    name: {
      en: "Milk & Dairy",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    description: {
      en: "Milk & Dairy",
    },
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1658340706/category%20icon/milk_dcl0dr.png",
    status: "show",
    children: [
      {
        _id: "632ab16c4d87ff2494210a44",
        name: {
          en: "Butter & Ghee",
        },
        parentId: "632ab14a4d87ff2494210a29",
        parentName: "Milk & Dairys",
        description: {
          en: "Butter & Ghee",
        },
        icon: "",
        status: "show",
        children: [],
      },
      {
        _id: "632ab1644d87ff2494210a3c",
        name: {
          en: "Ice Cream",
        },
        parentId: "632ab14a4d87ff2494210a29",
        parentName: "Milk & Dairys",
        description: {
          en: "Ice Cream",
        },
        icon: "",
        status: "show",
        children: [],
      },
      {
        _id: "632ab1584d87ff2494210a31",
        name: {
          en: "Dairy",
        },
        parentId: "632ab14a4d87ff2494210a29",
        parentName: "Milk & Dairys",
        description: {
          en: "Dairy",
        },
        icon: "",
        status: "show",
        children: [],
      },
    ],
  },
  {
    _id: "632ab0334d87ff24942109c1",
    name: {
      en: "Drinks",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    description: {
      en: "Drinks",
    },
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1658340705/category%20icon/juice_p5gv5k.png",
    status: "show",
    children: [
      {
        _id: "632ab0664d87ff24942109ef",
        name: {
          en: "Tea",
        },
        parentId: "632ab0334d87ff24942109c1",
        parentName: "Drink",
        description: {
          en: "Tea",
        },
        icon: "",
        status: "show",
        children: [],
      },
      {
        _id: "632ab0604d87ff24942109e7",
        name: {
          en: "Water",
        },
        parentId: "632ab0334d87ff24942109c1",
        parentName: "Drink",
        description: {
          en: "Water",
        },
        icon: "",
        status: "show",
        children: [],
      },
      {
        _id: "632ab0564d87ff24942109df",
        name: {
          en: "Juice",
        },
        parentId: "632ab0334d87ff24942109c1",
        parentName: "Drink",
        description: {
          en: "Juice",
        },
        icon: "",
        status: "show",
        children: [],
      },
      {
        _id: "632ab0504d87ff24942109d7",
        name: {
          en: "Coffee",
        },
        parentId: "632ab0334d87ff24942109c1",
        parentName: "Drink",
        description: {
          en: "Coffee",
        },
        icon: "",
        status: "show",
        children: [],
      },
      {
        _id: "632ab0454d87ff24942109cc",
        name: {
          en: "Energy Drinks",
        },
        parentId: "632ab0334d87ff24942109c1",
        parentName: "Drink",
        description: {
          en: "Energy Drinks",
        },
        icon: "",
        status: "show",
        children: [],
      },
    ],
  },
  {
    _id: "632aae414d87ff2494210945",
    name: {
      en: "Breakfast",
    },
    parentId: "62c827b5a427b63741da9175",
    parentName: "Home",
    description: {
      en: "Breakfast",
    },
    icon: "https://res.cloudinary.com/ahossain/image/upload/v1658340705/category%20icon/bagel_mt3fod.png",
    status: "show",
    children: [
      {
        _id: "632aae7b4d87ff2494210967",
        name: {
          en: "Bread",
        },
        parentId: "632aae414d87ff2494210945",
        parentName: "Breakfasts",
        description: {
          en: "Bread",
        },
        icon: "",
        status: "show",
        children: [],
      },
      {
        _id: "632aae624d87ff2494210951",
        name: {
          en: "Cereal",
        },
        parentId: "632aae414d87ff2494210945",
        parentName: "Breakfasts",
        description: {
          en: "Cereal",
        },
        icon: "",
        status: "show",
        children: [],
      },
    ],
  },
];

async function seedCategories() {
  try {
    await Category.deleteMany({}); // Clear the existing data

    const insertedCategories = await Category.insertMany(categoriesData);
    console.log("Categories seeded successfully:", insertedCategories);
  } catch (error) {
    console.error("Error seeding categories:", error);
  } finally {
    mongoose.connection.close();
  }
}

seedCategories();
