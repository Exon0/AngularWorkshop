import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},

  {path:"article",component:ArticlesComponentComponent},
  {path:"offre",component:OffresEmploiComponentComponent},
  {path:"addArticle",component:AddArticleComponent},


  {path:"**",component:NotFoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
