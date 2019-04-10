<template>
<div>
    <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>KIT-KETY</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
        <v-badge
          v-model="show"
          color="purple"
        >
        <template v-slot:badge>
            <span>6</span>
          </template>
          <v-icon
            large
            color="grey lighten-1"
          >shopping_cart</v-icon>
        </v-badge>
      </v-btn>
      <v-btn flat>
        <v-badge
          v-model="show"
          color="cyan"
        >
        <template v-slot:badge>
            <span>5</span>
        </template>
          <v-icon large color="grey">mail</v-icon>
        </v-badge>
      </v-btn>
      <v-btn flat >
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn flat>
        <v-badge
      color="purple"
      left
      overlap
    >
      <template v-slot:badge>
        <v-icon
          dark
          small
        >
          done
        </v-icon>
      </template>
      <v-icon
        color="grey lighten-1"
        large
      >
        account_circle
      </v-icon>
    </v-badge>
      </v-btn>
      <v-btn flat>Link Three</v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-layout align-center justify-center row fill-height mt-5 wrap>
    <v-flex xs4 class="display-2 text-xs-center black--text elevation-2 pa-3">
      entrar/registrar

    <v-form
    ref="form"
    v-model="valid"
    >
    <v-text-field
    v-model="name"
    :counter="10"
    :rules="nameRules"
    label="Name"
    required
    ></v-text-field>
        
    <v-text-field
    v-model="email"
    :rules="emailRules"
    label="E-mail"
    required
    ></v-text-field>
    <v-text-field
    v-model="senha"
    label="senha"
    type="password"
    required
    ></v-text-field>
    <v-btn block color="secondary" dark>
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
            name: '',
            nameRules: [
              v => !!v || 'Name is required',
              v => (v && v.length <= 10) || 'Name must be less than 10 characters'
            ],
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