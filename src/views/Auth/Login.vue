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
              Вход
            </v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-form
              ref="form"
              v-model="valid"
              :lazy-validation="lazy"
              
            >
              <v-text-field
                label="Логин (эл. почта)"
                name="login"
                prepend-icon="mdi-login"
                type="email"
                @blur="$v.email.$touch()"
                v-model="email"
                :rules="emailRules"
                required
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
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn 
              color="blue-grey darken-1"
              @click="onSubmit"
              :loading='loading'
              :disabled="!(valid) || loading"
            >
              Войти
            </v-btn>
          </v-card-actions>
        </v-card>

        <!-- <pre>
          {{ $v.email }}
        </pre> -->
      </v-col>
    </v-row>
  </v-container>
  
</template>

<script>
// @ is an alias to /src
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { required, minLength, email } from 'vuelidate/lib/validators'

Vue.use(Vuelidate)

export default {

  name: 'login',
  components: {
  },
  data: () => ({
    email: '',
    password: '',
    lazy: true,
    valid: false,
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v.length >= 8) || 'Password must be more or equal than 8 characters',
    ]
  }),
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength
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

        this.$store.dispatch('loginUser', user)
          .then(() => {
            this.$router.push('/')
          })
          .catch(() => {})
      }
    }
  },
  created () {
    if (this.$route.query['loginError']) {
      this.$store.dispatch('setError', 'Пожалуйста, войдите для доступа к этой странице')
    }
  }
  
}
</script>
