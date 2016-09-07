<style lang="less">
@autoWidth: 1060px;
@baseColor: #ffc124;

.fn_auto{
	width: @autoWidth;
	margin: 0 auto;
}
.bd_user{
	background-color: #fff;

	.nav_inner{

		nav{
			.fn_auto;
			overflow: hidden;
			text-align: center;

			&>a{
				display: block;
				width: 25%;
				line-height: 76px;
				float: left;
				font-size: 22px;
				color: #333;
			}

			.v-link-active{
				color: @baseColor;
				border-bottom: 4px solid @baseColor;
			}
		}
	}

	.view_inner{
		.fn_auto;
	}
}
</style>
<template>
	<ui-header></ui-header>
	<ui-user></ui-user>
	<section class="bd_user">
		<div class="nav_inner border-b">
			<nav>
				<a v-for="its in nav.btn" 
				   v-link="{name: its.name, exact: true }" 
				   v-text="its.title"></a>
			</nav>
		</div>
		<div class="view_inner">
			<!-- 子路由 -->
			<router-view></router-view>
		</div>
	</section>
	<ui-footer></ui-footer>
</template>

<script>
import uiHeader from '../../components/header'
import uiUser   from './user'
import uiFooter from '../../components/footer'

export default {
	data() {
		console.log(this.$route);
		return{
			nav: {
				btn: [{
					name: 'user-data',
					title: '个人资料'
				},{
					name: 'user-publish',
					title: '我的发布'
				},{
					name: 'user-favorite',
					title: '我的收藏'
				},{
					name: 'user-msg',
					title: '消息中心'
				}]
			}
		}
	},
	components: {
		uiHeader,
		uiUser,
		uiFooter
	}
}
</script>