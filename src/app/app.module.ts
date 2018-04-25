import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppComponent } from './app.component';
import { CentroDeSaludComponent } from './centro-de-salud/centro-de-salud.component';
import { CentrosDeSaludService } from './services/centros-de-salud.service';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [
    AppComponent,
    CentroDeSaludComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDfmP3Pqo0aBdUZmidCxUsXQDS5NPYLang'
    })
  ],
  providers: [CentrosDeSaludService],
  bootstrap: [AppComponent]
})
export class AppModule { }
