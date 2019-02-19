import { StartWarsService } from './../start-wars.service';
import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {
  // characters = [];
  // chosenList = 'all';
  // swService: StartWarsService;

  // constructor(swService: StartWarsService) {
  //   this.swService = swService;
  // }
  constructor() {}
  ngOnInit() {}

  // onChoose(side) {
  //   this.chosenList = side;
  // }

  // getCharacters() {
  //   this.characters = this.swService.getCharacters(this.chosenList)
  //   return this.characters;
  // }



}
