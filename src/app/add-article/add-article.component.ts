import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Article } from 'src/models/Article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {

  constructor(private Myservice:ArticleService,private route:Router,private act:ActivatedRoute){}

  A:Article={   
    id:0, 
    titre:"",
    contenu:" ",
    auteur:" ",
    date:new Date('now'),
    categorie:" "
  } 
   add(F: NgForm){
    console.log(F);
    this.Myservice.addArticle(F.value).subscribe(res =>{console.log('Product created');this.route.navigateByUrl('/article');})};
  


}

