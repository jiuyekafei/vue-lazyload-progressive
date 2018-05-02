# vue-lazyload-progressive

[Demo page](https://jiuyekafei.github.io/vue-lazyload-progressive/dist/index.html) 

# Installation
# npm

```html
$ npm install vue-lazyload-progressive
```

# Requirements

- [Vue.js](https://github.com/vuejs/vue) `^2.0.0`

```html
import progressive from 'vue-lazyload-progressive'
import 'vue-lazyload-progressive/src/progressive/progressive.css'

Vue.use(progressive);


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
```


# License

[The MIT License](http://opensource.org/licenses/MIT)
