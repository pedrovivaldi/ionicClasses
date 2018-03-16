import { Component } from '@angular/core';
import { LoadingController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { EliteApi } from '../../shared/elite-api-service';
import { TournamentDataPage } from '../tournament-data/tournament-data';

/**
 * Generated class for the TournamentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

tournaments: any;

  /*tournaments = [
    {id: 1, name: "Campeonato Paulista", teams: [
      {id: 1, name: "Ponte Preta", description: "Maior do Interior"},
      {id: 2, name: "Guarani", description: "Falido"}
    ]},
    {id: 2, name: "Campeonato Espanhol", teams: [
      {id: 1, name: "Real Madrid", description: "Hala Madrid"},
      {id: 2, name: "Barcelona", description: "Visca Barca"}
    ]},
    {id: 2, name: "Campeonato Inglês", teams: [
      {id: 1, name: "Maschester United", description: "Red Devils"},
      {id: 2, name: "Maschester City", description: "Blues"}
    ]}
  ]*/

  constructor(public navCtrl: NavController, public navParams: NavParams, public eliteApi: EliteApi,
              public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TournamentsPage');

    let loader = this.loadingController.create({content: "Getting data..."});
    loader.present().then(() => {
      this.eliteApi.getTournaments().then(data => {
        this.tournaments = data;
        loader.dismiss();
      });
    });
  }

  manuallyGoBack() {
    this.navCtrl.pop();
  }

  tournamentTapped($event, tournament) {
    this.navCtrl.push(TournamentDataPage, tournament);
  }
}
