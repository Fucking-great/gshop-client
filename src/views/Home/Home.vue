<template>
  <div class="msite">
    <!--首页头部-->
    <HeaderTop :title="address.name">
      <span class="header_search" slot="left_header">
            <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right_header">
            <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div :key="index" class="swiper-slide" v-for="(categorys, index) in categorysArr">
            <a :key="index" class="link_to_food" href="javascript:" v-for="(category, index) in categorys">
              <div class="food_container">
                <img :src="baseImageUrl+ category.image_url">
              </div>
              <span>{{category.title}}</span>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">附近商家</span>
      </div>
      <ShopList></ShopList>
    </div>
  </div>
</template>

<script>
  /* 轮播 */
  import Swiper from 'swiper'
  import 'swiper/swiper.min.css'
  import {mapState} from 'vuex'

  import HeaderTop from '../../components/HeaderTop/HeaderTop'
  import ShopList from "../../components/ShopList/ShopList";
  export default {
    name: 'Home',
    data() {
      return {
        baseImageUrl: 'https://fuss10.elemecdn.com'
      }
    },
    mounted() {
      this.$store.dispatch('getCategorys')
      this.$store.dispatch('getShops')
    },
    components: {ShopList, HeaderTop},
    computed: {
      ...mapState(['address', 'categorys']),
      /*
      * 根据categorys一维数组生成一个2维数组
      * 小数组中的元素最大是8个
      * */
      categorysArr() {
        const {categorys} = this
        const arr = []
        let minArr = []
        // 遍历categors
        categorys.forEach(c => {
          //如果当前小数组已近满了，创建一个新的
          if (minArr.length === 8) {
            minArr = []
          }
          // 如果当前minArr是空的，把小数组保存到大数组中
          if (minArr.length === 0) {
            arr.push(minArr)
          }
          minArr.push(c)
        })
        return arr
      }
    },
    watch: {
      categorys(value) { // 监听categorys数组中是否有数据，在异步更新数据之前更新
        this.$nextTick(() => { // 一旦完成界面更新，立即调用（词条语句要写在数据更新之后）
          //创建一个Swiper实例对象，实现轮播
          new Swiper('.swiper-container', {
            loop: true, //循环轮播
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
          })
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px

</style>
