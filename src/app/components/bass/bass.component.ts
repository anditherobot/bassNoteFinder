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
  sharpNotes = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"]; ;
  flatNotes = ["c", "d&#9837;", "d", "e&#9837", "e", "f",  "g&#9837;", "g", "a&#9837;", "a", "b&#9837;", "b"];
  //Strings
  gString;
  dString;
  aString;
  eString;

  //Sharps

  sharpenNotes(){
    this.notes = this.notesData.sharpNotes;
    this.gString = this.notesData.gStringSharp;
    this.dString = this.notesData.dStringSharp;
    this.aString = this.notesData.aStringSharp;
    this.eString = this.notesData.eStringSharp;
  }


  flatenNotes(){
    this.notes = this.notesData.flatNotes;
    this.gString = this.notesData.gStringFlat;
    this.dString = this.notesData.dStringFlat;
    this.aString = this.notesData.aStringFlat;
    this.eString = this.notesData.eStringFlat;
  }
  // Flats


  displayNotesonE;
  displayNotesonA;
  displayNotesonD;
  displayNotesonG;

  selected: string;
  author = { id: 1, name: 'andi', lastName: 'milhomme' };


  ngOnInit() {
    //Keeping it sharp by default.

    this.sharpenNotes();
  }

  showNotes(selectednote) {
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
  
      this.flatenNotes();
    }
    else if (type == NoteType.Sharp) {
      this.togglePitch = 0;
      
      this.sharpenNotes();
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

