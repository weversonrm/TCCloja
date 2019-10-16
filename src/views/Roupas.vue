<template>
    <div id="app">
        <v-app id="inspire" light>
            <v-navigation-drawer clipped fixed v-model="drawer" app>
                <v-list dense>
                    <v-list-tile @click to="/calçados">
                        <v-list-tile-action>
                            <v-icon>dashboard</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content to="/calçados">
                            <v-list-tile-title>Calçados</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click to="/acessorios">
                        <v-list-tile-action>
                            <v-icon>dashboard</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content to="/acessorios">
                            <v-list-tile-title>Acessorios</v-list-tile-title>
                        </v-list-tile-content>
<<<<<<< HEAD
                    </v-list-tile>                                     
=======
                    </v-list-tile>                        
>>>>>>> 4b481864aef225f956a6e89adf5d0f74b3233375
                </v-list>
            </v-navigation-drawer>
            <v-toolbar app fixed clipped-left>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title class="flex display-1 font-weight-light">
                  Roupas
                </v-toolbar-title>
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
<<<<<<< HEAD
                        <v-icon
                            color="grey lighten-1"
                        >favorite</v-icon>
=======
                        <v-icon color="grey lighten-1">favorite</v-icon>
                    </v-btn>
                    <v-btn flat to="/login">
                        <template v-slot:badge>
                            <v-icon dark small>done</v-icon>
                        </template>
                    <v-icon color="grey lighten-1" to="/login">
                        account_circle
                    </v-icon>
>>>>>>> 4b481864aef225f956a6e89adf5d0f74b3233375
                    </v-btn>      
                    <v-text-field
                        placeholder="Pesquisar"
                        append-icon="search"
                        class="hidden-sm-and-down"
                    ></v-text-field>     
                    </v-toolbar-items>
            </v-toolbar>
<<<<<<< HEAD
=======
            <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in prodCarousel"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
  <br>
>>>>>>> 4b481864aef225f956a6e89adf5d0f74b3233375
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
  <v-footer>
    <div>&copy; 2019</div>
  </v-footer>
</v-app>
</div>
</template>
<<<<<<< HEAD
=======

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

>>>>>>> 4b481864aef225f956a6e89adf5d0f74b3233375
<script>
export default {
    data() {
        return{
            drawer: false,
            show: true,
        prodCarousel:[
          {
<<<<<<< HEAD
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
=======
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUTNXwX2FyWV5n-bJVky5hsY1-oVDb4a52zjtviX7rMxW0x9fU',
          },
          {
            src: 'https://www.hypeness.com.br/wp-content/uploads/2015/07/modavegan18.jpg'
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzQwF-0dqOFuofBWpvK80dw4MGRLLB2pRHTTX59B3HcmM6gsRmIg'
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyYdZr-b49eZALEsZJPBrRfzocR5t4aVuglgGchKb6Y7QAfPek'
>>>>>>> 4b481864aef225f956a6e89adf5d0f74b3233375
          }
        ],
         produtos: [
          {
<<<<<<< HEAD
            src: 'https://www.hypeness.com.br/wp-content/uploads/2015/07/modavegan18.jpg',
=======
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHSUQpKGzMcNYeHAtV_Wf9xGX-DTfhpx7X6MG3M4nYDWR0Au_zHw',
>>>>>>> 4b481864aef225f956a6e89adf5d0f74b3233375
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
<<<<<<< HEAD
            src: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRMuHshhfaAr5vRjkMbY3zVBcTpxvY0-Rzw2RzcxSXBPbqYx9Vn2gClh8KGwYH2apfHenL2Aqd28SYpblY9LT0IPUqzF4eQaOC3PdKFNCagiV_KYjwNqNYxEw&usqp=CAE',
=======
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgpGj9gjx3SSYCRfWAoR3uXpqocn_QWyG44Y91zxfVhcyZ9SiW',
>>>>>>> 4b481864aef225f956a6e89adf5d0f74b3233375
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
<<<<<<< HEAD
            src: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTGpn5vf9amOY0YVaYXV6G3KtVlfbsyO1DDMdJmGupwFrX9DstglqmcxRPDTY4HKwpta1ReHrNmbiV6Btv378qhA8-7EDPqLCQbJ5oy6XiyIeIA_ylAwbwqqQ&usqp=CAE',
=======
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ7y5xYyUIO4173aysf-j7WhPnm9UPJQm2r16oww3jWLBnmlSu',
>>>>>>> 4b481864aef225f956a6e89adf5d0f74b3233375
            preco: "R$ 60,00",
            descricao: "",
            marca: "Forever 21",
            informacao: ""
          },
          {
<<<<<<< HEAD
            src: 'https://i.pinimg.com/474x/bf/f4/42/bff442999410181b58d967ec5e5c38ca.jpg',
=======
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDfcZ-bqClSoxWwVC2yDiXKMA1heZrQJiBIWl-qc7AwFQtRO9m7Q',
>>>>>>> 4b481864aef225f956a6e89adf5d0f74b3233375
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
<<<<<<< HEAD
            src: 'https://www.freetheessence.com.br/lib/uploads/2016/08/pi%C3%B1atex.jpg',
=======
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ94Y1TUVP8-hpdoX9EX8fIdERZnCSOmHIovQefmCQq3gPW4WmNew',
>>>>>>> 4b481864aef225f956a6e89adf5d0f74b3233375
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
<<<<<<< HEAD
            src: 'http://moda.atarde.uol.com.br/wp-content/uploads/2018/03/insecta-2.jpg',
=======
            src: 'data:image/jpeg;base64,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',
>>>>>>> 4b481864aef225f956a6e89adf5d0f74b3233375
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

