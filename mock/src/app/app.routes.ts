import { RouterModule, Routes } from '@angular/router';
import { EditarComponent } from './editar/editar.component';
import { JogoComponent } from './jogo/jogo.component';

const appRoutes: Routes = [
    { path: '', component: JogoComponent },
    { path: 'editar/:id', component: EditarComponent },
    { path: '**', component: JogoComponent }
];

export const routing = RouterModule.forRoot(appRoutes);