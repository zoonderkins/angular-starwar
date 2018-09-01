import { Component, OnInit } from '@angular/core';
import { StartWarsService } from '../start-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
  { display: 'None', value: '' },
  { display: 'Light', value: 'light' },
  { display: 'Dark', value: 'dark' },
]
  swService: StartWarsService
  defaultName = 'Obi-wan'

  constructor(swService: StartWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return
    }
    console.log(submittedForm.value)
    this.swService.addCharacter(submittedForm.value.name, submittedForm.value.side)
  }

}
