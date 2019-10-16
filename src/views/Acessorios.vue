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
                            <v-list-tile-title>roupas</v-list-tile-title>
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
                    <v-icon color="grey lighten" >
                        account_circle
                    </v-icon>
                    </v-btn>      
                    <v-text-field
                        placeholder="Pesquisar"
                        append-icon="search"
                        class="hidden-sm-and-down"
                    ></v-text-field>     
                    </v-toolbar-items>
            </v-toolbar>
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

