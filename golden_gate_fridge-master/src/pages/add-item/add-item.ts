import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GroceryItem } from '../../models/grocery-item/grocery-item.interface';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { MyGroceriesPage } from '../my-groceries/my-groceries';

/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  item = {} as GroceryItem;
  groceryList: AngularFireList<GroceryItem> = null;
  userId: string;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
    this.afAuth.authState.subscribe(data => {
        this.userId = data.uid;
        this.groceryList = this.db.list(this.userId);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

  addGroceryItem(item: GroceryItem) {
     this.groceryList.push(item);
     this.navCtrl.setRoot(MyGroceriesPage);

  }

}
