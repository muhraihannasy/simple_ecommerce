import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { UtilService } from './service/util/util.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})

export class AppComponent implements OnInit {
  public isMenuEnable:boolean = true;
  public selectedIndex:number = 0;

  constructor(
    private util:UtilService,
    private menuCtrl: MenuController,
    private router: Router,
  ) {}

  ngOnInit() {
    this.util.getMenuState().subscribe((e) => {
      this.isMenuEnable = e;
    });
  }

  close(){
    this.menuCtrl.close();
  }

  navigate(path, selectedId){
    this.selectedIndex = selectedId;
    this.router.navigate([path]);
    console.log(this.selectedIndex)
  }
}
