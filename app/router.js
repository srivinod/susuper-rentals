import EmberRouter from '@ember/routing/router';
import config from 'super-rentals/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('contact', { path: '/getting-in-touch' }); // localhost4200/getting-in-touch
}); // this will be used to route pages
