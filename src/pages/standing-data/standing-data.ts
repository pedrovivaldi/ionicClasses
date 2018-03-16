import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { EliteApi } from '../../shared/elite-api-service';

/**
 * Generated class for the StandingDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-standing-data',
  templateUrl: 'standing-data.html',
})
export class StandingDataPage {
  
  standings: any;

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
      this.eliteApi.getStandings(tournament.id).then(data => {
        this.standings = data;
        loader.dismiss();
      });
    });
  }

}
