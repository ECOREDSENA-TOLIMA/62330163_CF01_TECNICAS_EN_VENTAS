<template lang="pug">
.curso-main-container.pb-3.tema7
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Conflicto

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-5.col-12.mb-3(data-aos="fade-right")
        figure
          img(src='@/assets/curso/temas/tema7/img-01.svg', alt='')
      .col-lg-7.col-12.mb-3(data-aos="fade-left")
        p Desde el punto de vista de las ventas, el conflicto se puede definir como aquellas inconformidades o inquietudes que tienen los consumidores acerca de un producto o servicio adquirido o por adquirir; ante esta circunstancia, el vendedor debe estar en capacidad de resolver la situación en el menor tiempo posible, brindando al cliente una respuesta que le asegure comodidad y satisfacción  (Johnston & Marshall, 2016).
        p Se puede definir el conflicto como aquello que implica una dificultad o malentendido; para el caso de las ventas, insatisfacción hacia un producto o servicio, ya sea porque no cumple las expectativas o porque una vez recibido el producto presenta alguna anormalidad que requiera su devolución. Los siguientes son unos tipos de conflicto a tener en cuenta:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")(data-aos="fade-up")
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema7/icono-08.svg' alt='AvatarTop')
        h3.text-center Manifiesto o declarado
        p Aquel conflicto que se evidencia fácilmente, la inconformidad se informa de manera verbal o escrita mediante manifiesto explícito; esta, puede ser ocasionada por aspectos como promociones, precios o condiciones de pago, lo cual puede provocar la afectación de la marca o del almacén donde se adquiere.
      
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema7/icono-02.svg' alt='AvatarTop')
        h3.text-center Latente
        p Se presenta en cualquier momento de la negociación; este tipo de conflicto puede ser causado por alguna diferencia en una creencia u opinión. Requiere mucha táctica por parte del vendedor. Se evidencia incomodidad.
      
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema7/icono-03.svg' alt='AvatarTop')
        h3.text-center Percibido
        p Generado por una percepción equivocada sobre la existencia de un conflicto, simplemente porque se realiza alguna pregunta de forma no cordial que pueda llegar a suscitar expectativa.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema7/icono-04.svg' alt='AvatarTop')
        h3.text-center Residual
        p Malestares que quedan después de un conflicto manifiesto y que inciden en la decisión de una nueva compra.
      
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema7/icono-05.svg' alt='AvatarTop')
        h3.text-center Sentido
        p Es similar al percibido, sólo que se adicionan sentimientos como el estrés o la desconfianza.
      
      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema7/icono-06.svg' alt='AvatarTop')
        h3.text-center Intrapersonal
        p Cuando el comprador tiene conflictos internos que no le permiten decidir la compra.

      .tarjeta.color-primario.p-4.col-ipad
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema7/icono-07.svg' alt='AvatarTop')
        h3.text-center Interpersonal
        p Entre comprador y vendedor, generado en algunas ocasiones por falta de empatía. 








</template>

<script>
export default {
  name: 'Tema7',
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
