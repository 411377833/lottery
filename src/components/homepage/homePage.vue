<template>
    <div style="padding:5px">
        <div class="header">
            <div>图片</div>
            <div>全国</div>
            <van-search placeholder="请输入搜索关键词" v-model="value" />
            <div>图标</div>
        </div>
        <van-tabs>
            <van-tabs v-model="activeName">
                <van-tab title="标签 1" name="a">
                    <Table v-bind:abc='helloWord'/>
                </van-tab>
                <van-tab title="标签 2" name="b">
                    <Table />
                </van-tab>
                <van-tab title="标签 3" name="c">
                    <Table />
                </van-tab>
                <van-tab title="标签 3" name="d">
                    <Table />
                </van-tab>
                <van-tab title="标签 3" name="e">
                    <Table />
                </van-tab>
                <van-tab title="标签 3" name="f">
                    <Table />
                </van-tab>
                <van-tab title="标签 3" name="g">
                    <Table />
                </van-tab>
            </van-tabs>
        </van-tabs>
    </div>
</template>

<script>
// import store from '@/store/index'
// import { Button } from 'mint-ui'
import Table from './table'
export default {
  name: 'homePage',
  data () {
    return {
      name:'超级',
      result: [],
      helloWord:123456
    }
  },
  beforeCreate(){
    
  },
  components:{
      Table,
  },
  methods:{
    
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
