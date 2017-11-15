import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing }  from './app.routes';

import { AppComponent } from './app.component';
import { EditarComponent } from './editar/editar.component';
import { JogoComponent } from './jogo/jogo.component';
import { JogadoresService } from './services/jogadores-service';

@NgModule({
  declarations: [
    AppComponent,
    EditarComponent,
    JogoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  providers: [
    JogadoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
