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


  /*will add a class if selected*/
  selected: string;
  author = { id: 1, name: 'andi', lastName: 'milhomme' };


  ngOnInit() {
    //Keeping it sharp by default.

    this.sharpenNotes();
  }

  showNotes(selectednote) {
    this.selected = selectednote;
    console.log('get note', selectednote);
  };


  highlight(selection, array) {
    let indices = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] === selection) {
        indices.push(selection);
      }
    }
    return indices;
  }

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

}
  


enum NoteType {
  Sharp = 0,
  Flat = 1,
  Natural = 3
}

