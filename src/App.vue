<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  created(){
    this.$store.dispatch("getWarehouseDetails");
  }
}
</script>

<style >
.btn{
  margin: 2rem;
}

h1{
  text-align: center;
  margin: 1rem;
}
</style>