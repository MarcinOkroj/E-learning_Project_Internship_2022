import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AvatarModule } from 'ngx-avatar';
import { MenuSidebarNavComponent } from './menu-sidebar-nav/menu-sidebar-nav.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LayoutComponent,
    MenuSidebarNavComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [CommonModule, LayoutRoutingModule, SharedModule, AvatarModule, TranslateModule],
})
export class LayoutModule {}
