    <template>
    <div id="z1">
      <!-- 头部 -->
      <mt-header title="本期详情">
        <router-link to="/" slot="left">
          <mt-button type="default" icon="back">返回</mt-button>
          <!-- <mt-button @click="handleClose">关闭</mt-button> -->
        </router-link>
        <mt-button icon="more" slot="right"></mt-button>
      </mt-header>
    <!-- 内容 -->
    <div class="content" v-for="it in result">
        <!-- <div class="content1">
            <span class="shijian">2019073</span><span>2019-06-25(星期二)</span>
          <div class="content2">
            <span style="font-size:20px;color:#000;margin-right:10px">{{it.lottery_name}}666666666</span><span>{{it.remarks}}</span>
          </div>
        </div> -->
    </div> 
    </div>
  

  <!-- <mt-button>default </mt-button> -->
</template>

<script>
// import store from '@/store/index'
// import { Button } from 'mint-ui'
export default {
  name: 'kaijiang',
  data () {
    return {
      name:'超级',
      result: []
    }
  },
  beforeCreate(){
    this.fetchGet('/api/lottery/query?key=ec3baf88cff239ef45a62332f4340a74&lottery_id='+this.$route.query.lottery_id).then(res=>{
        console.log(res)
        this.result = res.data.result
    })
  },
  methods:{
    onClicked(){
      // console.log(this)
      // this.fetchGet('/api/lottery/types?key=ec3baf88cff239ef45a62332f4340a74').then(res=>{
      //   console.log(res)
      // })
      // this.$data.changableNum = this.$store.state.changableNum
      
    },
    handClick(id){
      console.log(id)
      this.fetchGet('/api/lottery/query?key=ec3baf88cff239ef45a62332f4340a74&lottery_id='+id).then(res=>{
        console.log(res)
      })
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
    padding: 10px;
    /* border-bottom: 1px solid #ccc; */
    background-color: #254635;
  }

  .content .content1 .shijian{
      margin: 41px;
  }

  /* .content .content1 span {
    margin: 0;
    padding: 0;
    font-size: 13px;
    text-align: center;
  }

  .content .content1{
    height: 20px;
    color: #ccc;
  }

  .content .content1 .content2 {
    float: left;
  }

  .content .content1 .content3{
    float: right;
    margin-right: 5px;
  }

  .content .content4 {
    margin: 5px 0 5px 0;
    display: flex;
  }

  .content .content4 ul li {
    float: left;
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
  } */

  /*  */
  /* .content .content5 {
    margin-bottom: 5px;
    display: flex;
  }
  
  .content .content5 ul li {
    float: left;
    margin: 7px 5px 7px 0;
    border: 1px #000;
    border-radius: 25px;
    padding: 0 8px 8px 0;
    color: #ff9966;
    font-weight: 700px;
    font-size: 20px;
  }
  
  .content .content5 ul li:nth-child(6){
    color: #9900ff;
  }
  
  .content .content5 ul li:nth-child(7){
    color: #9900ff;
  } */
</style>
