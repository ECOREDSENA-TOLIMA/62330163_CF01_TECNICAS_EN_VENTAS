<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5(data-aos="fade-right") Las técnicas de ventas son la relación directa entre el equipo comercial de una empresa o un vendedor y sus prospectos de clientes como se evidencia en la siguiente imagen que presenta la importancia de dichas técnicas desde sus estrategias como lo son AIDA, SPIN y CRM pasando por las políticas de servicio para así entender el comportamiento del consumidor buscando entenderlo según su caracterización. 

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="El componente formativo a manera de síntesis se presenta en un mapa de conceptos que trabaja las ventas, comunicación y negociación como concepto principal y articula los conceptos de ventas con sus enfoques en proceso, métodos, técnicas y fases. Por otro lado la comunicación con sus tipos verbal y no verbal. Luego la negociación que trabaja con estilos y herramientas de negociación. Posteriormente los tipos de clientes clasificados por sentido predominante y lealtad y cierra con las estrategias de negociación entendiendo con detalle los modelos de negocio.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
