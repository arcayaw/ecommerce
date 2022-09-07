import helena from "../data/images/nunchi-Helena-min.jpg"

const products = [
  {
    id: 1,
    title: "Box Kids",
    stock: 2,
    price: 4500,
    description: "Pensada para las pequeñas de la casa, ellas que siempre sueñan y blablablablablabla blablablab blablablab blablablabblablablabblablablab blablablab  blablablab  blablablabblablablab",
    imageUrl: "https://ibb.co/4dJ8pKh",
    image: [helena],
    image1: "https://via.placeholder.com/150",
    contiene: "jugo Natural, galletas, donuts, alfajores",
    imageDescription: "Box Donuts",
    category_id: 1,
    category: "Kids",
  },
  {
    id: 2,
    title: "Box Rose",
    stock: 0,
    price: 3500,
    description: "Regala relax a esa persona que tanto quieres.",
    imageURL: "https://ibb.co/HPqpxX8",
    image: "/image/nunchi-Rose-min.jpg",
    image1: "https://via.placeholder.com/150",
    contiene: "botella de vino, chocolates, copas",
    imageDescription: "rose bottle",
    category_id: 2,
    category: "Bebidas",
  },
  {
    id: 3,
    title: "Box Futbol",
    stock: 2,
    price: 4500,
    description: "Regala relax a esa persona que tanto quieres.",
    imageURL: "https://ibb.co/NnfZcZ3",
    image: "/image/nunchi-CAI-min-min.jpg",
    image1: "https://via.placeholder.com/150",
    contiene: "cerveza, jugo, picada",
    imageDescription: "Desayuno CAI",
    category_id: 3,
    category: "Desayunos",
  },
  {
    id: 4,
    title: "Box Cocktail",
    stock: 5,
    price: 6500,
    description: "Regala relax a esa persona que tanto quieres.",
    imageURL: "https://ibb.co/fDwk9Zz",
    image: "/image/nunchi-GinBox-min.jpg",
    image1: "https://via.placeholder.com/150",
    contiene: "botella de Gin, elementos para tragos",
    imageDescription: "gin bottle",
    category_id: 2,
    category: "Bebidas",
  },
  {
    id: 5,
    title: "Box Kids II",
    stock: 5,
    price: 4500,
    description: "Regala relax a esa persona que tanto quieres.",
    imageURL: "https://ibb.co/pbzvHKf",
    image: "/image/nunchi-astronauta-min.jpg",
    image1: "https://via.placeholder.com/150",
    contiene: "jugo Natural, galletas, donuts, alfajores",
    imageDescription: "Box astronauta",
    category_id: 1,
    category: "Kids",
  },
  {
    id: 6,
    title: "Box Frutal",
    stock: 5,
    price: 4000,
    description: "Regala relax a esa persona que tanto quieres.",
    imageURL: "https://ibb.co/WPwtBK5",
    image: "/image/nunchi-Kiwi-min.jpg",
    image1: "https://via.placeholder.com/150",
    contiene: "jugo Natural, yogurt, sandiwhc, frutas",
    imageDescription: "Desayuno frutal",
    category_id: 3,
    category: "Desayunos",
  },
  {
    id: 7,
    title: "Box Desayuno",
    stock: 5,
    price: 4200,
    description: "Regala algo, lo que sea, vos fijate",
    imageURL: "https://ibb.co/XjWGqCQ",
    image: "/image/nunchi-MediaLuns-min.jpg",
    image1: "https://via.placeholder.com/150",
    contiene: "medialunas, jugo natural, alfajores",
    imageDescription: "Desayuno Argentino",
    category_id: 3,
    category: "Desayunos",
  },
  {
    id: 8,
    title: "Box Celebración",
    stock: 5,
    price: 6500,
    description: "Regala relax a esa persona que tanto quieres.",
    imageURL: "https://ibb.co/n3St7jP",
    image: "/image/nunchi-botella-min.jpg",
    image1: "https://via.placeholder.com/150",
    contiene: "botella de vino, chocolates, copas",
    imageDescription: "wine and chocolate",
    category_id: 2,
    category: "Bebidas",
  },
  {
    id: 9,
    title: "Box StarWars",
    stock: 5,
    price: 4500,
    description: "Regala relax a esa persona que tanto quieres.",
    imageURL: "https://ibb.co/gg4d2rb",
    image: "/image/nunchi-Trooper-min.jpg",
    image1: "https://via.placeholder.com/150",
    contiene: "cafe, galletas, chcolate, taza personalizada",
    imageDescription: "Coffe and cookies",
    category_id: 3,
    category: "Desayunos",
  },
];
const getFetch = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products)
    reject(err => console.log(err))
  }, 2000);
})

export default getFetch

/* imagenes */

/* 

https://ibb.co/hVmBMRG  woming
https://ibb.co/gg4d2rb  Starwars
https://ibb.co/HPqpxX8  rose
https://ibb.co/WzdJ0hV  Navidad
https://ibb.co/h7LCSRP  Corporativa
https://ibb.co/XjWGqCQ  Desayuno
https://ibb.co/WPwtBK5  Desayuno Kiwi
https://ibb.co/4dJ8pKh  Kids I
https://ibb.co/fDwk9Zz  Cocktail
https://ibb.co/NnfZcZ3  CAI
https://ibb.co/n3St7jP  Champaign
https://ibb.co/pbzvHKf  Kids 2


*/
