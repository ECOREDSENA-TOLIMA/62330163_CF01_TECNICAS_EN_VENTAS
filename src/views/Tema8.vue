<template lang="pug">
.curso-main-container.pb-3.tema8
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Venta y distribución

    p(data-aos="zoom-in") Las ventas constituyen una transacción comercial entre dos partes: cliente y vendedor; éstos acuerdan diversas condiciones dentro de la negociación, una de ellas, es la que tiene que ver con la distribución, porque, así como algunas veces el cliente lleva su producto directamente, también existen otras modalidades de compra, en la que el vendedor debe asegurarse que el producto llegue a su destino dentro del tiempo pactado para ello.
    p.mb-5(data-aos="zoom-in") #[b Venta directa:] Aquella que se hace directamente al consumidor y en el lugar donde se encuentre el cliente y se puede evidenciar por los siguientes recursos:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8.col-12
        .row.justify-content-center.align-items-center
          .col-12.px-0
            AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris" data-aos="zoom-out-up")
              .row(titulo="Características")
                .col-md-12.mb-4.mb-md-0
                  p Se realiza en el lugar que escoja el cliente. El contacto es personal, por lo tanto, el nivel de servicio ofrecido es alto.
                  p Se considera una fuente de ingreso adicional, y el vendedor no tiene ningún tipo específico de formación. Las metas las define cada vendedor por lo que no existe una relación laboral con la empresa.

              .row(titulo="Ventajas")
                .col-md-12.mb-4.mb-md-0
                  p Posibilidad de venta para un determinado tipo de productos en el que se invierte tiempo de acuerdo con necesidades, razón por la cual, es autónomo de escoger horario de trabajo. Se puede organizar un negocio familiar. Se entregan los productos con garantía.
                  p A pesar de no contar con contrato de trabajo, se recibe entrenamiento y capacitación constante sobre el producto, permitiendo que vendedor de explicación sobre sus bondades y en algunos momentos hacer demostraciones aplicativas.

              .row(titulo="Tipos")
                .col-md-12.mb-4.mb-md-0
                  p Venta cara a cara, venta en reuniones sociales, multinivel y venta plana. 

      .col-lg-4.col-12.mb-5.d-lg-flex.d-none(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema8/img-01.svg', alt='Rutinas de limpieza')

    p.mb-5(data-aos="zoom-in") #[b Venta personal:] Es una de las formas más acertadas de vender un producto, utiliza para ello, la promoción de manera personal, la adquisición por parte del consumidor da la posibilidad de continuidad en la compra. Este tipo de venta se puede identificar por los siguientes elementos:

    .tarjeta--container.row.mb-5(data-aos="zoom-in")
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-primario.p-5(style="background-color: #FFF37A")
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/tema8/icono-01.svg', alt='Texto que describa la imagen')
          
        h2.text-center Características
        p Es flexible por cuanto se adapta al tipo de producto o servicio, a la situación en la cual se realiza la venta y el tipo de cliente. 
        p Una característica que puede resultar negativa, es que, en ocasiones, hay varios clientes y solo se puede atender a uno a la vez. Por el costo de entrenamiento que debe invertir la empresa, se está eliminando este tipo de práctica para productos de bajo precio.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      .col-md.tarjeta.color-acento-botones.p-5(style="background-color: #FFC890")
        .row.justify-content-center.mb-4
          .col-3
            figure
              img(src='@/assets/curso/temas/tema8/icono-02.svg', alt='Texto que describa la imagen')
          
        h2.text-center Ventajas
        p Existe una comunicación directa, de tal manera que el cliente puede aclarar las inquietudes que le genere el producto. El vendedor tiene la posibilidad de conocer de manera casi que inmediata la impresión que tiene el comprador sobre el producto o servicio ofrecido. Termina la negociación y se efectúa la venta de manera inmediata. 
      
    p.mb-5(data-aos="zoom-in") #[b Los objetivos] comerciales deben primar en cada una de las modalidades de las ventas y esos objetivos están trabajados según el momento y el producto que se está prospectando, los tipos de objetivos más generales son los siguientes: 

    .row.justify-content-center.mb-3
      .col-lg-4.col-12.mb-3.d-lg-flex.d-none
        figure
          img(src='@/assets/curso/temas/tema8/img-02.svg', alt='Imagen decorativa')
      .col-lg-8.col-12.mb-3
        LineaTiempoD.color-secundario.linea-tiempo-edit.mb-4(data-aos="zoom-in-down")
          p.text-small(numero="1" titulo="Respecto al producto ofertado") El vendedor debe conocer perfectamente el producto: características, ventajas, precio y condiciones.

          p.text-small(numero="2" titulo="Respecto al mercado") El vendedor aparte de indicarle al cliente las bondades del producto, debe estar en capacidad de realizar la demostración en caso que el producto o el cliente así lo requieran.
          
          p.text-small(numero="3" titulo="En caso de reclamaciones") El vendedor es quien debe hacer todo el proceso de trámite para las mismas, manteniendo el servicio constante a los consumidores.
          
          p.text-small(numero="4" titulo="Respecto a los competidores") El vendedor debe tener el conocimiento de la competencia, e identificar las diferencias entre productos que se ofertan de similares o iguales características.
          
          p.text-small(numero="5" titulo="Respecto a la empresa") El vendedor tiene unas metas de ventas que debe cumplir en tiempos establecidos, debiendo fijar una estrategia que le permita conquistar clientes para los diferentes productos o servicios que hacen parte del portafolio de la organización. 

    p(data-aos="zoom-in") Desde hace un tiempo se habla de <b><i>e-commerce</i></b> también conocido como comercio electrónico, negocios por internet o negocios <em>online.</em> Consiste en la adquisición de bienes o servicios a través de medios electrónicos.
    p.mb-5(data-aos="zoom-in") Con la evolución de la tecnología se hace cada vez más representativo dentro del mercado, pero para las empresas que desean ofertar a través de la <em>web,</em> implica determinar exactamente cuáles son los productos a ofrecer, su entrega, la forma de pago y el servicio posventa (Chaffey, 2022).

    h3.mb-5
      span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[i.fas.fa-tag] Proceso para iniciar #[i E-commerce]
    
    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row.justify-content-center.align-items-center
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          h3 Definición del producto a vender
          p.mb-0 Se puede empezar por aquel producto que le genere mayor utilidad y el nicho de mercado al cual va dirigido.
        
        .col-lg-6.col-10.order-lg-2.order-lg-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema8/img-03.png', alt='Texto que describa la imagen')

      .row.justify-content-center.align-items-center
        .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema8/img-04.png', alt='Texto que describa la imagen')

        .col-lg-6(data-aos="fade-left")
          h3 Identificar proveedor de diseño de la <em>web</em>
          p.mb-0 Conocer la instalación y manejo de <em>software</em> especializado para efectuar transacciones en línea de forma segura, tanto para la empresa como para los clientes. Muy necesario el acompañamiento durante el montaje e implementación de la tienda virtual.
      
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          h3 Diseño de la página de manera atractiva para los consumidores
          p.mb-0 Que tengan un espacio disponible para el contacto con el cliente.
        
        .col-lg-6.col-10.order-lg-2.order-lg-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema8/img-05.png', alt='Texto que describa la imagen')

      .row.justify-content-center.align-items-center
        .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema8/img-06.png', alt='Texto que describa la imagen')

        .col-lg-6(data-aos="fade-left")
          h3 Asegurar los productos
          p.mb-0 Es decir, que exista un inventario de los productos que se ofertan, con el fin de evitar el surgimiento de desconfianza por parte del consumidor que desee adquirir el producto y no lo encuentre disponible.
      
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          h3 Logística para la entrega
          p.mb-0 Se debe tener una empresa que ofrezca el servicio con oficinas en todo el mundo; recordando que este tipo de comercio permite encontrar clientes en cualquier lugar del mundo.

        .col-lg-6.col-10.order-lg-2.order-lg-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema8/img-07.png', alt='Texto que describa la imagen')

      .row.justify-content-center.align-items-center
        .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
            img(src='@/assets/curso/temas/tema8/img-08.png', alt='Texto que describa la imagen')

        .col-lg-6(data-aos="fade-left")
          h3 Plan de cobros
          p.mb-0 Existen varias alternativas, como son los depósitos en cuentas, giros y pago con tarjeta de crédito; sin embargo, esta acción puede generar inconvenientes, puesto que la información puede quedar disponible, y el consumidor puede pensar que la utilizarán para descargar pagos adicionales.

      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          h3 Servicio al cliente
          p.mb-0 A pesar de ser una negociación virtual, es importante fidelizar los clientes enviándoles información sobre nuevos productos y ofertas especiales de su interés. 

        .col-lg-6.col-10.order-lg-2.order-lg-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema8/img-09.png', alt='Texto que describa la imagen')

    p.mb-5(data-aos="zoom-in") Las categorías del #[i E-commerce] se pueden clasificar en tres y son las siguientes:

    .row.mb-5(data-aos="zoom-in")
      .col-md-6.col-lg.mb-5.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-avatar.tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/temas/tema8/icono-03.svg', alt='Texto que describa la imagen')

          h4.text-center Compañía - Compañía
          p Utiliza la red para agilizar los procesos de órdenes de compra, facturas y pagos utilizando el Intercambio electrónico de datos EDI.

      .col-md-6.col-lg.mb-5.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-avatar.tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/temas/tema8/icono-04.svg', alt='Texto que describa la imagen')

          h4.text-center Compañía - Cliente
          p Se asemeja a la venta al detal, pero se utiliza el internet, se puede adquirir cualquier tipo de producto.

      .col-md-6.col-lg.mb-5.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-avatar.tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/temas/tema8/icono-05.svg', alt='Texto que describa la imagen')

          h4.text-center Compañía - Administración
          p Transacciones realizadas entre empresas con entidades del gobierno, aplicable en temas relacionados con requisitos a tener en cuenta para alguna modificación. Como servicio adicional también incluye el EDI para pagos de impuestos. 

    .row.justify-content-center.mb-4
      .col-12.col-lg-10.mb-4(data-aos="fade-up")
        p.mb-4(data-aos="zoom-in") Las ventajas que apalancan el crecimiento exponencial del #[i E-commerce] son las siguientes:
        
        .cajon.color-primario.p-4.mb-4(style="background-color:#FFFAC1")
          ul.lista-ul.mb-3
            li(data-aos="fade-down")
              i.fas.fa-check(style="color: #AC0606")
              p.mb-0 #[b Para el usuario:] adquiere el producto de forma rápida minimizando costos, consigue precios favorables e información del producto de manera oportuna e inmediata.

            li(data-aos="fade-down")
              i.fas.fa-check(style="color: #AC0606")
              p.mb-0 #[b Para la empresa:] disminuye los costos de la fuerza de venta, minimiza el costo de tener distribuidores o mayoristas, elimina la posibilidad de robo de la mercancía, aumenta las ganancias, menor costo de inventario, acceso a mercados globales permitiendo posicionar el producto en cualquier lugar del mundo; el tiempo no es problema, pues las páginas están habilitadas 24 horas todos los días. 
        
        p.mb-4(data-aos="zoom-in") Como todo negocio lo sabe no solo se encuentra ventajas en las soluciones que da el #[i E-commerce] es por eso que se deben tener en cuenta las siguientes desventajas:
    
        .cajon.color-secundario.p-4.mb-3(style="background-color:#FFE3C7")
          ul.lista-ul.mb-3
            li(data-aos="fade-down")
              i.fas.fa-check(style="color: #AC0606")
              p.mb-0 #[b Para el usuario:] ninguna interrelación con el vendedor, dificultad para reclamaciones o hacer válida la garantía, no hay conocimiento físico del producto.

            li(data-aos="fade-down")
              i.fas.fa-check(style="color: #AC0606")
              p.mb-0 #[b Para las empresas:] poca comunicación con el consumidor, penetración por #[i hackers,] si el consumidor no tiene una buena experiencia de compra, fácilmente incide para que otras personas no adquieran productos por ese medio.

    p.mb-5(data-aos="zoom-in") Otro tipo de trabajo en ventas es el conocido como #[b ventas por catálogo] y trabaja en ofrecer diversidad de productos o referencias y modelos de los mismos gracias a un contenido editorial como revistas físicas o digitales. Su venta es inmediata, utiliza la distribución de tal manera que el producto llega a donde se encuentra el consumidor (casa, trabajo). Las características del modelo ventas por catálogo son las siguientes: 

    .row.justify-content-center.mb-4
      .col-12.col-lg-10.mb-4(data-aos="fade-up")
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Alternativa de venta llamativa, no requiere que el consumidor se desplace hacia almacenes.

          li 
            .lista-ol--cuadro__vineta
              span 2
            | Utiliza diversidad de medios para realizar la venta, entre las que se pueden nombrar el teléfono, la visita personal, la página web.

          li 
            .lista-ol--cuadro__vineta
              span 3
            | La compra se realiza con base en los artículos que observó y lo atrajeron del catálogo.
          
    p.mb-5(data-aos="zoom-in") Este modelo de ventas por catálogo tiene unas #[b ventajas] importantes que son las siguientes:

    .row.justify-content-center.mb-4
      .col-12.col-lg-10.mb-4(data-aos="fade-up")
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Facilidad de la compra, ya que en los catálogos el cliente observa los productos sin ningún tipo de presión por parte del vendedor.

          li 
            .lista-ol--cuadro__vineta
              span 2
            | Se fidelizan los clientes y permanecen con los catálogos.

          li 
            .lista-ol--cuadro__vineta
              span 3
            | Los catálogos tienen información que genera confianza en el cliente.
          
          li 
            .lista-ol--cuadro__vineta
              span 4
            | Generan empleos indirectos a las personas que se afilian a las empresas, estas les envía los catálogos, y las personas se encargan de realizar el mercadeo con horarios totalmente flexibles.
          
          li 
            .lista-ol--cuadro__vineta
              span 5
            | No requiere vendedores especializados.

          li 
            .lista-ol--cuadro__vineta
              span 6
            | Es una alternativa de segundo empleo, de ganancias adicionales o de trabajo para amas de casa.

    p.mb-5(data-aos="zoom-in") Al lado de las ventajas se presentan también unas #[b desventajas] importantes del modelo a tener en cuenta:

    .row.justify-content-center.mb-5
      .col-12.col-lg-10.mb-4(data-aos="fade-up")
        .cajon.color-primario.p-4.mb-4(style="background-color:#FFFAC1")
          ul.lista-ul.mb-3
            li(data-aos="fade-down")
              i.fas.fa-check(style="color: #AC0606")
              | Se requiere tener inventario.

            li(data-aos="fade-down")
              i.fas.fa-check(style="color: #AC0606")
              | La empresa asume el costo de la distribución.
            
            li(data-aos="fade-down")
              i.fas.fa-check(style="color: #AC0606")
              | El catálogo paga derechos de autor por pertenecer a una empresa.
            
            li(data-aos="fade-down")
              i.fas.fa-check(style="color: #AC0606")
              | Pueden deteriorarse los productos antes de la entrega, generando posibles reclamaciones más de una vez al distribuidor, para cumplir y dar satisfacción al cliente.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-12.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema8/img-010.svg', alt='')
      .col-lg-7.col-12.mb-3(data-aos="fade-left")
        p Se pueden relacionar las #[b ventas por correo] como aquellas que realizan las empresas enviando información a los clientes potenciales sobre productos o servicios de interés, adjuntando folletos, muestras, videos y demás elementos que permitan evidenciar los beneficios de los productos o servicios; este contenido puede ser recibido por medio físico o digital en un correo electrónico. Las características más representativas de este modelo son las siguientes:
        ul.lista-ul.mb-3
          li(data-aos="fade-down")
            i.fas.fa-check(style="color: #AC0606")
            | Se deben enviar correos claros y con información conveniente, de tal manera que esta no sea malinterpretada y el cliente decida no leerlo.

          li(data-aos="fade-down")
            i.fas.fa-check(style="color: #AC0606")
            | Los mensajes deben ser respetuosos y con contenido concreto, incluyendo enlaces, imágenes y campañas llamativas

          li(data-aos="fade-down")
            i.fas.fa-check(style="color: #AC0606")
            | Asegurar que la información del correo sea concreta, de tal manera que el cliente potencial pueda acceder al vendedor en cualquier momento, ya sea para aclarar dudas o iniciar una negociación.
          
    p.mb-5(data-aos="zoom-in") Algunas de las #[b desventajas] que se deben tener en cuenta para trabajar con este modelo de ventas por correo son las siguientes:

    .row.justify-content-center.mb-4
      .col-12.col-lg-10.mb-4(data-aos="fade-up")
        ol.lista-ol--cuadro.lista-ol--separador
          li 
            .lista-ol--cuadro__vineta
              span 1
            | Existe fidelización de clientes debido a que se personalizan los correos de acuerdo con sus intereses.

          li 
            .lista-ol--cuadro__vineta
              span 2
            | Existe confiabilidad de que el correo llegue a destinatario.
          
          li 
            .lista-ol--cuadro__vineta
              span 3
            | Se ofrece directamente el producto o servicio, incluyendo ofertas y descuentos que son atractivos para el cliente.

    p.mb-5(data-aos="zoom-in") En las técnicas de venta, la logística y los canales de distribución juegan un papel importante, ya que el momento de la entrega del producto, es una ocasión en la que el cliente muestra su satisfacción por la adquisición del producto o servicio. Los canales de distribución son estructuras que permiten llevar el producto desde el fabricante hasta el consumidor final. Hay varios tipos de canales y se integran en las siguientes categorías:

    .row.mb-5(data-aos="zoom-in")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema8/img-011.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-primario(style="background-color:#FFE3C7")
            .text-black.p-4
              h3.text-center Distribución intensiva
              p El producto se coloca en los sitios donde hay consumidores potenciales.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema8/img-012.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones(style="background-color:#FFE3C7")
            .p-4
              h3.text-center Distribución exclusiva
              p El producto es llevado a los clientes exclusivos, por ejemplo, a distribuidores.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema8/img-013.svg' alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones(style="background-color:#FFE3C7")
            .text-black.p-4
              h3.text-center Distribución selectiva o múltiple
              p Llega a segmentos de mercado controlado, estos son seleccionados por los ofertantes con el fin de realizar una penetración de mercado más regulada y pertinente sobre segmentos de su particular interés.

    p.mb-5(data-aos="zoom-in") En la distribución de #[b bienes de consumo] se subclasifica las categorías en los siguientes elementos:

    TabsA.color-acento-botones.mb-5(data-aos="zoom-in")
      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="Canal directo")
        p Aplicado mediante una relación sin intermediación entre productor y consumidor, por ejemplo: Las ventas por catálogo, en donde la empresa contrata el servicio de distribución de un tercero o lo hace en sus propios vehículos. Previamente se debe realizar una zonificación geográfica de distribución, luego se procede a realizar la entrega ordenada de productos, en respuesta directa a llamadas del consumidor final o de las consultoras —Ezica, Avon—.

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="Canal detallista")
        p Se realiza del productor al detallista y del detallista al consumidor. Este proceso se genera en las tiendas por departamento. —Falabella, Polar, Home Center—

      //- .tarjeta debe ir acompañado de una de una de estas clases => 
      //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
      //- estas clases tambien tienen un modificador --borde
      
      .tarjeta.color-acento-botones--borde.p-4(titulo="Canal mayorista")
        p Pasa del productor al mayorista, luego al detallista y finalmente al consumidor.

    p.mb-5(data-aos="zoom-in") Se puede concluir que la decisión de la distribución desde el vendedor hasta el consumidor final, depende del tipo de venta que se realiza, siendo la empresa la encargada de buscar la estrategia que le asegure el cumplimiento en la entrega, buscando siempre la satisfacción del cliente; sin embargo, no se puede desconocer que algunos consumidores realizan las transacciones, pero deciden ellos mismos recoger los productos en su lugar de producción o donde se encuentre al oferente.


</template>

<script>
export default {
  name: 'Tema8',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
