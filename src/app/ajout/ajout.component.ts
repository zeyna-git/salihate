import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajout',
  templateUrl: './ajout.component.html',
  styleUrls: ['./ajout.component.scss']
})
export class AjoutComponent implements OnInit {
  form:any={}
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  ajouter(){
    this.form.idUser=1
    console.log(this.form)
    this.add_ka(this.form)
  }
  add_ka(ka:any){
    /*
    ka:any={
      idKA:'int(11) (primary key)',
idUser:'int(11)',
description:'text',
texte:'text',
date:'datetime'
    }
    */
    //transformation des parametres à envoyer
    let formdata=new FormData()
    for (const key in ka) {
      formdata.append(key,ka[key])
    }

    let api_url="https://api.h24code.com/sunuka_backend/ka/add" 
    this.http.post(api_url,formdata).subscribe((reponse:any)=>{
      //when success
      if(reponse.status){
        console.log("Opération effectuée avec succés sur la table ka. Réponse= ",reponse)
      }else{
        console.log("L'opération sur la table ka a échoué. Réponse= ",reponse)
      }
    },
    (error:any)=>{
      //when error
      console.log("Erreur inconnue! ",error)
    })
  }
}
