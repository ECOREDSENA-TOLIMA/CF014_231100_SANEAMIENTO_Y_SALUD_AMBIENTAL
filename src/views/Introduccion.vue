<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    p(data-aos="fade-left") La sociedad del siglo XXI está preocupada por la sanidad y la salud del ambiente a nivel mundial, por lo que se ha hecho necesario concienciar a la ciudadanía en general sobre la responsabilidad individual y colectiva frente a lo que cada uno puede aportar para que todos podamos cuidar el medio ambiente y dejar a las futuras generaciones un planeta sano y en el cual puedan vivir.
    p.mb-5(data-aos="fade-left") Por tal razón, se hace necesario que se conozcan algunas herramientas que ayudarán a diseñar, planear, ejecutar, coordinar, hacer seguimiento y evaluación mediante indicadores a procesos de formación comunitaria ambiental que realmente impacte la comunidad y que le permite ver cambios a largo plazo, por lo que le invito a ver el siguiente video:

    figure(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Dd66jHYKt1o?si=HaBBYMIm5qBGg_aE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
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
