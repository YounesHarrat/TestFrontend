import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticlepageComponent } from './articlepage/articlepage.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'', component: HomepageComponent, pathMatch:'full'},

  {path:'ArticlePage/:articleId', component: ArticlepageComponent , pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
