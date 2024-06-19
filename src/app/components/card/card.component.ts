import { CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  carList: any[] = [];
  sidenavOpened = false;
  carService = inject(CarService);



  ngOnInit(): void {
    // debugger;
    this.getCars();
  }

  getCars() {
    this.carService.getAllCars().subscribe({
      next: (res: any) => { // Manejador de éxito
        console.log(res);
        this.carList = res; // Asegúrate de que este es el comportamiento deseado
      },
      error: (err) => { // Manejador de error
        console.error('Error al obtener los autos:', err);
      }
    });
  }
  



}
