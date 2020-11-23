<template>
    <div>
        <the-navbar></the-navbar>
        <b-container class="text-center">
        <b-container v-if="!editMode">
            <warehouse-details></warehouse-details>
        </b-container>
        <b-container v-else>
            <edit-warehouse-details @toggleEdit="toggleEdit"></edit-warehouse-details>
        </b-container>
        <b-button @click="toggleEdit" variant="primary">Edit Mode</b-button>
        </b-container>
    </div>
</template>

<script>
import TheNavbar from "../nav/TheNavbar.vue";
import WarehouseDetails from "../ui/WarehouseDetails";
import EditWarehouseDetails from "../ui/EditWarehouseDetails";

export default {
    components:{
        "the-navbar": TheNavbar,
        "warehouse-details": WarehouseDetails,
        "edit-warehouse-details": EditWarehouseDetails,
    },
    data(){
        return{
            editMode: false,
        }
    },
    methods:{
        toggleEdit(){
            this.editMode=!this.editMode;
        }
    }
}
</script>