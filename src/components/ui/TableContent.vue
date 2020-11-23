<template>
    <div>
        <b-container>
            <table-content-nav  @filter-warehouse="filterWarehouse"></table-content-nav>
            <b-table striped 
            hover 
            :items="warehouse" 
            selectable
            @row-dblclicked="selected">
            </b-table>
    </b-container>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import TableContentNav from "../nav/TableContentNav.vue";

export default {
    components:{
        "table-content-nav": TableContentNav,
    },
    data(){
        return{
            warehouse:[]
        }
    },
    computed:{
        ...mapGetters({
            warehouseDetails: "getFilteredWarehouse"
        }),
        all_items() {
            return this.item_tracker ?  this.items.slice() : []
        }
    },
    methods:{
        selected(record){
            this.$router.push({ name: 'details', params:{id: record.id} })
        },
        filterWarehouse(name){
            this.warehouse=this.warehouseDetails.filter(warehouse=>warehouse.name.includes(name));
        }
    },
    watch:{
        warehouseDetails(newValue){
            this.warehouse=newValue;
        }
    }
}
</script>