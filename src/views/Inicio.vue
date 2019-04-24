<template> 
<div>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>KIT-KETY</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
        <template v-slot:badge>
            <span></span>
          </template>
          <v-icon
          
            color="grey lighten-1"
          >shopping_cart</v-icon>
      </v-btn>
      <v-btn flat>
        <template v-slot:badge>
            <span></span>
        </template>
          <v-icon color="grey">mail</v-icon>
      </v-btn>
      <v-btn flat color="grey darken-1">
        <v-icon>favorite</v-icon>
      </v-btn>
      
      <v-btn flat>
      <template v-slot:badge>
        <v-icon
          dark
          small
        >
          done
        </v-icon>
      </template>
      <router-link to="/login">
      <v-icon
        color="grey lighten-1"
    
      >
        account_circle
      </v-icon>
    </router-link>
      </v-btn>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      
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
        src="https://www.wefashiontrends.com/wp-content/uploads/2013/01/como-usar-roupa-de-couro-no-ver%C3%A3o.jpg"
      >
        <v-expand-transition>
          <div
            v-if="hover"
            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-1 white--text"
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
        <h3 class="display-1 font-weight-light black--text mb-2">roupa</h3>
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
        src="https://static.zara.net/photos///2019/W/0/1/p/5216/050/400/2/w/1024/5216050400_9_1_1.jpg?ts=1554314196338"
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
        <h3 class="display-1 font-weight-light black--text mb-2">roupa</h3>
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
        src="https://i0.wp.com/thegreenestpost.com/wp-content/uploads/2017/01/marca-de-roupa-e-sapatos-traz-para-o-mercado-produtos-100-veganos.jpeg?fit=800%2C533&ssl=1"
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
        <h3 class="display-1 font-weight-light black--text mb-2">roupa</h3>
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
            src: 'http://1.bp.blogspot.com/-QVgjKBbi_wc/UDjpOvXBXwI/AAAAAAAAAws/w4HJrWUPPGw/s1600/viagem+11.jpg'
          },
          {
            src: 'https://vivagreen.com.br/wp-content/uploads/2016/08/tecidos-veganos-e1471951879868.jpg'
          },
          {
            src: 'https://www.simbiotico.eco/wp-content/uploads/sv-eco-clothing.jpg'
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKoIJrAFrWhYCVdkqBtFATzHX8Gmkt-yl1rWAx1Q9ewawoAF3q'
          }
        ]
      }
    }
  }

</script>