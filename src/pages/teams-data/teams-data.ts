import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EliteApi } from '../../shared/elite-api-service';
import { TeamDetailPage } from '../team-detail/team-detail';

/**
 * Generated class for the TeamsDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-teams-data',
  templateUrl: 'teams-data.html',
})
export class TeamsDataPage {

  teams: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public eliteApi: EliteApi,
    public loadingController: LoadingController) {
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsDataPage');

    let tournament = this.navParams.data;

    let loader = this.loadingController.create({content: "Getting data..."});
    loader.present().then(() => {
      this.eliteApi.getTeams(tournament.id).then(data => {
        this.teams = data;
        loader.dismiss();
      });
    });
  }

  teamTapped($event, team) {
    this.navCtrl.push(TeamDetailPage, team);
  }

}
