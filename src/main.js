import { createApp } from 'vue';

/// namespace endereco das aplicacoes
import App from './App.vue';
import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';

const app = createApp(App);

/// chamada dos componentes
app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriend);

/// chamada do app
app.mount('#app');
