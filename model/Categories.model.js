const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  name: {
    en: {
      type: String,
    },
  },
  parentId: {
    type: String,
  },
  parentName: {
    type: String,
  },
  description: {
    en: {
      type: String,
    },
  },
  icon: {
    type: String,
  },
  status: {
    type: String,
    enum: ["show", "hidden"],
    default: "show",
  },
  children: [
    {
      _id: {
        type: String,
        required: true,
      },
      name: {
        en: {
          type: String,
        },
      },
      parentId: {
        type: String,
      },
      parentName: {
        type: String,
      },
      description: {
        en: {
          type: String,
        },
      },
      icon: {
        type: String,
      },
      status: {
        type: String,
        enum: ["show", "hidden"],
        default: "show",
      },
      children: [
        {
          _id: {
            type: String,
            required: true,
          },
          name: {
            en: {
              type: String,
            },
          },
          parentId: {
            type: String,
          },
          parentName: {
            type: String,
          },
          description: {
            en: {
              type: String,
            },
          },
          icon: {
            type: String,
          },
          status: {
            type: String,
            enum: ["show", "hidden"],
            default: "show",
          },
          children: [],
        },
      ],
    },
  ],
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
