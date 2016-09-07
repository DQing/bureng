<style lang="less">
@itemHeight: 50px;
@bgColor: #7fd0c0;
@atSize: 6px;

.menus{
	position: absolute;
	width: 100px;
	top: 0;
	text-align: center;

	&_cate{
		left: 0;
		a.active:after{
			border-left: @atSize solid @bgColor;
			right: -@atSize;
		}
	}

	&_type{
		right: 0;
	}

	li{
		margin-bottom: 10px;
	}

	a{
		position: relative;
		display: block;
		height: @itemHeight;
		line-height: @itemHeight;
		color: #fff;
		background-color: @bgColor;

		&.active:after{
			position: absolute;
			top: 0;
			bottom: 0;
			margin: auto;
			content: '';
			display: block;
			width: 0;
			height: 0;
			border-top: @atSize solid transparent;
			border-bottom: @atSize solid transparent;
		}
	}
}
</style>

<template>
<ul class="menus menus_cate">
	<li v-for="its in category">
		<a href="javascript:;" 
		   v-text="its.text" 
		   :class="{'active':$index===1}"></a>
	</li>
</ul>
<slot></slot>
<ul class="menus menus_type">
	<li v-for="its in type">
		<a href="javascript:;" v-text="its.text"></a>
	</li>
</ul>
</template>

<script>
export default {
	data() {
		return {
			category : [{
				text : '最新'
			},{
				text : '热门'
			},{
				text : '电脑手机'
			},{
				text : '数码电器'
			},{
				text : '书籍'
			},{
				text : '衣帽鞋包'
			},{
				text : '代步'
			},{
				text : '生活娱乐'
			},{
				text : '其他'
			}],
			type : [{
				text : '出手转让'
			},{
				text : '入手求购'
			},{
				text : '物品租赁'
			},{
				text : '失物招领'
			}]
		}
	}
}
</script>