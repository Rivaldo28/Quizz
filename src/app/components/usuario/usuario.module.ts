import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { SharedModule } from '../shared/shared.module';

//components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RecuperarPasswordComponent } from './recuperar-password/recuperar-password.component';
import { VerificarCorreioComponent } from './verificar-correio/verificar-correio.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    RecuperarPasswordComponent,
    VerificarCorreioComponent,
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule
  ]
})
export class UsuarioModule { }
