import { StartWarsService } from './../start-wars.service';
import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() character;
  swService: StartWarsService;

  constructor(swService: StartWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onAssign(side) {
    // this.character.side = side;
    this.swService.onSideChosen({name: this.character.name, side})
  }

}
