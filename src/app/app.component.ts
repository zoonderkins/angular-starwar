import { Component, OnInit } from '@angular/core';
import { StartWarsService } from './start-wars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  swService: StartWarsService

  constructor(swService: StartWarsService) {
    this.swService = swService;
  }
  ngOnInit() {
    this.swService.fetchCharacters();
  }
}
