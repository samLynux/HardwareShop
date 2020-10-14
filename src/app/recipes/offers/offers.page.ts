import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { IonItemSliding, IonSegment } from '@ionic/angular';
import {RecipesService} from '../recipes.service';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  viewMode:string = "grid";
  recipes: Recipe[];
 

  constructor(
    private recipesService: RecipesService,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    private router: Router
    ) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
  }
  edit(id:string,slidingItem:IonItemSliding)
  {
    slidingItem.close();
    this.router.navigate(['./recipes/tabs/offers/'+id]);
  }

  deleteThis(id:string)
  {
    this.presentLoading().then(() =>
    {
      this.recipesService.deleteRecipe(id);
      this.ngOnInit();
      //this.presentToast();
      
    });
    
    
  }

  ionViewWillEnter(){
    this.ngOnInit();
   }

  onFilterUpdate(event: CustomEvent)
  {
    if(event.detail.value == "list")
    {
      this.viewMode = "list";
    }
    else if(event.detail.value == "grid")
    {
      this.viewMode = "grid";
    }
  }

  async deleteAlert(id:string,slidingItem:IonItemSliding)
  {
    slidingItem.close();
    const alert = await this.alertCtrl.create(
      {
        header:'Hapus Produk?',
        message: 'Apakan yakin?',
        buttons:[
          {
            text:'Cancel',
            role:'cancel'
          },
          {
            text: 'Delete',
            handler: () => this.deleteThis(id)
          }
        ]
      }
    );
    await alert.present();
  }

  async presentLoading()
  {
    const loading = await this.loadingCtrl.create(
      {
        message: 'Deleting...',
        duration: 2000
      }
    );
    await loading.present();

    const {role,data} = await loading.onDidDismiss();
    console.log('loading dismissed');
  }
}
