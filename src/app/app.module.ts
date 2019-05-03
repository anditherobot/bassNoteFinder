import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BassComponent } from './components/bass/bass.component';
import { SequencerComponent } from './components/sequencer/sequencer.component';

@NgModule({
  declarations: [
    AppComponent,
    BassComponent,
    SequencerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
