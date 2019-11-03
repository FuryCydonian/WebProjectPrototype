<template>
  <v-app>
      <v-navigation-drawer 
        app 
        dark
        v-model="drawer"
      >
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Show Geek
            </v-list-item-title>
            <!-- <v-list-item-subtitle>
              subtext
            </v-list-item-subtitle> -->
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
          dense
          nav
        >
          <v-list-item
            v-for="item in items"
            :key="item.title"
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
      { title: 'Профиль', icon: 'mdi-account-outline' },
      { title: 'Календарь', icon: 'mdi-calendar-month' },
      { title: 'Диалоги', icon: 'mdi-forum-outline' },
      { title: 'Закладки', icon: 'mdi-bookmark-multiple-outline' },
      { title: 'Оповещения', icon: 'mdi-bell-ring-outline' },
      { title: 'Настройки', icon: 'mdi-settings-outline' },
    ],
    right: null,
  }),
};
</script>
