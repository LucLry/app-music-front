import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardArtistContainerComponent } from './card-artist-container.component';

describe('CardArtistContainerComponent', () => {
  let component: CardArtistContainerComponent;
  let fixture: ComponentFixture<CardArtistContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardArtistContainerComponent]
    });
    fixture = TestBed.createComponent(CardArtistContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
