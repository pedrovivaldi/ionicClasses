import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
//import { ListPage } from '../pages/list/list';

import { GamePage } from '../pages/game/game';
import { TournamentsPage } from '../pages/tournaments/tournaments';
import { TeamDetailPage } from '../pages/team-detail/team-detail';
import { TeamsPage } from '../pages/teams/teams';
import { MyTeamsPage } from '../pages/my-teams/my-teams';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MyTeamsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'My Teams', component: MyTeamsPage },
      { title: 'Teams', component: TeamsPage },
      { title: 'Team Detail', component: TeamDetailPage },
      { title: 'Game', component: GamePage },
      { title: 'Tournaments', component: TournamentsPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
