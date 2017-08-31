import { Directive, Attribute, forwardRef, Input} from '@angular/core';
import { Http, RequestOptions } from '@angular/http';
import { NG_ASYNC_VALIDATORS, Validator, AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { Observable } from "rxjs";

@Directive({
  selector: '[unique][formControlName], [unique][ngModel]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UniqueValidatorDirective), multi: true
    }
  ]
})
export class UniqueValidatorDirective implements Validator {
  @Input() unique: string;

  constructor(@Attribute('unique') unique: string, private http: Http) {
    this.unique = unique;
  }

  validate(c : AbstractControl): Promise<{[key : string] : any}>|Observable<{[key : string] : any}> {
    return this.http.get(this.unique + c.value)
    .map((response) => {
      let res = response.json();
      if(res.avaliable) {
        return null;
      }else {
        return { uniqueInvalid: true };
      }
    });
  }
}

export function unique(url: string): AsyncValidatorFn {
  let validator: AsyncValidatorFn = (c: AbstractControl): Promise<{[key : string] : null}>|Observable<{[key : string] : null}> => {
    return this.http.get(url + c.value)
    .map((response) => {
      let res = response.json();
      if(res.avaliable) {
        return null;
      }else {
        return { uniqueInvalid: true };
      }
    });
  };

  return validator;
}
