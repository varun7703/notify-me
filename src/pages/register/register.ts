import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
days:Array<{dt:string, value:number}>;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.days=[{
dt:'Day 1',value:1},
{dt:'Day 2',value:2},
{dt:'Day 3',value:3},
{dt:'Day 4',value:4},
{dt:'Day 5',value:5}];
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

}
