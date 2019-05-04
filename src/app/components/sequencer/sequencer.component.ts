import { Component, OnInit } from '@angular/core';
import { startTimeRange } from '@angular/core/src/profile/wtf_impl';

@Component({
  selector: 'app-sequencer',
  templateUrl: './sequencer.component.html',
  styleUrls: ['./sequencer.component.scss']
})
export class SequencerComponent implements OnInit {
 
    _notes :Array<String>;
    activeFlag = [true, true, true, true];

  constructor() { }

  ngOnInit() {
    this._notes = ["C", "F", "G", "C"];
  
    console.log(this._notes);
  }

 timers;
  counter = 0;
  flagTrack = undefined;
startTime(time){

if(time > 0) {

  this.timers = time;
setTimeout(()=>{



  this.activeFlag[this.counter ] =  !this.activeFlag[this.counter ] ;
  console.log('time init', this.activeFlag);
  this.counter ++;
  this.flagTrack = this.activeFlag;
  this.startTime(time - 1)
}, 1500);

}
else {
  this.counter = 0;
}


}
}
