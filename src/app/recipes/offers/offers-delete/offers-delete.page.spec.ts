import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OffersDeletePage } from './offers-delete.page';

describe('OffersDeletePage', () => {
  let component: OffersDeletePage;
  let fixture: ComponentFixture<OffersDeletePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OffersDeletePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OffersDeletePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
