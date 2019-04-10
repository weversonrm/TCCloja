<template> 
<div>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>KIT-KETY</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
        <v-badge
          v-model="show"
          color="purple"
        >
        <template v-slot:badge>
            <span>6</span>
          </template>
          <v-icon
            large
            color="grey lighten-1"
          >shopping_cart</v-icon>
        </v-badge>
      </v-btn>
      <v-btn flat>
        <v-badge
          v-model="show"
          color="cyan"
        >
        <template v-slot:badge>
            <span>5</span>
        </template>
          <v-icon large color="grey">mail</v-icon>
        </v-badge>
      </v-btn>
      <v-btn flat >
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn flat>
        <v-badge
      color="purple"
      left
      overlap
    >
      <template v-slot:badge>
        <v-icon
          dark
          small
        >
          done
        </v-icon>
      </template>
      <v-icon
        color="grey lighten-1"
        large
      >
        account_circle
      </v-icon>
    </v-badge>
      </v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
    <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
   <br>
   <v-layout align-end justify-space-around row fill-height mt-5>
  <v-hover class="hidden-sm-and-down">
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="250"
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            $14.99
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-4"
        style="position: relative;"
      >
        <v-btn
          absolute
          color="orange"
          class="white--text"
          fab
          large
          right
          top
          >
          <v-icon
            large
            color="grey lighten-1"
          >shopping_cart</v-icon>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <div class="font-weight-light grey--text title mb-2">alguma coisa</div>
        <h3 class="display-1 font-weight-light orange--text mb-2">roupa</h3>
        <div class="font-weight-light title mb-2">
          frase de impacto<br>
          made in china
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
  <v-hover class="hidden-sm-and-down">
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="250"
    >
      <v-img
        :aspect-ratio="16/9"
        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            $1.00
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-4"
        style="position: relative;"
      >
        <v-btn
          absolute
          color="orange"
          class="white--text"
          fab
          large
          right
          top
          >
          <v-icon
            large
            color="grey lighten-1"
          >shopping_cart</v-icon>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <div class="font-weight-light grey--text title mb-2">alguma coisa</div>
        <h3 class="display-1 font-weight-light orange--text mb-2">roupa</h3>
        <div class="font-weight-light title mb-2">
          frase de impacto<br>
          made in china
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
  <v-hover class="hidden-sm-and-down">
    <v-card
      slot-scope="{ hover }"
      class="mx-auto"
      color="grey lighten-4"
      max-width="250"
    >
      <v-img
        :aspect-ratio="16/9"
        src="../assets/sla.jpg"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
            style="height: 100%;"
          >
            $17.99
          </div>
        </v-expand-transition>
      </v-img>
      <v-card-text
        class="pt-4"
        style="position: relative;"
      >
        <v-btn
          absolute
          color="orange"
          class="white--text"
          fab
          large
          right
          top
          >
          <v-icon
            large
            color="grey lighten-1"
          >shopping_cart</v-icon>
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <div class="font-weight-light grey--text title mb-2">alguma coisa</div>
        <h3 class="display-1 font-weight-light orange--text mb-2">roupa</h3>
        <div class="font-weight-light title mb-2">
          frase de impacto<br>
          made in china
        </div>
      </v-card-text>
    </v-card>
  </v-hover>
  </v-layout>
</div>
</template>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
<script>
  export default {
    data () {
      return {
        show: true,
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
          }
        ]
      }
    }
  }

</script>