import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PinMapPage } from './pin-map.page';

describe('PinMapPage', () => {
  let component: PinMapPage;
  let fixture: ComponentFixture<PinMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PinMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
