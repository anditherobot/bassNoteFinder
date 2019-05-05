import { Component, OnInit } from "@angular/core";
import { startTimeRange } from "@angular/core/src/profile/wtf_impl";

@Component({
  selector: "app-sequencer",
  templateUrl: "./sequencer.component.html",
  styleUrls: ["./sequencer.component.scss"]
})
export class SequencerComponent implements OnInit {
  _notes: Array<String>;
  
  
  activeFlag = [true, true, true, true];

  constructor() {}

  ngOnInit() {
    this._notes = ["C", "F", "G", "C"];

    console.log(this._notes);
  }

  timer = this.activeFlag.length;
  counter = 0;
  
  startTime(time) {
    if (time > 0) {
      this.timer = time;
      this.activeFlag[this.counter] = false;
      setTimeout(() => {
       
        console.log("time init", this.activeFlag);
        this.counter++;
        
        this.startTime(time - 1);
      }, 1500);
    } else {
      this.counter = 0;
    }
  }

  reset(){
    this.activeFlag = [true, true, true, true];
    this.timer =  this.activeFlag.length;
  }


}
