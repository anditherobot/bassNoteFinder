import { Component, OnInit } from '@angular/core';
import {NotesService} from '../../notes.service';
@Component({
  selector: 'app-bass',
  templateUrl: './bass.component.html',
  styleUrls: ['./bass.component.scss']
})
export class BassComponent implements OnInit {

  constructor(private notesData: NotesService) {

   }

fretNumber = this.notesData.fretNumber;
  notes;
  
  //Strings
  gString;
  dString;
  aString;
  eString;

  //Sharps
  gStringSharp = this.notesData.gStringSharp;
  dStringSharp = this.notesData.dStringSharp;
  aStringSharp = this.notesData.aStringSharp;
  eStringSharp = this.notesData.eStringSharp;

  // Flats
  gStringFlat = this.notesData.gStringFlat;
  dStringFlat = this.notesData.dStringFlat;
  aStringFlat = this.notesData.aStringFlat;
  eStringFlat = this.notesData.eStringFlat;



  displayNotesonE;
  displayNotesonA;
  displayNotesonD;
  displayNotesonG;

  selected: string;
  author = { id: 1, name: 'andi', lastName: 'milhomme' };


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

togglePitch = 0;
  toggleType(type) {
    if (type == NoteType.Flat) {
     this.togglePitch = 1;
      this.notes = ["c", "d&#9837;", "d", "e&#9837", "e", "f",  "g&#9837;", "g", "a&#9837;", "a", "b&#9837;", "b"];
      this.gString = this.gStringFlat;
      this.dString = this.dStringFlat;
      this.aString = this.aStringFlat;
      this.eString = this.eStringFlat;
    }
    else if (type == NoteType.Sharp) {
      this.togglePitch = 0;
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

