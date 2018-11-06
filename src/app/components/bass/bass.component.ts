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

displayNotesonE;
displayNotesonA;
displayNotesonD;
displayNotesonG;

selected: string;

  constructor() { }

  ngOnInit() {
  }

  showOnFret (selectednote) {
  this.selected = selectednote;
    console.log('get note', selectednote);


     this.displayNotesonE =  this.highlight(selectednote, this.eString );
     this.displayNotesonA =  this.highlight(selectednote, this.aString );
     this.displayNotesonD =  this.highlight(selectednote, this.dString );
     this.displayNotesonG =  this.highlight(selectednote, this.gString );

  };


  //TODO: refactor with functional programming like find(), filter or something. try not 
  // to do it without loops. 
    
  highlight(selection, array) {
      let indices = [];
      for(let i= 0; i < array.length; i++){
        if(array[i] === selection) {
          indices.push(selection);
        }
      }
      console.log(this.displayNotesonA);
      console.log('indices', indices);
      return indices;
   }
  
}


