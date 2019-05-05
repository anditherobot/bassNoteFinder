import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-string',
  templateUrl: './string.component.html',
  styleUrls: ['./string.component.scss']
})
export class StringComponent implements OnInit {

//Create type definition for string
  @Input() stringName;
  @Input() selected;
  constructor() { }

  ngOnInit() {
  }

}
