import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-show-modal',
  templateUrl: './show-modal.component.html',
  styleUrls: ['./show-modal.component.scss'],
})
export class ShowModalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  back(){
    this.modalCtrl.dismiss({
      'dismissed':true
    })
  }

}
