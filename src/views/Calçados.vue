<template>
  <div id="app">
    <v-app id="inspire" light>
      <v-navigation-drawer clipped fixed v-model="drawer" app>
                <v-list dense>
                  <v-list-tile @click to="/inicio">
                        <v-list-tile-action>
                            <v-icon>apps</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content to="/inicio">
                            <v-list-tile-title>Página inicial</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click to="/acessorios">
                        <v-list-tile-action>
                            <v-icon>watch</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content to="/acessorios">
                            <v-list-tile-title>Acessorios</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-list-tile @click to="/roupas">
                        <v-list-tile-action>
                            <v-icon>whatshot</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content to="/roupas">
                            <v-list-tile-title>Roupas</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
            <v-toolbar app fixed clipped-left>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title class="flex display-1 font-weight-light">
                  Calçados
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
                        <v-icon
                            color="grey lighten-1"
                        >favorite</v-icon>
                    </v-btn>
                    <v-btn flat to="/usuario">
                    <v-icon color="grey lighten-1">
                        person_pin
                    </v-icon>
                    </v-btn>
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
          <v-btn absolute class="white--text" fab large right top v-model="produto.Icon">
              <v-icon large color="grey lighten-1" @click="produto.Icon = !produto.Icon">
                {{produto.Icon}}
                </v-icon>           
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
  </v-app>
    
    </div>
</template>

<script>
export default {
    data() {
        return{
          drawer: false,
          show: true,
          produtoIcon: false,
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
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPkOjHbXmebRkpeuk8jkFHnLTQNGFIAnR9jnebjE3vRqDS6Xmz',
            preco: "R$ 10,00",
            descricao: "",
            marca: "",
            informacao: "",
            Icon: 'shopping_cart'

          },
          {
            src: 'https://risa.com.br/wp-content/uploads/2018/07/kera%C3%AD-cal%C3%A7ados-veganos.jpg',
            preco: "R$ 80,00",
            descricao: "",
            marca: "",
            informacao: "",
            Icon: 'shopping_cart'
          },
          {
            src: 'http://www.mimiveg.com.br/wp-content/uploads/2018/07/calcados-veganos--740x357.jpg',
            preco: "R$ 90,00",
            descricao: "",
            marca: "",
            informacao: "",
            Icon: 'shopping_cart'
          },
          {
            src: 'https://www.modaquerima.com.br/wp-content/uploads/2018/06/estudio-nh-nh-cal%C3%A7ados-veganos.png',
            preco: "R$ 70,00",
            descricao: "",
            marca: "",
            informacao: "",
            Icon: 'shopping_cart'
          },
          {
            src: 'https://www.modaquerima.com.br/wp-content/uploads/2018/06/cal%C3%A7ado-sapato-sandalia-vegano-urbann-flowers.png',
            preco: "R$ 270,00",
            descricao: "",
            marca: "",
            informacao: "",
            Icon: 'shopping_cart'
          },
          {
            src: 'https://www.modaquerima.com.br/wp-content/uploads/2018/06/CAL%C3%87ADOS-VEGANOS-USE-PAR.png',
            preco: "R$ 170,00",
            descricao: "",
            marca: "",
            informacao: "",
            Icon: 'shopping_cart'
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfGroGZ0GZV2r8Ts7MO5B1fyFIwZCddASH6gwN4eXPzAkH_e1yw',
            preco: "R$ 50,00",
            descricao: "",
            marca: "",
            informacao: "",
            Icon: 'shopping_cart'
          },
          {
            src: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTGpn5vf9amOY0YVaYXV6G3KtVlfbsyO1DDMdJmGupwFrX9DstglqmcxRPDTY4HKwpta1ReHrNmbiV6Btv378qhA8-7EDPqLCQbJ5oy6XiyIeIA_ylAwbwqqQ&usqp=CAE',
            preco: "R$ 60,00",
            descricao: "",
            marca: "",
            informacao: "",
            Icon: 'shopping_cart'
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN0EPXdmqYBEGtwCyCRBmeTm6A7d2uWLajT-zhcPDwjKIxKjJq',
            preco: "R$ 50,00",
            descricao: "",
            marca: "",
            informacao: "",
            Icon: 'shopping_cart'
          },
          {
            src: 'https://www.modaquerima.com.br/wp-content/uploads/2018/06/ahimsa-cal%C3%A7ados-tenis-vegano.png',
            preco: "R$ 85,00",
            descricao: "",
            marca: "",
            informacao: "",
            Icon: 'shopping_cart'
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIHActOmOE7r-yppXU4xV8wWt2Z3Ev-epzIiHMlqQjGFV2BMCZjA',
            preco: "R$ 79,00",
            descricao: "",
            marca: "",
            informacao: "",
            Icon: 'shopping_cart'
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMbtA4PaRzufFIQQKTiBtEYm9LhoFQOyCVM7Q_d-cc7Cqt1fTl',
            preco: "R$ 1,00",
            descricao: "",
            marca: "",
            informacao: "",
            Icon: 'shopping_cart'
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNlGdbN11gr2LIZVrLgdd_N45bZDPaVkQGf7bdT9nByF4dHhTNvw',
            preco: "R$ 30,00",
            descricao: "",
            marca: "",
            informacao: "",
            Icon: 'shopping_cart'
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwut9YVj3bOheQxj40KY0K-jta3T5_3Cw9YXOnoeVDwgV2Km12qw',
            preco: "R$ 40,00",
            descricao: "",
            marca: "",
            informacao: "",
            Icon: 'shopping_cart'
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsOUpGdj0dCeUsqm7U9zTg3J72Gf_Lc6fADA5GUOCw5Ccxn31F_A',
            preco: "R$ 70,00",
            descricao: "",
            marca: "",
            informacao: "",
            Icon: 'shopping_cart'
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqZdUvkYX2AVHr6P7zrhQC1r-4PNGwbGB4Rd0uEKtpyLQyfNg8',
            preco: "R$ 80,00",
            descricao: "",
            marca: "",
            informacao: "",
            Icon: 'shopping_cart'
          }
          
        ]
        }
    }
}
</script>

