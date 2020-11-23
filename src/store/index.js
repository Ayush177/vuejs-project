import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        warehouses: []
    },
    mutations: {
        populateWarehouse(state, payload) {
            state.warehouses = payload;
        }
    },
    actions: {
        getWarehouseDetails(context) {
            axios.get("//vue-http-demo-dc040.firebaseio.com/warehouses.json")
                .then(res => context.commit("populateWarehouse", res.data))
                .catch(error => console.log(error));
        },
        updateWarehouseDetails(_, payload) {
            console.log({...payload});
            axios.put("//vue-http-demo-dc040.firebaseio.com/warehouses/" + payload.id,{ ...payload })
                .then((res) => {
                    if (res.ok)
                        this.context.commit("populateWarehouse", res.data);
                    else
                        throw new Error("check axios request");
                })
                .catch(error=>console.log(error));
        }
    },
    getters: {
        getWarehouse(state) {
            return state.warehouses;
        },
        getFilteredWarehouse(state) {
            const filteredWarehouses = state.warehouses.map(warehouses => {
                const filteredWarehouse = {};
                filteredWarehouse.id = warehouses.id;
                filteredWarehouse.name = warehouses.name;
                filteredWarehouse.city = warehouses.city;
                filteredWarehouse.space_available = warehouses.space_available;
                return filteredWarehouse;
            });
            return filteredWarehouses;
        }
    }
});