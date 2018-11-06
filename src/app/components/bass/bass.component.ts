import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bass',
  templateUrl: './bass.component.html',
  styleUrls: ['./bass.component.scss']
})
export class BassComponent implements OnInit {
 notes = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"];
fretNumber = ['Open', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

gString = ['g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g'];
dString = ['d', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd'];
aString = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a'];
eString = ['e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e'];

selected: string;

  constructor() { }

  ngOnInit() {
  }
  showOnFret (selectednote) {
  this.selected = selectednote;

    console.log('get note', selectednote)
      
    // select(index);

    // this.displayNotesonE =  highlight(_note, this.eString );
    // this.displayNotesonA =  highlight(_note, this.aString );
    // this.displayNotesonD =  highlight(_note, this.dString );
    // this.displayNotesonG =  highlight(_note, this.gString );
   
  };

  
}


