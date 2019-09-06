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
                    <v-list-tile @click to="/roupas">
                        <v-list-tile-action>
                            <v-icon>dashboard</v-icon>
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
                  Acessorios
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
                    <v-btn flat to="/login">
                        <template v-slot:badge>
                            <v-icon dark small>
                            done
                            </v-icon>
                        </template>
                    <router-link to="/login">
                    <v-icon color="grey lighten-1" to="/login">
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
        </v-app>
    
    </div>
</template>

<script>
export default {
    data() {
        return{
          drawer: false,
          show: true,
          prodCarousel:[
          {
            src: 'data:image/jpeg;base64,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',
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0LoZrXKJuHTr9ixqHK9-QUXB-McnEyfpEyT5ENx8gvpkcKu8l'
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxBWfNSRPfNAX06pV5-AXgE-qQ1U3qTAyVU2asP71l8J2vzHL19g'
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1xPDMicPGAaZor58OblHJxojAc7qWFwTonQaZA1JbmgiFw0gD'
          }
        ],
          produtos: [
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTltaNwHG4-tSQsNm79NgFo67TaYrvW1SqJhby4ukxd1Uo1O8in',
            preco: "R$ 10,00",
            descricao: "",
            marca: "",
            informacao: ""

          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmqMziQ0vcz_Q_oF9D07p-uo0_5VFmyGjyl5uFmS-5P3jKRZZ1',
            preco: "R$ 80,00",
            descricao: "",
            marca: "",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2iodmeYvrClbtyOU0iHRQ-bYCcqPC-q1n9R1kAOjEtZcjQTJsXg',
            preco: "R$ 90,00",
            descricao: "",
            marca: "",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0NTCz8EKAa7BNCHQ7nATGGJNJ10e4k1EcMj1Szyxj8icFvWT8GA',
            preco: "R$ 70,00",
            descricao: "",
            marca: "",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYS_MBjSltQUyJ8UdBd47zhzk_rABHgrYdL-4Gn53SOsSqxPDdfQ',
            preco: "R$ 270,00",
            descricao: "",
            marca: "",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNW-DM9TK-rUv9EN521Dx8zd0FMyGQyhcVmOQb-0KsI32JlbGpDg',
            preco: "R$ 170,00",
            descricao: "",
            marca: "",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhbKSDg_GlRUHwke9SMUnqZLuQ8Ylfjt--5CHc0om7wiq6iVer',
            preco: "R$ 50,00",
            descricao: "",
            marca: "",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeqDvhRI9KPbkeWy7IT5bjTFPsGlXfydI7pBWTQxJlhmNdMyjQ',
            preco: "R$ 60,00",
            descricao: "",
            marca: "",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThRFXzr00ljsesrWQo37KRXFyaQeRccUfB8QGZVfkmmCtlkVaIWg',
            preco: "R$ 50,00",
            descricao: "",
            marca: "",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdc0d4YaIQhyUwxp-TKyDpdUmsSkCPk9u3NMaOQQeRE1vriWlbDQ',
            preco: "R$ 85,00",
            descricao: "",
            marca: "",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwXfgwMW5vXn_AAobtHJ0UQYRQzrMGmzbO2LkZsA60gBRVNatR',
            preco: "R$ 79,00",
            descricao: "",
            marca: "",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjoDFm6wmwaChAv2FfmPKJKOaoulo9OiRoG73XgTLrr45DtNPZ',
            preco: "R$ 1,00",
            descricao: "",
            marca: "",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3mS6sxVjEk3JJ2vfycD07HTBDgq4RcxK9RlfIbQMQEi0JVACuAA',
            preco: "R$ 30,00",
            descricao: "",
            marca: "",
            informacao: ""
          },
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsUZZCmW-Wtw5yzAO1endAWvNh8NpXA9AV1GqE8FXV52EsDy_fgw',
            preco: "R$ 40,00",
            descricao: "",
            marca: "",
            informacao: ""
          },
          {
            src: '',
            preco: "R$ 70,00",
            descricao: "",
            marca: "",
            informacao: ""
          },
          {
            src: '',
            preco: "R$ 80,00",
            descricao: "",
            marca: "",
            informacao: ""
          }
          
        ]
        }
    }
}
</script>

