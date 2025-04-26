export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}


export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  likes: number;
  link_to_product: string;
  rating: number;
  category_id: number;
}


export interface Order {
  id: number;
  user_id: number;
  name: string;
  product_id: string;
  quantity: number;
  amount: number;
  address: string;
  date: Date;
}


export interface Comment {
  id: number;
  user_id: number;
  username: string;
  email: string;
  product_id: string;
  body: string;
  date: Date;
}


export interface AuthToken {
  token: string;
}


export interface Team {
  name: string;
  age: number;
}

export const team:Team[] = [
  {name: "Danelya", age: 19},
  {name: "Alua", age: 19 },
  {name: "Akbota", age: 19}
]
