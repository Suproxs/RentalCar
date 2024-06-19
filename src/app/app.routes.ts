import { Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BookingComponent } from './pages/booking/booking.component';
import { CarComponent } from './pages/car/car.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ServiceComponent } from './pages/service/service.component';
import { HomeComponent } from './pages/home/home.component'; // Importa el componente Home
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardComponent } from './components/card/card.component';

export const routes: Routes = [

    { path: '', redirectTo: 'home', pathMatch: 'full' }, // Ruta predeterminada
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'navbar', component: NavbarComponent},
    { path: 'footer', component: FooterComponent },
    { path: 'card', component: CardComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'service', component: ServiceComponent },
    { path: 'car', component: CarComponent },
    { path: 'detail', component: DetailComponent },
    { path: 'booking', component: BookingComponent }
];
