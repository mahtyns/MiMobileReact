const products = [
    {
        product_id: 0,
        product_model: 'Iphone 13',
        product_brand: 'Apple',
        product_price: 865,
        product_CPU: 'Apple Bionic',
        product_size: '6.1"',
        product_RAM: '6gb',
        product_OS: 'iOS',
        product_weight: '173g',
        product_display: '1170px x 2532px',
        product_battery: 'integrated',
        product_camera: '12megapixel',
        product_dimensions: '7.15 cm x 14.67 cm x 0.76 cm',
        product_memory: [
            {   
                code: 1,
                value: '128gb'
            },
            {   
                code: 2,
                value: '256gb'
            },
            {   
                code: 3,
                value: '512gb'
            },
        ],
        product_color: [
            {
                code: 1,
                value: 'white'
            },
            {
                code: 2,
                value: 'black'
            },
            {
                code: 3,
                value: 'rose'
            },
            {
                code: 4,
                value: 'red'
            },
        ],
        product_img: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_87283632/mobile_200_200_png'
    },
    {
        product_id: 1,
        product_model: 'Redmi Note 11',
        product_brand: 'Xiaomi',
        product_price: 299,
        product_CPU: 'Snapdragon 695',
        product_size: '6.67"',
        product_RAM: '8gb',
        product_OS: 'Android',
        product_weight: '202g',
        product_display: '2400px x 1080px',
        product_battery: '5000 mAh',
        product_camera: '16megapixel',
        product_dimensions: '7.61 cm x 16.41 cm x 0.81 cm',
        product_memory: [
            {   
                code: 1,
                value: '128gb'
            },
        ],
        product_color: [
            {
                code: 1,
                value: 'white'
            },
            {
                code: 2,
                value: 'black'
            },
            {
                code: 3,
                value: 'blue'
            },

        ],
        product_img: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_92119990/mobile_200_200_png'
    },
    {
        product_id: 2,
        product_model: 'Galaxy A13',
        product_brand: 'Samsung',
        product_price: 155,
        product_CPU: 'MediaTek Octa-core',
        product_size: '6.6"',
        product_RAM: '4gb',
        product_OS: 'Android',
        product_weight: '195g',
        product_display: '2408px x 1080px',
        product_battery: '5000mAh',
        product_camera: '8megapixel',
        product_dimensions: '7.68 cm x 16.51 cm x 0.88 cm',
        product_memory: [
            {   
                code: 1,
                value: '64gb'
            },
            {   
                code: 2,
                value: '128gb'
            },
        ],
        product_color: [
            {
                code: 1,
                value: 'white'
            },
            {
                code: 2,
                value: 'black'
            },
            {
                code: 3,
                value: 'rose'
            },
            {
                code: 4,
                value: 'red'
            },
        ],
        product_img: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_95198280/mobile_200_200_png'
    },
    {
        product_id: 3,
        product_model: 'Galaxy A53 5G',
        product_brand: 'Samsung',
        product_price: 449,
        product_CPU: 'Exynos 1280',
        product_size: '6.5"',
        product_RAM: '8gb',
        product_OS: 'Android',
        product_weight: '195g',
        product_display: '1080px x 2400px',
        product_battery: '5000mAh',
        product_camera: '64megapixel',
        product_dimensions: '7.47 cm x 15.95 cm x 0.81 cm',
        product_memory: [
            {   
                code: 1,
                value: '128gb'
            },
            {   
                code: 2,
                value: '256gb'
            },
        ],
        product_color: [
            {
                code: 1,
                value: 'light blue'
            },
            {
                code: 2,
                value: 'black'
            },
            {
                code: 3,
                value: 'orange'
            },
            {
                code: 4,
                value: 'white'
            },
        ],
        product_img: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_92324093/fee_786_587_png'
    },
    {
        product_id: 4,
        product_model: 'Galaxy A23 5G',
        product_brand: 'Samsung',
        product_price: 289,
        product_CPU: 'Qualcomm Snapdragon 695',
        product_size: '6.6"',
        product_RAM: '4gb',
        product_OS: 'Android',
        product_weight: '201g',
        product_display: '2408px x 1080px',
        product_battery: '5000mAh',
        product_camera: '50megapixel',
        product_dimensions: '7.69 cm x 16.54 cm x 0.84 cm',
        product_memory: [
            {   
                code: 1,
                value: '128gb'
            },
        ],
        product_color: [
            {
                code: 1,
                value: 'blue'
            },
            {
                code: 2,
                value: 'black'
            },
        ],
        product_img: 'https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_96776858/fee_786_587_png'
    },
]

export default products