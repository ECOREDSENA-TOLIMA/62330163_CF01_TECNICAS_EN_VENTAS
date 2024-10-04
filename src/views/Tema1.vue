<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Ventas

    p.mb-5(data-aos="zoom-in") Las ventas, en su esencia, representan mucho más que una simple transacción comercial. Se trata de un proceso dinámico y estratégico que involucra la identificación de necesidades, la creación de valor, y la construcción de relaciones a largo plazo. En el contexto moderno, vender no es solo ofrecer un producto o servicio, sino también comunicar de manera efectiva cómo este satisface las necesidades y deseos del cliente. Esta comunicación debe ser clara, persuasiva y, sobre todo, adaptada a las particularidades de cada cliente, lo que exige un profundo conocimiento del mercado, del producto, y de las habilidades de negociación.

    .row.justify-content-center.align-items-center.mb-5(data-aos="zoom-in")
      .col-lg-6.order-lg-1.order-2 
        p.mb-0 El éxito en ventas radica en la capacidad de comprender al cliente y de construir una relación de confianza. El vendedor debe actuar como un consultor, guiando al cliente a través del proceso de compra y ayudándolo a tomar decisiones informadas. En un entorno competitivo, donde las opciones son abundantes, la capacidad de diferenciarse a través del servicio al cliente y la personalización de la oferta es fundamental. Por lo tanto, las ventas modernas requieren una combinación de habilidades técnicas, emocionales y de comunicación, todas ellas orientadas a ofrecer soluciones que no solo satisfagan necesidades inmediatas, sino que también fortalezcan la lealtad del cliente a largo plazo.
        p.mb-0 El concepto de ventas puede ser definido de muchas formas gracias a los autores que trabajan el concepto, las definiciones más representativas para el trabajo que se hace en el presente contenido académico son las siguientes: 
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
        img(src='@/assets/curso/temas/tema1/img-01.svg', alt='Imagen decorativa')

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-up")
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/icono-01.svg' alt='AvatarTop')
        h3.text-center American Marketing Asociation 
        p Venta es: “el proceso personal o impersonal por el que el vendedor comprueba, activa y satisface las necesidades del comprador para el mutuo y continuo beneficio de ambos (del vendedor y el comprador)”.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/icono-02.svg' alt='AvatarTop')
        h3.text-center Reid (1980) 
        p En su libro “Las técnicas modernas de venta y sus aplicaciones” expresa que: “la venta promueve un intercambio de productos y servicios”.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/icono-03.svg' alt='AvatarTop')
        h3.text-center Kotler (2000) 
        p Es un lenguaje estandarizado de modelado abierto e independiente de para describir, analizar y visualizar la arquitectura empresarial a través de diferentes dominios.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/icono-04.svg' alt='AvatarTop')
        h3.text-center  Romero (1997) 
        p En su libro #[i “Marketing”,] define la venta de la siguiente manera: “cesión de una mercancía mediante un precio convenido”. 

    p.mb-5(data-aos="zoom-in") A manera de conclusión se puede resumir la definición de venta, como una #[b transacción comercial que adquiere un bien o servicio a cambio de un pago.]

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_1 1.1 Proceso de ventas y métodos

    p.mb-5(data-aos="zoom-in") El proceso de ventas es considerado como el conjunto de tareas o actividades que se realizan para alcanzar ese objetivo. Generalmente las actividades vinculantes a este proceso, se desarrollan paso a paso, tal y como lo muestra la siguiente representación gráfica.

    .row.justify-content-center.align-items-center.mb-0
      .col-12.col-lg-11(data-aos="fade-right")
        ImagenInfografica.color-acento-botones.mb-3.desktop
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/temas/tema1/img-07-01.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-botones.p-3(x="26.1%" y="22.3%" numero="+")(style="background-color:#FFFFFF")
            p(style="color:#000") Este momento es importante, porque depende del cliente; si el cliente es una empresa, hay que determinar quién es la persona que toma la decisión de la compra y quién hace la compra; esto precisará la estrategia que contribuya a generar el suficiente interés para la adquisición del producto.

          .tarjeta.color-acento-botones.p-3(x="11.1%" y="77.5%" numero="+")(style="background-color:#FFFFFF")
            p(style="color:#000") Cada organización define las estrategias a utilizar para encontrar clientes; estas estrategias deben ir unidas a la proactividad del vendedor y a su habilidad. De igual forma, es muy importante conocer bien el producto o servicio que se ofrece para definir los tipos de clientes hacia los cuales se debe llegar. La búsqueda del cliente puede hacerse de varias maneras, por ejemplo: contacto personal, teléfono o internet, entre otras posibilidades.

          .tarjeta.color-acento-botones.p-3(x="41%" y="77.5%" numero="+")(style="background-color:#FFFFFF")
            p(style="color:#000") Cuando se habla de perspectiva desde el punto de vista de las ventas, se refiere a la identificación de las necesidades de los clientes y a la búsqueda del producto o servicio que satisfaga las expectativas del cliente y le generen un beneficio. Calificar al cliente en perspectiva, puede ser definido como el proceso que permite identificar la necesidad, la conciencia y la rentabilidad esperada por el cliente, con el objetivo de asegurar la posibilidad de la venta.
          
          .tarjeta.color-acento-botones.p-3(x="56.1%" y="22.3%" numero="+")(style="background-color:#FFFFFF")
            p(style="color:#000") Este es uno de los pasos más significativos, puesto que se debe dar a conocer al cliente las bondades del producto o servicio; hay que tener en cuenta si lo ofrecido requiere de una demostración o entrega de muestras; si la situación es pertinente con esta situación, se debe tener garantía previa que asegure su funcionamiento y minimice el error, brindando la posibilidad de manipulación durante la demostración de acuerdo con los ajustes solicitados por el cliente.

          .tarjeta.color-acento-botones.p-3(x="71%" y="77.5%" numero="+")(style="background-color:#FFFFFF")
            p(style="color:#000") Este punto es alcanzado en el momento que el comprador se siente satisfecho con las características y expectativas esperadas para el producto o servicio, por lo tanto, es importante que se acelere el cierre de la negociación.
          
          .tarjeta.color-acento-botones.p-3(x="86.1%" y="22.3%" numero="+")(style="background-color:#FFFFFF")
            p(style="color:#000") Una vez cerrada la venta, es importante garantizar la satisfacción, para lo cual es importante que el vendedor asegure que no se presente ningún inconveniente.

        .row.mt-5.mb-3.justify-content-center
          .col-10.col-md-10.col-lg-12.movil(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/tema1/img-07-02.svg', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-11(data-aos="fade-down-right")
        .cajon.color-primario.p-4(style="background-color:#FFFAC1")
          p.mb-0 El método de venta depende en gran medida de la interrelación que se logre entre vendedor y comprador, de la correcta identificación de necesidades y de la satisfacción de esos requerimientos.

    Separador

    .titulo-segundo.color-acento-contenido
      h2#t_1_2 1.2 Sistemas de ventas

    p.mb-5(data-aos="zoom-in") Los sistemas de ventas son estructuras organizativas que las empresas utilizan para gestionar y optimizar sus esfuerzos de ventas, asegurando una cobertura eficiente del mercado y la maximización del rendimiento de sus equipos de ventas. Estos sistemas permiten a las empresas definir y asignar responsabilidades específicas a sus vendedores, así como segmentar el mercado de acuerdo con diferentes criterios, tales como áreas geográficas, productos, o tipos de clientes. La correcta implementación de un sistema de ventas facilita no solo la planificación y el control de las actividades comerciales, sino también la capacidad de la empresa para adaptarse a las demandas cambiantes del mercado. Los enfoques principales que se pueden tomar a la hora de hacer el planteamiento de un sistema de ventas son los siguientes:

    TabsC.color-acento-botones.mt-5.mb-5.color_img-tab.bg_1(data-aos="fade-left")
      .p-4(titulo="Áreas geográficas o territorio")
        .row.justify-content-center
          .col-lg-5.col-10.mb-lg-0.mb-4
            img.img-t.m-auto(src='@/assets/curso/temas/tema1/img-03.png', alt='Texto que describa la imagen')
              
          .col-lg-7
            h3 Por áreas geográficas o territorio
            p.mb-0 Este sistema de ventas se basa en la zonificación del mercado en sectores geográficos específicos donde la empresa desea posicionar su producto o servicio. A cada vendedor se le asigna una zona de trabajo definida, lo que le permite concentrarse en un área específica y optimizar sus esfuerzos de ventas. La zonificación requiere considerar aspectos clave como la cantidad de clientes reales y potenciales, la frecuencia de visitas necesarias, los sistemas de transporte disponibles, la demanda del producto, la presencia de la competencia, y las características del equipo de ventas.
            p.mb-0 Este enfoque genera múltiples beneficios para la empresa, los vendedores y los clientes. Para la empresa, permite medir la rentabilidad en cada zona, asignar responsabilidades claras a los vendedores, y lograr una mayor cobertura del mercado. Para los vendedores, facilita un mayor acercamiento a los clientes, mejora las oportunidades de venta, y permite la planificación estratégica del trabajo. Para los clientes, se traduce en un mejor servicio, gracias a la proximidad con el vendedor, y una reducción en el tiempo de respuesta y los costos de inventario.

      .p-4(titulo="Productos")
        .row.justify-content-center
          .col-lg-5.col-10.mb-lg-0.mb-4
            img.img-t.m-auto(src='@/assets/curso/temas/tema1/img-04.png', alt='Texto que describa la imagen')

          .col-lg-7
            h3 Por productos
            p.mb-0 El sistema de ventas por productos se organiza en función de las características específicas de los productos que la empresa ofrece. En este caso, cada vendedor debe tener un conocimiento profundo de los aspectos técnicos de los productos, lo que puede resultar en mayores costos debido al tiempo invertido en asesorías y desplazamientos. Sin embargo, este enfoque puede redundar en un aumento de las ventas, ya que permite una atención más especializada y una mayor satisfacción del cliente.
            p.mb-0 Este sistema es particularmente útil para empresas que cuentan con una amplia gama de productos, ya que permite dividir el mercado según las características del producto o el segmento objetivo. De este modo, se asignan equipos de vendedores especializados, entrenados específicamente para cada tipo de producto, lo que asegura un enfoque más preciso y eficiente en la gestión de las ventas.

      .p-4(titulo="Clientes")
        .row.justify-content-center
          .col-lg-5.col-10.mb-lg-0.mb-4
            img.img-t.m-auto(src='@/assets/curso/temas/tema1/img-05.png', alt='Texto que describa la imagen')

          .col-lg-7
            h3 Por clientes
            p.mb-0 El sistema de ventas por clientes se enfoca en organizar a los clientes en grupos con características comunes, como el volumen de compra, la forma de distribución, y la frecuencia de entrega. Esta segmentación permite a las empresas asignar equipos de ventas especializados a cada segmento, fomentando relaciones más estables y duraderas con los clientes.
            p.mb-0 La clasificación de clientes puede incluir categorías como institucionales, mayoristas, grandes superficies, detallistas, sector público, y sector privado. La principal ventaja de este sistema es el profundo conocimiento que se adquiere de las necesidades de cada tipo de cliente, lo que facilita la creación de estrategias de fidelización y mejora la efectividad de las ventas.

      .p-4(titulo="Mixtas")
        .row.justify-content-center
          .col-lg-5.col-10.mb-lg-0.mb-4
            img.img-t.m-auto(src='@/assets/curso/temas/tema1/img-06.png', alt='Texto que describa la imagen')

          .col-lg-7
            h3 Mixtas
            p.mb-0 El sistema de ventas mixto es una combinación de dos o más de los sistemas anteriormente mencionados. Este enfoque es ampliamente utilizado en el entorno dinámico del mercado actual, ya que permite a las empresas aprovechar las ventajas de múltiples sistemas simultáneamente. La clave del éxito en este sistema radica en contar con un equipo de ventas bien entrenado, tanto en sus funciones específicas como en el conocimiento del producto o servicio que ofrecen. Al combinar estrategias de ventas basadas en la geografía, el producto y el cliente, las empresas pueden aumentar su alcance y efectividad en el mercado. 

    p.mb-5(data-aos="zoom-in") Los enfoques del sistema de ventas son de gran utilidad para el empresario, el colaborador y el mercado, a continuación, se muestra un ejemplo del uso de los enfoques:

    .row.justify-content-center.mt-5
      .col-lg-12.col-12(data-aos="fade-left")
        .titulo-sexto.color-acento-contenido
            h5 Tabla 1.
            span <em>Enfoques del sistema de ventas</em>
        .tabla-a.color-acento-contenido.mb-5
          table      
            thead(style="background-color: #AC0606")
              tr
                th(style="color: #fff") Enfoque del sistema de ventas
                th(style="color: #fff") Descripción
                th(style="color: #fff") Ejemplo
            tbody
              tr
                td.text-center(style="background-color: #F6F6F6") Por áreas geográficas o territorio
                td(style="background-color: #F6F6F6") Segmentación del mercado por zonas geográficas, asignando a cada vendedor una región específica.
                td(style="background-color: #F6F6F6") Una empresa de cosméticos asigna a sus vendedores tanto por zonas geográficas como por tipos de clientes, dividiendo así la ciudad en áreas específicas y dentro de esas áreas, asignando vendedores a salones de belleza y tiendas minoristas.
              tr
                td.text-center Por productos
                td Organización del equipo de ventas en función de las características técnicas de los productos.
                td Una empresa de tecnología divide su equipo de ventas entre aquellos que venden <em>laptops</em> y aquellos que venden <em>software,</em> debido a la necesidad de conocimientos especializados.
              tr
                td.text-center(style="background-color: #F6F6F6") Por clientes
                td(style="background-color: #F6F6F6") Segmentación del mercado según tipos de clientes con características comunes.
                td(style="background-color: #F6F6F6") Una empresa de alimentos organiza su equipo de ventas en grupos que atienden a clientes mayoristas, restaurantes, y supermercados por separado.
              tr
                td.text-center Mixtas
                td Combinación de dos o más enfoques de ventas para una mayor efectividad.
                td Una empresa de cosméticos asigna a sus vendedores tanto por zonas geográficas como por tipos de clientes, dividiendo así la ciudad en áreas específicas y dentro de esas áreas, asignando vendedores a salones de belleza y tiendas minoristas.













</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
