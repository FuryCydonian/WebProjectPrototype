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
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"/>

      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">ShowGeek</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>

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
    items: [
      { title: 'Профиль', icon: 'mdi-account-outline', url: '/profile'},
      { title: 'Календарь', icon: 'mdi-calendar-month', url: '/calendar'},
      { title: 'Диалоги', icon: 'mdi-forum-outline', url: '/dialogue'},
      { title: 'Закладки', icon: 'mdi-bookmark-multiple-outline', url: '/bookmarks'},
      { title: 'Оповещения', icon: 'mdi-bell-ring-outline', url: '/alerts'},
      { title: 'Настройки', icon: 'mdi-settings-outline', url: '/settings'},
      { title: 'О нас', icon: 'mdi-settings-outline', url: '/about'}
    ],
    right: null,
  }),
};
</script>

<style scoped>
  .pointer {
    cursor: pointer;
  }
</style>