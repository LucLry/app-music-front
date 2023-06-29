import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardArtistContainerComponent } from './card-artist-container/card-artist-container.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: 'artistsLayout', component: CardArtistContainerComponent },
  { path: '', component: LandingPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
