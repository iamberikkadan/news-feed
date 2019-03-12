import { NewsComponent } from './news.component';
import { async, ComponentFixture, TestBed, inject, tick, fakeAsync } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ServerService } from 'src/app/shared/services/server.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('NewsComponent', () => {
	let component: NewsComponent;
	let fixture: ComponentFixture<NewsComponent>;
  let de: DebugElement;

  let service: ServerService;

  let spy: jasmine.Spy;
  let news;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule,
				FormsModule,
				RouterModule,
				TranslateModule.forRoot(),
        InfiniteScrollModule,
        HttpClientModule,
        HttpClientTestingModule
			],
			declarations: [ NewsComponent ],
			providers: [ TranslateService, ServerService ]
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(NewsComponent);
		component = fixture.componentInstance;
    de = fixture.debugElement;
    service = de.injector.get(ServerService);
    news = [{
      title: '123',
      id: 9
    }];

    var promise = Promise.resolve(news);
    spy = spyOn(service, 'getAllNews').and.returnValue(promise);
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
  });

  it('should be return News', () => {
    component.getNews();
    expect(spy.calls.any()).toBeTruthy();
  });
});
