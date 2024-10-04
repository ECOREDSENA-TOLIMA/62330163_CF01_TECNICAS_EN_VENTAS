export default {
  global: {
    componenteFormativo: 'Ventas, comunicación y negociación',
    descripcionCurso:
      'El presente componente formativo trabaja desde la venta entendida como un proceso que requiere comunicación y amplio aspecto de negociación teniendo en cuenta que se trabaja con clientes que pueden llegar a requerir un tratamiento especial. De todo eso trata el presente componente formativo que busca instruir en las técnicas requeridas para hacer una venta.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
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
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Proceso de ventas y métodos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Sistemas de ventas',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Técnicas de ventas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas de prospección',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Técnicas de acercamiento',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Técnicas de cuestionamiento',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Técnicas de expresión oral y escrita',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Fases de la venta',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Comunicación y negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Estilos de negociación',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Herramientas para el proceso de negociación',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Tipos de clientes',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Estrategias de negociación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Business to Business (B2B) —Negocio a Negocio—',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Business to Consumer (B2C) —Negocio a Consumidor—',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Consumer to Consumer (C2C) —Consumidor a Consumidor—',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Consumer to Business (C2B) —Consumidor a Negocio—',
            hash: 't_5_4',
          },
          {
            numero: '5.5',
            titulo: 'Government to Government (G2G) —Gobierno a Gobierno—',
            hash: 't_5_5',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Decisiones de compra',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Decisión limitada',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Decisión extensiva',
            hash: 't_6_2',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Conflicto',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Venta y distribución',
        desarrolloContenidos: true,
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
      tema: '2.	Técnicas de ventas',
      referencia:
        'Axioma Sales Training (2021). Origen y evolución de las técnicas de venta. https://www.youtube.com/watch?v=6T3QPVO6VtI',
      tipo: 'Video en línea',
      link: 'https://www.youtube.com/watch?v=6T3QPVO6VtI',
    },
    {
      tema: '5.	Estrategia de negociación',
      referencia:
        'MeliDesign (2020). Tipos de Comercio Electrónico (B2B, B2C, C2B...). https://www.youtube.com/watch?v=QdStWUKx33Q',
      tipo: 'Video en línea',
      link: 'https://www.youtube.com/watch?v=QdStWUKx33Q',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de comportamiento',
      significado:
        'estudio de las interacciones y preferencias de los usuarios en plataformas digitales para identificar patrones de comportamiento y segmentar a los clientes de manera más precisa.',
    },
    {
      termino: 'Análisis de mercado',
      significado:
        'evaluación detallada de la competencia, identificación de oportunidades de mercado y comprensión de las tendencias del sector para tomar decisiones informadas.',
    },
    {
      termino: 'Carrito de compras',
      significado:
        'herramienta en línea que permite a los clientes seleccionar y almacenar productos antes de proceder al pago.',
    },
    {
      termino: 'Cliente Ideal (<em>Buyer</em> Persona)',
      significado:
        'representación semi-ficticia del cliente que mejor se ajusta a los productos o servicios ofrecidos por una empresa, basada en datos demográficos, psicográficos y comportamentales.',
    },
    {
      termino: 'Datos demográficos',
      significado:
        'información cuantificable sobre la población, como edad, género, nivel educativo, ocupación y estado civil, utilizada para segmentar el mercado y comprender las características básicas de los clientes.',
    },
    {
      termino: '<em>E-commerce</em> (Comercio electrónico)',
      significado:
        'transacción de bienes y servicios a través de medios electrónicos, como internet.',
    },
    {
      termino: 'Estrategias de fidelización',
      significado:
        'técnicas y acciones dirigidas a mantener a los clientes actuales comprometidos y satisfechos, incentivando su lealtad a largo plazo mediante programas de recompensas y personalización de la oferta.',
    },
    {
      termino: 'Pasarela de pago',
      significado:
        'servicio que autoriza pagos con tarjeta de crédito o débito para negocios en línea, asegurando transacciones seguras.',
    },
    {
      termino: 'Protección de datos personales',
      significado:
        'medidas legales y técnicas para garantizar la privacidad y seguridad de la información personal recopilada por las empresas, evitando el uso indebido y el acceso no autorizado.',
    },
    {
      termino: 'SEO (Optimización para Motores de Búsqueda)',
      significado:
        'estrategias y técnicas utilizadas para aumentar la visibilidad de un sitio web en los resultados de búsqueda de motores como Google.',
    },
  ],
  referencias: [
    {
      referencia:
        'Chaffey, D. (2022). Digital business and e-commerce management: Strategy, implementation and practice (7th ed.). Pearson Education.',
    },
    {
      referencia:
        'Johnston, M. W., & Marshall, G. W. (2016). Sales force management: Leadership, innovation, technology (12th ed.). Routledge.',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2016). Marketing management (15th ed.). Pearson Education.',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Nombre_rol',
          centro: 'Nombre_centro_formación',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Animación y producción audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre_responsable',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Nombre_responsable',
          cargo: 'Validación de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
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
