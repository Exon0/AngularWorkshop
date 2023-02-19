import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Article } from 'src/models/Article';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {

  A:Article={    
    titre:"",
    contenu:"",
    auteur:"",
    date:new Date(),
    categorie:""
  } 
   add(F: NgForm){
    console.log(F);
  }

}
