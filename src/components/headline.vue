    <template>
    <div id="z1">
    <!-- 内容 -->
    <div class="content" v-for="it in result" v-on:click="handClick(it.type)">
        <div class="content1">
          <div class="content2">
            <span style="font-size:20px;color:#000;margin-right:10px">{{it.name}}</span><span>{{it.remarks}}</span>
          </div>
        </div>
    </div> 
    
    </div> 
  

  <!-- <mt-button>default </mt-button> -->
</template>

<script>
// import store from '@/store/index'
// import { Button } from 'mint-ui'
export default {
  name: 'headline',
  data () {
    return {
      name:'超级',
      result: [
        {
          name:'头条',
          type:'top'
        },
        {
          name:'社会',
          type:'shehui'
        },
        {
          name:'国内',
          type:'guonei'
        },
        {
          name:'国际',
          type:'guoji'
        },
        {
          name:'娱乐',
          type:'yule'
        },
        {
          name:'体育',
          type:'tiyu'
        },
        {
          name:'军事',
          type:'junshi'
        },
        {
          name:'科技',
          type:'keji'
        },
        {
          name:'财经',
          type:'caijing'
        },
        {
          name:'时尚',
          type:'shishang'
        },
      ]
    }
  },
  beforeCreate(){
    // this.fetchGet('/api/lottery/types?key=ec3baf88cff239ef45a62332f4340a74').then(res=>{
    //     this.result = res.data.result
    //   })
  },
  methods:{
    handClick(id){
      // this.$router.push({ path:'/kaijiang',query: {lottery_id:id,abc:id}})
      this.fetchGet('/api/toutiao/index?key=ec3baf88cff239ef45a62332f4340a74&type='+id).then(res=>{
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
    margin: 10px;
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
