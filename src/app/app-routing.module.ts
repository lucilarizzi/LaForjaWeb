import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './paginas/landing/landing.component';
import { InoxidablesComponent } from './paginas/inoxidables/inoxidables.component';
import { AluminioComponent } from './paginas/aluminio/aluminio.component';
import { AsesoramientoComponent } from './paginas/asesoramiento/asesoramiento.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { PageNotFoundComponent } from './paginas/page-not-found/page-not-found.component';
import { CursoPaginaComponent } from './paginas/curso-pagina/curso-pagina.component';
import { HobbyComponent } from './paginas/aluminio/hobby/hobby.component';
import { EscalonadoMiniComponent } from './paginas/aluminio/escalonado-mini/escalonado-mini.component';
import { SemiHermsComponent } from './paginas/aluminio/semi-herms/semi-herms.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  { path: 'inicio', component: LandingComponent },
  { path: 'inoxidables', component: InoxidablesComponent },
  { path: 'aluminio', component: AluminioComponent },
  { path: 'aluminio/hobby', component: HobbyComponent },
  { path: 'aluminio/escalonadomini', component: EscalonadoMiniComponent },
  { path: 'aluminio/semiherms', component: SemiHermsComponent },
  { path: 'cursos', component: CursoPaginaComponent },
  { path: 'asesoramiento', component: AsesoramientoComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
