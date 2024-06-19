import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { ContactComponent } from '../../components/contact/contact.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CardComponent,ContactComponent,CarouselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
