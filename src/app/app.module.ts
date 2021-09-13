import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//components
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SharedModule } from './components/shared/shared.module';
/*import {AngularFireModule} from '@angular/fire'*/
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    /*AngularFireModule.initializeApp(environment.firebase)*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
