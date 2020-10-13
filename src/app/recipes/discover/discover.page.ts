import { Component, OnInit } from '@angular/core';
import { IonItemSliding, IonSegment } from '@ionic/angular';
import { Recipe } from '../recipes.model';
import {RecipesService} from '../recipes.service';
import { ModalController } from '@ionic/angular';
import { ModalSample1Component } from '../components/modal-sample1/modal-sample1.component';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  private recipes: Recipe[];
  
  private FavList: string[];
  viewMode:string = "list";

  constructor(
    private recipesService: RecipesService,
    public modalCtrl: ModalController
    ) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllEligableRecipes();
    //console.log(this.recipes);
    //this.FavList = [];
  }
  ionViewWillEnter(){
    this.ngOnInit();
   }


  fav(recipe: Recipe, slidingItem: IonItemSliding)
  {
    slidingItem.close();
    var duplicate = false;
    for(var b=0;b<this.FavList.length;b++)
    {
      if(this.FavList[b] == recipe.id)
        duplicate = true
    }
    if(!duplicate)
      this.FavList.push(recipe.id);
    
  }
  share(recipe: Recipe, slidingItem: IonItemSliding)
  {
    slidingItem.close();
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

  

  async add()
  {
    const modal = await this.modalCtrl.create(
      {
        component: ModalSample1Component
        
      }
    );
    
    modal.onDidDismiss().then(resultData =>
      {
        const hasil = resultData['nama'];
        console.log(resultData.data, resultData.role);
        //this.recipesService.addRecipes(hasil);
        this.recipes = this.recipesService.getAllRecipes();   
      });

    return await modal.present();
  }
}
