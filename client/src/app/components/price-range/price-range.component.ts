import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'price-range',
  templateUrl: './price-range.component.html',
  styleUrls: ['./price-range.component.scss']
})
export class PriceRangeComponent implements OnInit {
  @Output() select = new EventEmitter<any>();
  private priceRange = [5000, 500000];
  private formater = {
    to: (value) => {
      return this.formatCurrency(value);
    },
    from: (value) => {
      return parseInt(value);
    }
  };
  private sliderConfig = {
    connect: true,
    orientation: 'vertical',
    range: {
      min: [1000, 500],
      '25%': [20000, 1000],
      '50%': [50000, 5000],
      '75%': [100000, 10000],
      max: [500000]
    },
    pips: {
      mode: 'range',
      density: 5,
      format: this.formater,
    },
    tooltips: [this.formater, this.formater]
  };

  constructor(private postService: PostService) { }

  ngOnInit() {
  }

  done(){
    this.select.emit({
        minPrice: this.priceRange[0],
        maxPrice: this.priceRange[1]
    });
  }

  private formatCurrency(num) {
    if(num == 500000) return 'JD 500,000+';
    num = num.toString().replace(/\$|\,/g, '');
    if (isNaN(num))
    {
        num = "0";
    }

    let sign = (num == (num = Math.abs(num)));
    num = Math.floor(num * 100 + 0.50000000001);
    //let cents: any = num % 100;
    num = Math.floor(num / 100).toString();

    //if(cents < 10){
    //    cents = "0" + cents;
    //}
    for(var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++){
        num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
    }
    return (((sign) ? '' : '-') + 'JD ' + num);// + '.' + cents);
  }

}
