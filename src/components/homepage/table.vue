<template>
    <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item><img style="height:200px" src="../../../static/images/609.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img style="height:200px" src="../../../static/images/609.jpg" alt=""></van-swipe-item>
        <van-swipe-item><img style="height:200px" src="../../../static/images/609.jpg" alt=""></van-swipe-item>
        <van-swipe-item>
            <div style="display:flex">
                <div style="flex:1">
                    <img style="height:100px;width:100%" src="../../../static/images/609.jpg" alt="">
                </div>
                <div style="flex:1">
                    <img style="height:100px;width:100%" src="../../../static/images/609.jpg" alt="">
                </div>
            </div>
            <div style="display:flex">
                <div style="flex:1">
                    <img style="height:100px;width:100%" src="../../../static/images/609.jpg" alt="">
                </div>
                <div style="flex:1">
                    <img style="height:100px;width:100%" src="../../../static/images/609.jpg" alt="">
                </div>
            </div>
        </van-swipe-item>
    </van-swipe>
</template>

<script>
import { constants } from 'fs';
// import store from '@/store/index'
// import { Button } from 'mint-ui'
export default {
  name: 'table',
  data () {
    return {
      name:'超级',
      result: []
    }
  },
  props:['abc'],
  created(){
    // console.log(message)
  },
  methods:{
    
  },
  watch:{
      message(val){
          console.log(val)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .header{
        display: flex;
        align-items: center;
    }
</style>
