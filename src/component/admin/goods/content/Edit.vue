<template>
    <div>
        <el-form :model="ruleFrom" :rules="rules" ref="ruleFrom" label-width="100px"
            class="demo-ruleFrom" style="width:750px">
            <el-form-item label="标题" prop="title">
                <el-input v-model="ruleFrom.title"></el-input>
            </el-form-item>

            <el-form-item label="副标题" prop="sub_title">
                <el-input v-model="ruleFrom.sub_title"></el-input>
            </el-form-item>

            <el-form-item label="所属类别" prop="category_id">

                <!-- v-model绑定数据, 将来要和每个option的value值进行匹配, 匹配到哪个默认就会选中那个 -->
                <el-select v-model="ruleFrom.category_id" placeholder="请选择活动区域">

                    <!-- goodsCategory是请求接口获取到的分类列表, 将来用户要选择其中一个分类的ID传给后端 -->
                    <el-option v-for="item in goodsCategory" :key="item.category_id" 
                        :label="item.title" :value="item.category_id">

                        <!-- option标签内可以嵌套子标签, 但是option的label属性不能删掉 -->
                        <span>
                            <span v-if="item.class_layer != 1">|- </span>
                            <span>{{ item.title }}</span>
                        </span>	  

                    </el-option>

                </el-select>

            </el-form-item>

            <el-form-item label="是否发布">
                <el-switch v-model="ruleFrom.status"></el-switch>
            </el-form-item>

            <el-form-item label="推荐类型">
                <el-switch active-text="轮播图" v-model="ruleFrom.is_slide"></el-switch>
                <el-switch active-text="置顶" v-model="ruleFrom.is_top"></el-switch>
                <el-switch active-text="热门" v-model="ruleFrom.is_hot"></el-switch>
            </el-form-item>

            <el-form-item label="上传封面" prop="imgList">

                <!-- action属性用来设置图片上传地址, file-list属性用来关联图片列表 -->
                <!-- on-preview与on-remove用来添加回调函数的, 注意他们是属性的方式添加 -->
                <el-upload class="upload-demo" action="http://localhost:8899/admin/article/uploadimg"
                    :on-success="imgUploaded" :on-remove="imgRemove" :file-list="ruleFrom.imgList" list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>

            </el-form-item>

            <el-form-item label="上传附件">

                <!-- action属性用来设置图片上传地址, file-list属性用来关联图片列表 -->
                <!-- on-preview与on-remove用来添加回调函数的, 注意他们是属性的方式添加 -->
                <el-upload class="upload-demo" action="http://localhost:8899/admin/article/uploadfile"
                    :on-success="fileUploaded" :file-list="ruleFrom.fileList">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>

            </el-form-item>

            <el-form-item label="货号" prop="goods_no">
                <el-input v-model="ruleFrom.goods_no"></el-input>
            </el-form-item>

            <el-form-item label="库存" prop="stock_quantity">
                <el-input v-model="ruleFrom.stock_quantity"></el-input>
            </el-form-item>

            <el-form-item label="市场价" prop="market_price">
                <el-input v-model="ruleFrom.market_price"></el-input>
            </el-form-item>

            <el-form-item label="销售价" prop="sell_price">
                <el-input v-model="ruleFrom.sell_price"></el-input>
            </el-form-item>
            
            <el-form-item label="摘要" prop="zhaiyao">
                <el-input v-model="ruleFrom.zhaiyao"></el-input>
            </el-form-item>

            <el-form-item label="详细内容" prop="content">
                <quill-editor v-model="ruleFrom.content"></quill-editor>
                <!-- <el-input type="textarea" v-html="ruleFrom.content"></el-input> -->
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('ruleFrom')">保存修改</el-button>
                <el-button>返回上一页</el-button>
            </el-form-item>

        </el-form>
    </div>
</template>

<script>
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";
import { quillEditor } from "vue-quill-editor";

export default {
  data() {
    function validateImg(rule, value, callback) {
      if (value === "" || value.length == 0) {
        callback(new Error("上传一张封面图啊"));
      } else {
        callback();
      }
    }

    return {
      // 当前编辑的商品ID
      id: null,

      // 分类列表数据
      goodsCategory: [],

      // 表单数据
      ruleFrom: {},

      // 表单校验规则
      rules: {
        title: [
          { required: true, message: "请输入标题", trigger: "blur" },
          { min: 5, max: 50, message: "长度在 5 到 15 个字符", trigger: "blur" }
        ],
        sub_title: [
          { required: true, message: "请输入副标题", trigger: "blur" },
          { min: 5, max: 50, message: "长度在 5 到 15 个字符", trigger: "blur" }
        ],
        category_id: [
          { required: true, message: "请选择商品分类", trigger: "blur" },
          { type: "number", message: "值必须为数字", trigger: "blur" }
        ],
        goods_no: [
          { required: true, message: "请输入商品编号", trigger: "blur" }
        ],
        stock_quantity: [
          { required: true, message: "请输入库存", trigger: "blur" }
        ],
        market_price: [
          { required: true, message: "请输入市场价", trigger: "blur" }
        ],
        sell_price: [
          { required: true, message: "请输入销售价", trigger: "blur" }
        ],
        zhaiyao: [{ required: true, message: "请输入摘要", trigger: "blur" }],
        content: [
          { required: true, message: "请输入描述信息", trigger: "blur" }
        ],
        imgList: [{ validator: validateImg, trigger: "submit" }]
      }
    };
  },
  methods: {
    goodsModify() {
      var tmp = {};
      if (this.id) {
        tmp.api = this.$api.gsEdit + this.id;
        tmp.msg = "修改成功";
      } else {
        tmp.api = this.$api.gsAdd;
        tmp.msg = "添加成功";
      }
      this.$http.post(tmp.api, this.ruleFrom).then(res => {
        if (res.data.status == 0) {
          this.$alert("即刻跳回商品列表页", tmp.msg, {
            confirmButtonText: "确定",
            callback: action => {
              this.$router.push({ name: "goodsCtList" });
            }
          });
        } else {
          this.$alert("error");
        }
      });
    },

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.goodsModify();
        } else {
          this.$alert("error submit!!!");
          return false;
        }
      });
    },
    getGoods() {
      this.$http.get(this.$api.gsDetail + this.id).then(res => {
        this.ruleFrom = res.data.message;
        this.ruleFrom.category_id = +this.ruleFrom.category_id;
      });
    },
    getGoodsCategory() {
      this.$http.get(this.$api.ctList + "goods").then(res => {
        this.goodsCategory = res.data.message;
      });
    },
    imgUploaded(res, file, fileList) {
      this.ruleFrom.imgList = [res];
    },
    imgRemove(file, fileList) {
      let removeUrl = file.url;
      this.ruleFrom.imgList = this.ruleFrom.imgList.filter(
        v => v.url != removeUrl
      );
    },
    fileUploaded(res, file, fileList) {
      if (this.ruleFrom.fileList) {
        this.ruleFrom.fileList.push(res);
      } else {
        this.ruleFrom.fileList = [res];
      }
    }
  },
  created() {
    this.id = this.$route.params.id;
    if (this.id) {
      this.getGoods();
    }
    this.getGoodsCategory();
  },

  components: {
    quillEditor
  }
};
</script>

<style scoped>

</style>