import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {ImageDataProvider} from "../../providers/image-data/image-data";
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
/**
 * Generated class for the AdminPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  imageUrl: string = "";
  imageUrl2: string = "";
  selectedFile: File;
  selectedFile2: File;
  url: any;
  AdminScreenIndex: number;
  prueba: any = "Texto";
  clients: any;
  clientsfixed: any;
  clientsRTN: any;
  clientsTelephone: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http,public image : ImageDataProvider) {
    this.chargeClients();
  }
  chargeClients() {
    this.http.get('server/get_client.php').map(res => res.json()).subscribe(data => {
      this.clients = data , err => {
        console.log("Oops!");
      };
    });
    this.http.get('server/get_client_rtn.php').map(res => res.json()).subscribe(data => {
      this.clientsRTN = data, err => {
        console.log("Oops!");
      };
    });
    this.http.get('server/get_client_phone.php').map(res => res.json()).subscribe(data => {
      this.clientsTelephone = data, err => {
        console.log("Oops!");
      };
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminPage');
  }
  loadimage() {
    
  }
  handleFileInput(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }
  handleFileInput2(event) {
    console.log(event);
    this.selectedFile = event.target.files[0];
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.selectedFile);
  }
 
  upload() {
    // upload code goes here
  }
  uploadPic(){
    console.log(this.selectedFile.name);
    console.log(this.selectedFile.type);
    let headers 	: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'}),
          fileName  : any       = Date.now() + '.' + this.selectedFile.type,
          options 	: any		= { "name" : this.selectedFile, "file" : this.selectedFile };

      return this.http.post("server/upload.php", JSON.stringify(options), headers).subscribe();
    
  }
  DeleteImageCarrOfer(ImageId) {

  }
  DeleteImageCarrMain(ImageId) {

  }
}
