import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArtistComponent } from './card-artist.component';

describe('CardArtistComponent', () => {
  let component: CardArtistComponent;
  let fixture: ComponentFixture<CardArtistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardArtistComponent]
    });
    fixture = TestBed.createComponent(CardArtistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
