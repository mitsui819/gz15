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
