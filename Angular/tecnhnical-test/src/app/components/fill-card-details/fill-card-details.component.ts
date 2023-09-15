import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Card } from 'src/app/models/card.model';

@Component({
  selector: 'app-fill-card-details',
  templateUrl: './fill-card-details.component.html',
  styleUrls: ['./fill-card-details.component.scss'],
})
export class FillCardDetailsComponent {
  cardForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    cardsQuantity: new FormControl<number | null>(null),
  });

  cardsToShow: Card[] = [];

  onSubmit() {
    this.cardsToShow = [];
    const { name, surname, cardsQuantity } = this.cardForm.value;
    if (name && surname && cardsQuantity) {
      for (let i = 0; i < cardsQuantity; i++) {
        this.cardsToShow.push({
          id: i + 1,
          name,
          surname,
        });
      }
    }
  }
}
