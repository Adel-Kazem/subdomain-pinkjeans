// Products
const PRODUCTS = [
    {
        id: 1,
        name: "Premium Cotton T-Shirt",
        description: "Our premium cotton t-shirt is perfectly crafted for exceptional comfort and durability. Ideal for casual wear or layering for a stylish everyday look.",
        base_price: 35.99,
        base_shipping_cost: 5.99,
        free_shipping: false,
        sku: "APRL-TSH-001",
        slug: "premium-cotton-tshirt",
        brand: "Refined Apparel",
        rating: 4.8,
        reviews_count: 48,
        status: "active",
        isFeatured: true,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 12,
        hasVariants: true,
        totalVariantStock: 12,
        lowStockThreshold: 3,
        features: {
            material: "100% organic cotton",
            texture: "Ultra-soft fabric",
            design: "Classic fit with ribbed collar",
            washing: "Pre-shrunk for perfect fit",
            manufacturing: "Ethically produced"
        },
        images: [
            "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1581655353564-df123a1eb820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        options: {
            "size": ["S", "M", "L"]
        },
        option_images: {},
        variant_images: {},
        option_variants_stock: {
            "S": 4,
            "M": 4,
            "L": 4
        },
        option_price_adjustments: {
            "size": {
                "M": 2.00,
                "L": 4.00
            }
        },
        option_shipping_adjustments: {},
        weight: {
            value: 0.3,
            unit: "lb"
        },
        dimensions: {
            length: 10,
            width: 8,
            height: 1,
            unit: "in"
        },
        option_dimension_overrides: {
            "size": {
                "S": {
                    weight: { value: 0.3, unit: "lb" }
                },
                "M": {
                    weight: { value: 0.35, unit: "lb" }
                },
                "L": {
                    weight: { value: 0.4, unit: "lb" }
                }
            }
        },
        categories: [1, 2, 3],
        upselling: [3],
        crossSelling: [5, 6],
        relatedProducts: [2],
        createdAt: "2025-01-01T00:00:00Z",
        updatedAt: "2025-04-01T00:00:00Z"
    },
    {
        id: 2,
        name: "Classic Denim Jeans",
        description: "A versatile wardrobe staple that delivers robust style and comfort. Our denim jeans are hand-selected for consistent quality and perfect fit.",
        base_price: 58.99,
        base_shipping_cost: 5.99,
        free_shipping: false,
        sku: "APRL-JNS-002",
        slug: "classic-denim-jeans",
        brand: "Refined Apparel",
        rating: 4.6,
        reviews_count: 35,
        status: "active",
        isFeatured: true,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 25,
        hasVariants: true,
        totalVariantStock: 25,
        lowStockThreshold: 5,
        features: {
            material: "Premium stretch denim",
            fit: "Classic straight leg",
            aging: "Stone-washed for vintage look",
            design: "Five-pocket styling",
            durability: "Reinforced stitching"
        },
        images: [
            "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        options: {
            "size": ["30", "32", "34"]
        },
        option_images: {},
        variant_images: {},
        option_variants_stock: {
            "30": 8,
            "32": 8,
            "34": 9
        },
        option_price_adjustments: {
            "size": {
                "32": 2.00,
                "34": 4.00
            }
        },
        option_shipping_adjustments: {},
        weight: {
            value: 0.8,
            unit: "lb"
        },
        dimensions: {
            length: 12,
            width: 8,
            height: 2,
            unit: "in"
        },
        option_dimension_overrides: {
            "size": {
                "30": {
                    weight: { value: 0.8, unit: "lb" }
                },
                "32": {
                    weight: { value: 0.9, unit: "lb" }
                },
                "34": {
                    weight: { value: 1.0, unit: "lb" }
                }
            }
        },
        categories: [1, 2, 3],
        upselling: [1, 3],
        crossSelling: [5, 6],
        relatedProducts: [1],
        createdAt: "2025-01-15T00:00:00Z",
        updatedAt: "2025-04-05T00:00:00Z"
    },
    {
        id: 3,
        name: "Cashmere Sweater",
        description: "The most luxurious sweater in our collection, our cashmere sweater is buttery soft with a delicate, lightweight feel. Perfect for special occasions or when only the best will do.",
        base_price: 142.99,
        base_shipping_cost: 5.99,
        free_shipping: false,
        sku: "APRL-SWT-003",
        slug: "cashmere-sweater",
        brand: "Refined Apparel",
        rating: 4.9,
        reviews_count: 62,
        status: "active",
        isFeatured: true,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 18,
        hasVariants: true,
        totalVariantStock: 18,
        lowStockThreshold: 4,
        features: {
            material: "100% pure cashmere",
            texture: "Exceptionally soft",
            design: "Timeless crew neck style",
            care: "Dry clean recommended",
            sustainability: "Ethically sourced cashmere"
        },
        images: [
            "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1580331451032-19b2a16cb309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        options: {
            "size": ["S", "M"]
        },
        option_images: {},
        variant_images: {},
        option_variants_stock: {
            "S": 9,
            "M": 9
        },
        option_price_adjustments: {
            "size": {
                "M": 15.00
            }
        },
        option_shipping_adjustments: {},
        weight: {
            value: 0.5,
            unit: "lb"
        },
        dimensions: {
            length: 12,
            width: 10,
            height: 1,
            unit: "in"
        },
        option_dimension_overrides: {
            "size": {
                "S": {
                    weight: { value: 0.5, unit: "lb" }
                },
                "M": {
                    weight: { value: 0.6, unit: "lb" }
                }
            }
        },
        categories: [1, 5],
        upselling: [],
        crossSelling: [1, 2],
        relatedProducts: [1, 2],
        createdAt: "2025-01-10T00:00:00Z",
        updatedAt: "2025-03-25T00:00:00Z"
    },
    {
        id: 4,
        name: "Wool Peacoat",
        description: "Our carefully selected peacoat has the perfect weight and design for cold weather. The classic silhouette pairs perfectly with both casual and formal attire.",
        base_price: 186.99,
        base_shipping_cost: 12.99,
        free_shipping: false,
        sku: "APRL-COT-004",
        slug: "wool-peacoat",
        brand: "Refined Apparel",
        rating: 4.7,
        reviews_count: 39,
        status: "active",
        isFeatured: false,
        isOnSale: true,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 8,
        hasVariants: true,
        totalVariantStock: 8,
        lowStockThreshold: 3,
        features: {
            material: "80% wool, 20% polyester blend",
            insulation: "Warm without being bulky",
            durability: "Designed to last for years",
            details: "Double-breasted with anchor buttons",
            pockets: "Two exterior pockets, one interior pocket"
        },
        images: [
            "https://images.unsplash.com/photo-1489286696299-aa7486820bd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        options: {
            "size": ["M", "L"]
        },
        option_images: {},
        variant_images: {},
        option_variants_stock: {
            "M": 5,
            "L": 3
        },
        option_price_adjustments: {
            "size": {
                "L": 15.00
            }
        },
        option_shipping_adjustments: {
            "size": {
                "L": 2.00
            }
        },
        weight: {
            value: 3.0,
            unit: "lb"
        },
        dimensions: {
            length: 24,
            width: 18,
            height: 3,
            unit: "in"
        },
        option_dimension_overrides: {
            "size": {
                "M": {
                    weight: { value: 3.0, unit: "lb" }
                },
                "L": {
                    weight: { value: 3.5, unit: "lb" },
                    dimensions: {
                        length: 26,
                        width: 20,
                        height: 3,
                        unit: "in"
                    }
                }
            }
        },
        categories: [1],
        upselling: [5],
        crossSelling: [6],
        relatedProducts: [5],
        createdAt: "2025-01-20T00:00:00Z",
        updatedAt: "2025-04-10T00:00:00Z"
    },
    {
        id: 5,
        name: "Leather Jacket",
        description: "This classic leather jacket is rich in style and perfect for cool weather. The timeless design features quality construction and attention to detail.",
        base_price: 218.99,
        base_shipping_cost: 10.99,
        free_shipping: false,
        sku: "APRL-LTH-005",
        slug: "leather-jacket",
        brand: "Refined Apparel",
        rating: 4.8,
        reviews_count: 42,
        status: "active",
        isFeatured: false,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 15,
        hasVariants: true,
        totalVariantStock: 15,
        lowStockThreshold: 4,
        features: {
            material: "Genuine cowhide leather",
            lining: "Soft polyester lining",
            pockets: "Four exterior pockets, two interior pockets",
            closure: "Heavy-duty YKK zipper",
            durability: "Designed to develop a beautiful patina over time"
        },
        images: [
            "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        options: {
            "style": ["Classic", "Moto"],
            "size": ["S", "M", "L"]
        },
        option_images: {},
        variant_images: {},
        option_variants_stock: {
            "Classic|S": 3,
            "Classic|M": 3,
            "Classic|L": 3,
            "Moto|S": 2,
            "Moto|M": 2,
            "Moto|L": 2
        },
        option_price_adjustments: {
            "style": {
                "Moto": 25.00
            },
            "size": {
                "M": 10.00,
                "L": 20.00
            }
        },
        option_shipping_adjustments: {},
        weight: {
            value: 2.5,
            unit: "lb"
        },
        dimensions: {
            length: 24,
            width: 18,
            height: 3,
            unit: "in"
        },
        option_dimension_overrides: {},
        categories: [1, 2, 4],
        upselling: [1, 2],
        crossSelling: [4, 6],
        relatedProducts: [4],
        createdAt: "2025-01-25T00:00:00Z",
        updatedAt: "2025-03-30T00:00:00Z"
    },
    {
        id: 6,
        name: "Athletic Performance Socks",
        description: "Our athletic socks are designed for comfort and performance. Available in various styles to suit your sporting and everyday needs.",
        base_price: 12.99,
        base_shipping_cost: 3.99,
        free_shipping: false,
        sku: "APRL-SOK-006",
        slug: "athletic-performance-socks",
        brand: "Refined Apparel",
        rating: 4.5,
        reviews_count: 53,
        status: "active",
        isFeatured: false,
        isOnSale: false,
        requiresShipping: true,
        requiresInventoryTracking: true,
        stock: 30,
        hasVariants: true,
        totalVariantStock: 30,
        lowStockThreshold: 6,
        features: {
            material: "Moisture-wicking blend",
            comfort: "Cushioned sole",
            support: "Arch support for reduced fatigue",
            packaging: "Packaged in sets of 3 pairs",
            versatility: "Perfect for running, training, or everyday wear"
        },
        images: [
            "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        ],
        options: {
            "height": ["Ankle", "Crew", "Knee-High"]
        },
        option_images: {},
        variant_images: {},
        option_variants_stock: {
            "Ankle": 10,
            "Crew": 10,
            "Knee-High": 10
        },
        option_price_adjustments: {
            "height": {
                "Crew": 2.00,
                "Knee-High": 4.50
            }
        },
        option_shipping_adjustments: {},
        weight: {
            value: 0.2,
            unit: "lb"
        },
        dimensions: {
            length: 8,
            width: 6,
            height: 2,
            unit: "in"
        },
        option_dimension_overrides: {},
        categories: [1, 6],
        upselling: [4, 5],
        crossSelling: [1, 2],
        relatedProducts: [4, 5],
        createdAt: "2025-03-01T00:00:00Z",
        updatedAt: "2025-04-15T00:00:00Z"
    },
    // {
    //     // Basic Information
    //     id: 3001,
    //     name: "NexusForge Pro Gaming Laptop",
    //     description: "Professional-grade gaming laptop with customizable configuration. Built for esports professionals and hardcore gamers with cutting-edge performance, advanced cooling system, and premium display options.",
    //     base_price: 1499.99,
    //     base_shipping_cost: 29.99,
    //     free_shipping: false,
    //     sku: "COMP-LAPTOP-3001",
    //     slug: "nexusforge-pro-gaming-laptop",
    //     brand: "NexusForge",
    //     rating: 4.9,
    //     reviews_count: 324,
    //
    //     // Status Information
    //     status: "active",
    //     isFeatured: true,
    //     isOnSale: false,
    //     requiresShipping: true,
    //
    //     // Stock Management
    //     requiresInventoryTracking: true,
    //     stock: 99, // Must configure
    //     hasVariants: true,
    //     totalVariantStock: 124,
    //     lowStockThreshold: 5,
    //
    //     // Product Details
    //     features: {
    //         chassis: "Aircraft-grade aluminum",
    //         cooling: "Advanced dual-fan cooling system with copper heat pipes",
    //         keyboard: "Per-key RGB mechanical keyboard",
    //         audio: "3D surround sound with AI noise cancellation",
    //         battery: "Up to 6 hours gaming, 10 hours productivity",
    //         webcam: "1080p with privacy shutter",
    //         connectivity: "Wi-Fi 6E, Bluetooth 5.3, Thunderbolt 4",
    //         warranty: "3-year premium support"
    //     },
    //
    //     // Images
    //     images: [
    //         "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&auto=format&fit=crop",
    //         "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&auto=format&fit=crop",
    //         "https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&auto=format&fit=crop",
    //         "https://images.unsplash.com/photo-1482235225574-c37692835cf3?w=800&auto=format&fit=crop"
    //     ],
    //
    //     // Product Configuration
    //     options: {
    //         "processor": ["intel i7-14700H", "intel i9-14900HX", "amd ryzen 9 7950X"],
    //         "graphics": ["nvidia rtx 4070 8GB", "nvidia rtx 4080 12GB", "nvidia rtx 4090 16GB"],
    //         "ram": ["16GB DDR5", "32GB DDR5", "64GB DDR5"],
    //         "storage": ["512GB NVMe", "1TB NVMe", "2TB NVMe", "4TB NVMe"],
    //         "display": ["15.6 FHD 144Hz", "15.6 QHD 240Hz", "17.3 FHD 144Hz", "17.3 QHD 240Hz"],
    //         "os": ["windows 11 home", "windows 11 pro"]
    //     },
    //
    //     // Option Images
    //     option_images: {
    //         "processor": {
    //             "intel i9-14900HX": ["https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&auto=format&fit=crop"],
    //             "amd ryzen 9 7950X": ["https://images.unsplash.com/photo-1562408590-e32931084e23?w=800&auto=format&fit=crop"]
    //         },
    //         "graphics": {
    //             "nvidia rtx 4080 12GB": ["https://images.unsplash.com/photo-1555618568-bdf0a992c512?w=800&auto=format&fit=crop"],
    //         },
    //         "display": {
    //             "17.3 QHD 240Hz": ["https://images.unsplash.com/photo-1533740566848-5f7d3e04e3d7?w=800&auto=format&fit=crop"]
    //         }
    //     },
    //
    //     // Variant Images
    //     variant_images: {
    //         "intel i9-14900HX|nvidia rtx 4090 16GB|17.3 QHD 240Hz": [
    //             "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop",
    //             "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&auto=format&fit=crop"
    //         ],
    //         "amd ryzen 9 7950X|nvidia rtx 4080 12GB|15.6 QHD 240Hz": "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&auto=format&fit=crop"
    //     },
    //
    //     // Option Variants Stock
    //     option_variants_stock: {
    //         // Base models with i7 processor
    //         "intel i7-14700H|nvidia rtx 4070 8GB|16GB DDR5|512GB NVMe|15.6 FHD 144Hz|windows 11 home": 15,
    //         "intel i7-14700H|nvidia rtx 4070 8GB|16GB DDR5|1TB NVMe|15.6 FHD 144Hz|windows 11 home": 12,
    //         "intel i7-14700H|nvidia rtx 4070 8GB|32GB DDR5|1TB NVMe|15.6 FHD 144Hz|windows 11 home": 10,
    //         "intel i7-14700H|nvidia rtx 4070 8GB|32GB DDR5|1TB NVMe|15.6 QHD 240Hz|windows 11 home": 8,
    //
    //         // Mid-tier models with i9 processor
    //         "intel i9-14900HX|nvidia rtx 4080 12GB|32GB DDR5|1TB NVMe|15.6 QHD 240Hz|windows 11 home": 10,
    //         "intel i9-14900HX|nvidia rtx 4080 12GB|32GB DDR5|2TB NVMe|15.6 QHD 240Hz|windows 11 home": 8,
    //         "intel i9-14900HX|nvidia rtx 4080 12GB|32GB DDR5|2TB NVMe|15.6 QHD 240Hz|windows 11 pro": 6,
    //         "intel i9-14900HX|nvidia rtx 4080 12GB|32GB DDR5|2TB NVMe|17.3 QHD 240Hz|windows 11 pro": 5,
    //
    //         // High-end models with i9 and RTX 4090
    //         "intel i9-14900HX|nvidia rtx 4090 16GB|32GB DDR5|2TB NVMe|17.3 QHD 240Hz|windows 11 pro": 7,
    //         "intel i9-14900HX|nvidia rtx 4090 16GB|64GB DDR5|2TB NVMe|17.3 QHD 240Hz|windows 11 pro": 4,
    //         "intel i9-14900HX|nvidia rtx 4090 16GB|64GB DDR5|4TB NVMe|17.3 QHD 240Hz|windows 11 pro": 2,
    //
    //         // AMD models
    //         "amd ryzen 9 7950X|nvidia rtx 4070 8GB|32GB DDR5|1TB NVMe|15.6 FHD 144Hz|windows 11 home": 8,
    //         "amd ryzen 9 7950X|nvidia rtx 4080 12GB|32GB DDR5|1TB NVMe|15.6 QHD 240Hz|windows 11 home": 6,
    //         "amd ryzen 9 7950X|nvidia rtx 4080 12GB|32GB DDR5|2TB NVMe|15.6 QHD 240Hz|windows 11 pro": 5,
    //         "amd ryzen 9 7950X|nvidia rtx 4090 16GB|64GB DDR5|2TB NVMe|17.3 QHD 240Hz|windows 11 pro": 3
    //     },
    //
    //     // Option Price Adjustments
    //     option_price_adjustments: {
    //         "processor": {
    //             "intel i9-14900HX": 300.00,
    //             "amd ryzen 9 7950X": 250.00
    //         },
    //         "graphics": {
    //             "nvidia rtx 4080 12GB": 300.00,
    //             "nvidia rtx 4090 16GB": 800.00
    //         },
    //         "ram": {
    //             "32GB DDR5": 150.00,
    //             "64GB DDR5": 400.00
    //         },
    //         "storage": {
    //             "1TB NVMe": 100.00,
    //             "2TB NVMe": 250.00,
    //             "4TB NVMe": 500.00
    //         },
    //         "display": {
    //             "15.6 QHD 240Hz": 200.00,
    //             "17.3 FHD 144Hz": 150.00,
    //             "17.3 QHD 240Hz": 350.00
    //         },
    //         "os": {
    //             "windows 11 pro": 100.00
    //         }
    //     },
    //
    //     // Option Shipping Cost Adjustments
    //     option_shipping_adjustments: {
    //         "display": {
    //             "17.3 FHD 144Hz": 10.00,
    //             "17.3 QHD 240Hz": 10.00
    //         }
    //     },
    //
    //     // Physical Attributes
    //     weight: {
    //         value: 2.2,
    //         unit: 'kg'
    //     },
    //     dimensions: {
    //         length: 36,
    //         width: 26,
    //         height: 2,
    //         unit: 'cm'
    //     },
    //
    //     // Option Dimension Overrides
    //     option_dimension_overrides: {
    //         "display": {
    //             "17.3 FHD 144Hz": {
    //                 weight: {
    //                     value: 2.5,
    //                     unit: 'kg'
    //                 },
    //                 dimensions: {
    //                     length: 40,
    //                     width: 28,
    //                     height: 2.2,
    //                     unit: 'cm'
    //                 }
    //             },
    //             "17.3 QHD 240Hz": {
    //                 weight: {
    //                     value: 2.6,
    //                     unit: 'kg'
    //                 },
    //                 dimensions: {
    //                     length: 40,
    //                     width: 28,
    //                     height: 2.3,
    //                     unit: 'cm'
    //                 }
    //             }
    //         }
    //     },
    //
    //     // Categories
    //     categories: [101, 105, 110], // Computers, Laptops, Gaming
    //
    //     // Related Products
    //     upselling: [3005, 3010], // Premium laptop models
    //     crossSelling: [3101, 3201], // Gaming peripherals, laptop accessories
    //     relatedProducts: [3002, 3003], // Other gaming laptops
    //
    //     // Timestamps
    //     createdAt: "2025-01-05T09:00:00Z",
    //     updatedAt: "2025-04-02T11:45:00Z"
    // },
];