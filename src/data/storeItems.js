export const storeItems = {
    "Nintendo Switch": {
        category: "Gaming",
        basePrice: 24,
        path: require("../assets/devices/gaming/switch.png"),
        altPath: require("../assets/devices/gaming/switchconsole.png"),
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
        altPath: require("../assets/devices/gaming/ps5box.jpg"),
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
            }
        ]
    },
    "Microsoft Xbox Series S": {
        category: "Gaming",
        basePrice: 34,
        path: require("../assets/devices/gaming/xboxseriess.jpg"),
        altPath: require("../assets/devices/gaming/xboxseriess2.jpg"),
        company: "Microsoft",
        options: []
    },
    "Apple IPhone SE": {
        category: "Phones",
        basePrice: 40,
        path: require("../assets/devices/phones/iphonese.jpg"),
        company: "Apple",
        options: []
    }
}
