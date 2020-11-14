import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { ArticlepageComponent } from './articlepage.component';

describe('ArticlepageComponent', () => {
  let component: ArticlepageComponent;
  let fixture: ComponentFixture<ArticlepageComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatButtonModule,
        MatSelectModule,
        MatButtonToggleModule,
        MatCardModule,
        MatMenuModule,
        MatListModule
      ],
      declarations: [ ArticlepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlepageComponent);
    component = fixture.componentInstance;
    component.article = [{
      "id": 1,
      "name": "quisquam",
      "message": "Qui cupiditate eos quod veritatis vel optio provident non. Magnammolestias et quibusdam et.",
      "createdAt": 1514880283,
      "category": 2
     }];
    fixture.detectChanges();
  });

  it('should create the articleComponent', () => {
    expect(component).toBeTruthy();
  });



 
});
