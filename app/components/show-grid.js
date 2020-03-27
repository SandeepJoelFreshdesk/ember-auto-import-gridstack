import Component from '@ember/component';
import { computed, get } from '@ember/object';

export default Component.extend({
  cool: computed(function() {
    return 'We shall solve this';
  }),
  actions: {
    changeItems() {
      let items = get(this, 'items');
      items.pushObject(get(items, 'length') + 1);
    }
  }
});
