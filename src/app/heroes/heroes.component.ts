import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
// import { HEROES } from '../mock-heroes';
// import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { HeroDetailComponent } from '../hero-detail/hero-detail.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.css',
  // standalone: true,
  // imports: [
  //   FormsModule,
  //   NgIf,
  //   NgFor,
  //   UpperCasePipe,
  //   HeroDetailComponent
  // ],
})

export class HeroesComponent {
  selectedHero?: Hero;
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`)
  };

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }
}
