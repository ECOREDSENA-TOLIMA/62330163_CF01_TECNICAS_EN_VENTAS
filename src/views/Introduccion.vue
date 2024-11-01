<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p Desde el origen del hombre las ventas han jugado un papel importante, siendo su referente inicial el trueque de productos, medio que se convierte en forma de negociación, por tal motivo, en una acción contable como venta; para el caso del dinero, su cambio genera la recepción de un producto de otra referencia, por lo que se puede decir que hay negociación o transacción comercial.
    p.mb-5(data-aos="zoom-in") Para el proceso de materialización de la venta, es importante tener en cuenta la comunicación asertiva, tanto expresiva como corporal, referenciada esta, desde las particulares características de cada cliente y del producto o servicio a ofertar; es allí, donde la competencia y habilidad del vendedor juega un papel importante dentro del proceso, dado que este debe contar con la capacidad actitudinal necesaria, para adaptar la técnica de negociación al sinnúmero de posibilidades que el entorno y realidad situacional brinda.
    
    figure.mb-5(data-aos="zoom-in")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/8U1ia3PUATg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
