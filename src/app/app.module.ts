import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BassComponent } from './components/bass/bass.component';
import { SequencerComponent } from './components/sequencer/sequencer.component';
import { StringComponent } from './components/bass/string/string.component';
import { ScalesComponent } from './components/scales/scales.component';
import { TimelineComponent } from './components/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent,
    BassComponent,
    SequencerComponent,
    StringComponent,
    ScalesComponent,
    TimelineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
