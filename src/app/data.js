
import productImage from '../asstes/images/productImage.jpg'
import productImage1 from '../asstes/images/productImage1.jpg'
import productImage2 from '../asstes/images/productImage2.jpg'
import productImage3 from '../asstes/images/productImage3.jpg'
import productImage4 from '../asstes/images/productImage4.jpg'
import productImage5 from '../asstes/images/productImage5.jpg'
import productImage6 from '../asstes/images/productImage6.jpg'
import productImage7 from '../asstes/images/productImage7.jpg'
import brand from "../asstes/images/brand.png";

export const categories = [
  {
    name: "Man",
    showChild: false,
    children: [
      {
        name: "Sweetshirt",
      },
      {
        name: "Jackets",
      },
      {
        name: "All Clothings",
      },
    ],
  },
  {
    name: "Outdoor",
    showChild: false,
    children: [
      {
        name: "Sweetshirt",
      },
      {
        name: "Jackets",
      },
      {
        name: "All Clothings",
      },
    ],
  },
  {
    name: "Daily Fashion",
    showChild: false,
    children: [],
  },
  {
    name: "Sprot",
    showChild: false,
    children: [],
  },
  {
    name: "Outlet",
    showChild: false,
    children: [],
  },
]

export const products = [
  {
    id: 1,
    image:  productImage,
    brand: "Zara",
    title: "Man sweatshirt",
    description:
      "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
    variant: {
      size: ["S", "M", "L", "XL", "XXL"],
      color: ["black", "white", "red", "grey"],
    },
    price: 1200,
    availability: true,
    stock: 10,
    rating: 4.5,
    reviews: [
      {
        name: "Jane Doe",
        body: "Great Man sweatshirt!",
        rating: 5,
      },
      {
        name: "Jane Doe",
        body: "Great Man sweatshirt!",
        rating: 5,
      },
      {
        name: "Jane Doe",
        body: "Great Man sweatshirt!",
        rating: 5,
      },
    ],
    favorite: false,
  },
  {
    id: 2,
    image:  productImage1,
    brand: "Zara",
    title: "Man sweatshirt",
    description:
      "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
    variant: {
      size: ["S", "M", "L", "XL", "XXL"],
      color: ["black", "white", "red", "grey"],
    },
    price: 1200,
    availability: true,
    stock: 15,
    rating: 4.2,
    reviews: [
      {
        name: "Jane Doe",
        body: "Great Man sweatshirt!",
        rating: 4,
      },
    ],
    favorite: false,
  },
  {
    id: 3,
    image:  productImage2,
    brand: "Zara",
    title: "Man sweatshirt",
    description:
      "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
    variant: {
      size: ["S", "M", "L", "XL", "XXL"],
      color: ["black", "white", "red", "grey"],
    },
    price: 1200,
    availability: true,
    stock: 12,
    rating: 4.8,
    reviews: [
      {
        name: "John Smith",
        body: "Excellent Man sweatshirt!",
        rating: 4.5,
      },
    ],
    favorite: false,
  },
  {
    id: 4,
    image:  productImage3,
    brand: "Zara",
    title: "Man sweatshirt",
    description:
      "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
    variant: {
      size: ["S", "M", "L", "XL", "XXL"],
      color: ["black", "white", "red", "grey"],
    },
    price: 1200,
    availability: true,
    stock: 8,
    rating: 4.7,
    reviews: [
      {
        name: "Megan Brown",
        body: "Fast and smooth!",
        rating: 4.5,
      },
    ],
    favorite: true,
  },
  {
    id: 5,
    image:  productImage4,
    brand: "Zara",
    title: "Man sweatshirt",
    description:
      "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
    variant: {
      size: ["S", "M", "L", "XL", "XXL"],
      color: ["black", "white", "red", "grey"],
    },
    price: 1200,
    availability: true,
    stock: 20,
    rating: 4.3,
    reviews: [
      {
        name: "Chris Green",
        body: "Affordable flagship!",
        rating: 4,
      },
    ],
    favorite: true,
  },
  {
    id: 6,
    image:  productImage5,
    brand: "Zara",
    title: "Man sweatshirt",
    description:
      "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
    variant: {
      size: ["S", "M", "L", "XL", "XXL"],
      color: ["black", "white", "red", "grey"],
    },
    price: 1200,
    availability: true,
    stock: 5,
    rating: 4.6,
    reviews: [
      {
        name: "Emily White",
        body: "Amazing camera quality!",
        rating: 5,
      },
    ],
    favorite: false,
  },
  {
    id: 7,
    image:  productImage6,
    brand: "Zara",
    title: "Man sweatshirt",
    description:
      "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
    variant: {
      size: ["S", "M", "L", "XL", "XXL"],
      color: ["black", "white", "red", "grey"],
    },
    price: 1200,
    availability: true,
    stock: 18,
    rating: 4.4,
    reviews: [
      {
        name: "Alex Johnson",
        body: "Great display!",
        rating: 4.5,
      },
    ],
    favorite: false,
  },
  {
    id: 8,
    image:  productImage7,
    brand: "Zara",
    title: "Man sweatshirt",
    description:
      "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
    variant: {
      size: ["S", "M", "L", "XL", "XXL"],
      color: ["black", "white", "red", "grey"],
    },
    price: 1200,
    availability: true,
    stock: 18,
    rating: 4.4,
    reviews: [
      {
        name: "Alex Johnson",
        body: "Great display!",
        rating: 4.5,
      },
    ],
    favorite: false,
  },
];


