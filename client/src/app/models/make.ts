import { Model } from './model';

export class Make {
  id: string
  name: string;
  logo: string;
  models: Model[];

  constructor(id: string, name: string, logo: string, models: Model[]){
    this.id = id;
    this.name = name;
    this.logo = logo;
    this.models = models;
  }
}
