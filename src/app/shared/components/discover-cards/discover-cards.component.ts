import { Component, Input, OnInit } from '@angular/core';
import { DiscoverCards } from 'src/app/shared/models';

@Component({
  selector: 'app-discover-cards',
  templateUrl: './discover-cards.component.html',
  styleUrls: ['./discover-cards.component.scss'],
})
export class DiscoverCardsComponent implements OnInit {
  @Input() discoverCards: DiscoverCards[];

  constructor() {}

  ngOnInit() {}
}
