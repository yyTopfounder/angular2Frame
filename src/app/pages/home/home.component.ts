import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from 'ionic-angular';
import { MainService } from '../../service/main.service';
import { wmf } from '../../../assets/jwmf-1.1.1.min';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  startDate = new Date().toISOString();
  endDate = new Date().toISOString();
  listData: Array<{[propName: string]: string}>;
  showList: boolean;

  constructor(public navCtrl: NavController, private mainService: MainService, private alertCtrl: AlertController) {
    console.log(this.startDate);
    this.requierListData();
  }

  ngOnInit() {
  }

  requierListData(): void {
    /*const beginDate: any = new Date(this.startDate);
    const enDate: any = new Date(this.endDate);*/
    const params = {
      /*'begin_date': beginDate.getFullYear() + '/' + (beginDate.getMonth() + 1) + '/' + beginDate.getDate(),
      'end_date': enDate.getFullYear() + '/' + (enDate.getMonth() + 1) + '/' + enDate.getDate()*/
    };
    this.mainService.requirePageData('getMonitor', params, ( backData ) => {
      console.log('请求数据成功');
      console.log(JSON.parse(backData.params).data_list);
      if ( backData.state === '200') {
        if ( JSON.parse(backData.params).data_list.length === 0) {
          JSON.parse(backData.params).data_list = [];
          this.showList = false;
          this.mainService.pageAlert('温馨提示', '该日期区间暂无数据', '确定').present();
        } else {
          this.showList = true;
          this.listData = JSON.parse(backData.params).data_list;
        }
      } else {
        this.mainService.pageAlert('温馨提示', backData.msg, '确定').present();
      }
    });
  }

  /*changeDate(event: any): void {
    if ( new Date(this.startDate).getTime() > new Date(this.endDate).getTime()) {
      this.mainService.pageAlert('温馨提示', '开始时间不能大于结束时间', '确定').present();
    } else {
      this.requierListData();
    }
  }*/

  back(): void {
    wmf.WVClose();
  }

}
