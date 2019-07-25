<template>
    <div class="wod" style="padding:5px">
        <!-- 头部搜索 -->
        <div class="header">
            <div>
                <img src="../../assets/img/下载.png" alt="" srcset="" class="door">
            </div>
            <div>
                <img src="../../assets/img/下载 (1).png" alt="" class="fixed">
                全国
            </div>
            <van-search placeholder="搜索活动或主办方名称" v-model="value" />
            <div>
                <img src="../../assets/img/下载 (2).png" alt="" class="lcon">
            </div>
        </div>
        <!-- 精确搜索 -->
        <div class="search">
            <van-tabs> 
                <van-tabs v-model="activeName">
                    <van-tab title="精选" name="a">
                        <Table v-bind:abc='helloWord'/>
                    </van-tab>
                    <van-tab title="区块链" name="b">
                        <Table />
                    </van-tab>
                    <van-tab title="IT互联网" name="c">
                        <Table />
                    </van-tab>
                    <van-tab title="创业" name="d">
                        <Table />
                    </van-tab>
                    <van-tab title="金融" name="e">
                        <Table />
                    </van-tab>
                    <van-tab title="游戏" name="f">
                        <Table />
                    </van-tab>
                    <van-tab title="文娱" name="g">
                        <Table />
                    </van-tab>
                    <van-tab title="电商" name="h">
                        <Table />
                    </van-tab>
                    <van-tab title="教育" name="i">
                        <Table />
                    </van-tab>
                    <van-tab title="营销" name="j">
                        <Table />
                    </van-tab>
                    <van-tab title="设计" name="k">
                        <Table />
                    </van-tab>
                </van-tabs>
            </van-tabs>
        </div>
        <!-- 强力推荐 -->
        <div class="recommend">
            <div class="recommend-z">强力推荐</div>
            <!-- 轮播图 -->
            <div class="">

            </div>
        </div>
        <!-- 找活动 -->
        <div class="activity">
            <div class="activity1">
                <span class="activity-z">
                    找活动
                </span>
                <span class="activity-x">
                    发布活动 >
                </span>
            </div>
            <div class="activity-c">
                <ul>
                    <li>筛选</li>
                    <li>综合排序</li>
                    <li>最新发布</li>
                    <li>最多参与</li>
                </ul>
            </div>
        </div>
        <div class="zhishi">
            <div class="zhishi1">
                <img src="../../assets/img/3.jpg" alt="">
            </div>
            <div class="zhishi2">
                <div class="zhishi22">
                    <span class="zhishi2-z">优选</span>
                    与世界营销之父科特勒面对面：2019科特勒未来营销峰会
                </div>
                <div class="zhishi2-z2">已认证</div>
                <div>10/12 周六  朝阳</div>
                <div>1980-19800元</div>
            </div>
        </div>
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
.wod{
    height: 2000px;
}
    .header{
        display: flex;
        align-items: center;
    }
    .header .door{
        height: 28px;
        width: 18px;
        padding-right: 12px;
    }
    .header .fixed{
        width: 11px;
        height: 15px;
    }
    .header .lcon{
        width: 22px;
        height: 18px;
    }

    .search{
        margin-bottom: 20px;
    }

    .recommend{
        flex-direction:column;
    }
    .recommend .recommend-z{
        font-size: 20px;
        flex-direction: column;
        padding-bottom: 20px;
        border: 1px solid #000;
    }

    .activity{
        display:flex;
        flex-direction: column;
        margin-top: 10px;
    }
    .activity .activity1{
        margin-bottom: 14px;
    }
    .activity .activity-z{
        margin-right: 214px;
        font-size: 20px;
        color: #000;
    }
    .activity .activity-x{
        color: aquamarine;
        font-size: 16px;
    }
    .activity .activity-c{
        /* flex-direction: row; */
        border: 1px solid #000;
    }
    .activity .activity-c ul{
        flex-direction: row;
        
    }



    .zhishi{
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        border: 1px solid #000;
    }
    .zhishi .zhishi1{
        width: 300px;
        height: 106px;
    }
    .zhishi .zhishi1 img{        
        width: 100%;
        height: 100%;
    }
    .zhishi .zhishi2{
        flex-direction: column;
        font-weight: 700;
        justify-content: flex-start;
    }
    .zhishi .zhishi22{
        height: 20px;
    }
    .zhishi2 .zhishi2-z{
        background-color: orangered;
        margin-right: 5px;
        color: #fff;
    }
    .zhishi2 .zhishi2-z1{
    line-height: 20px;
    height: 20px;
    overflow: hidden;
    word-break: break-all;
    }
    .zhishi2 .zhishi2-z2{
        color: orangered;
        margin-top: 20px
    }
</style>
