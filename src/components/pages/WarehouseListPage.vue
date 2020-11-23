<template>
  <div>
    <the-navbar></the-navbar>
      <h1 class="heading">Warehouses</h1>
    <b-container>
      <table-content></table-content>
    </b-container>
  </div>
</template>

<script>
import TableContent from "../ui/TableContent.vue";

export default {
  components:{
    "table-content": TableContent,
  },
}
</script>
