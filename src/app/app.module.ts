import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardArtistComponent } from './card-artist/card-artist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardArtistContainerComponent } from './card-artist-container/card-artist-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CardArtistComponent,
    CardArtistContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
