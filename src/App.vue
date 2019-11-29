<template>
  <v-app>
    <v-navigation-drawer 
      app 
      dark
      clipped
      v-model="drawer"
    >
      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.url"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">ShowGeek</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items
        v-if="!isUserLoggedIn"
        class="hidden-sm-and-down"
      >
        <v-btn
          v-for="auth in auths"
          :key="auth.title"
          :to="auth.url"
          color="grey darken-3"
        >
          <v-icon left>{{auth.icon}}</v-icon>
          {{auth.title}}
        </v-btn>
      </v-toolbar-items>
      
      <v-menu
        v-if="!isUserLoggedIn"
        left
        bottom
      >
        <template 
        v-slot:activator="{ on }"
        >
          <v-btn 
          icon v-on="on"
          class="hidden-md-and-up"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="auth in auths"
            :key="auth.title"
            :to="auth.url"
            link
          >
            <v-list-item-title> {{ auth.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-toolbar-items
        v-if="isUserLoggedIn"
        class="hidden-sm-and-down"
      >
        <v-btn
          @click="onLogout"
          color="grey darken-3"
        >
          <v-icon left>mdi-logout</v-icon>
          Выйти
        </v-btn>
      </v-toolbar-items>
      
      <v-menu
        v-if="isUserLoggedIn"
        left
        bottom
      >
        <template 
        v-slot:activator="{ on }"
        >
          <v-btn 
          icon v-on="on"
          class="hidden-md-and-up"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            @click="onLogout"
            link
          >
            <v-list-item-title>Выйти</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

    <template v-if="error">
      <v-snackbar
        :timeout="5000"
        color="error"
        :multi-line="true"
        @input="closeError"
        :value="true"
      >
        {{error}}
        <v-btn
          dark
          text
          @click="closeError"
        >
          Закрыть
        </v-btn>
      </v-snackbar>
    </template>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data: () => ({
    drawer: null,
    right: null,
  }),
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    },
    items () {
      if (this.isUserLoggedIn) {
        return [
          { title: 'Профиль', icon: 'mdi-account-outline', url: '/profile'},
          { title: 'Календарь', icon: 'mdi-calendar-month', url: '/calendar'},
          { title: 'Диалоги', icon: 'mdi-forum-outline', url: '/dialogue'},
          { title: 'Закладки', icon: 'mdi-bookmark-multiple-outline', url: '/bookmarks'},
          { title: 'Оповещения', icon: 'mdi-bell-ring-outline', url: '/alerts'},
          { title: 'Настройки', icon: 'mdi-settings-outline', url: '/settings'},
          { title: 'О нас', icon: 'mdi-information-outline', url: '/about'}
        ]
      }
      
      return [
        { title: 'О нас', icon: 'mdi-information-outline', url: '/about'}
      ]
    },
    auths () {
      return [
        { title: 'Войти', icon: 'mdi-login', url: '/login'},
        { title: 'Регистрация', icon: 'mdi-account-plus-outline', url: '/registration'},
        { title: 'О нас', icon: 'mdi-information-outline', url: '/about'}
      ]
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    },
    onLogout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }
};
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>