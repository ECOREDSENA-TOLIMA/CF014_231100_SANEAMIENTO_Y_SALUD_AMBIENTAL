<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 A continuación, se describe el tema principal del componente formativo Plan de promotoría ambiental, que es una estrategia crucial para fomentar la conciencia y acción en la protección de nuestro entorno. A través de actividades educativas, difusión de información y participación comunitaria, busca empoderar a las personas para tomar medidas responsables y sostenibles. Este plan aborda desafíos como la conservación de recursos, reducción de residuos y preservación de la biodiversidad. Al trabajar juntos, podemos inspirar un cambio positivo en comportamientos y actitudes hacia el medio ambiente, generando un impacto duradero para las generaciones venideras. La promotoría ambiental es una herramienta esencial en la construcción de un futuro más verde y equilibrado.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis se muestra el desarrollo de los diferentes temas del componente formativo plan de promotoría ambiental, entre ellos: formatos, manejo de grupo, mejora continua, evaluación e indicadores.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
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
