<template>
	<div id="app" >
		<div class="content" v-for="item in imgList">
			<span class="progressive" :date-src="item.big">
				<img v-lazyprogressive :src="item.small" class="preview">
			</span>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data (){
			return {
				imgList : [{
					big : 'http://www.hongyunbang.net/images/home/carousel_img1.png',
					small : 'http://www.hongyunbang.net/images/home/carousel_img_small1.png'
				},{
					big : 'http://www.hongyunbang.net/images/home/carousel_img2.png',
					small : 'http://www.hongyunbang.net/images/home/carousel_img_small2.png'
				},{
					big : 'http://www.hongyunbang.net/images/home/carousel_img3.png',
					small : 'http://www.hongyunbang.net/images/home/carousel_img_small3.png'
				},{
					big : 'http://www.hongyunbang.net/images/home/carousel_img4.png',
					small : 'http://www.hongyunbang.net/images/home/carousel_img_small4.png'
				},{
					big : 'http://www.hongyunbang.net/images/home/carousel_img5.png',
					small : 'http://www.hongyunbang.net/images/home/carousel_img_small5.png'
				},{
					big : 'http://www.hongyunbang.net/images/home/carousel_img6.png',
					small : 'http://www.hongyunbang.net/images/home/carousel_img_small6.png'
				}]
			}
		}
	}
</script>

<style scoped>
	.content{
		width: 300px;
	}
</style>
