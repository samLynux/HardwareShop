import { Component, OnInit } from '@angular/core';
import {RecipesService} from './recipes.service';
import {Recipe} from './recipes.model';
import { MenuController } from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];
  closedMenu:boolean = false;

  constructor(
    private menu: MenuController,
    private recipesService: RecipesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.recipes = this.recipesService.getAllRecipes();
    this.menu.open('end');
  }

  pressed() {
    this.closedMenu = !this.closedMenu;
    this.menu.enable(this.closedMenu, 'first');
    this.menu.open('first');
  }
  goTo(destination:string) {
    this.router.navigate(['./recipes/tabs/'+destination]);
    this.pressed();
    this.recipes = this.recipesService.getAllRecipes();
  }

  
}
