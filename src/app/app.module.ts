import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatApiServiceService } from './cat-api-service.service';
import { ListaCatsComponentComponent } from './lista-cats-component/lista-cats-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCatsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CatApiServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
