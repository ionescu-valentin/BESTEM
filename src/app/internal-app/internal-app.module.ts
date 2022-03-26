import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../_shared/shared.module';
import { InternalAppComponent } from './internal-app.component';
import { InternalAppRoutingModule } from './internal-app-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';



@NgModule({
  declarations: [
    HomepageComponent,
    HeaderComponent,
    InternalAppComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    InternalAppRoutingModule,
    NzLayoutModule,
    NzMenuModule,
  ]
})
export class InternalAppModule { }
