<template>
<div>
  <v-toolbar
      dark
      prominent
      src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Loja</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
  <v-layout align-center justify-center row fill-height mt-5 >
    <v-flex xs4 class="display-2 text-xs-center black--text pa-3">
      Entrar
    <v-form
    ref="form"
    v-model="valid"
    >      
    <v-text-field
    v-model="email"
    :rules="emailRules"
    label="E-mail ou Nome"
    required
    ></v-text-field>
    <v-text-field
    v-model="senha"
    label="Senha"
    type="password"
    required
    ></v-text-field>
    <v-btn block color="secondary" dark to="/inicio">
      Entrar
    </v-btn>
    <v-btn rounded color="secondary" dark to="/cadastro">
      Cadastrar
    </v-btn>
    </v-form>
    </v-flex>
    </v-layout>
    </div>
</template>
<script>
        export default {
          data: () => ({
            valid: true,
            email: '',
            emailRules: [
              v => !!v || 'E-mail is required',
              v => /.+@.+/.test(v) || 'E-mail must be valid'
            ],
            select: null,
            items: [
              'Item 1',
              'Item 2',
              'Item 3',
              'Item 4'
            ],
            checkbox: false
          }),
      
          methods: {
            validate () {
              if (this.$refs.form.validate()) {
                this.snackbar = true
              }
            },
            reset () {
              this.$refs.form.reset()
            },
            resetValidation () {
              this.$refs.form.resetValidation()
            }
          }
        }
      </script>