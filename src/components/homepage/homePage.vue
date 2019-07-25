<template>
    <div class="wod">
        <!-- 头部搜索 -->
        <div class="header">
            <img src="../../assets/img/下载.png" alt="" srcset="" class="door">
            <div>
                <img src="../../assets/img/下载 (1).png" alt="" class="fixed">
                全国
            </div>
            <van-search placeholder="搜索活动或主办方名称" v-model="value" />
            <img src="../../assets/img/下载 (2).png" alt="" class="lcon">
        </div>
        <!-- 精确搜索 -->
        <div>
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
        </div>
        <!-- 强力推荐 -->
        <div class="recommend">
            <div class="recommend_t">强力推荐</div>
            <!-- 轮播图  :autoplay="3000"-->
            <van-swipe :autoplay="3000" indicator-color="white">
                <van-swipe-item>
                    <div class="h_pic">
                        <div>
                            <img style="height:100px;width:100%;" src="../../assets/img/1.jpg" alt="">
                            <div>华为云技术沙龙园区行——5G+云，赋能企业管理再升级</div>
                            <div class="pic_time"><span>07/25 周四</span> <span>四川成都</span></div>
                        </div>
                        <div>
                            <img style="height:100px;width:100%;" src="../../assets/img/1.jpg" alt="">
                            <div>华为云技术沙龙园区行——5G+云，赋能企业管理再升级</div>
                            <div class="pic_time"><span>07/25 周四</span> <span>四川成都</span></div>
                        </div>
                    </div>
                    <div class="h_pic">
                        <div>
                            <img style="height:100px;width:100%;" src="../../assets/img/1.jpg" alt="">
                            <div>华为云技术沙龙园区行——5G+云，赋能企业管理再升级</div>
                            <div class="pic_time"><span>07/25 周四</span> <span>四川成都</span></div>
                        </div>
                        <div>
                            <img style="height:100px;width:100%;" src="../../assets/img/1.jpg" alt="">
                            <div>华为云技术沙龙园区行——5G+云，赋能企业管理再升级</div>
                            <div class="pic_time"><span>07/25 周四</span> <span>四川成都</span></div>
                        </div>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <div class="h_pic">
                        <div>
                            <img style="height:100px;width:100%;" src="../../assets/img/1.jpg" alt="">
                            <div>华为云技术沙龙园区行——5G+云，赋能企业管理再升级</div>
                            <div class="pic_time"><span>07/25 周四</span> <span>四川成都</span></div>
                        </div>
                        <div>
                            <img style="height:100px;width:100%;" src="../../assets/img/1.jpg" alt="">
                            <div>华为云技术沙龙园区行——5G+云，赋能企业管理再升级</div>
                            <div class="pic_time"><span>07/25 周四</span> <span>四川成都</span></div>
                        </div>
                    </div>
                    <div class="h_pic">
                        <div>
                            <img style="height:100px;width:100%;" src="../../assets/img/1.jpg" alt="">
                            <div>华为云技术沙龙园区行——5G+云，赋能企业管理再升级</div>
                            <div class="pic_time"><span>07/25 周四</span> <span>四川成都</span></div>
                        </div>
                        <div>
                            <img style="height:100px;width:100%;" src="../../assets/img/1.jpg" alt="">
                            <div>华为云技术沙龙园区行——5G+云，赋能企业管理再升级</div>
                            <div class="pic_time"><span>07/25 周四</span> <span>四川成都</span></div>
                        </div>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <div class="h_pic">
                        <div>
                            <img style="height:100px;width:100%;" src="../../assets/img/1.jpg" alt="">
                            <div>华为云技术沙龙园区行——5G+云，赋能企业管理再升级</div>
                            <div class="pic_time"><span>07/25 周四</span> <span>四川成都</span></div>
                        </div>
                        <div>
                            <img style="height:100px;width:100%;" src="../../assets/img/1.jpg" alt="">
                            <div>华为云技术沙龙园区行——5G+云，赋能企业管理再升级</div>
                            <div class="pic_time"><span>07/25 周四</span> <span>四川成都</span></div>
                        </div>
                    </div>
                    <div class="h_pic">
                        <div>
                            <img style="height:100px;width:100%;" src="../../assets/img/1.jpg" alt="">
                            <div>华为云技术沙龙园区行——5G+云，赋能企业管理再升级</div>
                            <div class="pic_time"><span>07/25 周四</span> <span>四川成都</span></div>
                        </div>
                        <div>
                            <img style="height:100px;width:100%;" src="../../assets/img/1.jpg" alt="">
                            <div>华为云技术沙龙园区行——5G+云，赋能企业管理再升级</div>
                            <div class="pic_time"><span>07/25 周四</span> <span>四川成都</span></div>
                        </div>
                    </div>
                </van-swipe-item>
                <van-swipe-item>
                    <div class="h_pic">
                        <div>
                            <img style="height:100px;width:100%;" src="../../assets/img/1.jpg" alt="">
                            <div>华为云技术沙龙园区行——5G+云，赋能企业管理再升级</div>
                            <div class="pic_time"><span>07/25 周四</span> <span>四川成都</span></div>
                        </div>
                        <div>
                            <img style="height:100px;width:100%;" src="../../assets/img/1.jpg" alt="">
                            <div>华为云技术沙龙园区行——5G+云，赋能企业管理再升级</div>
                            <div class="pic_time"><span>07/25 周四</span> <span>四川成都</span></div>
                        </div>
                    </div>
                    <div class="h_pic">
                        <div>
                            <img style="height:100px;width:100%;" src="../../assets/img/1.jpg" alt="">
                            <div>华为云技术沙龙园区行——5G+云，赋能企业管理再升级</div>
                            <div class="pic_time"><span>07/25 周四</span> <span>四川成都</span></div>
                        </div>
                        <div>
                            <img style="height:100px;width:100%;" src="../../assets/img/1.jpg" alt="">
                            <div>华为云技术沙龙园区行——5G+云，赋能企业管理再升级</div>
                            <div class="pic_time"><span>07/25 周四</span> <span>四川成都</span></div>
                        </div>
                    </div>
                </van-swipe-item>
            </van-swipe>
        </div>
        <!-- 找活动 -->
        <div class="activity">
            <div class="activity1">
                <span>
                    找活动
                </span>
                <span>
                    发布活动 >
                </span>
            </div>
        </div>
        <van-tabs v-model="active1">
            <van-tab title="筛选">
                <div v-for="it in result">
                    <div class="tab_ati">
                        <img src="../../assets/img/3.jpg" alt="">
                        <div style="display: flex;justify-content: space-between;flex-direction: column;padding:0.5rem;">
                            <div class="zhishi22">
                                <span class="zhishi2-z">优选</span>
                                与世界营销之父科特勒面对面：2019科特勒未来营销峰会
                            </div>
                            <div class="zhishi2-z2">已认证</div>
                            <div class="zhishi_time">
                                <div>10/12 周六  朝阳</div>
                                <div>1980-19800元</div>
                            </div>
                        </div>
                    </div>
                    <div style="border-bottom: 5px solid #ccc;align-items: center;display: flex;justify-content: space-between;padding:0.5rem;">
                        <div>#新经济 #行业大咖</div>
                        <div><van-button size='small' plain type="primary">免费抢票</van-button></div>
                    </div>
                </div>
            </van-tab>
            <van-tab title="综合排序">内容 2</van-tab>
            <van-tab title="最新发布">内容 3</van-tab>
            <van-tab title="最多参与">内容 4</van-tab>
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
      result: ['','','','','',],
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
        padding: 0.5rem;
    }
    .header .door{
        height: 1.5rem;
        width: 1.2rem;
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
        /* border:1px solid #ccc; */
        text-align: left;
        padding: 1rem;
    }
    .recommend_t{
        font-size: 1.2rem;
        margin-bottom: 1rem;
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
        display: flex;
        justify-content: space-between;
        padding: 1rem;
        align-items: center;
    }
    .activity .activity1 span:nth-child(1){
        color: #000;
        font-size: 1.2rem;
        font-weight: 800;
    }
    .activity .activity1 span:nth-child(2){
        color: #4aca53;
        font-size: 0.8rem;
        font-weight: 800;
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
    .h_pic{
        display: flex;
        font-size: 0.8rem;
        width: 100%;
        justify-content: space-between;
    }
    .h_pic>div{
        width: 48%;
    }
    .pic_time{
        padding: 1rem;
        display: flex;
        color: #ccc;
        justify-content: space-between;
    }
    .tab_ati{
        padding: 0.5rem;
        border-bottom: 1px solid #ccc;
        padding-bottom: 0.5rem;
        display: flex;
        margin-top: 1rem;
    }
    .tab_ati>img{
        width: 40%;
        height: 8rem;
    }
    .tab_ati>div{
        flex: 1;
        font-size: .8rem;
    }
    .zhishi2-z{
        background-color: #ff3c00;
        border-radius: .04rem;
        /* font-size: .26rem; */
        color: #fff;
        padding: .02rem .04rem;
        margin-right: .08rem；
    }
    .zhishi2-z2{
        text-align: left;
    }
    .zhishi22{
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .zhishi_time{
        display: flex;
        justify-content: space-between;
    }
</style>
