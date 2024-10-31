<template lang="pug">
.curso-main-container.pb-3.tema4
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Tipos de clientes

    .row.justify-content-center.mb-5
      .col-12(data-aos="fade-up")
        figure
          img(src='@/assets/curso/temas/tema4/img-01.png', alt='')

    p(data-aos="zoom-in") No todos los clientes son iguales, y esto es evidente en cualquier transacción comercial. Es esencial que el vendedor esté preparado para manejar diversas situaciones emocionales y conductuales que puedan surgir durante el proceso de negociación. Por esta razón, es crucial identificar las características del cliente con antelación, lo que permitirá desarrollar una estrategia adecuada y previamente entrenada para afrontar cualquier situación particular.
    p.mb-5(data-aos="zoom-in") La técnica de prospección requiere definir el perfil del cliente. Para ello, es importante responder a las siguientes preguntas:

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-10.col-12
        .cajon.color-primario.p-4.mb-5
          .row.justify-content-center.align-items-center
            .col-lg-3.col-4
              img(src='@/assets/curso/temas/tema4/icono.svg', alt='Texto que describa la imagen')
            .col-lg-9
              p.mb-0 #[b ¿Con qué frecuencia compra?]
              p.mb-0 #[b ¿El producto o servicio ofrecido satisface sus necesidades?]
              p.mb-0 #[b ¿El cliente decide directamente sobre la adquisición del bien o servicio?]
              p.mb-0 #[b ¿Qué alternativa de pago prefiere?]
              p.mb-0 #[b ¿Qué criterios son los que determinan su decisión de compra?]

        p.mb-0 Los clientes pueden ser clasificados de varias formas, esta es una de tantas clasificaciones que se puede estar con ellos y se recomienda para efectos de los factores de comunicación y negociación. 

    h3.mb-5
      span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[i.fas.fa-tag] a. Por sentido predominante

    p.mb-5(data-aos="zoom-in") Esta clasificación relata que las personas tienen más aceptación de la información por alguno de los sentidos, los 3 tipos más representativos son los siguientes:

    .row.mb-5(data-aos="zoom-in")
      .col-md-6.col-lg.mb-5.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-avatar.tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/temas/tema4/icono-02.svg', alt='Texto que describa la imagen')

          h4.text-center Visual
          p Son aquellos clientes que necesitan ver el producto para comprender sus beneficios y características. Frecuentemente utilizan el verbo "ver" durante la conversación. Estos clientes valoran las demostraciones visuales y el aspecto estético del producto.

      .col-md-6.col-lg.mb-5.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-avatar.tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/temas/tema4/icono-03.svg', alt='Texto que describa la imagen')

          h4.text-center Auditivo
          p Estos clientes prestan especial atención a la información verbal. Tienen una escucha activa y se concentran más en lo que se dice sobre el producto que en el producto en sí. Usan el verbo "escuchar" durante la conversación y prefieren un entorno libre de distracciones para no perder detalles.

      .col-md-6.col-lg.mb-5.mb-lg-0
        //- .tarjeta--boton debe ir acompañado de una de una de estas clases => 
        //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
        //- estas clases tambien tienen un modificador --borde
        .tarjeta-avatar.tarjeta--boton.color-secundario.p-4
          .row.justify-content-center.mb-3
            .col-4
              figure
                img(src='@/assets/curso/temas/tema4/icono-04.svg', alt='Texto que describa la imagen')

          h4.text-center Kinestésico
          p Son clientes que necesitan tocar o interactuar físicamente con el producto para sentirse seguros en su decisión de compra. Tienen dificultades para valorar productos o servicios intangibles, por lo que el vendedor debe ayudarles a "sentir" el producto a través de descripciones sensoriales. 
    
    h3.mb-5
      span.fondo-2.px-3.py-1(data-aos="zoom-in-down") #[i.fas.fa-tag] b. Por lealtad

    p.mb-5(data-aos="zoom-in") Esta clasificación está marcada por la relación del cliente con una marca que ya conoce y de la cual se ha generado una imagen mental como cualquiera de las siguientes:

    .col-xl-12.mx-auto.mb-5
      .d-flex.flex-wrap.align-items-center.mb-5
        .col-xl-8.order-2.order-xl-1.pe-xl-4
          LineaTiempoD.color-secundario.linea-tiempo-edit.mb-4(data-aos="zoom-in-down")
            p.text-small(numero="1" titulo="Clientes incondicionales") Mantienen un compromiso fuerte con la empresa y recomiendan activamente los productos a otros.
            
            p.text-small(numero="2" titulo="Clientes leales") Son similares a los incondicionales, pero solo recomiendan el producto cuando se les pregunta directamente.
            
            p.text-small(numero="3" titulo="Clientes terroristas") Son poco comprometidos y, cuando tienen una experiencia negativa, lo expresan de manera que puede afectar negativamente la adquisición de nuevos clientes.
            
            p.text-small(numero="4" titulo="Clientes desertores") No están satisfechos con su experiencia de compra y optan por cambiar de proveedor.

            p.text-small(numero="5" titulo="Clientes indiferentes") No muestran apego emocional al producto; para ellos, tenerlo o no tenerlo es irrelevante.

            p.text-small(numero="6" titulo="Clientes rehenes") Son fieles al producto, pero no necesariamente a la empresa. Tienen temor de probar otras opciones.

            p.text-small(numero="7" titulo="Clientes mercenarios") No tienen lealtad hacia la marca o el producto. Su comportamiento de compra se caracteriza por: <br><br> #[b Sensibilidad al precio:] eligen productos basándose principalmente en el precio, independientemente de la marca. <br> <br> <b><i>Switchers:</i></b> cambian de marca según las promociones disponibles. <br><br> #[b Negociadores:] Comparan marcas y optan por la que les ofrezca mayores beneficios. 

        img.col-xl-4.mb-4.mb-xl-0.mx-auto.order-1.order-xl-2(src='@/assets/curso/temas/tema4/img-02.svg', alt='Rutinas de limpieza')

    p.mb-5(data-aos="zoom-in") Para dar un marco general a esa configuración de los clientes y abriendo el prospecto se tiene la siguiente clasificación:

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row.justify-content-center.align-items-center
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          h3 Cliente indiferente
          p.mb-0 Este cliente requiere de un vendedor paciente y amable. Es crucial mostrar un genuino interés en brindar un buen servicio y asesoría adecuada para sus necesidades.

        .col-lg-6.col-10.order-lg-2.order-lg-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema4/img-03.png', alt='Texto que describa la imagen')

      .row.justify-content-center.align-items-center
        .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/img-04.png', alt='Texto que describa la imagen')

        .col-lg-6(data-aos="fade-left")
          h3 Cliente receloso
          p.mb-0 Ha tenido experiencias negativas previas con productos similares. El vendedor debe utilizar argumentos sólidos y persuasivos para superar la desconfianza y convencerlo de los beneficios del producto.

      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          h3 Cliente polémico
          p.mb-0 Este cliente tiende a contradecir todo lo que dice el vendedor. Es fundamental mantener la calma y la paciencia, escuchar activamente y, una vez que el cliente haya expresado sus puntos, proporcionar información clara y precisa para captar su atención.

        .col-lg-6.col-10.order-lg-2.order-lg-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema4/img-05.png', alt='Texto que describa la imagen')

      .row.justify-content-center.align-items-center
        .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/img-06.png', alt='Texto que describa la imagen')

        .col-lg-6(data-aos="fade-left")
          h3 Cliente grosero o poco amable
          p.mb-0 Aunque este tipo de cliente puede ser difícil debido a su actitud, el vendedor debe mantener el respeto y la cortesía. Un trato amable y profesional puede convertir a este cliente en un comprador leal, que preferirá ser atendido por el mismo vendedor en futuras ocasiones.
      
      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          h3 Cliente impulsivo
          p.mb-0 Prefiere explicaciones breves y claras. El vendedor debe conocer bien el producto para poder responder rápidamente a las preguntas sin abrumar al cliente con demasiada información, evitando presionar para cerrar la venta de inmediato.
        
        .col-lg-6.col-10.order-lg-2.order-lg-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema4/img-07.png', alt='Texto que describa la imagen')

      .row.justify-content-center.align-items-center
        .col-lg-6.col-10.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema4/img-08.png', alt='Texto que describa la imagen')

        .col-lg-6(data-aos="fade-left")
          h3 Cliente arrogante
          p.mb-0 Este cliente demanda descuentos y espera que el vendedor le preste toda su atención. La estrategia del vendedor debe consistir en aprovechar la vanidad del cliente, elogiándolo para dirigir la negociación hacia un cierre exitoso.

      .row.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
          h3 Cliente indeciso
          p.mb-0 Se caracteriza por su silencio y vacilación al tomar decisiones. Requiere de un vendedor paciente y comprensivo, que lo guíe cuidadosamente a lo largo del proceso de compra hasta que esté listo para decidirse. 
        
        .col-lg-6.col-10.order-lg-2.order-lg-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/temas/tema4/img-09.png', alt='Texto que describa la imagen')









</template>

<script>
export default {
  name: 'Tema4',
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
