<template>
  <div class="hello">
    <h1 v-on:click="onClicked">{{ msg }}{{changableNum}}</h1>
  </div>
</template>

<script>
// import store from '@/store/index'
export default {
  name: 'HelloWorld',
  data () {
    return {
      changableNum:0,
      msg: 'Welcome to Your App1'
    }
  },
  methods:{
    onClicked(){
      console.log(this)
      this.fetchGet('/api/lottery/types?key=ec3baf88cff239ef45a62332f4340a74').then(res=>{
        console.log(res)
      })
      this.$data.changableNum = this.$store.state.changableNum
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
a {
  color: #42b983;
}
</style>
