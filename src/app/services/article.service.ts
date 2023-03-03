import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { count } from 'rxjs';
import { Article } from 'src/models/Article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3000/article";
   listeArticle:Article[]=[];

  getNumberOf(listeArticle:any[], critiria:string, value:any){

    return this.listeArticle.filter(item => item[critiria] === value).length;
   
  } 

  getAllArticles(){
    return this.http.get(this.url);
  }

  getArticleById(id:number){
    return this.http.get(this.url+`/$id`);
  }

  addArticle(a: Article){
    return this.http.post(this.url,a);
  }


  updateArticle(id:number,a:Article){
    return  this.http.put(this.url+`/$id`,a);
  }

  deleteArticle(id:number){
    return this.http.delete(this.url+'/'+id);
  }
}
