import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

import { MasterKeybladeComponent } from './master-keyblade/master-keyblade.component';

const routes: Routes = [
  { path: 'master/:id', component: MasterKeybladeComponent, pathMatch: 'full' },
  { path: '', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
