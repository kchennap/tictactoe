import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public http: HttpClient, public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  getGroceryItems() {
    return this.afd.list('/groceryItems/');
  }

  addItem(name) {
    this.afd.list('/groceryItems/').push(name);
  }
 
  removeItem(id) {
    this.afd.list('/groceryItems/').remove(id);
  }

}
