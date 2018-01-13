import Login from'../component/login/Login.vue';
import Admin from'../component/login/Admin.vue';
// import Register from'../component/register/Register.vue';
export default{

    routes:[
        {name:'login',path:'/login',component:Login},
        {name:'admin',path:'/admin',component:Admin}
    ]
};