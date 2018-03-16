import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StandingDataPage } from './standing-data';

@NgModule({
  declarations: [
    StandingDataPage,
  ],
  imports: [
    IonicPageModule.forChild(StandingDataPage),
  ],
})
export class StandingDataPageModule {}
