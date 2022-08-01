<template>
  <div>
    <the-header></the-header>
    <!-- <TheHeader /> outro jeito de chamar componente-->
    <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
  </div>
</template>

<script>
/// chmamando os componetes so dentro da aplicação ao inves de chamar globalmente,
///assim eles não são carregados globalmente e não pesam na aplicação, ajuda tb na segurança e organização
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';

export default {
  components: {
    /// passando assim chave e valor ja tem o mesmo nome ficaria TheHeader:TheHeader chave:valor porem o
    /// js ja entende que sao chave a valor falando assim
    TheHeader,
    BadgeList,
    UserInfo
  },
  data() {
    return {
      activeUser: {
        name: 'Nome da pessoa',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
};
</script>

<!-- estilo global -->

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>