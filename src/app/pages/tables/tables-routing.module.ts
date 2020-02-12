import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './tables.component';
// import { SmartTableComponent } from './smart-table/smart-table.component';
import { ViewUsersComponent } from './view-users/view-users.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
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
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  ViewUsersComponent,
];
