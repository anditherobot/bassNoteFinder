import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {


  selectednotes= [] ;
  constructor() { }

  ngOnInit(): void {
  }

  assembleNotes(value) {
    this.selectednotes.push(value);
    console.log("assembling", this.selectednotes);
    
  }

}
