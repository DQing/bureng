<style lang="less">
@goodSize: 200px;

.slide{
	width:1200px;
	margin: 0 auto;
	position: relative;
	height: @goodSize * 3;

	&_goods{
		position: absolute;
		background-repeat: no-repeat;

		.info{
			position: absolute;
			width: @goodSize;
			height: @goodSize;
			background-color: #000;

			&.right{
				top: 0;
				right: -@goodSize;
			}

			&.left{
				left: -@goodSize;
				bottom: 0;
			}
		}

		&:first-child,&:nth-child(4){
			width: @goodSize * 2;
			height: @goodSize * 2;
			background-color: #4c9cee;
			background-size: contain;
		}
		&:nth-child(2),&:nth-child(3){
			width: @goodSize * 2;
			height: @goodSize;
			background-color: #4c9;
		}

		&:first-child{
			top: 0;
			left: 0;
		}

		&:nth-child(2){
			top: 0;
			right: @goodSize;
		}

		&:nth-child(3){
			left: @goodSize;
			bottom: 0;
		}
		&:nth-child(4){
			right: 0;
			bottom: 0;
		}
	}
}
.home_banner{
	height: 120px;
	background-color: #333;
}
</style>

<template>
<section class="slide">
	<div class="slide_goods">
	按图大小比例复原太大了。。。。。我选择狗带
		<div class="info right"></div>
	</div>
	<div class="slide_goods">
		<div class="info right"></div>
	</div>
	<div class="slide_goods">
		<div class="info left"></div>
	</div>
	<div class="slide_goods">
		<div class="info left"></div>
	</div>
</section>
<section class="home_banner"></section>
</template>