import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { GroceryItem } from '../../models/grocery-item/grocery-item.interface';
import { AddItemPage } from '../add-item/add-item';
import { Observable } from 'rxjs/Observable';
import { HomePage } from '../home/home';

@Component({
  selector: 'page-my-groceries',
  templateUrl: 'my-groceries.html',
})
export class MyGroceriesPage {

  groceryList: Observable<GroceryItem[]> = null;

  userId: string;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private toast: ToastController, public navCtrl: NavController, public navParams: NavParams, private database: AngularFireDatabase) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyGroceriesPage');
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid) {
        this.userId = data.uid;
        this.groceryList = this.db.list(this.userId).valueChanges();
        this.toast.create({
           message: 'Welcome to Golden Gate Fridge', duration: 3000}).present();
      }
      else {
        this.toast.create({
        message: 'Could not find user',
        duration: 3000
        }).present();
       }
     })
   }



   navToAddItemPage() {
     this.navCtrl.push(AddItemPage);
   }

   navToBarcodeScanner() {
     this.navCtrl.setRoot(HomePage);
   }

}
