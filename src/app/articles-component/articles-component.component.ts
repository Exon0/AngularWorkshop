import { Component } from '@angular/core';
import { Article } from 'src/models/article';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent {
titre:string="Les articles du jour";
nb!:string;
listeArticle:Article[]=[
  {    
    titre:"CMD",
    contenu:"CMD QATAR 2022",
    auteur:"MED",
    date:"02/02/2022",
    categorie:"Travail"
  },
  {    
    titre:"CMD",
    contenu:"CMD QATAR 2022",
    auteur:"MED",
    date:"02/02/2022",
    categorie:"Education"
  },
  {    
    titre:"CMD",
    contenu:"CMD QATAR 2022",
    auteur:"MED",
    date:"02/02/2022",
    categorie:"Travail"
  }
]

ngOnInit() {
  this.nb = this.listeArticle.length.toString();
}
}
