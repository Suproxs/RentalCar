import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';


@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent {

}
