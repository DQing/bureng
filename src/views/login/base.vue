<template>
<section class="login_main">
	<div class="view" :class="'view_'+view">
		<div class="view__box">
			<slot></slot>
		</div>
	</div>
</section>	
</template>

<style lang="less">
@btnHeight: 38px;
@autoColor: #ffc124; //橘色

.login_main{
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	background: url(../../assets/img/login_bg.png) #ececec no-repeat center bottom;
	background-size: 100%;

	.view{
		width: 400px;
		margin: 175px auto 0;
		background-color: #fff;
		min-height: 400px;
		box-shadow: 0px 0px 1px #ddd;

		&__box{
			width: 275px;
			margin: 0 auto;
			padding: 24px 0;
		}

		.btn_area{
			.btn{
				display: block;
				height: @btnHeight;
				line-height: @btnHeight;
				text-align: center;
				color: #fff;
			}
		}
	}

	.input_other{
		margin: 17px 0;
		overflow: hidden;
		a{
			float:right;
			color: @autoColor;
		}
	}

	.title{
		padding: 15px 0;
		color: #666;
		font-size: 18px;
		font-weight: normal;
	}
}
</style>

<script>
export default {
	props: {
		view: {
			type: String,
			default: 'login'
		}
	}
}
</script>

