---
sidebar: auto
---

## 教程

### 安装

在 Vue 应用的入口文件 `main.js` 中引入插件。

```js {3,9}
// main.js
import Vue from 'vue';
import GN from 'gavin-ui-element';
Vue.use(GN);

new Vue({
	...GN,
	render: (h) => <App />
}).$mount('#app');
```

### 日志配置

```js {4,7,8,9,10,11,12}
import Vue from 'vue';
import GN from 'gavin-ui-element';
// Vue.config.silent = true 取消 Vue 和 Gavin UI 产生 所有的日志与警告
Vue.config.silent = false;

Vue.use(GN, {
	log: {
		enabled: true, //是否启用日志
		level: 'debug', //设置日志级别 debug info warn error
		vuexAction: true, //vuex action 日志
		vuexMutation: true // vuex mutation 日志
	}
});

new Vue({
	...GN,
	render: (h) => <App />
}).$mount('#app');
```

### 国际化配置

#### 目录结构

```
src
└── i18n
	├── langs
	│   ├── cn.js
	│ 	└── en.js
	└── index.js
```

- 中文语言包结构

```js
// src/i18n/langs/cn.js
const cn = {
	message: {
		hello2: 'hello2 你好，世界'
	}
};
export default cn;
```

- 其他语言

```js
// src/i18n/langs/en.js
const en = {
	message: {
		hello2: 'hello2 welcome'
	}
};
export default en;
```

- 导出语言包

```js
// src/i18n/index.js
import cn from './langs/cn';
import en from './langs/en';
export default {
	cn,
	en
};
```

- 应用入口文件配置

```js {3,4,6}
// main.js 入口文件
import Vue from 'vue';
import GN, { langs } from 'gavin-ui-element';
import languages from './i18n';

langs(languages);

Vue.use(GN);

new Vue({
	...GN,
	render: (h) => <App />
}).$mount('#app');
```

#### 在模板中使用

```vue {5}
<template>
	<div>
		<gn-button @click="changeLang('cn')">中文</gn-button>
		<gn-button @click="changeLang('en')">英文</gn-button>
		<div>{{ $t('message.demo.hello') }}</div>
	</div>
</template>

<script>
export default {
	methods: {
		changeLang(lang) {
			this.$loadLanguageAsync(lang);
		}
	}
};
</script>
```

#### 效果

<ClientOnly>
<LazyWrapper com="I18nDemo"></LazyWrapper>
</ClientOnly>
