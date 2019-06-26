    <template>
    <div id="z1">
      <!-- 头部 -->
      <mt-header title="彩票开奖">
        <router-link to="/" slot="left">
          <mt-button type="default" icon="back">返回</mt-button>
          <!-- <mt-button @click="handleClose">关闭</mt-button> -->
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    <!-- 内容 -->
    <div class="content" v-for="it in result" v-on:click="handClick(it.lottery_id)">
        <div class="content1">
          <div class="content2">
            <span style="font-size:20px;color:#000;margin-right:10px">{{it.lottery_name}}</span><span>{{it.remarks}}</span>
          </div>
        </div>
    </div> 
    <div class="content">
        <div class="content1">
          <div class="content2">
            <span style="font-size:20px;color:#000;margin-right:10px">超级大乐透</span><span>19070期</span> &nbsp <span>2019-06-19</span> &nbsp <span>星期三</span>
          </div>
          <span class="content3">0评论</span>
        </div>
        <div class="content4">
          <ul>
            <li>02</li>
            <li>13</li>
            <li>15</li>
            <li>22</li>
            <li>34</li>
            <li>02</li>
            <li>12</li>
          </ul>
        </div>
        <div class="hezi">
            <ul>
              <li>走势图</li>
              <li>专家预测</li>
              <li>中奖查询</li>
            </ul>
        </div>
    </div>
    
    <!-- 内容 -->
    <!-- <div class="content">
        <div class="content1">
          <div class="content2">
            <span>19070期</span> &nbsp <span>2019-06-19</span> &nbsp <span>星期三</span>
          </div>
          <span class="content3">0评论</span>
        </div>
        <div class="content5">
          <ul>
            <li>02</li>
            <li>13</li>
            <li>15</li>
            <li>22</li>
            <li>34 &nbsp &nbsp </li>
            <li>02</li>
            <li>12</li>
          </ul>
        </div>
    </div>   -->
      <!-- <div class="hello">
        <h1 v-on:click="onClicked">{{ msg }}{{changableNum}}</h1>
      </div> -->
    </div> 
  

  <!-- <mt-button>default </mt-button> -->
</template>

<script>
// import store from '@/store/index'
// import { Button } from 'mint-ui'
export default {
  name: 'HelloWorld',
  data () {
    return {
      name:'超级',
      result: []
    }
  },
  beforeCreate(){
    this.fetchGet('/api/lottery/types?key=ec3baf88cff239ef45a62332f4340a74').then(res=>{
        this.result = res.data.result
      })
  },
  methods:{
    handClick(id){
      console.log(id)
      this.$router.push({ path:'/kaijiang',query: {lottery_id:id,abc:id}})
      // this.fetchGet('/api/lottery/query?key=ec3baf88cff239ef45a62332f4340a74&lottery_id='+id).then(res=>{
      //   console.log(res)
      // })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul, li {
    margin: 0;
    padding: 0;
  }

  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  .mint-header .mint-button {
    color: #fff;
  }

  #z1 {
    width: 100% !important;
  }

  .content{
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 5px 5px 10px #888888;
  }

  .content .content1 span {
    margin: 0;
    padding: 0;
    font-size: 13px;
    text-align: center;
  }

  .content .content1{
    height: 20px;
    color: #ccc;
  }

  .content .content1 .content2{
    display: flex;
    /* float: left; */
  }

  .content .content1 .content3{
    float: right;
    margin-right: 5px;
  }

  .content .content4 {
    margin: 20px 0 5px 0;
    display: flex;
  }

  .content .content4 ul li {
    display: flex;
    display: inline;
    margin: 7px 5px 7px 0;
    border: 1px s #000;
    border-radius: 25px;
    padding: 8px;
    background-color: #ff9966;
    color: #fff;
  }

  .content .content4 ul li:nth-child(6){
    background-color: #9900ff;
  }

  .content .content4 ul li:nth-child(7){
    background-color: #9900ff;
  }

  /*  */
  .content .content5 {
    margin-bottom: 5px;
    display: flex;
  }
  
  .content .content5 ul li {
    float: left;
    margin: 7px 5px 7px 0;
    border: 1px #000;
    border-radius: 25px;
    padding: 0 8px 8px 0;
    /* background-color: #ff9966; */
    color: #ff9966;
    font-weight: 700px;
    font-size: 20px;
  }
  
  .content .content5 ul li:nth-child(6){
    color: #9900ff;
  }
  
  .content .content5 ul li:nth-child(7){
    color: #9900ff;
  }

  .content .hezi {
    display: flex;
    margin: 20px -10px 10px;
  }

  .content .hezi ul li {
    background-color: #ccc;
    padding: 5px 10px;
  }
</style>
