import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bass',
  templateUrl: './bass.component.html',
  styleUrls: ['./bass.component.scss']
})
export class BassComponent implements OnInit {

  fretNumber = ['Open', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  notes;
  gString;
  dString;
  aString;
  eString;

  gStringSharp = ['g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g'];
  dStringSharp = ['d', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd'];
  aStringSharp = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a'];
  eStringSharp = ['e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e'];

  gStringFlat = ['g', 'a&#9837;', 'a', 'c&#9837;', 'c&#9837;', 'c', 'd&#9837;', 'd', 'f&#9837;', 'f&#9837;', 'f', 'g&#9837;', 'g'];
  dStringFlat = ['d', 'f&#9837;', 'f&#9837;', 'f', 'g&#9837;', 'g', 'a&#9837;', 'a', 'c&#9837;', 'c&#9837;', 'c', 'd&#9837;', 'd'];
  aStringFlat = ['a', 'c&#9837;', 'c&#9837;', 'c', 'd&#9837;', 'd', 'f&#9837;', 'f&#9837;', 'f', 'g&#9837;', 'g', 'a&#9837;', 'a'];
  eStringFlat = ['f&#9837;', 'f', 'g&#9837;', 'g', 'a&#9837;', 'a', 'c&#9837;', 'c&#9837;', 'c', 'd&#9837;', 'd', 'f&#9837;', 'f&#9837;'];



  displayNotesonE;
  displayNotesonA;
  displayNotesonD;
  displayNotesonG;

  selected: string;
  author = { id: 1, name: 'andi', lastName: 'milhomme' };
  constructor() { }

  ngOnInit() {
    //Keeping it sharp by default.
    this.notes = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"];

    this.gString = this.gStringSharp;
    this.dString = this.dStringSharp;
    this.aString = this.aStringSharp;
    this.eString = this.eStringSharp;
  }

  showOnFret(selectednote) {
    this.selected = selectednote;
    console.log('get note', selectednote);


    this.displayNotesonE = this.highlight(selectednote, this.eString);
    this.displayNotesonA = this.highlight(selectednote, this.aString);
    this.displayNotesonD = this.highlight(selectednote, this.dString);
    this.displayNotesonG = this.highlight(selectednote, this.gString);

  };


  toggleType(type) {
    if (type == NoteType.Flat) {

      this.notes = ["c", "d&#9837;", "d", "f&#9837;", "f&#9837;", "f", "g&#9837;", "g", "a&#9837;", "a", "c&#9837;"];
      this.gString = this.gStringFlat;
      this.dString = this.dStringFlat;
      this.aString = this.aStringFlat;
      this.eString = this.eStringFlat;
    }
    else if (type == NoteType.Sharp) {
      this.notes = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"];
      this.gString = this.gStringSharp;
      this.dString = this.dStringSharp;
      this.aString = this.aStringSharp;
      this.eString = this.eStringSharp;
    }
  }
  //TODO: refactor with functional programming like find(), filter or something. try not 
  // to do it without loops. 

  highlight(selection, array) {
    let indices = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] === selection) {
        indices.push(selection);
      }
    }
    return indices;
  }




}
  


enum NoteType {
  Sharp = 0,
  Flat = 1,
  Natural = 3
}

