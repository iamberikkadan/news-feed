import { Component, OnInit } from '@angular/core';
import { ServerService } from 'src/app/shared/services/server.service';
import { News } from 'src/app/shared/models/models';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  news: News[] = [];
  newsEx: News[] = [];
  title: string;
  batch = 4;
  finished = false;
  lastkey = '';
  constructor(private service: ServerService, public translate: TranslateService) {
    translate.addLangs(['en', 'ru', 'kz']);
    translate.setDefaultLang('ru');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/ru|en|kz/) ? browserLang : 'ru');
  }

  ngOnInit() {
    this.service.getAllNews().then(news => {
      this.newsEx = news;
      this.getNews();
    });
  }
  dislike(item: News) {
    item.disLike -= 1;
    this.service.UpdateLike(item);
  }

  like(item: News) {
    item.likeCount += 1;
    this.service.UpdateLike(item);
  }

  search() {
    if (this.title != "") {
      this.news = this.newsEx.filter(res => {
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase());
      })
    } else {
      this.ngOnInit();
    }
  }
  onScroll() {
    this.batch += 2;
    this.getNews();
  }

  getNews() {
    this.news = this.newsEx.slice(0, this.batch);
    if (this.news.length === this.newsEx.length) {
      this.finished = true;
    }
    if (this.finished) return;

  }

  delete(news: News, index) {

    this.service.deleteNew(news.id).then(res => {
      this.news.splice(index, 1);
    });
  }

}
