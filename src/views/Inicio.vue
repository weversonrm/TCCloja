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
      <v-text-field
        placeholder="Pesquisar"
        append-icon="search"
        class="hidden-sm-and-down"
      ></v-text-field>     
    </v-toolbar-items>
  </v-toolbar>
    <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in prodCarousel"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  <br>
  <v-layout align-end justify-space-around row fill-height mt-5 wrap>
    <v-flex xs3 px-2 mb-5 v-for="(produto,i) in produtos" :key="i">
      <v-hover class="hidden-sm-and-down">
        <v-card
          slot-scope="{ hover }"
          class="mx-auto"
          color="grey lighten-4"
          max-width="250"
        >
          <v-img
            :aspect-ratio="16/9"
            :src="produto.src"
          >
            <v-expand-transition>
              <div
                v-if="hover"
                class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-1 white--text"
                style="height: 100%;"
              >
                {{produto.preco}}
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
            <div class="font-weight-light grey--text title mb-2">{{produto.descricao}}</div>
            <h3 class="display-1 font-weight-light black--text mb-2">{{produto.marca}}</h3>
            <div class="font-weight-light title mb-2">
              {{produto.informacao}}
            </div>
          </v-card-text>
        </v-card>
      </v-hover>
    </v-flex>
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
        prodCarousel:[
          {
            src: 'http://1.bp.blogspot.com/-QVgjKBbi_wc/UDjpOvXBXwI/AAAAAAAAAws/w4HJrWUPPGw/s1600/viagem+11.jpg',
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
        ],
        produtos: [
          {
            src: 'https://www.hypeness.com.br/wp-content/uploads/2015/07/modavegan18.jpg',
            preco: "R$ 10,00",
            descricao: "Camiseta Polo",
            marca: "Townley",
            informacao: "Cor vermelha"

          },
          {
            src: 'https://www.king55.com.br/estatico/king/images/temp/900_17960.jpeg',
            preco: "R$ 70,00",
            descricao: "Camiseta Gola V",
            marca: "Townley",
            informacao: "Cor azul"
          },
          {
            src: 'https://www.king55.com.br/estatico/king/images/temp/900_16958.jpeg',
            preco: "R$ 70,00",
            descricao: "Camiseta Gola V",
            marca: "Townley",
            informacao: "Cor azul"
          },
          {
            src: 'https://vivagreen.com.br/wp-content/uploads/2016/08/tecidos-veganos-e1471951879868.jpg',
            preco: "R$ 70,00",
            descricao: "Camiseta Gola V",
            marca: "Townley",
            informacao: "Cor azul"
          },
          {
            src: 'https://vivagreen.com.br/wp-content/uploads/2016/08/tecidos-veganos-e1471951879868.jpg',
            preco: "R$ 70,00",
            descricao: "Camiseta Gola V",
            marca: "Townley",
            informacao: "Cor azul"
          },
          {
            src: 'https://vivagreen.com.br/wp-content/uploads/2016/08/tecidos-veganos-e1471951879868.jpg',
            preco: "R$ 70,00",
            descricao: "Camiseta Gola V",
            marca: "Townley",
            informacao: "Cor azul"
          },
          {
            src: 'https://vivagreen.com.br/wp-content/uploads/2016/08/tecidos-veganos-e1471951879868.jpg',
            preco: "R$ 70,00",
            descricao: "Camiseta Gola V",
            marca: "Townley",
            informacao: "Cor azul"
          },
          {
            src: 'https://vivagreen.com.br/wp-content/uploads/2016/08/tecidos-veganos-e1471951879868.jpg',
            preco: "R$ 70,00",
            descricao: "Camiseta Gola V",
            marca: "Townley",
            informacao: "Cor azul"
          },
          {
            src: 'https://vivagreen.com.br/wp-content/uploads/2016/08/tecidos-veganos-e1471951879868.jpg',
            preco: "R$ 70,00",
            descricao: "Camiseta Gola V",
            marca: "Townley",
            informacao: "Cor azul"
          },
          {
            src: 'https://vivagreen.com.br/wp-content/uploads/2016/08/tecidos-veganos-e1471951879868.jpg',
            preco: "R$ 70,00",
            descricao: "Camiseta Gola V",
            marca: "Townley",
            informacao: "Cor azul"
          },
          {
            src: 'https://vivagreen.com.br/wp-content/uploads/2016/08/tecidos-veganos-e1471951879868.jpg',
            preco: "R$ 70,00",
            descricao: "Camiseta Gola V",
            marca: "Townley",
            informacao: "Cor azul"
          },
          {
            src: 'https://vivagreen.com.br/wp-content/uploads/2016/08/tecidos-veganos-e1471951879868.jpg',
            preco: "R$ 70,00",
            descricao: "Camiseta Gola V",
            marca: "Townley",
            informacao: "Cor azul"
          },
          {
            src: 'https://vivagreen.com.br/wp-content/uploads/2016/08/tecidos-veganos-e1471951879868.jpg',
            preco: "R$ 70,00",
            descricao: "Camiseta Gola V",
            marca: "Townley",
            informacao: "Cor azul"
          },
          {
            src: 'https://vivagreen.com.br/wp-content/uploads/2016/08/tecidos-veganos-e1471951879868.jpg',
            preco: "R$ 70,00",
            descricao: "Camiseta Gola V",
            marca: "Townley",
            informacao: "Cor azul"
          },
          
        ]
      }
    }
  }

</script>