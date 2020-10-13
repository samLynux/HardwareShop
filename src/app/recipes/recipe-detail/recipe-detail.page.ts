import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import {RecipesService} from '../recipes.service';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    public alertCtrl: AlertController,
    public toastCtrl: ToastController
  ) { }

  ngOnInit() {
    
    this.activatedRoute.paramMap.subscribe( paramMap =>
      {
        if(!paramMap.has('recipeId')){return;}
        const recipeId = paramMap.get('recipeId');
        this.loadedRecipe = this.recipesService.getRecipe(recipeId);
      })
  }

  deleteRecipe()
  {
    this.recipesService.deleteRecipe(this.loadedRecipe.id);
    this.presentToast();
    this.router.navigate(['./recipes']);
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
}
