export const domain = 'http://157.122.54.189:9095';

export default {
    login:`/admin/account/login`,
    logout:`/admin/account/logout`,
    isLogin:`/admin/account/islogin`,

    ctList:`/admin/category/getlist/`,
    ctDetail:`/admin/category/getcategotymodel/`,
    ctEdit:`/admin/category/edit/`,
    ctAdd:`/admin/category/add`,


    atList:`/admin/article/getlist/`,
    atCate:`/admin/article/getcategorylist/`,
    atDetail:`/admin/article/getarticle/`,
    atEdit:`/admin/article/edit/`,
    atAdd:`/admin/category/add/`,
    atDel:`/admin/category/del/`,

    atImg:`/admin/article/uploadimg`,
    atFile:`/admin/article/uploadfile`,

    gsList: `/admin/goods/getlist/`,                       // 获取商品列表, 需要查询: pageIndex 与 pageSize 与 searchvalue
    gsDetail: `/admin/goods/getgoodsmodel/`,    // 获取商品详情, 需要参数: gsID
    gsEdit: `/admin/goods/edit/`,                         // 编辑商品, 需要参数: gsID
    gsAdd: `/admin/goods/add/`,                         // 添加商品
    gsDel: `/admin/goods/del/`,                           // 删除商品, 需要参数: gsID

    // 订单管理
    odList: `/admin/order/getorderlist`,                // 获取订单列表, 需要查询: pageIndex 与 pageSize 与 orderstatus 与 vipname
    odDetail: `/admin/order/getorderdetial/`,       // 获取订单详情, 需要参数: odID
    odEdit: `/admin/order/updateorder/`             // 编辑订单
}