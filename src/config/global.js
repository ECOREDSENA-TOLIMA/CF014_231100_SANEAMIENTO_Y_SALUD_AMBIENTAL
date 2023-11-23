export default {
  global: {
    componenteFormativo: 'Plan de promotoría ambiental',
    descripcionCurso:
      'En este componente formativo se abordan temáticas que permitirán comprender las maneras de obtener información, transmitirla y evaluar el conocimiento adquirido utilizando indicadores que determinen los valores esperados de aprendizaje, para implementar un plan de promotoría ambiental y su posterior validación para coordinar campañas ambientales en su lugar de trabajo según los criterios técnicos y normatividad existente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Formatos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Instrumentos de evaluación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Listados',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Manejo de grupos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas de concertación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Expresión oral y escrita',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Mejora continua',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Técnicas',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Registros',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Evaluación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Criterios de evaluación',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Medición de resultados',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Técnicas recolección de información',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Indicadores',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Tipos',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Fichas técnicas',
            hash: 't_5_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar pdf',
        download: 'downloads/CF014_231100.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Evaluación',
      referencia:
        'Comisión Iberoamericana de Calidad Educativa. (2014). ¿Qué es Metacognición? [Video] YouTube.Ideam. (s. f.) Formato común de hoja metodológica de indicadores ambientales. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dsoTLk0LvHU',
    },
    {
      tema: 'Fichas Técnicas',
      referencia:
        'Ideam. (s. f.) Formato común de hoja metodológica de indicadores ambientales.',
      tipo: 'Documento',
      link:
        'http://www.ideam.gov.co/documents/11769/646961/V3.06+HM+Promedio+fosforos+Totales.pdf/47ec0009-b780-4c5d-9141-5a1d500f751e',
    },
  ],
  glosario: [
    {
      termino: 'Concertación',
      significado:
        'proceso de toma de decisiones el cual se basa en acuerdos entre el estado, los empresarios y los sindicatos.',
    },
    {
      termino: 'Entrevista',
      significado:
        'recurso para recolectar testimonios reales de personas que pueden estar involucradas en la investigación.',
    },
    {
      termino: 'Formatos',
      significado:
        'manera como se organiza la información con respecto a las necesidades específicas de cada persona u organización, esto permite almacenar datos de manera precisa y ordenada.',
    },
    {
      termino: 'Huella ecológica',
      significado:
        'evalúa el impacto ambiental que trae consigo la demanda de recursos naturales por parte del ser humano para satisfacer sus necesidades. ',
    },
    {
      termino: 'Indicador ambiental',
      significado:
        'parámetro o valor derivado de parámetros que proporciona información para describir el estado de un fenómeno, ambiente o área, con un significado que va más allá del directamente asociado con el valor del parámetro en sí mismo.',
    },
    {
      termino: 'Mejora continua',
      significado:
        'enfoque para la mejora de procesos operativos que se basa en la necesidad de revisar continuamente las operaciones de los problemas, la reducción de costos oportunidad, la racionalización, y otros factores que en conjunto permiten la optimización.',
    },
  ],
  referencias: [
    {
      referencia:
        'Departamento Nacional de Planeación. (2022). Colombia avanza en más del 72% de cumplimiento de los Objetivos de Desarrollo Sostenible. DNP.',
      link:
        'https://www.dnp.gov.co/Paginas/Colombia-avanza-en-mas-del-72-de-cumplimiento-de-los-ODS.aspx',
    },
    {
      referencia:
        'Naciones Unidas. (2015). La Asamblea General adopta los Objetivos de Desarrollo Sostenible. ONU.',
      link:
        'https://www.un.org/sustainabledevelopment/es/2015/09/la-asamblea-general-adopta-la-agenda-2030-para-el-desarrollo-sostenible/',
    },
    {
      referencia:
        'Universidad Cetys. (2019). Medición del aprendizaje: Manual para profesores. Universidad Cetys.',
      link:
        'https://repositorio.cetys.mx/bitstream/60000/421/1/ManualDeMedici%C3%B3nDelAprendizaje2019.pdf',
    },
    {
      referencia: 'OCDE. (s. f.). Definición de indicadores ambientales.',
      link:
        'https://paot.org.mx/centro/ine-semarnat/indicadores05/indicadores04/presentacion/indicadores.shtml#:~:text=Seg%C3%BAn%20la%20OCDE%2C%20un%20indicador,del%20par%C3%A1metro%20en%20s%C3%AD%20mismo',
    },
    {
      referencia:
        'Universidad de Guadalajara. (s. f.) Clasificación general de las fuentes de información. Universidad de Guadalajara.',
      link:
        'http://biblioteca.udgvirtual.udg.mx/portal/clasificacion-general-de-las-fuentes-de-informacion',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Víctor Julián Ardila',
          cargo: 'Experto Temático',
          centro: 'Regional Tolima - Centro Agropecuario la Granja',
        },
        {
          nombre: 'Ana Vela Rodríguez Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capita -  Centro de Gestión Industrial',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Diseño Curricular',
          centro:
            'Regional Santander - Centro de Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'José Gabriel Ortiz Abella',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Jaslyth Juliana Eraso Casanova',
          cargo: 'Experta Temática',
          centro: 'Regional Putumayo - Centro Agroforestal y Acuícola Arapaima',
        },
        {
          nombre: 'Sergio Augusto Ardila Ortiz',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Metodóloga',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carolina Gómez',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboard de Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Maria Alejandra Briceño Vera',
          cargo: 'Producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Produccióon audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Sebastian Trujillo Afanador',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de contenidos accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
