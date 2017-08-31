import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  @Input() image: string = '/assets/images/empty.svg';

  constructor() { }

  ngOnInit() {
  }

}
