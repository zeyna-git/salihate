import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../service/global.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  form:any={}
  un_ka: any = {}
  constructor(private aroute: ActivatedRoute, private http: HttpClient, public global: GlobalService) {
    aroute.params.subscribe((params: any) => {
      console.log(params)
      if (params["idKA"]) {
        this.get_ka(params["idKA"])
      } else {
        alert("Url incorrect")
      }
    })
  }
  ngOnInit(): void {

  }
  get_ka(idKA: number) {
    let api_url = this.global.host + "ka/get?idKA=" + idKA; // recevoir le(a) ka d'identifiant 1

    this.http.get(api_url).subscribe((reponse: any) => {
      //when success
      if (reponse.status) {
        this.un_ka = reponse.data[0]
        console.log("Opération effectuée avec succés sur la table ka. Réponse= ", reponse);
      } else {
        console.log("L'opération sur la table ka a échoué. Réponse= ", reponse);
      }
    },
      (error: any) => {
        //when error
        console.log("Erreur inconnue! ", error);
      })
  }

  //////////////////////////////// Aimer ka////////////////////

  aimer(){
    this.form.idUser=1
    this.form.idKA=this.un_ka.idKA
    console.log(this.form)
    this.add_aime(this.form)
  }

  add_aime(aime:any){
    /*
    aime:any={
      iduser:'int(11)',
      idKa:'int(11)',
      date:'datetime'
    }
    */
    //transformation des parametres à envoyer
    let formdata=new FormData()
    for (const key in aime) {
      formdata.append(key,aime[key])
    }

    let api_url="http://192.168.1.10/sunuka.com/backend_php/aime/add" 
    this.http.post(api_url,formdata).subscribe((reponse:any)=>{
      //when success
      if(reponse.status){
        console.log("Opération effectuée avec succés sur la table aime. Réponse= ",reponse)
      }else{
        console.log("L'opération sur la table aime a échoué. Réponse= ",reponse)
      }
    },
    (error:any)=>{
      //when error
      console.log("Erreur inconnue! ",error)
    })
  }

}
