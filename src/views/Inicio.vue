<template> 
<div>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Sunlight and Vegan</v-toolbar-title>
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
            descricao: "",
            marca: "Forever 21",
            informacao: ""

          },
          {
            src: 'https://www.king55.com.br/estatico/king/images/temp/900_17960.jpeg',
            preco: "R$ 80,00",
            descricao: "",
            marca: "king 55",
            informacao: ""
          },
          {
            src: 'https://www.king55.com.br/estatico/king/images/temp/900_16958.jpeg',
            preco: "R$ 90,00",
            descricao: "",
            marca: "king 55",
            informacao: ""
          },
          {
            src: 'https://www.king55.com.br/estatico/king/images/temp/900_18636.jpeg',
            preco: "R$ 70,00",
            descricao: "",
            marca: "King 55",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRpPKsQVvTkyuM1HUVdH3JoEpDWHPSGjxWDpP5yL6b9YiHaWQsZvue5cWe6XHefNKhiDSj-qjm_Xx3LOyC-sBWss3-ZVq4oLQ&usqp=CAE',
            preco: "R$ 270,00",
            descricao: "",
            marca: "Forever 21",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRMuHshhfaAr5vRjkMbY3zVBcTpxvY0-Rzw2RzcxSXBPbqYx9Vn2gClh8KGwYH2apfHenL2Aqd28SYpblY9LT0IPUqzF4eQaOC3PdKFNCagiV_KYjwNqNYxEw&usqp=CAE',
            preco: "R$ 170,00",
            descricao: "",
            marca: "Viva Green",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTs7gZHIBHYXl0rWWWFBC2E3pZCkyvNI4H3IKYXNC6eTaowo8g85NnJ3m2oeMVh9crC2bZmtWCpnJiTTX2F4kO_VuFZIx4TifYKro7VutWg9Vec3a038U-Dhg&usqp=CAE',
            preco: "R$ 50,00",
            descricao: "",
            marca: "Viva Green",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTGpn5vf9amOY0YVaYXV6G3KtVlfbsyO1DDMdJmGupwFrX9DstglqmcxRPDTY4HKwpta1ReHrNmbiV6Btv378qhA8-7EDPqLCQbJ5oy6XiyIeIA_ylAwbwqqQ&usqp=CAE',
            preco: "R$ 60,00",
            descricao: "",
            marca: "Forever 21",
            informacao: ""
          },
          {
            src: 'https://i.pinimg.com/474x/bf/f4/42/bff442999410181b58d967ec5e5c38ca.jpg',
            preco: "R$ 50,00",
            descricao: "",
            marca: "V",
            informacao: ""
          },
          {
            src: 'https://assets.xtechcommerce.com/uploads/images/thumbnails/121c67e2e0cb7cf100504ac2cd275568.jpg',
            preco: "R$ 85,00",
            descricao: "",
            marca: "E",
            informacao: ""
          },
          {
            src: 'https://res.cloudinary.com/amarotech/image/fetch/c_limit,f_auto,dpr_1,w_440,q_auto:best/v11553108149/https://cdn.amaro.com/images/products/20020160_047_original_1.jpg',
            preco: "R$ 79,00",
            descricao: "",
            marca: "G",
            informacao: ""
          },
          {
            src: 'https://www.freetheessence.com.br/lib/uploads/2016/08/pi%C3%B1atex.jpg',
            preco: "R$ 1,00",
            descricao: "",
            marca: "A",
            informacao: ""
          },
          {
            src: 'https://vivagreen.com.br/wp-content/uploads/2016/08/tecidos-veganos-e1471951879868.jpg',
            preco: "R$ 30,00",
            descricao: "",
            marca: "N",
            informacao: ""
          },
          {
            src: 'http://moda.atarde.uol.com.br/wp-content/uploads/2018/03/insecta-2.jpg',
            preco: "R$ 40,00",
            descricao: "",
            marca: "O",
            informacao: ""
          },
          {
            src: 'https://static.zattini.com.br/produtos/calca-pantalona-crepe/03/IGA-0145-203/IGA-0145-203_zoom1.jpg?resize=544:*',
            preco: "R$ 70,00",
            descricao: "",
            marca: "Pantalona",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_5DYojZiTzrOx-s1qODP2VE2WGoYduRngqVBjTNTcWfso2dd',
            preco: "R$ 80,00",
            descricao: "",
            marca: "Panta louna",
            informacao: ""
          }
          
        ]
      }
    }
  }

</script>