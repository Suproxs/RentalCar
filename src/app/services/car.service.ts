import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl: string = 'https://6670d56e0900b5f8724bb701.mockapi.io/api/v1';

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/CarRentalApp`).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP para obtener autos:', error);
        return throwError(error);
      })
    );
  }
}
