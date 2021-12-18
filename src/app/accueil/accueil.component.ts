import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  les_ka:any=[]
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.get_ka()
  }
  get_ka(){
    let api_url="http://192.168.1.17/sunuka.com/backend_php/ka/get"; // recevoir tout
    //let api_url="http://192.168.1.17/sunuka.com/backend_php/ka/get?id_ka=1"; // recevoir le(a) ka d'identifiant 1

    this.http.get(api_url).subscribe((reponse:any)=>{
        //when success
        if(reponse.status){
          this.les_ka=reponse.data
            console.log("Opération effectuée avec succés sur la table ka. Réponse= ",reponse);
        }else{
            console.log("L'opération sur la table ka a échoué. Réponse= ",reponse);
        }
    },
    (error:any)=>{
        //when error
        console.log("Erreur inconnue! ",error);
    })
}

}
