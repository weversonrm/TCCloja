<template>
    <div id="app">
        <v-app id="inspire" light>
            <v-navigation-drawer clipped fixed v-model="drawer" app :mini-variant.sync="mini">
            </v-navigation-drawer>
            <v-toolbar app clipped-left>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title class="flex display-1 font-weight-light">
                  Sunset
                </v-toolbar-title>
                    <v-spacer></v-spacer>
                  <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn flat>
                      <v-icon color="grey lighten-1">favorite</v-icon>
                    </v-btn>
                </v-toolbar-items>
            </v-toolbar>
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
          <v-img :aspect-ratio="16/9" :src="produto.src">
            <v-expand-transition>
              <div v-if="hover"
                class="d-flex transition-fast-in-fast-out black darken-2 v-card--reveal display-1 white--text"
                style="height: 100%;">
                {{produto.preco}}
              </div>
            </v-expand-transition>
          </v-img>
          <v-card-text class="pt-4" style="position: relative;">
          <v-btn absolute class="white--text" fab large right top @click="next">
              <v-icon large color="grey lighten-1" >
                shopping_cart
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
  <v-footer height="70" clipped-left>
    <div flat tile class="py-2 dark--text text-center flex"> 
      &copy;{{ new Date().getFullYear() }} — <strong>Gabriel Acunha*_*</strong>
    </div>
    <v-dialog v-model="dialog" width="600px">
      <template v-slot:activator="{ on }">
        <v-btn dark v-on="on" icon>
          <v-icon color="grey lighten-1">add</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-container style="max-width: 600px;">
          <v-timeline dense clipped>
            <v-timeline-item fill-dot class="white--text mb-12" color="orange" large>
              <template v-slot:icon>
                  <span></span>
              </template>
              <v-text-field v-model="input" hide-details flat 
              label="Você é muito importante..." solo @keydown.enter="comment">
                <template v-slot:append>
                  <v-btn class="mx-0" depressed @click="comment">
                    Comentar
                  </v-btn>
                </template>
              </v-text-field>
            </v-timeline-item>
            <v-slide-x-transition group>
              <v-timeline-item v-for="event in timeline" :key="event.id" class="mb-4" color="pink" small>
                <v-row justify="space-between">
                  <v-col cols="7" v-text="event.text"></v-col>
                  <v-col class="text-right" cols="5" v-text="event.time"></v-col>
                </v-row>
              </v-timeline-item>
            </v-slide-x-transition>
            <v-timeline-item class="mb-6" hide-dot>
              <span>Últimos comentários</span>
            </v-timeline-item>
            <v-timeline-item class="mb-4" color="grey" icon-color="grey lighten-2" small>
              <v-row justify="space-between">
                <v-col cols="7">Listinha</v-col>
                <v-col class="text-right" cols="5">15:26 Editado</v-col>
              </v-row>
            </v-timeline-item>
            <v-timeline-item class="mb-4" small>
              <v-row justify="space-between">
                <v-col cols="7">
                  <v-chip class="white--text ml-0" color="purple" label small>
                    Botão
                  </v-chip>
                    Um botão apenas
                </v-col>
                <v-col class="text-right" cols="5">11:11 Editado</v-col>
              </v-row>
            </v-timeline-item>
            <v-timeline-item class="mb-4" color="red" small>
              <v-row justify="space-between">
                <v-col cols="7">
                  Muito top, vou compra tudo.
                </v-col>
                <v-col class="text-right" cols="5">15:25 Editado</v-col>
              </v-row>
            </v-timeline-item>
            <v-timeline-item class="mb-4" color="yellow" small>
              <v-row justify="space-between">
                <v-col cols="7">
                  É $15.00 real um alface
                </v-col>
                <v-col class="text-right" cols="5">6:25 Editado</v-col>
              </v-row>
            </v-timeline-item>
            <v-timeline-item color="green" small>
              <v-row justify="space-between">
                <v-col cols="7">
                  John Wick é vegano.
                </v-col>
                <v-col class="text-right" cols="5">15:00 Editado</v-col>
              </v-row>
            </v-timeline-item>
          </v-timeline>
        </v-container>
      </v-card>
      </v-dialog>              
    </v-footer>
  </v-app>
</div>
</template>

<script>
  export default {
    data: () => ({
          drawer: false,
            dialog: false,
            icons: [
              'add',
            ],
          events: [],
      input: null,
      nonce: 0,
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
          },
        ],
    }),
    computed: {
      timeline () {
        return this.events.slice().reverse()
      },
    },
    methods: {
      comment () {
        const time = (new Date()).toTimeString()
        this.events.push({
          id: this.nonce++,
          text: this.input,
          time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
            return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
          }),
        })

        this.input = null
      },
    }
  }
</script>
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