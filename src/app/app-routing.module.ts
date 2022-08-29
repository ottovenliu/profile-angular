import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './feature/profile/profile.component';

const routes: Routes = [
  // { path: 'Home-Page', component: HomePageComponent },
  { path: 'My-Profile', component: ProfileComponent },
  { path: '**', redirectTo: '/My-Profile', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
