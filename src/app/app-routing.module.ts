import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './add-article/add-article.component';
import { ArticlesComponentComponent } from './articles-component/articles-component.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OffresEmploiComponentComponent } from './offres-emploi-component/offres-emploi-component.component';
import { UpdateFormComponent } from './update-form/update-form.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},

  {path:"article",component:ArticlesComponentComponent},
  {path:"offre",component:OffresEmploiComponentComponent},
  {path:"addArticle",component:AddArticleComponent},
  {path:'updateArticle/:id',component:UpdateFormComponent},




  {path:"**",component:NotFoundComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
