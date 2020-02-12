import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewComponent } from './view.component';
// import { SmartTableComponent } from './smart-table/smart-table.component';
import { ViewUsersComponent } from './view-users/view-users.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler/src/core';

const routes: Routes = [{
  path: '',
  component: ViewComponent,
  children: [
    // {
    //   path: 'smart-table',
    //   component: SmartTableComponent,
    // },
    {
      path: 'tree-grid',
      component: ViewUsersComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],


schemas: [
  CUSTOM_ELEMENTS_SCHEMA,
],
})
export class TablesRoutingModule { }

export const routedComponents = [
  ViewComponent,
  ViewUsersComponent,
];
