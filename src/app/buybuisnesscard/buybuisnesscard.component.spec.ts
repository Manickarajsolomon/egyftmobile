import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuybuisnesscardComponent } from './buybuisnesscard.component';

describe('BuybuisnesscardComponent', () => {
  let component: BuybuisnesscardComponent;
  let fixture: ComponentFixture<BuybuisnesscardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuybuisnesscardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuybuisnesscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
