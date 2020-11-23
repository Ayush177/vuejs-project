<template>
    <b-card
        border-variant="primary"
        :header="'Warehouse with Code '+warehouse.code"
        header-bg-variant="primary"
        header-text-variant="white"
        align="center"
    >
    <form @submit.prevent="saveData">
        <b-card-text>
            <b-row class="text-left">
                <b-col><h5>Warehouse name</h5></b-col>
                <b-col><input type="text" v-model="warehouse.name"/></b-col>
            </b-row>
            <b-row class="text-left">
                <b-col><h5>Warehouse city</h5></b-col>
                <b-col><input type="text"  v-model="warehouse.city"/></b-col>
            </b-row>
            <b-row class="text-left">
                <b-col><h5>Warehouse cluster</h5></b-col>
                <b-col><input type="text" v-model="warehouse.cluster"/></b-col>
            </b-row>
            <b-row class="text-left">
                <b-col><h5>Warehouse Space Available</h5></b-col>
                <b-col><input type="number" v-model="warehouse.space_available"/></b-col>
            </b-row>
            <b-row class="text-left">
                <b-col><h5>Warehouse Type</h5></b-col>
                <b-col><input type="text" v-model="warehouse.type"/></b-col>
            </b-row>
            <b-row class="text-left">
                <b-col><h5>Warehouse is Live</h5></b-col>
                <b-col>
                    <input type="radio" id="true" name="is_live" value="true" v-model="warehouse.is_live">
                    <label for="true">True</label>
                    <input type="radio" id="false" name="is_live" value="false" v-model="warehouse.is_live">
                    <label for="false">False</label>
                </b-col>
            </b-row>
            <b-row class="text-left">
                <b-col><h5>Warehouse is Registered</h5></b-col>
                <b-col>
                    <input type="radio" id="true" name="is_registered" value="true" v-model="warehouse.is_registered">
                    <label for="true">True</label>
                    <input type="radio" id="false" name="is_registered" value="false" v-model="warehouse.is_registered">
                    <label for="false">False</label>
                </b-col>
            </b-row>
        </b-card-text>
        <b-button variant="primary" type="submit">Save</b-button>
    </form>
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
            const warehouse = this.getWarehouses.filter(warehouse => warehouse.id===this.$route.params.id);
            return warehouse[0];
        }
    },
    methods:{
        saveData(){
            this.$store.dispatch("updateWarehouseDetails",this.warehouse);
            this.$emit("toggleEdit")
        }
    }
}
</script>

<style scoped>
input {
    margin: .4rem;
    text-align: left;
}
</style>