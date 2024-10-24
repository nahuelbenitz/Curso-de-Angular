import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters: Character[] = [
    {
    name: 'Krillin',
    power: 250
    },
    {
    name: 'Goku',
    power: 15000
    },
    {
      name: 'Vegueta',
      power: 7500
    }
  ];

  public onNewCharacter(character: Character): void{
    console.log('MainPage');
    console.log(character);
  }
}
