import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BassComponent } from './components/bass/bass.component';
const routes: Routes = [{
  path: 'bass',
  component: BassComponent,
},
{ path: '',
  redirectTo: '/bass',
  pathMatch: 'full'
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
