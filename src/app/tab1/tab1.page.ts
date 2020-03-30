import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {ShowModalComponent} from './../component/show-modal/show-modal.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public modalController: ModalController) {

  }

  //展示modal
  async onClick(){
    const modal = await this.modalController.create({
      component: ShowModalComponent
    });
    return await modal.present();
  }
}
