<template>
  <section>
    <h1>{{ headerText }}</h1>
    <p>Lorem ipsum dolor amet keytar mumblecore 3 wolf moon, hot chicken pickled chicharrones raclette vice cloud bread microdosing normcore vinyl brooklyn echo park. Pitchfork 3 wolf moon keffiyeh austin, meggings pabst banh mi next level kinfolk yuccie synth affogato hella snackwave chambray. Cardigan paleo live-edge celiac snackwave truffaut beard pabst. Humblebrag messenger bag mixtape celiac raclette live-edge fixie microdosing 3 wolf moon mustache iPhone.</p>
    <p>Truffaut kitsch PBR&amp;B forage. Vape tumeric butcher hashtag. Kombucha kinfolk paleo church-key. Palo santo blue bottle occupy hot chicken. Paleo viral banjo cloud bread air plant art party. Thundercats put a bird on it af tacos. Vice mlkshk next level, typewriter sriracha fam austin single-origin coffee small batch selvage edison bulb umami DIY leggings fingerstache.</p>
    <section>
      <h3>Editor</h3>
      <input v-model="headerText" />
      <swatch-picker v-model="color" @input="update" />
    </section>
    <style>
      :root {
        --bg: {{ color.hex }}
      }
    </style>
  </section>
</template>

<script>
import { Chrome } from "vue-color";

export default {
  components: {
    "swatch-picker": Chrome
  },
  data(){
    return {
      headerText: "Themable website 1.0",
      color: "#000"
    }
  }
}
</script>

<style>

  :root {
    font-family: "Ubuntu", sans-serif;
    background: var(--bg);
  }

</style>
