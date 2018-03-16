import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TeamsDataPage } from './teams-data';

@NgModule({
  declarations: [
    TeamsDataPage,
  ],
  imports: [
    IonicPageModule.forChild(TeamsDataPage),
  ],
})
export class TeamsDataPageModule {}
