<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container">contaner

      <button class="btn btn-primary">btn</button>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'FirstPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
