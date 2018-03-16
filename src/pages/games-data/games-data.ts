import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EliteApi } from '../../shared/elite-api-service';

/**
 * Generated class for the GamesDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-games-data',
  templateUrl: 'games-data.html',
})
export class GamesDataPage {

  games: any;

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
      this.eliteApi.getGames(tournament.id).then(data => {
        this.games = data;
        loader.dismiss();
      });
    });
  }

}
