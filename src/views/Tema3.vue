<template lang="pug">
.curso-main-container.pb-3.tema3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Comunicación y negociación

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-12.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema3/img-01.svg', alt='')
      .col-lg-7.col-12.mb-3(data-aos="fade-left")
        p En cualquier proceso de transmisión de información, especialmente en el ámbito de la negociación, la manera en que se realiza la comunicación, tanto verbal como no verbal, es crucial para el éxito. La comunicación efectiva permite al vendedor alcanzar su objetivo: cerrar la venta.
        p La comunicación #[b verbal] implica el uso de palabras para transmitir el mensaje. Para un vendedor, dominar esta forma de comunicación es esencial. Los elementos clave a tener en cuenta incluyen: 
        ul.lista-ul.mb-3
          li(data-aos="fade-down")
            i.fas.fa-check(style="color: #AC0606")
            | #[b Tono:] refleja emociones y actitudes, y puede influir en la percepción del mensaje.
          li(data-aos="fade-down")
            i.fas.fa-check(style="color: #AC0606")
            | #[b Pronunciación:] es importante articular claramente para evitar malentendidos.
          li(data-aos="fade-down")
            i.fas.fa-check(style="color: #AC0606")
            | #[b Silencios:] pueden enfatizar ideas o permitir al cliente procesar la información.
          li(data-aos="fade-down")
            i.fas.fa-check(style="color: #AC0606")
            | #[b Volumen:] debe ser adecuado para la situación, evitando ser demasiado bajo o alto.
          li(data-aos="fade-down")
            i.fas.fa-check(style="color: #AC0606")
            | #[b Rapidez al hablar:] la velocidad puede indicar el estado de ánimo y debe ser controlada para asegurar claridad. 

    p(data-aos="zoom-in") Es esencial que el lenguaje utilizado sea respetuoso, sincero y concreto para evitar malentendidos. Sin embargo, hay varias #[b barreras] que pueden dificultar la comunicación efectiva, como barreras ambientales (ruido, distracciones), verbales (hablar demasiado rápido o de manera confusa), interpersonales (malas percepciones), semánticas (uso incorrecto de términos), físicas (iluminación, selección de medios), fisiológicas (problemas de audición o habla), psicológicas (rechazo o agrado entre emisor y receptor), y administrativas (información confusa o excesiva).
    p.mb-5(data-aos="zoom-in") La comunicación no #[b verbal] se percibe a través de los sentidos, principalmente la vista y el tacto. Este tipo de comunicación incluye varios elementos:

    .row.align-items-center.justify-content-center.mb-5(data-aos="fade-down")
      .col-10.col-lg-4.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema3/img-02.png' alt="Muestra semillas nativas")
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              p.text-center.mb-0 Movimientos del cuerpo que pueden ser conscientes o inconscientes, como emblemas, adaptadores, y reguladores, que ayudan a enfatizar el mensaje.
      
      .col-10.col-lg-4.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema3/img-03.png' alt="Muestra semillas mejoradas")
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              p.text-center.mb-0 Pueden indicar amistad o burla, dependiendo del contexto.
      
      .col-10.col-lg-4.mb-3
        .tarjeta.tarjeta-foto-hover
          .tarjeta-foto-hover__img: img(src='@/assets/curso/temas/tema3/img-04.png' alt="Muestra semillas híbridas ")
          .tarjeta-foto-hover__titulo.d-flex.justify-content-center.align-items-center.p-3
          .tarjeta-foto-hover__tarjeta.bg-degrade.d-flex.align-items-center.justify-content-center
            .p-4.text-center
              p.text-center.mb-0 La manera en que una persona se sienta o se pone de pie puede transmitir confianza o desconfianza. 
    
    //.row.justify-content-center.mb-5
      .col-lg-4.col-md-10.col-sm-10.mb-xl-0.mb-4.col-ipad(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/img-02.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG05.p-xl-1.p-lg-3.p-sm-2.p-md-2.p-2
            .title.d-flex.align-items-center.justify-content-center.text-black.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Función motivacional
            p.text-small.text-center.mb-0 Las emociones sirven como impulsos que dirigen y orientan el comportamiento hacia la satisfacción de necesidades y deseos. Por ejemplo, el miedo puede motivar a una persona a evitar situaciones peligrosas, mientras que la alegría puede impulsar la repetición de conductas que generan bienestar. 

      .col-lg-4.col-md-10.col-sm-10.mb-xl-0.mb-4.col-ipad(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/img-03.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG05.p-xl-1.p-lg-3.p-sm-2.p-md-2.p-2
            .title.d-flex.align-items-center.justify-content-center.text-black.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Función social
            p.text-small.text-center.mb-0 Las emociones facilitan la comunicación y la interacción social al expresar estados internos y generar empatía. Las emociones compartidas, como la tristeza en un duelo o la felicidad en una celebración, refuerzan los lazos sociales y la cohesión grupal, siendo fundamentales para la vida en comunidad. 

      .col-lg-4.col-md-10.col-sm-10.mb-xl-0.mb-4.col-ipad(data-aos="fade-right")
        .tarjetas-up(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema3/img-04.png' alt="Imagen decorativa")
          .tarjetas-up_card.BG05.p-xl-1.p-lg-3.p-sm-2.p-md-2.p-2
            .title.d-flex.align-items-center.justify-content-center.text-black.mb-3
              span
                i.fas.fa-caret-up.fa-2x.me-3
                i.fas.fa-caret-down.fa-2x.me-3
              h4.mb-0 Función reguladora
            p.text-small.text-center.mb-0 Las emociones ayudan a regular los estados internos del organismo, manteniendo un equilibrio psicológico y fisiológico. Por ejemplo, la tristeza puede permitir la elaboración de experiencias dolorosas, mientras que la rabia puede canalizarse en la defensa de los propios derechos. 

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="zoom-in-up")
        .cajon.color-primario.p-4
          .row.justify-content-center.align-items-center
            .col-lg-2.mb-3
              figure  
                img(src='@/assets/curso/temas/tema3/icono.svg', alt='Imagen decorativa')
            .col-lg-10
              p Además, la #[b expresión facial] es una fuente rica de información en la comunicación no verbal, con la mirada siendo especialmente importante para captar la atención del interlocutor. 

    p En el contexto de una negociación, la combinación de técnicas de comunicación verbal y no verbal juega un papel decisivo en la percepción del cliente y en el éxito de la interacción. El vendedor debe estar consciente de cómo su lenguaje corporal, tono de voz, y las palabras que elige, pueden influir en la percepción del cliente, ya sea generando confianza o levantando barreras.
    p.mb-5(data-aos="zoom-in") Dominar estas técnicas permite al vendedor manejar mejor las negociaciones, superando barreras de comunicación y estableciendo una conexión sólida con el cliente, lo cual es crucial para cerrar la venta de manera efectiva. A continuación se presenta un gráfico de apoyo que facilita el entendimiento de este importante concepto.

    .row.justify-content-center.mb-5
      .col-12.col-md-10.col-lg-10(data-aos="fade-up")
        .titulo-sexto.color-acento-contenido
          p.titulo.pb-0.mb-0 <b>Figura 2. </b> <i>La comunicación</i>
        figure.mb-5
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema3/img-05-01.svg', alt='La imagen comparte una explicación de las formas de la comunicación que puede ser verbal o no verbal, la verbal puede ser oral o escrita y la no verbal pueden ser los gestos, las imágenes y los sonidos.')
          img.d-block.d-md-none(src='@/assets/curso/temas/tema3/img-05-02.svg', alt='La imagen comparte una explicación de las formas de la comunicación que puede ser verbal o no verbal, la verbal puede ser oral o escrita y la no verbal pueden ser los gestos, las imágenes y los sonidos.') 

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_1 3.1 Estilos de negociación

    p.mb-5(data-aos="zoom-in") La negociación se puede entender desde diversas perspectivas, y algunos conceptos clave son los siguientes:
    
    .row.mb-5.justify-content-center
      .col-10(data-aos="fade-right")
        .bloque-texto-b.color-acento-contenido.p-4
          <hr style="border:15px; background-color:#AC0606">
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 El arte de acercar posiciones de partes con opiniones e intereses distintos, sobre temas e inquietudes comunes, hacia un acuerdo mutuamente aceptable… es un proceso; existe una situación de disputa entre dos o más partes y la posibilidad de transacción que permita un trueque; se debe llegar a un acuerdo con beneficio para ambas partes.
            i.fas.fa-quote-right
          .bloque-texto-f__autor.mb-3
            h5.text-end.mb-0 - Sabra, 1999
    
      .col-10(data-aos="fade-right")
        .bloque-texto-b.color-acento-contenido.p-4
          <hr style="border:15px; background-color:#AC0606">
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p.mb-0 Acción mediante la cual dos o más personas tratan de resolver un asunto… Asunto es la materia que se trata en la negociación, por tanto, cuando se habla de negociar se está refiriendo a una manera civilizada de resolver conflictos mediante un proceso de búsqueda y formalización de acuerdos que satisfagan los intereses de cada parte.
            i.fas.fa-quote-right
          .bloque-texto-f__autor.mb-3
            h5.text-end.mb-0 - Gabaldón, 2006

    .row.justify-content-center.align-items-center.mb-5(data-aos="flip-left") 
      .col-lg-7.order-lg-1.order-2
        p En el contexto de las ventas, se puede concluir que la negociación es una transacción comercial en la que, a cambio de dinero, se adquiere un bien o servicio. Por lo tanto, toda acción de negociación requiere:
        ul.lista-ul.mb-3
          li(data-aos="fade-down")
            i.fas.fa-check(style="color: #AC0606")
            | Un bien o servicio que sea demandado por más de una persona.

          li(data-aos="fade-down")
            i.fas.fa-check(style="color: #AC0606")
            | Dos partes involucradas en la negociación, con disposición para llegar a un acuerdo mediante transacción.

          li(data-aos="fade-down")
            i.fas.fa-check(style="color: #AC0606")
            | Comunicación asertiva entre las partes, garantizando que no haya espacio para interpretaciones erróneas.
        p Con esto en mente se define que existen varios estilos de negociación, los cuales se pueden clasificar de la siguiente manera:

      .col-lg-5.col-8.order-lg-2.order-1.mb-lg-0.mb-4
        figure
          img(src="@/assets/curso/temas/tema3/img-06.svg", alt="")

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="zoom-out-up")
      .row(titulo="Según el modo")
        .col-md-12.mb-4.mb-md-0
          p #[b Explícita:] es abierta y visible para ambas partes.
          p #[b Tácita:] no se reconoce formalmente como una negociación, pero está implícita en el proceso.

        figure
          img(src='@/assets/curso/temas/tema3/img-07.png', alt='Texto que describa la imagen')

      .row(titulo="Según el sistema")
        .col-md-12.mb-4.mb-md-0
          p #[b Competitiva o distributiva:] en este estilo, se busca maximizar los propios beneficios, sin importar el impacto en la contraparte. Generalmente, una de las partes resulta más beneficiada.
          p #[b Integrativa o cooperativa:] se enfoca en encontrar intereses comunes, generando confianza mutua. Este tipo de negociación permite un resultado "gana-gana" para ambas partes.
          p #[b Acomodativa:] aquí, el negociador puede parecer que cede o pierde a corto plazo, pero lo hace con la expectativa de obtener beneficios a largo plazo.
          p #[b Generada por el perfil del cliente:] ocurre cuando se identifica que la transacción podría resultar en pérdidas para ambas partes, lo que lleva a decidir no llevarla a cabo.
          p #[b Mixta:] combina dos o más de los estilos anteriores.

        figure
          img(src='@/assets/curso/temas/tema3/img-08.png', alt='Texto que describa la imagen')
      
      .row(titulo="Según los resultados obtenidos")
        .col-md-12.mb-4.mb-md-0
          p #[b De puro conflicto:] una de las partes gana y la otra pierde.
          p #[b De pura coordinación:] ambas partes ganan o pierden en igual medida.

        figure
          img(src='@/assets/curso/temas/tema3/img-09.png', alt='Texto que describa la imagen')
      
      .row(titulo="Según la participación")
        .col-md-12.mb-4.mb-md-0
          p #[b Directa:] el vendedor y el comprador interactúan directamente, con el vendedor asumiendo un rol activo para lograr una buena negociación.
          p #[b Indirecta:] intervienen representantes que actúan en nombre de las partes principales.

        figure
          img(src='@/assets/curso/temas/tema3/img-010.png', alt='Texto que describa la imagen')

      .row(titulo="Según el desencadenante")
        .col-md-12.mb-4.mb-md-0
          p #[b Libre:] la negociación se realiza sin presiones externas; es espontánea.
          p #[b Forzada:] existe una causa o presión que obliga a realizar la transacción. 

        figure
          img(src='@/assets/curso/temas/tema3/img-011.png', alt='Texto que describa la imagen')

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_3_2 3.2. Herramientas para el proceso de negociación.

    p.mb-5(data-aos="zoom-in") Existen diversas herramientas que pueden apoyar el proceso de negociación comercial, entre ellas:

    .row.justify-content-center
      .col-12.mb-4
        .tarjeta-avatar-b(data-aos="flip-up")
          .tarjeta-avatar-b__img(style="max-width: 600px")
            img(src='@/assets/curso/temas/tema3/img-012.svg' alt='AvatarTop')
          .tarjeta.tarjeta1
            .p-4
              h4 Posiciones perceptivas
              p Consiste en simular el proceso de negociación desde tres perspectivas: como vendedor, como comprador y como observador. Esta técnica requiere gran concentración e imaginación por parte del vendedor, ya que le permite establecer estrategias de negociación adecuadas para diferentes perfiles de clientes.
   
      .col-12.mb-4
        .tarjeta-avatar-b(data-aos="flip-up")
          .tarjeta-avatar-b__img(style="max-width: 600px")
            img(src='@/assets/curso/temas/tema3/img-013.svg' alt='AvatarTop')
          .tarjeta.tarjeta1
            .p-4
              h4 Sensación de lograr una buena negociación
              p Es crucial que el vendedor tenga claro hasta dónde puede negociar sin perder y sin dar la impresión al cliente de que ha salido perjudicado. Aquí es donde entra en juego la inteligencia emocional, asegurando que ambas partes sientan que han ganado al finalizar la negociación.
      
      .col-12.mb-4
        .tarjeta-avatar-b(data-aos="flip-up")
          .tarjeta-avatar-b__img(style="max-width: 600px")
            img(src='@/assets/curso/temas/tema3/img-014.svg' alt='AvatarTop')
          .tarjeta.tarjeta1
            .p-4
              h4 Controlar la inseguridad
              p El vendedor debe evitar centrarse exclusivamente en los beneficios personales de la negociación, ya que esto puede generar inseguridad, lo que a su vez podría provocar desconfianza en el cliente y, en algunos casos, la pérdida de la venta.
      
      .col-12.mb-4
        .tarjeta-avatar-b(data-aos="flip-up")
          .tarjeta-avatar-b__img(style="max-width: 600px")
            img(src='@/assets/curso/temas/tema3/img-015.svg' alt='AvatarTop')
          .tarjeta.tarjeta1
            .p-4
              h4 Manejo de emociones
              p Entre las emociones más difíciles de manejar se encuentra la ira, que puede ser desencadenada por clientes que parecen indecisos o que hacen demasiadas preguntas, lo que podría llevar al vendedor a sentir que está perdiendo el tiempo. Es fundamental que el vendedor controle estas emociones para evitar poner en riesgo la venta y la relación con el cliente. 




</template>

<script>
export default {
  name: 'Tema3',
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
