import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatenowComponent } from './shared/components/datenow/datenow.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { SharedService } from './shared/services/shared.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, DatenowComponent, MenuComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule {}
