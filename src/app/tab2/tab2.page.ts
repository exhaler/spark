import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DiscoverCards, UserBalance } from '../shared/models';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  discoverCardsOdd: DiscoverCards[];
  discoverCardsEven: DiscoverCards[];
  userBalance: UserBalance;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('./assets/json/discover.json').subscribe((res: any) => {
      this.discoverCardsOdd = res.filter((e, index) => index % 2 === 0);
      this.discoverCardsEven = res.filter((e, index) => index % 2 !== 0);
    });

    this.http.get('./assets/json/balance.json').subscribe((res: any) => {
      this.userBalance = res;
    });
  }
}
