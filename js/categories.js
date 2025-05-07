const CATEGORIES = [
 {
    id: 1,
    name: "Apparel",
    slug: "apparel",
    description: "Premium clothing for all your fashion needs",
    imageUrl: "https://images.unsplash.com/photo-1561052967-61fc91e48d79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: true,
    parent_id: null,
    active: true,
    display_order: 10,
    productIds: [
      1,
      2,
      3,
      4,
      5,
      6
    ],
    created_at: "2025-01-01T00:00:00Z",
    updated_at: "2025-05-07T08:02:04.497Z"
 },
 {
    id: 2,
    name: "Tops",
    slug: "tops",
    description: "Selection of premium shirts and blouses",
    imageUrl: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: true,
    parent_id: 1,
    active: true,
    display_order: 20,
    productIds: [
      1,
      2,
      5
    ],
    created_at: "2025-01-01T00:00:00Z",
    updated_at: "2025-05-07T08:02:04.497Z"
 },
 {
    id: 3,
    name: "Premium T-Shirts",
    slug: "premium-tshirts",
    description: "Our highest quality cotton t-shirts",
    imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: true,
    parent_id: 2,
    active: true,
    display_order: 30,
    productIds: [
      1,
      2
    ],
    created_at: "2025-01-01T00:00:00Z",
    updated_at: "2025-01-01T00:00:00Z"
 },
 {
    id: 4,
    name: "Casual Bottoms",
    slug: "casual-bottoms",
    description: "Great quality jeans and pants at affordable prices",
    imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: false,
    parent_id: 2,
    active: true,
    display_order: 40,
    productIds: [
      5
    ],
    created_at: "2025-01-01T00:00:00Z",
    updated_at: "2025-04-01T16:20:00Z"
 },
 {
    id: 5,
    name: "Outerwear",
    slug: "outerwear",
    description: "Stylish, warm coats and jackets for all seasons",
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: false,
    parent_id: 1,
    active: true,
    display_order: 50,
    productIds: [
      3
    ],
    created_at: "2025-01-05T13:45:00Z",
    updated_at: "2025-01-05T13:45:00Z"
 },
 {
    id: 6,
    name: "Accessories",
    slug: "accessories",
    description: "Premium socks, hats, scarves and more to complete your look",
    imageUrl: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    featured: false,
    parent_id: 1,
    active: true,
    display_order: 60,
    productIds: [
      6
    ],
    created_at: "2025-01-01T00:00:00Z",
    updated_at: "2025-03-01T00:00:00Z"
 },
 {
    id: 7,
    name: "testMobile Duis maiores repelle",
    slug: "Consequatur qui sunt",
    description: "Incididunt quia pari",
    imageUrl: "Aut obcaecati adipis",
    featured: false,
    parent_id: "3",
    active: false,
    display_order: "44",
    productIds: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    created_at: "2025-05-07T10:56:25.499Z",
    updated_at: "2025-05-07T10:56:25.499Z"
 },
 {
    id: 8,
    name: "test 2",
    slug: "Ipsa eaque necessit",
    description: "Ut ut maiores tempor",
    imageUrl: "Temporibus anim inci",
    featured: false,
    parent_id: "1",
    active: false,
    display_order: "79",
    productIds: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    created_at: "2025-05-07T11:03:01.789Z",
    updated_at: "2025-05-07T11:03:01.789Z"
 },
 {
    id: 9,
    name: "test 3",
    slug: "Eum dolor fugiat qu",
    description: "Cum dolor dolor aute",
    imageUrl: "Nisi facilis totam c",
    featured: true,
    parent_id: "1",
    active: false,
    display_order: "69",
    productIds: [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8
    ],
    created_at: "2025-05-07T11:03:26.461Z",
    updated_at: "2025-05-07T11:03:26.461Z"
 },
 {
    id: 11,
    name: "test 4",
    slug: "new-category-11",
    description: "asdf",
    imageUrl: "",
    featured: false,
    parent_id: null,
    active: true,
    display_order: 100,
    productIds: [],
    created_at: "2025-05-07T11:04:13.405Z",
    updated_at: "2025-05-07T11:04:13.405Z"
 }
];