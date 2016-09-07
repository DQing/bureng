<template>
<div class="sns-login flex-wrap">
	<a href="" class="sns-login--renren"></a>
	<a href="" class="sns-login--weibo"></a>
	<a href="" class="sns-login--wechat"></a>
	<a href="" class="sns-login--qq"></a>
</div>
</template>

<style lang="less">
@btnSize: 38px;

.sns-login{
	-webkit-justify-content: space-between;
	justify-content: space-between;
	margin-top: 15px;

	&>a{
		display: block;
		width: @btnSize;
		height: @btnSize;
		background-image: url(../../assets/img/icon-sns.png);
		background-repeat: no-repeat;
		background-size: auto 100%;
	}

	&--renren{
		background-position: -38px 0;
	}

	&--weibo{
		background-position: -114px 0;
	}

	&--wechat{
		background-position: -76px 0;
	}

	&--qq{
		background-position: 0 0;
	}
}
</style>