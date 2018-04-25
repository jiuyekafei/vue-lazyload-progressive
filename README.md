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
import './progressive/progressive.css'
Vue.use(progressive);

<span class="progressive" date-src="big.jpg">
    <img v-lazyprogressive src="small.jpg" class="preview">
</span>
```


# License

[The MIT License](http://opensource.org/licenses/MIT)
