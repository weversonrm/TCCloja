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
                    <v-list-tile @click to="/cadastro">
                        <v-list-tile-action>
                            <v-icon>touch_app</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content to="/cadastro">
                            <v-list-tile-title>Cadastrar</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>
                </v-list>
            </v-navigation-drawer>
            <v-toolbar app fixed clipped-left>
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title class="flex display-1 font-weight-light">
                  Cliente
                </v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items class="hidden-sm-and-down">
                    <v-text-field append-icon="search" class="hidden-sm-and-down">   
                    </v-text-field>     
                    </v-toolbar-items>
            </v-toolbar>
     <v-layout align-end justify-space-around row fill-height mt-5 wrap>
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
    }
    }
}
</script>

