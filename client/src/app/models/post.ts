import { User } from './user';

export class Post {
  _id: String;
  make: string;
  model: string;
  year: number;
  color: string;
  mainInfo: {[key: string]: any};
  engineInfo: {[key: string]: any};
  postInfo: {[key: string]: any};
  image: string;
  price: number;
  city: string;
  country: string;
  status: string;
  created_at: Date;
  updated_at: Date;
  user: User;
  title: string;
  notes: string;
  phone: string;
  technologyOptions: any[];
}
