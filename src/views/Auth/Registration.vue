<template>
  <v-container
    class="fill-height"
    fluid
  >
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <v-card class="elevation-12">
          <v-toolbar
            color="blue-grey darken-1"
            dark
            flat
          >
            <v-toolbar-title>
              Регистрация
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
              lazy-validation
              
            >
              <v-text-field
                label="Логин (эл. почта)"
                name="login"
                prepend-icon="mdi-login"
                type="email"
                v-model="email"
                :rules="emailRules"
                required
                dark
              />

              <v-text-field
                id="password"
                label="Пароль"
                name="password"
                prepend-icon="mdi-lock-outline"
                type="password"
                v-model="password"
                :rules="passwordRules"
                
              />

              <v-text-field
                id="confirmPassword"
                label="Подтвердите пароль"
                name="confirmPassword"
                prepend-icon="mdi-lock-outline"
                type="password"
                :error="$v.confirmPassword.$error"
                hint="Пароли должны совпадать"
                @blur="$v.confirmPassword.$touch()"
                v-model="confirmPassword"
                :rules="confirmPasswordRules"
                
              />
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn 
              color="blue-grey darken-1"
              @click="onSubmit"
              :loading="loading"
              :disabled="!(valid) || loading"
            >
              Регистрация
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
// @ is an alias to /src

import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { required, sameAs } from 'vuelidate/lib/validators'

Vue.use(Vuelidate)

export default {

  name: 'login',
  components: {
  },
  data: () => ({
    email: '',
    password: '',
    confirmPassword: '',
    valid: false,
    emailRules: [
      v => !!v || 'Введите эл. почту',
      v => /.+@.+\..+/.test(v) || 'Неправильный формат эл. почты',
    ],
    passwordRules: [
      v => !!v || 'Введите пароль',
      v => (v.length >= 8) || 'Пароль должен содержать как минимум 8 символов',
    ],
    confirmPasswordRules: [
      v => !!v || 'Введите пароль',
      // v => (v.length >= 8) || 'Password must be more or equal than 8 characters',
      // function(v) { return v === this.password || 'Пароли должны совпадать'}
      
    ]
  }),
  
  validations: {
    confirmPassword: {
      required,
      sameAs: sameAs('password')
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    onSubmit () {
      if (this.$refs.form.validate()) {
        const user = {
          email: this.email,
          password: this.password
        }

        this.$store.dispatch('registerUser', user)
          .then(() => {
            this.$router.push('/')
          })
          .catch(() => {})
      }
    }
  }
  
}

</script>
