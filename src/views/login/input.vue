<template>
	<div class="input_box flex-wrap">
		<img :src="icon" alt="">
		<slot></slot>
	</div>
</template>

<style lang="less">
@autoColor: #c8c8c8;

.input_box{
	margin-top: 17px;
	border: 1px solid @autoColor;

	&>img{
		width: 16px;
		margin: 12px;
	}

	input{
		border: none;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		color: @autoColor;
	}
}
</style>

<script>
export default {
	props: {
		icon: {
			type: String
		}
	}
}
</script>