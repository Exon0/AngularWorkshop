import { Injectable } from '@angular/core';
import { count } from 'rxjs';
import { Article } from 'src/models/Article';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  listeArticle:Article[]=[
    {    
      titre:"CMD",
      contenu:"CMD QATAR 2022",
      auteur:"MED",
      date:new Date(),
      categorie:"Travail"
    },
    {    
      titre:"CMD",
      contenu:"CMD QATAR 2022",
      auteur:"MED",
      date:new Date(),
      categorie:"Education"
    },
    {    
      titre:"CMD",
      contenu:"CMD QATAR 2022",
      auteur:"MED",
      date:new Date(),
      categorie:"Travail"
    }
  ]

  getNumberOf(listeArticle:any[], critiria:string, value:any){

    return this.listeArticle.filter(item => item[critiria] === value).length;
   
  }
}
