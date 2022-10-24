import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Product } from 'src/app/model/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
})
export class DetailProductPage implements OnInit {
  public product;

  constructor(
    private activedRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private dataService: DataService,
  ) { }

  ngOnInit() {
    this.loadProduct();
  }

  async loadProduct() {
    const id = this.activedRoute.snapshot.paramMap.get('id');
    const loading = await this.loadingCtrl.create({
      message: "Loading...",
      spinner: 'bubbles',
    });
    await loading.present();

    this.dataService.getDetail('products', Number(id)).subscribe((e) => {
      loading.dismiss();

      this.product = e;
    });
  }

  addToCart(id) {
    const idCart = Math.floor(Math.random() * 1000000000);
    const cart = {
      id: idCart,
      product_id: id,
      quantity: 1,
      total_price: this.product?.price,
    };

    this.dataService.post('carts', JSON.stringify(cart)).subscribe((e) => {
      console.log(e)
    })
  }

}
