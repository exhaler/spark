import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Matches, Messages } from '../shared/models';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  matches: Matches[];
  messages: Messages[];

  matchesSlideOptions = {
    slidesPerView: 3.7,
    spaceBetween: 5,
    zoom: false,
    grabCursor: true,
    freeMode: true,
  };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('./assets/json/matches.json').subscribe((res: any) => {
      this.matches = res;
    });

    this.http.get('./assets/json/messages.json').subscribe((res: any) => {
      this.messages = res;
    });
  }
}
