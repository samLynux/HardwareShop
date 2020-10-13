import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../recipes.model';
import {RecipesService} from '../../recipes.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { ActionSheetController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { ModalSample1Component } from '../../components/modal-sample1/modal-sample1.component';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html', 
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  loadedRecipe: Recipe;
  whatType: any = 'gpu';

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    public alertCtrl: AlertController,
    public modalCtrl: ModalController,
    public loadingCtrl: LoadingController,
    public actionSheetCtrl: ActionSheetController,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
    
    this.activatedRoute.paramMap.subscribe( paramMap =>
      {
        if(!paramMap.has('recipeId')){return;}
        const recipeId = paramMap.get('recipeId');
        this.loadedRecipe = this.recipesService.getRecipe(recipeId);
      })
    if(this.loadedRecipe.typeDetails[0] == "cpu")
    {
      this.whatType = 'cpu';
    }
    else if(this.loadedRecipe.typeDetails[0] == "ram")
    {
      this.whatType = 'ram';
    }
    else if(this.loadedRecipe.typeDetails[0] == "motherboard")
    {
      this.whatType = 'motherboard';
    }
    else if(this.loadedRecipe.typeDetails[0] == "gpu")
    {
      this.whatType = 'gpu';
    }
  }

  deleteRecipe()
  {
    this.presentLoading().then(() =>
    {
      this.recipesService.deleteRecipe(this.loadedRecipe.id);
      this.router.navigate(['./recipes']);
      this.presentToast();
      
    });
    
  }

  async presentAlert()
  {
    const alert = await this.alertCtrl.create(
      {
        header:'Hapus Kontak?',
        message: 'Apakan yakin? Jika sudah hilang tidak akan bisa kembali lagi',
        buttons:[
          {
            text:'Batal',
            role:'cancel'
          },
          {
            text: 'Hapus',
            handler: () => this.deleteRecipe()
          }
        ]
      }
    );
    await alert.present();
  }
  
  async presentToast() {
    const toasty = await this.toastCtrl.create({
      message: 'Kontak Terhapus.',
      duration: 2000
    });
    toasty.present();
  }
  async presentModal()
  {
    const modal = await this.modalCtrl.create(
      {
        component: ModalSample1Component,
        componentProps: {selectedRecipe: this.loadedRecipe}
      }
    );

    modal.onDidDismiss().then(resultData =>
      {
        console.log(resultData.data, resultData.role);
      });

    return await modal.present();
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
  async presentAction()
  {
    const actionSheet = await this.actionSheetCtrl.create(
      {
        header: 'Recipe Action',
        buttons:[
          {
            text:'Edit',
            role:'edit',
            icon:'create-outline',
            handler: () =>
            {
              console.log('Edit clicked');
            }
          },
          {
            text:'New',
            icon:'add',
            handler: () =>
            {
              console.log('New clicked');
            }
          },
          {
            text:'Share',
            icon:'share',
            handler: () =>
            {
              console.log('Share clicked');
            }
          },
          {
            text:'Cancel',
            role:'cancel',
            icon:'close',
            handler: () =>
            {
              console.log('Cancel clicked');
            }
          }
        ]
      }
    );
    await actionSheet.present();
  }
}


