import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curso-pagina',
  templateUrl: './curso-pagina.component.html',
  styleUrls: ['./curso-pagina.component.css']
})
export class CursoPaginaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  ofertaCursos = [
    {
      nombre: "CURSO INICIAL DE ELABORACION DE CERVEZA ARTESANAL",
      modalidad: "presencial",
      capacitacion: "Capacitación",
      duracion: "1 jornada de 10 a 16 hs.",
      incluye: "Incluye: apuntes impresos, material de lectura, materiales didácticos para la práctica, almuerzo, degustación de estilos, mesa de café, certificado de asistencia. No hacen falta conocimientos previos",
      sobre: "Capacitación teórico /práctica intensiva de una sola jornada, donde los alumnos saldrán preparados para hacer sus propias cervezas. Haremos una cocción en vivo entre todos los presentes, abarcando desde el empaste (mezcla de granos y agua) hasta la incorporación de levaduras para fermentación, mientras vamos a ir pasando por todos los temas teóricos que hacen al proceso de elaboración de cerveza.",
      destinatario: "Nuestro curso inicial está dirigido a todas aquellas personas amantes de la cerveza que quieran descubrir los secretos de la elaboración artesanal, personas que trabajan en Bares o Cervecerías y deseen ganar idoneidad, Gastronómicos que busquen actualizar sus negocios o para aquellos que desean encontrar una actividad para compartir con amigos o para aquellos que están buscando un emprendimiento con finalidad comercial.",
      objetivos: [
        {
          obj: "Curso diseñado para lograr el autoabastecimiento de cerveza a nivel hogareño o emprender un pequeño proyecto comercial de venta directa."
        },
        {
          obj: "Que los alumnos comprendan en su totalidad el proceso de elaboración, no solo desde la practica sino también de los procesos físico-químicos involucrados."
        },
        {
          obj: "Que los alumnos tengan la capacidad de producir una cerveza apta consumo por si solos."
        },
        {
          obj: "Que los alumnos tengan los conocimientos necesarios para tomar sus propias acciones correctivas durante la cocción."
        },
      ]

    },
    {
      nombre: "CURSO ONLINE NIVEL INICIAL DE ELABORACION DE CERVEZA ARTESANAL",
      modalidad: "a distancia (on-line)",
      capacitacion: "Capacitación",
      duracion: "27 videos con practica y teoría.",
      incluye: "acceso ilimitado a la plataforma, lecciones en formato video (watch training), totorales, material de estudio, asesoramiento, certificación, actualización mensual de información.",
      sobre: "Las capacitaciones son guiadas por docentes con más de 10 años de experiencia en el mundo de la Cerveza Artesanal, especialistas en Marketing de la Universidad de Buenos Aires, y emprendedores que llevan capacitando a miles de cerveceros en Argentina y Latinoamerica. Se presentarán diferentes charlas teóricas que contarán todos y cada uno de los aspectos fundamentales del proceso y de los distintos ingredientes que hacen a la elaboración de manera didáctica y entretenida.",
      destinatario: "Esta capacitación está dirigido a todas aquellas personas amantes de la cerveza que quieran descubrir los secretos de la elaboración artesanal, personas que trabajan en Bares o Cervecerías y deseen ganar idoneidad, Gastronómicos que busquen actualizar sus negocios o para aquellos que desean encontrar una actividad para compartir con amigos o para aquellos que están buscando un emprendimiento con finalidad comercial.",
      objetivos: [
        {
          obj: "Curso diseñado para lograr el autoabastecimiento de cerveza a nivel hogareño o emprender un pequeño proyecto comercial de venta directa."
        },
        {
          obj: "Que los alumnos comprendan en su totalidad el proceso de elaboración, no solo desde la practica sino también de los procesos físico-químicos involucrados."
        },
        {
          obj: "Que los alumnos tengan la capacidad de producir una cerveza apta consumo por si solos."
        },
        {
          obj: "Que los alumnos tengan los conocimientos necesarios para tomar sus propias acciones correctivas durante la cocción."
        },
      ]

    },
    {
      nombre: "CURSO AVANZADO GASIFICADO Y EMBARRILADO",
      url: "",
      modalidad: "presencial",
      capacitacion: "teórico/práctica",
      duracion: "4 horas",
      incluye: "apuntes impresos, materiales didácticos para la práctica, picada, degustación de estilos, mesa de café, certificado de asistencia. Para participar se requieren conocimientos y experiencia previa en elaboración de cerveza artesanal.",
      sobre: "Las capacitaciones son guiadas por docentes con más de 10 años de experiencia en el mundo de la Cerveza Artesanal, especialistas en Marketing de la Universidad de Buenos Aires, y emprendedores que llevan capacitando a miles de cerveceros en Argentina y Latinoamerica. Se presentarán diferentes charlas teóricas que contarán todos y cada uno de los aspectos fundamentales del proceso y de los distintos ingredientes que hacen a la elaboración de manera didáctica y entretenida.",
      destinatario: "Esta capacitación está dirigido a todas aquellas personas amantes de la cerveza que quieran descubrir los secretos de la elaboración artesanal, personas que trabajan en Bares o Cervecerías y deseen ganar idoneidad, Gastronómicos que busquen actualizar sus negocios o para aquellos que desean encontrar una actividad para compartir con amigos o para aquellos que están buscando un emprendimiento con finalidad comercial.",
      objetivos: [
        {
          obj: "Curso diseñado para lograr el autoabastecimiento de cerveza a nivel hogareño o emprender un pequeño proyecto comercial de venta directa."
        },
        {
          obj: "Que los alumnos comprendan en su totalidad el proceso de elaboración, no solo desde la practica sino también de los procesos físico-químicos involucrados."
        },
        {
          obj: "Que los alumnos tengan la capacidad de producir una cerveza apta consumo por si solos."
        },
        {
          obj: "Que los alumnos tengan los conocimientos necesarios para tomar sus propias acciones correctivas durante la cocción."
        },
      ]

    }
  ]

}
