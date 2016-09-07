<style lang="less">
.tabs{
	position: fixed;
	left: 0;
	bottom: 0;
	width: 100%;
	background-color: #F8F8FA;
	text-align: center;
    &>a{
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-moz-box-flex: 1;
		-moz-flex: 1;
		-ms-flex: 1;
		flex: 1;
		display: block;
		color: rgba(0,0,0,0.87);
		padding: 4px 0;
				
		.icon{
			display: block;
    		margin: 0 auto;
    		width: 20px;
    		height: 20px;
    		background-repeat: no-repeat;
    		background-position: center center;
    		background-size: 100%;
    		margin-bottom: 4px;

    		&-home{
    			background-image: url(../assets/img/icon-home.png);
    		}

    		&-category{
    			background-image: url(../assets/img/icon-category.png);
    		}

    		&-find{
    			background-image: url(../assets/img/icon-find.png);
    		}

    		&-mine{
    			background-image: url(../assets/img/icon-mine.png);
    		}
		}

		&.active{
			color: #4c9;

			.icon-home{
    			background-image: url(../assets/img/icon-home-active.png);
    		}

    		.icon-category{
    			background-image: url(../assets/img/icon-category-active.png);
    		}

    		.icon-find{
    			background-image: url(../assets/img/icon-find-active.png);
    		}

    		.icon-mine{
    			background-image: url(../assets/img/icon-mine-active.png);
    		}
		}
    }
}
</style>

<template>
<section class="tabs flex-wrap border-t">
	<a v-link="{path: $index===0 ? '/' : '/' + its.name}" 
	   v-for="its in tabs" 
	   :class="[its.name, $index===index ? 'active' : '']">
		<i class="icon" :class="'icon-'+its.name"></i>{{its.title}}
	</a>
</section>
</template>

<script>
export default {
	data() {
		return {
			tabs: [{
				name: 'home',
				title: '首页'
			},{
				name: 'category',
				title: '分类'
			},{
				name: 'find',
				title: '发现'
			},{
				name: 'mine',
				title: '我'
			}]
		}
	},
	props:{
		index: {
			type: Number,
      		default: 0
		}
	}
}
</script>