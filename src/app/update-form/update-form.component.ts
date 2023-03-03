import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/models/Article';
import { ArticleService } from '../services/article.service';


@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent {

  constructor(private Myservice:ArticleService,private act:ActivatedRoute,private route:Router){}

  A:Article={   
    id:0, 
    titre:"ffff",
    contenu:" ",
    auteur:" ",
    date:new Date('now'),
    categorie:" "
  }  
   ngOnInit() {
    this.act.paramMap.subscribe(next=>this.Myservice.getArticleById(Number(next.get('id'))).subscribe(res=>{this.A=res;console.log(res)}))
   
  }
    
  update(F:NgForm){
      this.Myservice.updateArticle(this.A.id,F.value).subscribe(res =>{console.log('Product updated');this.route.navigateByUrl('/article');}) 
  }
}