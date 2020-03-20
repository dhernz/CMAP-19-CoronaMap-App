import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserStatusPage } from './user-status.page';

describe('UserStatusPage', () => {
  let component: UserStatusPage;
  let fixture: ComponentFixture<UserStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserStatusPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UserStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
