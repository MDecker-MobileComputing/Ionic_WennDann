import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Seite6Page } from './seite6.page';

describe('Seite6Page', () => {
  let component: Seite6Page;
  let fixture: ComponentFixture<Seite6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Seite6Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Seite6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
