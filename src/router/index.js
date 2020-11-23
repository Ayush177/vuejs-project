import ShowDetails from ".././components/pages/ShowDetails.vue";
import WarehouseListPage from ".././components/pages/WarehouseListPage.vue";

export const routes = [
    {path:"/", redirect: "/teams"},
    {path:"/warehouse", component: WarehouseListPage},
    {name: "details", path:"/warehouse/:id", component: ShowDetails, props:true},
]