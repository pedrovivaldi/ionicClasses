import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GamesDataPage } from './games-data';

@NgModule({
  declarations: [
    GamesDataPage,
  ],
  imports: [
    IonicPageModule.forChild(GamesDataPage),
  ],
})
export class GamesDataPageModule {}
