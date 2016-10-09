const Vue = require('Vue');
const appDrawer = require('./gui/components/app-drawer');
const appActionbar = require('./gui/components/app-actionbar');

const appDisplayWindow = require('./gui/components/app-display');
const appWelcomeWindow = require('./gui/components/app-welcome');

const UserService = require('../UserService');
const Settings = require('../Settings');

module.exports = vueApp = Vue({
  el: '#app',
  data: {
    canShowWelcome: true
  },
  computed: {

  }
  components: {
    'app-drawer': appDrawer,
    'app-action-bar': appActionbar,
    'app-welcome': appWelcomeWindow,
    'app-map-display': appDisplayWindow
  }
});

UserService.on('user-logged-in', function(data) {
  vueApp.canShowWelcome = false;
})
