import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TournamentDataPage } from './tournament-data';

@NgModule({
  declarations: [
    TournamentDataPage,
  ],
  imports: [
    IonicPageModule.forChild(TournamentDataPage),
  ]
})
export class TournamentDataPageModule {}
