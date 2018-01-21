import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AlertController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

// import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  users : Observable<any>;
  encodeData : string ;
  public people: any;
  encodedData : {} ;
  data = { };
  upc_val = null;
  url = null;
  code = null;
  val = "null";
  value = null;
  option :BarcodeScannerOptions;
  constructor(public navCtrl: NavController, public navParams: NavParams, private barcodeScanner: BarcodeScanner, public http:Http,
    private alertCtrl: AlertController) {
    // this.upc_val = "";
  }


  scanner(){
    // console.log("Hello");
    this.barcodeScanner.scan().then((barcodeData) => {
      // Success! Barcode data is hered
      console.log(barcodeData);
      this.data = barcodeData;
      this.upc_val = barcodeData.text;
      // alert(barcodeData.text);
     }, (err) => {
         // An error occurred
         console.log(err);
     });
     // alert(this.upc_val);
  }

  alert() {
    alert("Hello");
  }

    makeGetRequest() {
      this.val = this.upc_val;
      this.url = "https://api.upcitemdb.com/prod/trial/lookup?upc=" + this.val;
      this.http.get(this.url)
      .subscribe(data => {
       this.value = data.json();
      }, error => {
          console.log(JSON.stringify(error.json()));
      });
  }

  
 /* load() {
    
        console.log(' RestServiceProvider Load Method fro listing');
        let postParams = { param1 : '', param2: '' }
        if (this.data) {
          return Promise.resolve(this.data);
        }
    
        // don't have the data yet
        return new Promise(resolve => {
          this.http.post("YOUR URL", postParams)
            .map(resp => resp.json())
            .subscribe(data => {
              this.data = data;
              resolve(this.data);
            });
        });
      }*/

  /*view() {
    if(this.upc_val){
      this.http.get('https://api.upcitemdb.com/prod/trial/lookup?upc=' + this.upc_val)
      .map(res => res.json())
      .subscribe(res => {
        this.users = res.results;
      }, (err) => {
        alert("Failed at loading data");
      })
    } else {
      alert("Please Scan an Item");
    }
  }*/

}

