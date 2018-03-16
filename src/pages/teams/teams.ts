import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { TeamDetailPage } from '../team-detail/team-detail';
import { EliteApi } from '../../shared/elite-api-service';

/**
 * Generated class for the TeamsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html',
})
export class TeamsPage {

  teams: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public eliteApi: EliteApi,
              public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsPage');

    let tournament = this.navParams.data;

    let loader = this.loadingController.create({content: "Getting data..."});
    loader.present().then(() => {
      this.eliteApi.getTeams(tournament.id).then(data => {
        this.teams = data;
        console.log("Loaded: ", data);
        loader.dismiss();
      });
    });
  }

  teamTapped($event, team) {
    this.navCtrl.push(TeamDetailPage, team);
  }
}
