const products = [
    {
        id: '1',
        name: 'wilson',
        price: 3500,
        category: 'grips',
        img:'https://cdnmedia.racquets4u.com/media/iopt/catalog/product/cache/8f24f3f124e67ea1e49f457c6f2f1da7/w/i/wilson-pro-perforated-overgrip-pack-of-3-white_1_1.webp',
        stock: 30,
        description: 'blanco marmolado'
    },
    { id: '2', name: 'Solinco', price: 2500, category: 'grips', img: 'https://cdnmedia.racquets4u.com/media/iopt/catalog/product/cache/8f24f3f124e67ea1e49f457c6f2f1da7/s/o/solinco-wonder-grip_2.webp'},
    { id: '3', name: 'Babolat', price: 3500, category: 'grips', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY0RS7yG0ntmU_MJLHRCSTWIt_6SdJ5rALnH6KdSndgCRoyG_dj14XL6b24c9FMP6YYbM&usqp=CAU'}
]


export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}