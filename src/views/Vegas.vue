<template>
  <div id="app">
    <v-app id="inspire" dark>
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
                </v-list>
            </v-navigation-drawer>
            <v-toolbar app fixed clipped-left>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title class="flex display-1 font-weight-light">
                  Veganismo
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-toolbar-items class="hidden-sm-and-down">
                  <v-dialog v-model="dialog" width="600px">
                    <template v-slot:activator="{ on }">
                      <v-btn dark v-on="on" icon>
                          <v-icon color="grey lighten-1">pets</v-icon>
                      </v-btn>
                    </template>
                    <v-card>
                      <v-container style="max-width: 600px;">
                        <v-timeline dense clipped>
                          <v-timeline-item fill-dot class="white--text mb-12" color="orange" large>
                            <template v-slot:icon>
                              <v-icon>add</v-icon>
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
                </v-toolbar-items>
            </v-toolbar>
     <v-layout align-end justify-space-around row fill-height mt-5 wrap>
    </v-layout>
  </v-app> 
</div>
</template>
<script>
  export default {
    data: () => ({
          drawer: false,
          show: true,
          events: [],
      input: null,
      nonce: 0,
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
