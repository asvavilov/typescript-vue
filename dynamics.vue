<template>
  <div id="loaded-children">
    <p>It is dynamically loaded vue file</p>
    <p>Created at: {{date}}</p>
  </div>
</template>

<style>
#loaded-children {
  background: #555;
  color: #eee;
}
</style>

<script>
define(['Vue'], function(Vue){
  return new Vue({
    template: template,
    data: {
      date: ''
    },
    created: function(){
      this.date = new Date();
    }
  })
})
</script>