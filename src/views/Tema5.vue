<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Indicadores
    
    p(data-aos="fade-left") Los indicadores son instrumentos que aportan información relevante para evaluar el desempeño y en qué medida se están cumpliendo los objetivos estratégicos de las diferentes áreas o departamentos. En este caso se hace referencia a un indicador de evaluación que se puede utilizar para medir el desempeño global del estudio.
    p(data-aos="fade-left") Aquí es importante conocer muy bien qué es y cómo se usan los indicadores para que, al usarlos en su sitio de trabajo, por lo que se hace necesario que conozca las características de los indicadores, las cuales se listan a continuación:

    .row.justify-content-center.align-items-center 
      .col-lg-5.col-md-8.col-10.mb-3
        figure
          img(src='@/assets/curso/temas/tema5/1.png', alt='imagen decorativa')
      .col-lg-7.col-12.mb-3
        ul.lista-ul
          li 
            i.fas.fa-check(style="color: #63C500")
            | Son comparables en el tiempo y ayudan a marcar tendencias.
          li 
            i.fas.fa-check(style="color: #63C500")
            | Son unas herramientas que ayudan a determinar los resultados de los procesos en relación con los objetivos marcados inicialmente.
          li 
            i.fas.fa-check(style="color: #63C500")
            | Ayudan a la organización a progresar y mejorar sus procesos.
          li 
            i.fas.fa-check(style="color: #63C500")
            | Son cuantificables.
          li 
            i.fas.fa-check(style="color: #63C500")
            | Sirven para reducir costes operativos.
          li 
            i.fas.fa-check(style="color: #63C500")
            | Permiten marcar unos objetivos relacionados con los resultados que se obtienen.
          li 
            i.fas.fa-check(style="color: #63C500")
            | La información que proporcionan es fiable.
    p.mt-5.mb-5(data-aos="fade-left") Además, los indicadores se pueden clasificar en diversas categorías según sus características y propósitos, como se presentan a continuación:

    .row 
      ImagenInfografica.color-secundario.mb-5.desktop
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema5/2.svg', alt='Imagen decorativa')
        .tarjeta.color-acento-botones.p-3(x="30.4%" y="15.5%" numero="")
          p Es necesario que proporcionen la información necesaria para entender con claridad el fenómeno que se va a tratar, para que así se puedan tomar decisiones que estén sustentadas.
        .tarjeta.color-acento-botones.p-3(x="25.1%" y="49.5%" numero="")
          p El indicador deberá comunicar el objetivo de una forma clara y concisa.
        .tarjeta.color-acento-botones.p-3(x="33.3%" y="81.4%" numero="")
          p Es necesario proporcionar información de contexto para facilitar una comprensión clara de lo que el indicador está dando a entender.
        .tarjeta.color-acento-botones.p-3(x="61.6%" y="10.6%" numero="")
          p Es importante que los procedimientos que están siendo documentados estén sujetos a bases científicas de información para tener puntos de comparación confiables.
        .tarjeta.color-acento-botones.p-3(x="76.4%" y="40.1%" numero="")
          p Se debe considerar la escala en la confiabilidad o pertinencia de los indicadores para que puedan ser aplicados a diferentes escalas organizacionales.
        .tarjeta.color-acento-botones.p-3(x="75.4%" y="61.7%" numero="")
          p Se debe tener un valor de comparación del indicador, para medir el avance en programas concretos y evaluar más fácilmente su desempeño.
        .tarjeta.color-acento-botones.p-3(x="63.2%" y="88.2%" numero="")
          p Es necesario que exista información aprovechable y que sea actualizado periódicamente con el fin de contar con datos precisos.
    .row
      .col-12 
        figure.movil(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema5/3.svg' alt='Imagen decorativa')

    .row.justify-content-center
      .col-10
        .row.justify-content-center.align-items-center
          .col-lg-8.col-12
            p(data-aos="fade-left") Un ejemplo claro es el ámbito de la salud, donde indicadores como la presión arterial y la temperatura corporal son fundamentales para evaluar el estado de una persona y tomar decisiones médicas adecuadas. Cuando estos indicadores están fuera de los rangos normales, se toman decisiones para buscar atención médica.
            p(data-aos="fade-left") En el ámbito ambiental, los indicadores son vitales para comprender y evaluar fenómenos naturales, cambios climáticos, riesgos de especies, calidad del suelo y muchos otros aspectos. Estos indicadores ambientales pueden variar según los objetivos de estudio y los parámetros que se miden.
          .col-lg-4.col-md-6.col-10
            figure
              img(src='@/assets/curso/temas/tema5/4.svg', alt='imagen decorativa')

    .row.justify-content-center.align-items-center.mb-5.mt-5
      .col-lg-10
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/img01.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#FFEBDF")
            .p-4
            p.p-2 Según la Organización para la Cooperación y el Desarrollo Económico (OCDE), un indicador ambiental es un parámetro o valor derivado de parámetros que proporciona información para describir el estado de un fenómeno, ambiente o área, con un significado que va más allá del directamente asociado con el valor del parámetro en sí mismo.
    .row
      .col-lg-7
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/img02.svg' alt='AvatarTop')(style="max-width: 55%;margin-top: -15px;")
          .tarjeta.tarjeta--azul.tituhoja(style="background-color:#C1E29A;margin-left: -16%;")
            .row.justify-content-center.align-items-center              
              .col-lg-12
                h3(style="color:#264100").mt-2 Funciones y características de los indicadores ambientales

    .row.justify-content-center.align-items-center 
      .col-lg-4.col-md-6.col-12.mb-3
        figure
          img(src='@/assets/curso/temas/tema5/5.png', alt='imagen decorativa')
      .col-lg-8.col-12.mb-3
        p(data-aos="fade-left") Para la elaboración de indicadores ambientales es necesario definir un marco conceptual donde se concrete qué se quiere monitorear. La selección de dichos indicadores estará determinada por las diferentes escalas en los análisis de las etapas a las que se requiera hacer seguimiento.
        p(data-aos="fade-left") Las principales funciones de los indicadores ambientales son:
        .tarjeta.p-3.mb-3(style="background-color: #E7FFD1") 
          ul.lista-ul
            li 
              i.fas.fa-check(style="color: #63C500")
              | Llevar al mínimo las medidas o parámetros que se necesitan para realizar una representación de la realidad de la situación.
        .tarjeta.p-3.mb-3(style="background-color: #E7FFD1") 
          ul.lista-ul
            li 
              i.fas.fa-check(style="color: #63C500")
              | Facilitar los procesos de comunicación.
    .row.mt-5
      p(data-aos="fade-left") Es importante recordar que los indicadores ambientales se utilizan a diferentes escalas para estandarizar los procesos que se están midiendo, estas pueden ser:

    .row 
      .cajon.p-4(style="background-color: #E6FFF9")
        .row.justify-content-center 
          .col-lg-3.col-12
            ul.lista-ul.text-center
              li 
                i.fas.fa-circle.fa-xs(style="color: #FFAE7E")
                | #[b Internacional]
          .col-lg-3.col-12
            ul.lista-ul.text-center
              li 
                i.fas.fa-circle.fa-xs(style="color: #FFAE7E")
                | #[b Nacional]
          .col-lg-3.col-12
            ul.lista-ul.text-center
              li 
                i.fas.fa-circle.fa-xs(style="color: #FFAE7E")
                | #[b Regional]
          .col-lg-3.col-12
            ul.lista-ul.text-center
              li 
                i.fas.fa-circle.fa-xs(style="color: #FFAE7E")
                | #[b Estatal]
    
    .row.mb-5.mt-5
      p(data-aos="fade-left") Es fundamental que los indicadores ambientales cumplan con ciertas características para que sean efectivos en la evaluación del estado del medio ambiente, el desempeño de políticas ambientales y la comunicación del progreso hacia el desarrollo sostenible. Estas características garantizan la utilidad y confiabilidad de los indicadores, las cuales serán descritas a continuación:

    .row 
      ImagenInfografica.color-secundario.mb-5.desktop
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema5/6.svg', alt='Imagen decorativa')
        .tarjeta.color-acento-botones.p-3(x="28.8%" y="25.3%" numero="")
          p Relacionados con la capacidad y/o acierto en la consecución de los objetivos de los procesos.
        .tarjeta.color-acento-botones.p-3(x="29.5%" y="54.1%" numero="")
          p Relacionados con los recursos invertidos en la consecución de los objetivos de los procesos.
        .tarjeta.color-acento-botones.p-3(x="30.3%" y="85%" numero="")
          p Relacionados con el grado de consecución de los objetivos de los procesos.
        .tarjeta.color-acento-botones.p-3(x="44.7%" y="15.5%" numero="")
          p Relacionados con los niveles de productividad del proceso.
        .tarjeta.color-acento-botones.p-3(x="71.4%" y="26.5%" numero="")
          p Relacionados con medir el rendimiento que se obtiene de una actividad o proceso.
        .tarjeta.color-acento-botones.p-3(x="71.5%" y="52.1%" numero="")
          p Relacionados con los niveles de calidad del proceso. Ayudan a identificar posibles complicaciones y problemas.
        .tarjeta.color-acento-botones.p-3(x="69.6%" y="83.6%" numero="")
          p Relacionados con los niveles de calidad del proceso, desde el punto de vista del cliente.
    .row
      .col-12 
        figure.movil(data-aos="fade-right")
          img(src='@/assets/curso/temas/tema5/7.svg' alt='Imagen decorativa')

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_5_1 5.1. Tipos

    p(data-aos="fade-left") Los indicadores ambientales pueden clasificarse en diferentes tipos según los datos disponibles y los aspectos que se desean medir. Aquí se describen algunos tipos de indicadores ambientales junto con sus características:

    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-primario.p-5(style="height:100%")
          .tarjeta-numerada__numero
            .h2 1
          h4 Tipo 1
          p Este tipo de indicador tiene datos que siempre se encuentran disponibles, ya que se obtienen en monitoreos que se realizan permanentemente.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-secundario.p-5(style="height:100%")
          .tarjeta-numerada__numero
            .h2 2
          h4 Tipo 2
          p Están basados en los datos que provienen de monitoreo permanente, pero a su vez necesitan información adicional dado que los datos pueden o no estar totalmente disponibles.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5(style="height:100%")
          .tarjeta-numerada__numero
            .h2 3
          h4 Tipo 3
          p Este tipo de indicadores no tiene una base estadística, ya que son principalmente indicadores conceptuales. 
    
    p.mb-5.mt-5(data-aos="fade-left") Es cierto que los indicadores ambientales son esenciales para analizar y dar seguimiento a los procesos de desarrollo, ya que permiten evaluar cómo las actividades humanas afectan el entorno natural y cómo se pueden implementar prácticas más sostenibles. La incorporación de información económica, social y ambiental en los indicadores de desarrollo sostenible es un enfoque holístico que reconoce la interconexión de estos aspectos en la búsqueda de un desarrollo equitativo y sostenible.

    .row
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema5/8.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Los indicadores de sostenibilidad, al incorporar información de los tres dominios (económico, ambiental y social), proporcionan una visión aún más completa y holística del progreso y la calidad de vida. Este enfoque integral es fundamental para comprender cómo las decisiones económicas y sociales impactan en el medio ambiente y la sociedad a largo plazo.
            br
            br
            | La implementación de sistemas de indicadores de sostenibilidad contribuye a un enfoque más equilibrado y a la toma de decisiones más informadas que consideran no solo los beneficios económicos a corto plazo, sino también las implicaciones sociales y ambientales a largo plazo. Esto es especialmente relevante en un contexto en el que la sostenibilidad se ha convertido en un objetivo clave para abordar los desafíos globales, como el cambio climático, la pérdida de biodiversidad y la equidad social.

    separador 
    .titulo-segundo.color-acento-contenido
      h2#t_5_2 5.2. Fichas técnicas

    p(data-aos="fade-left") Las fichas técnicas de los indicadores ambientales son herramientas fundamentales para garantizar la correcta construcción y el uso efectivo de los indicadores. Estas fichas contienen información detallada y específica que permite a los usuarios comprender el indicador, su metodología y su relevancia. Aquí se mencionan algunos pasos clave para desarrollar estas fichas metodológicas:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-8.col-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img            
            img(src='@/assets/curso/temas/tema5/9.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#D5FFF5")
            .p-4
            h4 Definición de objetivos y metas:
            p.p-2 es fundamental comenzar con una definición clara de lo que se pretende medir o evaluar con el indicador. Establecer los objetivos y metas de manera precisa es el punto de partida.
      .col-lg-8.col-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img            
            img(src='@/assets/curso/temas/tema5/10.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#D5FFF5")
            .p-4
            h4 Selección de temas:
            p.p-2 se deben identificar los temas que se abordarán con el indicador. Estos temas deben estar relacionados con la sostenibilidad ambiental y social y ser de relevancia para el contexto local.
      .col-lg-8.col-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img            
            img(src='@/assets/curso/temas/tema5/11.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#D5FFF5")
            .p-4
            h4 Revisión de información existente:
            p.p-2 antes de crear un indicador desde cero, es importante revisar la información disponible a nivel internacional y nacional. Esto proporciona una base sólida y permite la comparación con estándares y datos reconocidos.
      .col-lg-8.col-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img            
            img(src='@/assets/curso/temas/tema5/12.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#D5FFF5")
            .p-4
            h4 Desarrollo de la propuesta:
            p.p-2 La ficha técnica debe describir de manera clara y sencilla cómo se construirá el indicador. Esto incluye la metodología, los datos necesarios, las fuentes de información y los cálculos requeridos. Es importante que esta descripción sea comprensible para un público amplio.
      .col-lg-8.col-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img            
            img(src='@/assets/curso/temas/tema5/13.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#D5FFF5")
            .p-4
            h4 Socialización con expertos:
            p.p-2 es crucial involucrar a expertos en el tema para revisar y perfeccionar la ficha técnica. La retroalimentación de profesionales con experiencia en la materia garantiza la calidad y la precisión del indicador.
      .col-lg-8.col-12
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img            
            img(src='@/assets/curso/temas/tema5/14.svg' alt='AvatarTop')
          .tarjeta(style="background-color:#D5FFF5")
            .p-4
            h4 Consideración del contexto local:
            p.p-2 los indicadores ambientales deben adaptarse a las necesidades y problemáticas específicas de cada territorio. Esto implica que no puede existir una única fórmula para crear indicadores, ya que cada contexto puede requerir enfoques diferentes.

    .row 
      p(data-aos="fade-left") La creación de fichas técnicas de indicadores ambientales es un proceso esencial para asegurar que los indicadores sean efectivos y útiles para medir la sostenibilidad y la calidad ambiental en contextos locales. Las fichas proporcionan un marco claro para la construcción, el seguimiento y la interpretación de los indicadores, lo que facilita la toma de decisiones informadas y la evaluación de políticas y acciones relacionadas con el medio ambiente y el desarrollo sostenible.


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
