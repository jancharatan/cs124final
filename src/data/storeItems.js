export const storeItems = {
    "Nintendo Switch": {
        category: "Gaming",
        basePrice: 24,
        path: require("../assets/devices/gaming/switch.png"),
        company: "Nintendo",
        description: "Nintendo Switch is a hybrid home/handheld console that enables you to play games on the television or on the unit itself using its built-in display. You can also remove the edge controllers of the system, called Joy-Cons, and use those as two individual gamepads along with the screen set up on its kickstand. These three modes of play all run the same games with only minor differences.",
        options: [
            {
                optionName: "Rental Period",
                levels: {
                    "1 Month": 20,
                    "3 Months": 10,
                    "12 Months": 0
                }
            },
            {
                optionName: "Extra Controllers",
                levels: {
                    0: 0,
                    1: 5,
                    2: 10
                }
            },
            {
                optionName: "Color",
                levels: {
                    "Black": 0,
                    "Grey": 0
                }
            }
        ]
    },
    "Sony Playstation 5": {
        category: "Gaming",
        basePrice: 34,
        path: require("../assets/devices/gaming/ps5.jpg"),
        company: "Sony",
        description: "The PS5 is a powerful and well-designed console that offers a compelling next-gen gaming experience. Its library of exclusive games continues to be a showcase for the PS5's marvelous DualSense controller, spatial 3D audio tech, and super-fast SSD, and it's the reason why so many gamers will covet Sony's new PlayStation console.",
        options: [
            {
                optionName: "Rental Period",
                levels: {
                    "1 Month": 30,
                    "3 Months": 15,
                    "12 Months": 0
                }
            },
            {
                optionName: "Extra Controllers",
                levels: {
                    0: 0,
                    1: 5,
                    2: 10
                }
            },
            {
                optionName: "Color",
                levels: {
                    "Black": 0,
                    "White": 0
                }
            }
        ]
    },
    "Microsoft Xbox Series S": {
        category: "Gaming",
        basePrice: 34,
        path: require("../assets/devices/gaming/xboxseriess.jpg"),
        company: "Microsoft",
        description: "Introducing the Xbox Series S, the smallest, sleekest Xbox console ever. Experience the speed and performance of a next-gen all-digital console at an accessible price point. Go all-digital and enjoy disc-free, next-gen gaming with the smallest Xbox console ever made.",
        options: [
            {
                optionName: "Rental Period",
                levels: {
                    "1 Month": 30,
                    "3 Months": 15,
                    "12 Months": 0
                }
            },
            {
                optionName: "Extra Controllers",
                levels: {
                    0: 0,
                    1: 5,
                    2: 10
                }
            },
            {
                optionName: "Color",
                levels: {
                    "Black": 0,
                    "White": 0
                }
            }
        ]
    },
    "Apple IPhone SE": {
        category: "Phones",
        basePrice: 40,
        path: require("../assets/devices/phones/iphonese.jpg"),
        company: "Apple",
        description: "iPhone SE is the most powerful 4.7-inch iPhone ever. Featuring A13 Bionic, the fastest chip in a smartphone, for incredible performance in apps, games, and photography. Portrait mode for studio-quality portraits and six lighting effects. Next-generation Smart HDR for incredible detail across highlights and shadows. Cinematic-quality 4K video. And all the advanced features of iOS. With long battery life and water resistance, it's so much of the iPhone you love, in a not so big size.",
        options: [
            {
                optionName: "Rental Period",
                levels: {
                    "1 Month": 30,
                    "3 Months": 15,
                    "12 Months": 0
                }
            },
            {
                optionName: "Storage",
                levels: {
                    "64 GB": 0,
                    "128 GB": 5,
                    "256 GB": 10
                }
            },
            {
                optionName: "Color",
                levels: {
                    "Red": 0,
                    "White": 0,
                    "Black": 0
                }
            }
        ]
    },
    "Apple Watch Series 7": {
        category: "Wearables",
        basePrice: 20,
        path: require("../assets/devices/wearables/applewatch.jpg"),
        company: "Apple",
        description: "The largest, most advanced Always-on Retina display yet makes everything you do with your Apple Watch Series 7 bigger and better. Series 7 is the most durable Apple Watch ever built, with an even more crack-resistant front crystal. Advanced features let you measure your blood oxygen level, take an ECG anytime, and access mindfulness and sleep tracking apps. You can also track dozens of workouts, including new tai chi and pilates.",
        options: [
            {
                optionName: "Rental Period",
                levels: {
                    "1 Month": 10,
                    "3 Months": 5,
                    "12 Months": 0
                }
            },
            {
                optionName: "Wristband",
                levels: {
                    "Solo Loop": 0,
                    "Leather": 5,
                    "Sport Band": 5,
                    "Stainless Steel": 10

                }
            },
            {
                optionName: "Color",
                levels: {
                    "Grey": 0,
                    "Black": 0,
                    "Teal": 0
                }
            }
        ]
    },
    "Samsung Galaxy S22": {
        category: "Phones",
        basePrice: 35,
        path: require("../assets/devices/phones/s22.jpg"),
        company: "Samsung",
        description: "Meet the Samsung Galaxy S22, the smartphone that takes video1 to the next level. Communicate with friends while watching the latest videos from your favorite content creators, or create your own content with beautiful clarity with low-light video capabilities that capture those late nights with perfect contrast, color and crispness like no device before. Capture every moment like a true filmographer when you shoot video clips on the high-resolution camera.",
        options: [
            {
                optionName: "Rental Period",
                levels: {
                    "1 Month": 20,
                    "3 Months": 10,
                    "12 Months": 0
                }
            },
            {
                optionName: "Storage",
                levels: {
                    "128 GB": 0,
                    "256 GB": 10
                }
            },
            {
                optionName: "Color",
                levels: {
                    "Green": 0,
                    "Phantom White": 0,
                    "Phantom Black": 0,
                    "Pink Gold": 0
                }
            }
        ]
    },
    "Apple TV HD 5th Gen": {
        category: "Entertainment",
        basePrice: 10,
        path: require("../assets/devices/entertainment/appletv.jpg"),
        company: "Apple",
        description: "This 5th Generation Apple TV 4K media streamer offers vibrant, realistic image quality with stunning details. Not only that you are able to stream content from iTunes, but also from other services such as Netflix, Hulu, and ESPN. Regular high-definition TVs can be easily connected with a HDMI cable, while 4K TVs require an ultra-high-speed HDMI cable to stream with full 4k definition.",
        options: [
            {
                optionName: "Rental Period",
                levels: {
                    "1 Month": 10,
                    "3 Months": 5,
                    "12 Months": 0
                }
            }
        ]
    },
    "Apple AirPods 3rd Gen": {
        category: "Audio",
        basePrice: 10,
        path: require("../assets/devices/audio/airpods3rdgen.jpg"),
        company: "Apple",
        description: "Introducing the all-new AirPods. Featuring spatial audio that places sound all around you, Adaptive EQ that tunes music to your ears, and longer battery life. It’s all sweat and water resistant and delivers an experience that’s simply magical.",
        options: [
            {
                optionName: "Rental Period",
                levels: {
                    "1 Month": 10,
                    "3 Months": 5,
                    "12 Months": 0
                }
            }
        ]
    },
    "Apple Macbook Pro": {
        category: "Computers",
        basePrice: 100,
        path: require("../assets/devices/computers/macbookpro.jpg"),
        description: "The new MacBook Pro features a stunning 16-inch Retina display — the largest Retina display ever in a Mac notebook. The narrow-band LED-powered backlight allows MacBook Pro to represent the P3 wide color gamut for brilliant, true-to-life color in photos and videos.",
        options: [
            {
                optionName: "Rental Period",
                levels: {
                    "1 Month": 50,
                    "3 Months": 25,
                    "12 Months": 0
                }
            },
            {
                optionName: "Color",
                levels: {
                    "Space Black": 0,
                    "Silver": 0
                }
            }
        ]
    },
    "Dell XPS 15": {
        category: "Computers",
        basePrice: 80,
        path: require("../assets/devices/computers/dellxps.jpg"),
        description: "The Dell XPS 15 laptop features a stunning, new 4-sided InfinityEdge FHD+ display that shows off a 5% larger 16:10 screen and 92.9% screen to body ratio. All the power and features to maximize prodcutivity - Core i7 processor, 16GB of RAM, a 512GB solid state drive, and NVIDIA GeForce GTX 3050 Ti graphics. A premium 15' touch laptop with a thin and light design.",
        options: [
            {
                optionName: "Rental Period",
                levels: {
                    "1 Month": 40,
                    "3 Months": 20,
                    "12 Months": 0
                }
            },
            {
                optionName: "Color",
                levels: {
                    "Black": 0,
                    "Silver": 0
                },
            },
            {
                optionName: "Storage",
                levels: {
                    "256GB": 0,
                    "512GB": 10,
                    "1TB": 20
                }
            }
        ]
    }
}
