<template>
  <div class="login">
      <h1 ref="wokaixin">后台管理</h1>
      <el-form label-posistion="left" label-width="80px" ref="ruleForm2"
       :model="fromLabelAlign" :rules="rules">
       <el-form-item label="账号" prop="uname">
           <el-input v-model="formLabelAlign.uname"></el-input>
       </el-form-item>
       <el-form-item label="密码" prop="upwd">
           <el-input v-model="formLabelAlign.upwd"></el-input>
       </el-form-item>
       <el-form-item>
           <el-button type="primary" @click="submitForm('ruleForm2')">立即创建</el-button>
       </el-form-item>
       </el-form>
  </div>
</template>

<script>
export default {
  data () {

      function unameFn(rule,value,callback) {
          if(value == ''){
              callback(new Error('账号唔可以空'))
          }else{
              callback();
          }
      }

      function upwdFn(rule,value,callback) {
          if(value ==''){
              callback(new Error('密码唔可以空啊'))
          }else {
              callback();
          }
      }
      return {
          formLabelAlign:{
              uname:'',
              upwd:''
          },
          rules:{
              uname:[
                  {required:true,message:'请填写账号',tigger:'blur'},
                  {min:5,max:18,message:'账号在5-18位啊',tigger:'blur'},
                  {validator:unameFn,tigger:'blur'}
              ],
              upwd:[
                  {validator:upwdFn,tigger:'blur'},
                  {pattern:/^\w{6,18}$/,message:'密码6-18位啊',tigger:'blur'},
              ]
          }
      }
  },

  methods: {
      login(){
          this.$http.post(this.$api.login,this.formLabelAlign).then(res=>{
              if(res.data.status == 0){
                  let nextPage = this.$route.query.nextPage;
                  this.$roputer.push({ path:nextPage? nextPage:'/admin'});
              }else{
                  this.$alert(res.data.message);
              }
          });
      },
      submitForm(formName){
          this.$refs[formName].validate(result=>{
              if (result) {
                  this.login();
              }else{
                  this.$alert('唔可以咁样啊');
              }
          });
      },
      resetForm(formName){
          this.$refs[formName].resetFields();
      }
  },

}
</script>

<style scoped>
     .login {
         width: 400px;
         height: 200px;
         margin: 0 auto;
         position: relative;
         top: 50%;
         transform: translateY(-50%);
         padding: 20px;
         border: 1px solid #fff;
         border-radius: 6px;
     }
 
     h1 {
         position: absolute;
         top: -60px;
         width: 100%;
         text-align: center;
         font-size: 20px;
         color: #fff;
     }
</style>
