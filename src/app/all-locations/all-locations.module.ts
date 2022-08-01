import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AllLocationsPage } from './all-locations.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AllLocationsPageRoutingModule } from './all-locations-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    AllLocationsPageRoutingModule
  ],
  declarations: [AllLocationsPage]
})
export class Tab1PageModule {}