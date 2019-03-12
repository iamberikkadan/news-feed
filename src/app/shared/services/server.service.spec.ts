import { TestBed, inject } from '@angular/core/testing';

import { ServerService } from './server.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ServerService', () => {
	beforeEach(() =>
		TestBed.configureTestingModule({
      imports: [     HttpClientModule,
        HttpClientTestingModule],
      providers: [ServerService]
		})
	);

	it('should be created', () => {
		const service: ServerService = TestBed.get(ServerService);
		expect(service).toBeTruthy();
  });

	it('should be return News', inject([ServerService],( server: ServerService) => {
		expect(server.getAllNews()).toBeTruthy();
  }));

});
