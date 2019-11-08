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
      <span class="font-weight-light">
        Entrar
      </span>
      /
      <span>Cadastrar</span>
    <v-form ref="form" v-model="valid" lazy-validation>
    <v-text-field v-model="name" :counter="30" :rules="nameRules" label="Name" required> 
    </v-text-field>
    <v-text-field v-model="email" :rules="emailRules" label="E-mail" required> 
    </v-text-field>
    <v-text-field v-model="senha" label="Senha" type="password" required>
    </v-text-field>
    <v-btn color="secondary" to="/inicio">
      <v-icon>rowing</v-icon>
      Cadastrar
    </v-btn>
    <v-btn color="secondary" to="/login">
      Já é cadastrado
      <v-icon>error_outline</v-icon>
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
        v => !!v || 'Precisamos do seu nome',
        v => (v && v.length <= 30) || 'Perdão, apenas 30 caracteres',
      ],
        email: '',
        emailRules: [
          v => !!v || 'Por obséquio, digite o E-mail corretamente',
          v => /.+@.+\..+/.test(v) || 'E-mail não é valido',
      ],
        checkbox: false
      }),
      methods: {
        navigateTo(where){
          this.$router.push({name: where})
        },
        reset () {
        this.$refs.form.reset()
      },
    },
    }
</script>