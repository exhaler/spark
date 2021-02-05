import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { DiscoverCardsComponent } from './discover-cards/discover-cards.component';

@NgModule({
  declarations: [DiscoverCardsComponent],
  imports: [CommonModule, IonicModule],
  exports: [DiscoverCardsComponent],
})
export class SharedModule {}
