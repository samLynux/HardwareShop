import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../../recipes.model';
import {RecipesService} from '../../recipes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  form:FormGroup;
  type:string;
  whatType: any = 'gpu';
  loadedRecipe: Recipe;


  constructor(
    private recipesService: RecipesService,
    private activatedRoute: ActivatedRoute,
    private router: Router
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
        this.type = "cpu";
        this.form= new FormGroup(
          {
            
            imageUrl:new FormControl(this.loadedRecipe.imageUrl,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            merek:new FormControl(this.loadedRecipe.merek,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            model:new FormControl(this.loadedRecipe.model,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            harga:new FormControl(this.loadedRecipe.harga,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            stock:new FormControl(this.loadedRecipe.stock,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            deskripsi:new FormControl(this.loadedRecipe.deskripsi,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            baseClock:new FormControl(this.loadedRecipe.typeDetails[1],
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            boostClock:new FormControl(this.loadedRecipe.typeDetails[2],
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            cores:new FormControl(this.loadedRecipe.typeDetails[3],
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            threads:new FormControl(this.loadedRecipe.typeDetails[4],
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
          }
        )
      }
      else if(this.loadedRecipe.typeDetails[0] == "ram")
      {
        this.whatType = 'ram';
        this.type = "ram";
        this.form= new FormGroup(
          {
            
            imageUrl:new FormControl(this.loadedRecipe.imageUrl,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            merek:new FormControl(this.loadedRecipe.merek,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            model:new FormControl(this.loadedRecipe.model,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            harga:new FormControl(this.loadedRecipe.harga,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            stock:new FormControl(this.loadedRecipe.stock,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            deskripsi:new FormControl(this.loadedRecipe.deskripsi,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            speed:new FormControl(this.loadedRecipe.typeDetails[1],
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            size:new FormControl(this.loadedRecipe.typeDetails[2],
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
          }
        )
      }
      else if(this.loadedRecipe.typeDetails[0] == "motherboard")
      {
        this.whatType = 'motherboard'
        this.type = "motherboard";
        
        this.form= new FormGroup(
          {
            
            imageUrl:new FormControl(this.loadedRecipe.imageUrl,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            merek:new FormControl(this.loadedRecipe.merek,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            model:new FormControl(this.loadedRecipe.model,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            harga:new FormControl(this.loadedRecipe.harga,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            stock:new FormControl(this.loadedRecipe.stock,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            deskripsi:new FormControl(this.loadedRecipe.deskripsi,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            chipset:new FormControl(this.loadedRecipe.typeDetails[1],
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            socket:new FormControl(this.loadedRecipe.typeDetails[2],
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
          }
        )
        
      }
      else if(this.loadedRecipe.typeDetails[0] == "gpu")
      {
        this.whatType = 'gpu'
        this.type = "gpu";
        
        this.form= new FormGroup(
          {
            
            imageUrl:new FormControl(this.loadedRecipe.imageUrl,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            merek:new FormControl(this.loadedRecipe.merek,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            model:new FormControl(this.loadedRecipe.model,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            harga:new FormControl(this.loadedRecipe.harga,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            stock:new FormControl(this.loadedRecipe.stock,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            deskripsi:new FormControl(this.loadedRecipe.deskripsi,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
          }
        )
      }
  }

  onSubmit()
  {
    var newVar;
    if(this.type == "gpu")
    {
      newVar = [this.type];
    }
    else if(this.type == "cpu")
    {
      newVar = [this.type,this.form.value.baseClock,this.form.value.boostClock,this.form.value.cores,this.form.value.threads];
    }
    else if(this.type == "ram")
    {
      newVar = [this.type,this.form.value.speed,this.form.value.size];
    }
    else if(this.type == "motherboard")
    {
      newVar = [this.type,this.form.value.chipset,this.form.value.socket];
    }
    
    this.recipesService.editRecipe(
      this.loadedRecipe.id,
      this.form.value.imageUrl,
      this.form.value.merek,
      this.form.value.model,
      this.form.value.harga,
      this.form.value.stock,
      this.form.value.deskripsi,
      newVar);
    this.router.navigate(['./recipes/tabs/offers']);
    
  }

  
}


