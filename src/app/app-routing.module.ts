import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewRideComponent } from './new-ride/new-ride.component';
import { BookRideComponent } from './book-ride/book-ride.component';


const routes: Routes = [
  {
    path: '', component: NewRideComponent
  },
  {
    path: 'book', component: BookRideComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
