import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TournamentDataPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tournament-data',
  templateUrl: 'tournament-data.html'
})
export class TournamentDataPage {

  teamsDataRoot = 'TeamsDataPage'
  gamesDataRoot = 'GamesDataPage'
  standingDataRoot = 'StandingDataPage'

  tournament: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tournament = navParams.data;
  }

}
