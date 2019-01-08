<template>
  <div>
    <h1>And see in console!</h1>
    <h2>Vue + RequireJS demo</h2>
    <ul>
      <li v-for="i in items" :key="i">
        {{i}}
      </li>
    </ul>
    <div id="dynamic-placeholder">
      <a href="#" @click.prevent="loadAnother">load dynamic component</a>
    </div>
  </div>
</template>

<style>
/* app's stylesheet */
#dynamic-placeholder {
  background: #eee;
  color: #111;
}
#dynamic-placeholder * {
  color: currentColor;
}
</style>

<script>
// require Vue
define(['Vue'], function(Vue){
  // create and return app instance
  // refer template as `template`
  return new Vue({
    template: template,

    data: {
      // sample data: Japanese numbers
      items: [
        'раз',
        'два',
        'три'
      ]
    },

    methods: {
      loadAnother: function(){
        // example of dynamic Vue loading
        require(['vue!dynamics'], function(compo){
          // mount it
          compo.$mount('#dynamic-placeholder');
        })
      }
    }
  })
});
</script>