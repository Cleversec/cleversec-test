import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FillCardDetailsComponent } from './components/fill-card-details/fill-card-details.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: FillCardDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