export const brnads = [
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
  {
    name: "Samsung",
    img: brand,
  },
];

export const importantLinks = [
  "About Us",
  "Return and Shipping",
  "privacy policy",
];

export const orders =[
  {
    "id": 6,
    "image": {
      "src": "/_next/static/media/productImage5.506237e0.jpg",
      "height": 912,
      "width": 800,
      "blurDataURL": "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FproductImage5.506237e0.jpg&w=7&q=70",
      "blurWidth": 7,
      "blurHeight": 8
    },
    "brand": "Zara",
    "title": "Huawei P50 Pro",
    "description": "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
    "variant": {
      "size": [
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      "color": [
        "black",
        "white",
        "red",
        "grey"
      ]
    },
    "price": 1200,
    "availability": true,
    "stock": 5,
    "rating": 4.6,
    "reviews": [
      {
        "name": "Emily White",
        "body": "Amazing camera quality!",
        "rating": 5
      }
    ],
    "favorite": false
  },
  {
    "id": 2,
    "image": {
      "src": "/_next/static/media/productImage1.40e36f2f.jpg",
      "height": 912,
      "width": 800,
      "blurDataURL": "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FproductImage1.40e36f2f.jpg&w=7&q=70",
      "blurWidth": 7,
      "blurHeight": 8
    },
    "brand": "Zara",
    "title": "Samsung Galaxy S21",
    "description": "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
    "variant": {
      "size": [
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      "color": [
        "black",
        "white",
        "red",
        "grey"
      ]
    },
    "price": 1200,
    "availability": true,
    "stock": 15,
    "rating": 4.2,
    "reviews": [
      {
        "name": "Jane Doe",
        "body": "Great phone!",
        "rating": 4
      }
    ],
    "favorite": false
  },
  {
    "id": 3,
    "image": {
      "src": "/_next/static/media/productImage2.af6a4466.jpg",
      "height": 684,
      "width": 600,
      "blurDataURL": "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FproductImage2.af6a4466.jpg&w=7&q=70",
      "blurWidth": 7,
      "blurHeight": 8
    },
    "brand": "Zara",
    "title": "Google Pixel 6",
    "description": "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
    "variant": {
      "size": [
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      "color": [
        "black",
        "white",
        "red",
        "grey"
      ]
    },
    "price": 1200,
    "availability": true,
    "stock": 12,
    "rating": 4.8,
    "reviews": [
      {
        "name": "John Smith",
        "body": "Excellent camera!",
        "rating": 4.5
      }
    ],
    "favorite": false
  },
  {
    "id": 1,
    "image": {
      "src": "/_next/static/media/productImage.2b3398cd.jpg",
      "height": 912,
      "width": 800,
      "blurDataURL": "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FproductImage.2b3398cd.jpg&w=7&q=70",
      "blurWidth": 7,
      "blurHeight": 8
    },
    "brand": "Zara",
    "title": "Iphone 14 pro max",
    "description": "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
    "variant": {
      "size": [
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      "color": [
        "black",
        "white",
        "red",
        "grey"
      ]
    },
    "price": 1200,
    "availability": true,
    "stock": 10,
    "rating": 4.5,
    "reviews": [
      {
        "name": "Jane Doe",
        "body": "Great phone!",
        "rating": 5
      },
      {
        "name": "Jane Doe",
        "body": "Great phone!",
        "rating": 5
      },
      {
        "name": "Jane Doe",
        "body": "Great phone!",
        "rating": 5
      }
    ],
    "favorite": false
  },
  {
    "id": 4,
    "image": {
      "src": "/_next/static/media/productImage3.11632651.jpg",
      "height": 912,
      "width": 800,
      "blurDataURL": "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FproductImage3.11632651.jpg&w=7&q=70",
      "blurWidth": 7,
      "blurHeight": 8
    },
    "brand": "Zara",
    "title": "OnePlus 9",
    "description": "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
    "variant": {
      "size": [
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      "color": [
        "black",
        "white",
        "red",
        "grey"
      ]
    },
    "price": 1200,
    "availability": true,
    "stock": 8,
    "rating": 4.7,
    "reviews": [
      {
        "name": "Megan Brown",
        "body": "Fast and smooth!",
        "rating": 4.5
      }
    ],
    "favorite": true
  },
  {
    "id": 5,
    "image": {
      "src": "/_next/static/media/productImage4.85ba3644.jpg",
      "height": 608,
      "width": 533,
      "blurDataURL": "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FproductImage4.85ba3644.jpg&w=7&q=70",
      "blurWidth": 7,
      "blurHeight": 8
    },
    "brand": "Zara",
    "title": "Xiaomi Mi 11",
    "description": "Qui mollit culpa consequat excepteur eu quis anim anim elit ullamco nostrud qui Lorem esse. Reprehenderit labore veniam nisi culpa nostrud. Occaecat cupidatat voluptate adipisicing eiusmod velit qui pariatur. Velit in qui amet dolor proident excepteur eiusmod tempor laborum do.",
    "variant": {
      "size": [
        "S",
        "M",
        "L",
        "XL",
        "XXL"
      ],
      "color": [
        "black",
        "white",
        "red",
        "grey"
      ]
    },
    "price": 1200,
    "availability": true,
    "stock": 20,
    "rating": 4.3,
    "reviews": [
      {
        "name": "Chris Green",
        "body": "Affordable flagship!",
        "rating": 4
      }
    ],
    "favorite": true
  }
]