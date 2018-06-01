import { Injectable } from '@angular/core';
import {AlertController, LoadingController} from 'ionic-angular';
import { wmf } from '../../assets/jwmf-1.1.1.min';

@Injectable()
export class MainService {

  constructor(public loadingCtrl: LoadingController, private alertCtrl: AlertController) { }

  initWmfObj(callBack: any): void {
    if ( wmf.ready !== undefined) {
      wmf.ready(() => {
        callBack();
      });
    } else {
      console.log('已经包含wmf，直接使用');
      callBack();
    }
  }

  requirePageData(cmdName: string, params: {[propName: string]: any}, callBack: any): void {
    this.initWmfObj(() => {
      const loading = this.loadingCtrl.create({
        content: '加载中...'
      });
      loading.present();
      wmf.callNativeDelegateFunc(JSON.stringify({
        'cmd': cmdName,
        'params': JSON.stringify(params)
      }), (backData) => {
        loading.dismiss();
        callBack(JSON.parse(backData));
      });
    });
  }

  pageAlert(title: string, content: string, buttonName: string): any {
    const alert = this.alertCtrl.create({
      title: title,
      subTitle: content,
      buttons: [buttonName]
    });
    return alert;
  }
}
