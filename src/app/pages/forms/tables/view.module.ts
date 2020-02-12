import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

// import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './view-routing.module';
import { FsIconComponent } from './view-users/view-users.component';

@NgModule({
  imports: [
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
   // ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    FsIconComponent,
  ],

schemas: [
  CUSTOM_ELEMENTS_SCHEMA,
],
})
export class ViewModule { }
