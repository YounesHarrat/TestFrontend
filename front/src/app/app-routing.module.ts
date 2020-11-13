import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlepageComponent } from './articlepage/articlepage.component';

const routes: Routes = [
  {path:'ArticlePage', component: ArticlepageComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
