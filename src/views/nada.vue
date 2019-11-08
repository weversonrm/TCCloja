<template>
  <div id="app">
    <v-app id="inspire" light>
      <v-navigation-drawer clipped fixed v-model="drawer" app>
        <v-list dense>
          <v-list-tile @click>
            <v-list-tile-action>
              <v-list-tile-title>Página inicial</v-list-tile-title>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-treeview :items="items"></v-treeview>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
            <v-toolbar app fixed clipped-left>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title class="flex display-1 font-weight-light">
                  .........
                </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items class="hidden-sm-and-down">
                    <v-btn flat>
                        <template v-slot:badge>
                            <span></span>
                        </template>
                        <v-icon
                            color="grey lighten-1"
                        >favorite</v-icon>
                    </v-btn>
                    <v-btn flat to="/login">
                    <v-icon color="grey lighten-1">
                        person_pin
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
            :aspect-ratio="25/13"
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
      cruds: [
        ['Create', 'add'],
      ],
<script>
  export default {

    data: () => ({    
    drawer: false,
    show: true,
      items: [
        {
          children: [
            {
              id: 20,
              name: 'Tutorials :',
              children: [
                { id: 21, name: 'Basic layouts : mp4' },
                { id: 22, name: 'Advanced techniques : mp4' },
                { id: 23, name: 'All about app : dir' },
              ],
            },
          ],
        },
      ],
    }),
  }
</script>