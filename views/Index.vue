<template>
  <div class="home">
    <div class="Carousel">
    	<!--轮播-->
    	<img src="../assets/Carousel-1.jpg" alt="" />
    	<!--<img src="../assets/Carousel-2.jpg" alt="" />
    	<img src="../assets/Carousel-3.jpg" alt="" />-->
    </div>
    
    <div class="main">
    	<!--内容左-数据列表-->
    	<div class="main-left">
    		<div class="left-img">
    			<img src="../assets/main-1.jpg" alt="" />
    			<img src="../assets/main-2.jpg" alt="" />
    			<img src="../assets/main-3.jpg" alt="" />
    			<img src="../assets/main-4.jpg" alt="" />
    		</div>
          <!--组件-->
    		<Home></Home>
    	</div>
    		
    	<!--内容右-列表-->
    	<div class="main-right">
    		
    		<!--组件-->
    	 <Title></Title>
    	 
    	 
    	 </div>
    	 <div class="main-right">
    		    <p><span></span> 联系我们 - CONTACT</p>	
    		    <div class="dian">
    		    Tom <img src="../assets/ren.png" alt="" /> <br />   	 	   
           <a href="#">188 0000 0000  /  008-6666 6666</a>
    	 </div>
    	  <div class="dian">
    		    Smith <img src="../assets/ren.png" alt="" /> <br />   	 	   
           <a href="#">188 0000 0000  /  008-6666 6666</a>
    	 </div>
    	  <div class="dian">
    		    Andy <img src="../assets/ren.png" alt="" /> <br />   	 	   
           <a href="#">188 0000 0000  /  008-6666 6666</a>
    	 </div>
    	 </div>
    	 <div class="main-right">
    	   <img src="../assets/input.png" alt="" />
    	 </div>
    	</div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'
import Title from '@/components/Title.vue'

export default {
  name: 'home',
  components: {
  	Home,
    Title
  }
}
</script>

<style>
	.home{
		width: 95%;
		margin: 0 auto;
	}
	.Carousel{
		width: 100%;
		overflow: hidden;
	}
	.Carousel img{
		float: left;
		width: 100%;
		height: 600px;
	}
	.main{
		width: 90%;
		margin: 0 auto;
		margin-top: 30px;
		overflow: hidden;
	}
	.main-left{
		width: 75%;
		float: left;
	}
	.left-img {
		width: 100%;
		overflow: hidden;
	}
	.left-img img{
		float: left;
		width: 49%;
		margin-right: 1%;
		margin-top: 1%;
	}
	
	.new{
		width: 100%;
		border: 1px  solid #CCCCCC;
		background-color: #F7F7F7;
		margin-top: 30px;
		overflow: hidden;
	}
	.new p{
		height: 95px;
		line-height: 30px;
		text-align: center;
	}
	.new p span{
		font-size: 25px;
		font-weight: bold;
	}
	.new-con{
		width: 33%;
		height: 330px;
		float: left;
		margin-left: 1px;
		overflow: hidden;
		border-right: 1px solid #CCCCCC;
		background-color: #FFFFFF;
	}
	.new-con img{
		width: 100%;
		height: 175px;
		float: left;
	}	
	.new-con a{
		color: #000;
	}
	.new-con p{
		width: 100%;
		height: 40px;
		text-align: left;
		padding-left: 20px;
		line-height: 40px;
		float: left;
		color: #000000;
		font-weight: bold;
		font-size: 14px;
	}
	.new-con span{
		width: 100%;
		float: left;
		padding-left: 20px;
		line-height: 25px;
		font-size: 14px;
	}
	
	.new-but{
		width: 100%;
		height: 90px;
		float: left;
		line-height: 90px;
		text-align: center;
	}
	
	.new-but button{
		width: 135px;
		height: 40px;
		background-color: #FFFFFF;
	  border: 1px solid #00AEFF;
	}
 .main-right{
		width: 23%;
		float: right;
		background-color: #F7F7F7;
		overflow: hidden;
		margin-top: 10px;
	}
	.main-right p{
		width: 90%;
		height: 50px;
		margin-left: 20px;
		font-weight: bold;
		font-size: 14px;
		line-height: 30px;
		text-align: center;
	}
	.main-right p span{
		width: 15px;
		height: 15px;
		background-color: #000;
		float: left;
		margin-top: 5px;
	}
	.main-right p button{
		background-color: #fff;
		border: 1px solid #000;
		float: right;
	}
	.tit{
		height: 80px;
		margin-left: 20px;
		font-size: 14px;
		line-height: 25px;
	}
	.dian{
		height: 70px;
		margin-left: 20px;
		font-size: 14px;
		line-height: 25px;
	}
	.dian a{
		color: #0000CD;
		height: 80px;
	}
	.dian img{
		margin-left: 10px;
	}
	a{
		text-decoration: none;
	}
</style>