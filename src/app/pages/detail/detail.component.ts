import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';


@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent {

}
