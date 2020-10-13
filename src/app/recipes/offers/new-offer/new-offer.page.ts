import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import {Recipe} from '../../recipes.model';
import {RecipesService} from '../../recipes.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {
  form:FormGroup;
  type:string;
  whatType: any = 'gpu';
  
  constructor(
    private recipesService: RecipesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.type = "gpu";
    this.form= new FormGroup(
      {
        
        imageUrl:new FormControl(null,
        {
          updateOn:'blur',
          validators:[Validators.required]
        }),
        merek:new FormControl(null,
        {
          updateOn:'blur',
          validators:[Validators.required]
        }),
        model:new FormControl(null,
        {
          updateOn:'blur',
          validators:[Validators.required]
        }),
        harga:new FormControl(null,
        {
          updateOn:'blur',
          validators:[Validators.required]
        }),
        stock:new FormControl(null,
        {
          updateOn:'blur',
          validators:[Validators.required]
        }),
        deskripsi:new FormControl(null,
        {
          updateOn:'blur',
          validators:[Validators.required]
        }),
      }
    )
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
    
    
    this.recipesService.addRecipes(
      ('r' + this.recipesService.recipes.length+1),
        this.form.value.imageUrl,
        this.form.value.merek,
        this.form.value.model,
        this.form.value.harga,
        this.form.value.deskripsi,
        this.form.value.stock,newVar);
        this.router.navigate(['./recipes/tabs/offers']);
    
  }

  onFilterUpdate(event: CustomEvent)
  {
    
    if(event.detail.value == "cpu")
    {
      this.whatType = 'cpu';
      this.type = "cpu";

        
      this.form= new FormGroup(
        {
          
          imageUrl:new FormControl(null,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            merek:new FormControl(null,
              {
                updateOn:'blur',
                validators:[Validators.required]
              }),
            model:new FormControl(null,
              {
                updateOn:'blur',
                validators:[Validators.required]
              }),
          
              baseClock:new FormControl(null,
                {
                  updateOn:'blur',
                  validators:[Validators.required]
                }),
              boostClock:new FormControl(null,
                {
                  updateOn:'blur',
                  validators:[Validators.required]
                }),
            cores:new FormControl(null,
              {
                updateOn:'blur',
                validators:[Validators.required]
              }),
              threads:new FormControl(null,
                {
                  updateOn:'blur',
                  validators:[Validators.required]
                }),
                harga:new FormControl(null,
                  {
                    updateOn:'blur',
                    validators:[Validators.required]
                  }),
                  stock:new FormControl(null,
                    {
                      updateOn:'blur',
                      validators:[Validators.required]
                    }),
                    deskripsi:new FormControl(null,
                      {
                        updateOn:'blur',
                        validators:[Validators.required]
                      }),
        }
      )
    }
    else if(event.detail.value == "ram")
    {
      this.whatType = 'ram';
      this.type = "ram";
      this.form= new FormGroup(
        {
          
          imageUrl:new FormControl(null,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            merek:new FormControl(null,
              {
                updateOn:'blur',
                validators:[Validators.required]
              }),
            model:new FormControl(null,
              {
                updateOn:'blur',
                validators:[Validators.required]
              }),
              speed:new FormControl(null,
                {
                  updateOn:'blur',
                  validators:[Validators.required]
                }),
              size:new FormControl(null,
                {
                  updateOn:'blur',
                  validators:[Validators.required]
                }),
                harga:new FormControl(null,
                  {
                    updateOn:'blur',
                    validators:[Validators.required]
                  }),
                  stock:new FormControl(null,
                    {
                      updateOn:'blur',
                      validators:[Validators.required]
                    }),
                    deskripsi:new FormControl(null,
                      {
                        updateOn:'blur',
                        validators:[Validators.required]
                      }),
        }
      )
    }
    else if(event.detail.value == "motherboard")
    {
      this.whatType = 'motherboard'
      this.type = "motherboard";
      
        
      this.form= new FormGroup(
        {
          
          imageUrl:new FormControl(null,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            merek:new FormControl(null,
              {
                updateOn:'blur',
                validators:[Validators.required]
              }),
            model:new FormControl(null,
              {
                updateOn:'blur',
                validators:[Validators.required]
              }),
              chipset:new FormControl(null,
                {
                  updateOn:'blur',
                  validators:[Validators.required]
                }),
              socket:new FormControl(null,
                {
                  updateOn:'blur',
                  validators:[Validators.required]
                }),
                harga:new FormControl(null,
                  {
                    updateOn:'blur',
                    validators:[Validators.required]
                  }),
                  stock:new FormControl(null,
                    {
                      updateOn:'blur',
                      validators:[Validators.required]
                    }),
                    deskripsi:new FormControl(null,
                      {
                        updateOn:'blur',
                        validators:[Validators.required]
                      }),
        }
      )
      
    }
    else if(event.detail.value == "gpu")
    {
      this.whatType = 'gpu'
      this.type = "gpu";
      
      this.form= new FormGroup(
        {
          
          imageUrl:new FormControl(null,
            {
              updateOn:'blur',
              validators:[Validators.required]
            }),
            merek:new FormControl(null,
              {
                updateOn:'blur',
                validators:[Validators.required]
              }),
            model:new FormControl(null,
              {
                updateOn:'blur',
                validators:[Validators.required]
              }),
              harga:new FormControl(null,
                {
                  updateOn:'blur',
                  validators:[Validators.required]
                }),
                stock:new FormControl(null,
                  {
                    updateOn:'blur',
                    validators:[Validators.required]
                  }),
                  deskripsi:new FormControl(null,
                    {
                      updateOn:'blur',
                      validators:[Validators.required]
                    }),
        }
      )
    }
  }
}
