import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Recipe } from '../../recipes.model';

@Component({
  selector: 'app-modal-sample1',
  templateUrl: './modal-sample1.component.html',
  styleUrls: ['./modal-sample1.component.scss'],
})
export class ModalSample1Component implements OnInit {
  @Input() selectedRecipe: Recipe;
  @Input() xxxxxx: string;
  

  constructor(
    private modalCtrl: ModalController) { }

  ngOnInit() {}

  onCancel()
  {
    this.modalCtrl.dismiss(null,'cancel');
  }

  onFav()
  {
    //document.getElementById("uangTotal").textContent = this.namaString;
    console.log(this.xxxxxx);
    this.xxxxxx = "";
    

    //this.modalCtrl.dismiss(this.nama);
    
  }

}
