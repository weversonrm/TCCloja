<template>
<div>
    <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>TINO STYLE'S</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>
        <v-badge
          v-model="show"
          color="purple"
        >

          <v-icon
            color="grey lighten-1"
          >shopping_cart</v-icon>
        </v-badge>
      </v-btn>
      <v-btn flat>
        <v-badge
          v-model="show"
          color="cyan"
        >
          <v-icon color="grey">mail</v-icon>
        </v-badge>
      </v-btn>
      <v-btn flat color="grey darken-1">
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn flat>
        <v-badge
      color="purple"
      left
      overlap
    >
      <v-icon
        color="grey lighten-1"
      >
        account_circle
      </v-icon>
    </v-badge>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
  <v-layout align-center justify-center row fill-height mt-5 >
    <v-flex xs4 class="display-2 text-xs-center black--text pa-3">
      Cadastrar

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
    <v-btn block color="secondary" dark to="/inicio">
     Cadastrar
    </v-btn>
    <fb:login-button scope="public_profile,email" onlogin="checkLoginState();">
    </fb:login-button>

    <div id="status">
    </div>
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
        // This is called with the results from from FB.getLoginStatus().
  function statusChangeCallback(response) {
    console.log('statusChangeCallback');
    console.log(response);
    // The response object is returned with a status field that lets the
    // app know the current login status of the person.
    // Full docs on the response object can be found in the documentation
    // for FB.getLoginStatus().
    if (response.status === 'connected') {
      // Logged into your app and Facebook.
      testAPI();
    } else {
      // The person is not logged into your app or we are unable to tell.
      document.getElementById('status').innerHTML = 'Please log ' +
        'into this app.';
    }
  }

  // This function is called when someone finishes with the Login
  // Button.  See the onlogin handler attached to it in the sample
  // code below.
  function checkLoginState() {
    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });
  }

  window.fbAsyncInit = function() {
    FB.init({
      appId      : '{your-app-id}',
      cookie     : true,  // enable cookies to allow the server to access 
                          // the session
      xfbml      : true,  // parse social plugins on this page
      version    : '{api-version}' // The Graph API version to use for the call
    });

    // Now that we've initialized the JavaScript SDK, we call 
    // FB.getLoginStatus().  This function gets the state of the
    // person visiting this page and can return one of three states to
    // the callback you provide.  They can be:
    //
    // 1. Logged into your app ('connected')
    // 2. Logged into Facebook, but not your app ('not_authorized')
    // 3. Not logged into Facebook and can't tell if they are logged into
    //    your app or not.
    //
    // These three cases are handled in the callback function.

    FB.getLoginStatus(function(response) {
      statusChangeCallback(response);
    });

  };

  // Load the SDK asynchronously
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));

  // Here we run a very simple test of the Graph API after login is
  // successful.  See statusChangeCallback() for when this call is made.
  function testAPI() {
    console.log('Welcome!  Fetching your information.... ');
    FB.api('/me', function(response) {
      console.log('Successful login for: ' + response.name);
      document.getElementById('status').innerHTML =
        'Thanks for logging in, ' + response.name + '!';
    });
  }
      </script>