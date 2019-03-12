import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFullComponent } from './news-full.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ServerService } from 'src/app/shared/services/server.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('NewsFullComponent', () => {
  let component: NewsFullComponent;
  let fixture: ComponentFixture<NewsFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        FormsModule,
        HttpClientModule,
        HttpClientTestingModule
      ],
      declarations: [ NewsFullComponent ],
      providers: [ServerService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
