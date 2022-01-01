import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../service/global.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  form: any = {}
  reponse: any = {}
  un_ka: any = {}
  les_commentaires: any = []
  constructor(private aroute: ActivatedRoute, private http: HttpClient, public global: GlobalService,public datepipe: DatePipe) {
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
        this.get_commentaire()
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
  valider() {
    if (this.form.texte == undefined || this.form.texte == "") {
      alert("Le commentaire ne doit pas être vide")
    } else {
      this.form.idKa = this.un_ka.idKA
      this.form.idUser = this.global.user.idUser
      this.form.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');
      this.add_commentaire(this.form)
    }
  }
  add_commentaire(commentaire: any) {
    //transformation des parametres à envoyer
    let formdata = new FormData()
    for (const key in commentaire) {
      formdata.append(key, commentaire[key])
    }

    let api_url = this.global.host+"commentaire/add"
    this.http.post(api_url, formdata).subscribe((reponse: any) => {
      //when success
      if (reponse.status) {
        this.form = {}
        this.reponse = {}
        this.get_commentaire()
        alert("Opération effectuée avec succés sur la table commentaire")
        console.log("Opération effectuée avec succés sur la table commentaire. Réponse= ", reponse)
      } else {
        console.log("L'opération sur la table commentaire a échoué. Réponse= ", reponse)
      }
    },
      (error: any) => {
        //when error
        console.log("Erreur inconnue! ", error)
      })
  }
  get_commentaire() {
    let api_url = this.global.host + "commentaire/get_nombre_reponse?idKA="+this.un_ka.idKA;
    this.http.get(api_url).subscribe((reponse: any) => {
      //when success
      if (reponse.status) {
        this.les_commentaires = reponse.data
        console.log("Opération effectuée avec succés sur la table commentaire. Réponse= ", reponse);
      } else {
        console.log("L'opération sur la table commentaire a échoué. Réponse= ", reponse);
      }
    },
      (error: any) => {
        //when error
        console.log("Erreur inconnue! ", error);
      })
  }
  repondre_comentaire(item: any) {
    if (item.reponse == undefined || item.reponse == "") {
      alert("La réponse ne doit pas être vide")
    } else {
      this.reponse.texte = item.reponse
      this.reponse.idKa = this.un_ka.idKA
      this.reponse.idUser = this.global.user.idUser
      this.reponse.date = this.datepipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss')
      this.reponse.idParent = item.idComm
      let formdata = new FormData()
      for (const key in this.reponse) {
        formdata.append(key, this.reponse[key])
      }

      let api_url = this.global.host+"commentaire/add"
      this.http.post(api_url, formdata).subscribe((reponse: any) => {
        //when success
        if (reponse.status) {
          item.reponse=undefined
          item.bool=false
          this.reponse = {}
          this.get_commentaire()
          alert("Opération effectuée avec succés sur la table commentaire")
          console.log("Opération effectuée avec succés sur la table commentaire. Réponse= ", reponse)
        } else {
          console.log("L'opération sur la table commentaire a échoué. Réponse= ", reponse)
        }
      },
        (error: any) => {
          //when error
          console.log("Erreur inconnue! ", error)
        })
    }
  }
}
