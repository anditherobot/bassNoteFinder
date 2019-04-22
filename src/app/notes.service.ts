import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor() { }

  fretNumber = ['Open', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

  
  sharpNotes = ["c", "c#", "d", "d#", "e", "f", "f#", "g", "g#", "a", "a#", "b"]; ;
  flatNotes = ["c", "d&#9837;", "d", "e&#9837", "e", "f",  "g&#9837;", "g", "a&#9837;", "a", "b&#9837;", "b"];
  
  gStringSharp = ['g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g'];
  dStringSharp = ['d', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd'];
  aStringSharp = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a'];
  eStringSharp = ['e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e'];

  gStringFlat = ['g', 'a&#9837;', 'a', 'b&#9837;', 'b', 'c', 'd&#9837;', 'd', 'e&#9837;', 'e', 'f', 'g&#9837;', 'g'];
  dStringFlat = ['d', 'e&#9837;', 'e', 'f', 'g&#9837;', 'g', 'a&#9837;', 'a', 'b&#9837;', 'b', 'c', 'd&#9837;', 'd'];
  aStringFlat = ['a', 'b&#9837;', 'b;', 'c', 'd&#9837;', 'd', 'e&#9837;', 'e', 'f', 'g&#9837;', 'g', 'a&#9837;', 'a'];
  eStringFlat = ['e;', 'f', 'g&#9837;', 'g', 'a&#9837;', 'a', 'b&#9837;', 'b', 'c', 'd&#9837;', 'd', 'e&#9837;', 'e'];

}
