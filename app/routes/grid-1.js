import Route from '@ember/routing/route';

export default Route.extend({
  beforeModel() {
    this._super(...arguments);
    return import('gridstack').then((module) => {
      console.log('Module loaded', module);
    });
  }
});
