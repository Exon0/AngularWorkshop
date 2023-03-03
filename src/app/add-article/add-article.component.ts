import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Article } from 'src/models/Article';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent {

  constructor(private Myservice:ArticleService){}

  A!:Article;
   add(F: NgForm){
    console.log(F);
    this.Myservice.addArticle(F.value).subscribe();
  }

}
