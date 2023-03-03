import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/models/Article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-articles-component',
  templateUrl: './articles-component.component.html',
  styleUrls: ['./articles-component.component.css']
})
export class ArticlesComponentComponent {
on() {
  var s="titre";
  console.log(this.prodcutSeervice.getNumberOf(this.listeArticle,s,"CMD"));

}


  constructor(private prodcutSeervice:ArticleService,private router:Router){}
titre:string="Les articles du jour";
nb!:string;
listeArticle!:any;
 
ngOnInit() {
  //this.nb = this.listeArticle;
 // this.nb=this.listeArticle.subscribe();
  this.prodcutSeervice.getAllArticles().subscribe(val=>this.listeArticle=val);
  console.log(this.listeArticle)
}


deleteArticles(id:number){
  this.prodcutSeervice.deleteArticle(id).subscribe();
  this.prodcutSeervice.getAllArticles().subscribe(val=>this.listeArticle=val);
}

modifyArticle(id:number){
  //article:any  = this.prodcutSeervice.getArticleById(id);
}

}
