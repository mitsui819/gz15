import Login from'../component/login/Login.vue';
import Admin from'../component/login/Admin.vue';
import GoodsCgList from'../component/admin/goods/category/List.vue';
import GoodsCgEdit from'../component/admin/goods/category/Edit.vue';
import GoodsCtList from'../component/admin/goods/content/List.vue';
import GoodsCtEdit from'../component/admin/goods/content/Edit.vue';
// import Register from'../component/register/Register.vue';

let adminChildren=[
    {name:'goodsCtList',path:'goods/content/list',component:GoodsCtList},
    {name:'goodsCtEdit',path:'goods/content/edit/:id',component:GoodsCtEdit},
    {name:'goodsCtAdd',path:'goods/content/add',component:GoodsCtEdit},


    {name:'goodsCgList',path:'goods/category/list',compontent:GoodsCgList},
    {name:'goodsCgEdit',path:'goods/category/edit/:id',compontent:GoodsCgEdit},
    {name:'goodsCgAdd',path:'goods/category/add',compontent:GoodsCgEdit}
];

export default{

    routes:[
        {name:'login',path:'/login',component:Login},
        {path:'admin',redirect:'/admin'},
        {name:'admin',path:'/admin',component:Admin,children:adminChildren}
    ]
};