<template>
    <b-card
        border-variant="primary"
        :header="'Warehouse with Code '+warehouse.code"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
    >
    <b-card-text>
        <b-row class="text-left">
            <b-col><h5>Warehouse name</h5></b-col>
            <b-col>{{ warehouse.name }}</b-col>
        </b-row>
        <b-row class="text-left">
            <b-col><h5>Warehouse city</h5></b-col>
            <b-col>{{ warehouse.city }}</b-col>
        </b-row>
        <b-row class="text-left">
            <b-col><h5>Warehouse cluster</h5></b-col>
            <b-col>{{ warehouse.cluster }}</b-col>
        </b-row>
        <b-row class="text-left">
            <b-col><h5>Warehouse Space Available</h5></b-col>
            <b-col>{{ warehouse.space_available }}</b-col>
        </b-row>
        <b-row class="text-left">
            <b-col><h5>Warehouse Type</h5></b-col>
            <b-col>{{ warehouse.type }}</b-col>
        </b-row>
        <b-row class="text-left">
            <b-col><h5>Warehouse is Live</h5></b-col>
            <b-col>{{ warehouse.is_live }}</b-col>
        </b-row>
        <b-row class="text-left">
            <b-col><h5>Warehouse is Registered</h5></b-col>
            <b-col>{{ warehouse.is_registered }}</b-col>
        </b-row>
    </b-card-text>
    </b-card>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    computed:{
        ...mapGetters({
            getWarehouses: "getWarehouse",
        }),
        warehouse(){
            const warehouse = this.getWarehouses.filter(warehouse => {
                return warehouse.id===this.$route.params.id});
            return warehouse[0];
        }
    },
}
</script>