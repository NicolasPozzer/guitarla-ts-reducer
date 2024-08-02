// Interfaces y Types
// Son la forma de declarar objetos, se usa cualquiera de las 2

// Ej. Types
export interface Guitar {
    id: number
    name: string
    image: string
    description: string
    price: number
}

export interface CartItem extends Guitar{
    quantity: number
}

// Forma de heredar atributos de otro objeto con "&"
//Ej. en este caso CartItem hereda atributos de Guitar y agrega el atributo quantity
// export type CartItem = Guitar & {
//     quantity: number
// }

//Ej. Interface
// type Guitar = {
//     id: number
//     name: string
//     image: string
//     description: string
//     price: number
// }


