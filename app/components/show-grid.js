import Component from '@ember/component';
import { get } from '@ember/object';


export default Component.extend({
  actions: {
    changeItems() {
      let items = get(this, 'items');
      items.pushObject(get(items, 'length') + 1);
    }
  }
});
