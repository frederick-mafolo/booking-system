import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BookingFormComponent } from "./booking-form/booking-form.component";
import { HomeComponent } from "./home/home.component";

// For MDB Angular Pro
//import { CarouselModule, WavesModule } from 'ng-uikit-pro-standard'

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  // { path: 'detail/:id', component: HeroDetailComponent },

  {
    path: "home",
    component: HomeComponent,
    children: [
      {
        path: "homebooking",
        component: BookingFormComponent,
      },
      {
        path: "flights",
        component: BookingFormComponent,
      },
      {
        path: "hotels",
        component: BookingFormComponent,
      },
      {
        path: "holidays",
        component: BookingFormComponent,
      },
      {
        path: "blog",
        component: BookingFormComponent,
      },
      {
        path: "homecontacts",
        component: BookingFormComponent,
      },
    ],
  },
  // { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
