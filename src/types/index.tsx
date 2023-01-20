export interface User {
  id: string;
  userName: string;
  password: string;
}

export interface Kiosk {
  id: string;
  price: number;
  quantity: number;
  date: Date;
  hours: number[];
}
