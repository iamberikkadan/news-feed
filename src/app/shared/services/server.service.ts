import { News } from 'src/app/shared/models/models';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';

@Injectable()
export class ServerService extends BaseService {
  public api = environment.apiUrl;
  private httpHeaders = new HttpHeaders({
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  constructor(http: HttpClient) {
    super(http);
  }

  getAllNews() {
    const url = 'news';
    return this.get(this.api + url, {});
  }
  getFullNewsInfo(newsId) {
    const url = `news/${newsId}`;
    return this.get(this.api + url, {});

  }

  deleteNew(id) {
    const url = `news/${id}`;
    return this.delete(this.api + url, {});
  }
  UpdateLike(news: News) {
    const url = `news/${news.id}`;

    return this.put(this.api + url, {
      "title": news.title,
      "descripstion": news.descripstion,
      "src": news.src,
      "likeCount": news.likeCount,
      "disLike": news.disLike
    });
  }
}
