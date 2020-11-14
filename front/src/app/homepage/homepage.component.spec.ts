import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { PromiseType } from 'protractor/built/plugins';


import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
  let component: HomepageComponent;
  let fixture: ComponentFixture<HomepageComponent>;

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
      declarations: [ HomepageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get Posts data ', async () => {
    expect(component.Posts).toBeDefined()
    expect(component.Posts).toBeNull()

    component.Posts = component.testPosts()
    fixture.detectChanges()
    fixture.whenStable().then( ()=>{
      expect(component.Posts).not.toBeNull()
      expect(component.Posts).toBeInstanceOf( Promise ) 
      component.Posts.forEach(element => {
        expect(element).toBeDefined()
    });
    })
    
  });


});
