import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerService } from 'src/app/shared/services/server.service';
import { News } from 'src/app/shared/models/models';

@Component({
	selector: 'app-news-full',
	templateUrl: './news-full.component.html',
	styleUrls: [ './news-full.component.scss' ]
})
export class NewsFullComponent implements OnInit {
	newsId: number;
	news: News;
	constructor(private route: ActivatedRoute, private service: ServerService) {}

	ngOnInit() {
		this.news = {
			title: '',
			descripstion: ''
		};
		this.route.params.subscribe((params) => {
			this.newsId = params.id;
		});
		this.service.getFullNewsInfo(this.newsId).then((news) => {
			this.news = news;
		});
	}
	dislike() {
		this.news.disLike -= 1;
		this.service.UpdateLike(this.news);
	}

	like() {
		this.news.likeCount += 1;
		this.service.UpdateLike(this.news);
	}
}
