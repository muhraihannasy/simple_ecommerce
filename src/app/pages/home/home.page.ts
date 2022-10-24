import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { DataService } from 'src/app/service/data.service';
import { UtilService } from 'src/app/service/util/util.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public categories;
  public products;

  constructor(
    private util: UtilService,
    private dataService: DataService,
    private loadingCtrl: LoadingController,
  ) {}

  ngOnInit() {
    this.loadData()
  }

  async loadData() {
    const loading = await this.loadingCtrl.create({
      message: 'Loading...',
      spinner: 'bubbles',
    }); 
    await loading.present();

    this.dataService.get('categories').subscribe((data) => {
      loading.dismiss();
      this.categories = data;
    });

    this.dataService.get('products').subscribe((data) => {
      loading.dismiss();
      this.products = data;
      console.log(data)
    });
  }

}
