import { Component } from '@angular/core';
import { Emploi } from 'src/models/Emlpoi';

@Component({
  selector: 'app-offres-emploi-component',
  templateUrl: './offres-emploi-component.component.html',
  styleUrls: ['./offres-emploi-component.component.css']
})
export class OffresEmploiComponentComponent {

  searchString: string = "";
  
  listeEmlpoi:Emploi[]=[
    {reference: "emp1",titre:"webDev",entreprise:"Esprit",etat:false},
    {reference: "emp2",titre:"Designer",entreprise:"Actia",etat:true},
    {reference: "emp3",titre:"IT support",entreprise:"ooredoo",etat:false},
    {reference: "emp4",titre:"Manager",entreprise:"STEG",etat:true},

    
  ];
  filtredEmlpoi:Emploi[]=[ {reference: "emp1",titre:"webDev",entreprise:"Esprit",etat:false},
  {reference: "emp2",titre:"Designer",entreprise:"Actia",etat:true},
  {reference: "emp3",titre:"IT support",entreprise:"ooredoo",etat:false},
  {reference: "emp4",titre:"Manager",entreprise:"STEG",etat:true},];
  nb!:number;
  bilan() {
    this.nb=0;
    for (let e of this.listeEmlpoi){
      if(e.etat==true)
      this.nb++;
    }
  }

  search(){

  
 if(this.searchString.length>=1 )  {   this.filtredEmlpoi=this.listeEmlpoi.filter(Emploi=>Emploi.entreprise.includes(this.searchString));}
  else {this.filtredEmlpoi=this.listeEmlpoi;}
  
}

  
}
