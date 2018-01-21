import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyGroceriesPage } from './my-groceries';

@NgModule({
  declarations: [
    MyGroceriesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyGroceriesPage),
  ],
})
export class MyGroceriesPageModule {}
