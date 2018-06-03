import { User } from './user';
import { config } from './../config';
import * as _ from "lodash";

export class Post {
  _id: string;

  make: string;
  model: string;
  year: number;
  color: string;

  bodyStyle: string;
  kilometers: string;
  origin: string;
  condition: string;

  engineType: string;
  cylender: string;
  transmission: string;
  driveType: string;

  title: string;
  price: number;
  notes: string;
  city: string;
  country: string;
  phone: string;

  images: any[];

  status: string;
  created_at: Date;
  updated_at: Date;
  user: User;

  technologyOptions: string[];
  exteriorOptions: string[];
  interiorOptions: string[];
  saftyOptions: string[];

  bodyReport: any;
  bodyCondition: any;

  getMainInfo() {
    return {
      bodyStyle: this.bodyStyle,
      kilometers: this.kilometers,
      origin: this.origin,
      codition: this.condition
    };
  }

  getEngineInfo() {
    return {
      engineType: this.engineType,
      cylender: this.cylender,
      transmission: this.transmission,
      driveType: this.driveType
    };
  }

  getPostInfo() {
    return {
      title: this.title,
      price: this.price,
      notes: this.notes,
      city: this.city,
      country: this.country,
      phone: this.phone
    };
  }

  getBodyInfo() {
    return {
      report: this.bodyReport,
      condition: this.bodyCondition
    };
  }

  getMainImage() {
    return config.api + this.images[0];
  }

  hasImage() {
    return this.images && this.images.length > 0
  }

  formData() {
    var data = new FormData();

    _.each(this, (value, key) => {
      if(_.includes(['images', 'technologyOptions', 'interiorOptions', 'exteriorOptions', 'saftyOptions', 'bodyCondition'], key)) return;
      data.append(key, value);
    });

    _.each(this.images, val => {
      data.append('images[]', val);
    });

    _.each(this.technologyOptions, val => {
      data.append('technologyOptions[]', val);
    });
    _.each(this.interiorOptions, val => {
      data.append('interiorOptions[]', val);
    });
    _.each(this.exteriorOptions, val => {
      data.append('exteriorOptions[]', val);
    });
    _.each(this.saftyOptions, val => {
      data.append('saftyOptions[]', val);
    });

    _.each(this.bodyCondition, (value, key) => {
      data.append('bodyCondition[' + key + ']', value);
    });

    return data;
  }
}
