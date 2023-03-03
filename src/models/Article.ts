export class Article{
    id!:number;
    titre!:string;
    contenu!:string;
    auteur!:string;
    date!:Date;
    categorie!:string;
    [key: string]: any;

}