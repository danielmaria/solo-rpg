import { Component } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  character = {
    name: 'Adam Scroll',
    occupational: 'Journalist',
    background: 'A journalist is an individual that collects/gathers information in form of text, audio, or pictures, processes them into a news-worthy form, and disseminates it to the public.',
    health: 10,
    sanity: 10
  }

}
