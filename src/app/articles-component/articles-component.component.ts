import { Component } from '@angular/core';
import { Article } from 'src/models/Article';
import { ProductService } from '../services/product.service';

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

  constructor(private prodcutSeervice:ProductService){}
titre:string="Les articles du jour";
nb!:string;
listeArticle=this.prodcutSeervice.listeArticle;
 
ngOnInit() {
  this.nb = this.listeArticle.length.toString();
}
}
