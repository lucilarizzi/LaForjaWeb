import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './main/app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterialModule } from './app-material.module';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { CarrouselHighlightsComponent } from './components/carrousel-highlights/carrousel-highlights.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { LogrosComponent } from './components/logros/logros.component';
import { FooterComponent } from './components/footer/footer.component';
import { Carousel2Component } from './components/carousel2/carousel2.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderInfoComponent } from './components/header-info/header-info.component';
import { CountUpModule } from 'ngx-countup';
import { ContactComponent } from './components/contact/contact.component';
import { AgmCoreModule } from '@agm/core';
import { ReservarCursoComponent } from './components/reservar-curso/reservar-curso.component';
import { ParallaxDirective } from './directivas/parallax.directive';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import { AyudaComponent } from './components/ayuda/ayuda.component';
import { AsesoramientoMobileComponent } from './components/asesoramiento-mobile/asesoramiento-mobile.component';
import { AngularMaterialModule } from './angular-material.module';
import { NgxTinySliderModule } from 'ngx-tiny-slider';
import { LandingComponent } from './paginas/landing/landing.component';
import { InoxidablesComponent } from './paginas/inoxidables/inoxidables.component';
import { AluminioComponent } from './paginas/aluminio/aluminio.component';
import { AsesoramientoComponent } from './paginas/asesoramiento/asesoramiento.component';
import { NosotrosComponent } from './paginas/nosotros/nosotros.component';
import { ContactoComponent } from './paginas/contacto/contacto.component';
import { PageNotFoundComponent } from './paginas/page-not-found/page-not-found.component';
import { CarouselModalComponent } from './components/carousel-modal/carousel-modal.component';
import { PeopleModalsComponent } from './components/people-modals/people-modals.component';
import { EquiposProComponent } from './components/equipos-pro/equipos-pro.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { CursoPaginaComponent } from './paginas/curso-pagina/curso-pagina.component';
import { HobbyComponent } from './paginas/aluminio/hobby/hobby.component';
import { EscalonadoMiniComponent } from './paginas/aluminio/escalonado-mini/escalonado-mini.component';
import { SemiHermsComponent } from './paginas/aluminio/semi-herms/semi-herms.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CarrouselHighlightsComponent,
    AboutUsComponent,
    EquiposComponent,
    LogrosComponent,
    FooterComponent,
    Carousel2Component,
    HeaderComponent,
    HeaderInfoComponent,
    ContactComponent,
    ReservarCursoComponent,
    ParallaxDirective,
    AyudaComponent,
    AsesoramientoMobileComponent,
    CarouselModalComponent,
    PeopleModalsComponent,
    EquiposProComponent,
    CursosComponent,
    LandingComponent,
    InoxidablesComponent,
    AluminioComponent,
    AsesoramientoComponent,
    NosotrosComponent,
    ContactoComponent,
    PageNotFoundComponent,
    CursoPaginaComponent,
    HobbyComponent,
    EscalonadoMiniComponent,
    SemiHermsComponent, 
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, HttpClientModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    AppMaterialModule, CountUpModule, ParallaxModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }), AngularMaterialModule, NgxTinySliderModule, 


  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    NgxTinySliderModule
  ]
})
export class AppModule { }
