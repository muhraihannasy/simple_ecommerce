import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from 'src/app/service/util/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCTRL: NavController,
    private util:UtilService,
  ) { }

  ngOnInit() {
  }

  login() {
    this.util.setMenuState(true);
    this.navCTRL.navigateRoot('/home', {animationDirection: "forward"});
  }

}
