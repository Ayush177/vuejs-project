<template>
    <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
        <b-navbar-brand>List of Warehouses</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav class="ml-auto">
            <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Name" v-model="searchKey"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" @click.prevent="$emit('filter-warehouse',searchKey)">Search</b-button>
            </b-nav-form>
        </b-navbar-nav>
        </b-collapse>
    </b-navbar>
    </div>
</template>

<script>
export default {
    data(){
        return{
            searchKey: ""
        }
    }
}
</script>