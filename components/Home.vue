<template>
  <div class="main">
  	<div class="new" v-for="i in arr">
    			<p> <span>{{i.tit}}</span><br />
               - New Apartment -
          </p>
        <div class="new-con" v-for="j in arr" >
          <router-link to="/page">
          <img :src="j.img"/>
          <p>{{i.name}}</p>
          <span>地区：{{j.des}}</span>
          <span>户型：{{j.fenlei}} </span>   
          <span>价格：{{j.price}}元/m²</span>
          </router-link>
    		</div>
    		
    		<div class="new-but">
    			<button>浏览器更多新楼盘</button>
    		</div>
    		</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
   created(){
    this.$http.get('http://localhost:3000/').then(e=>this.arr=e.body)
  },
  data(){
    return {
      lan:{},
      arr:[],
      page:false
    }
  },
}
</script>

<style scoped>
 .new p{
 	line-height: 25px;
 	padding-top: 20px;
 }
</style>
