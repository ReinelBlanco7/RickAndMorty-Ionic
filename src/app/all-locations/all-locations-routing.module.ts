import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllLocationsPage } from './all-locations.page';

const routes: Routes = [
  {
    path: '',
    component: AllLocationsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllLocationsPageRoutingModule {}
