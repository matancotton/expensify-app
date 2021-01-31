// object destrucrturing

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name:publisherName = 'Self-Published'} = book.publisher

// console.log(publisherName)



// array desctrucstruing

const item = ['Coffe (cold)', '$2.00', '$2.50', '$2.75']

const [product, , price] = item

console.log(`A medeium ${product} coasts ${price}`)  