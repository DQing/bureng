<style lang="less" scoped>
@baseColor: #ffc124;

.filter_nav{
	overflow: hidden;
	a{
		display: block;
		float: left;
		color: #333;
		margin-left: 44px;
		line-height: 30px;
		padding: 0 15px;
		cursor: pointer;

		&.active{
			color: @baseColor;
			border-bottom: 2px solid @baseColor;
		}
	}
}
</style>
<template>
	<div class="filter_nav">
		<a v-for="its in nav" 
		   v-text="its.title" 
		   :class="{'active':$index===index}"></a>
	</div>
</template>

<script>
export default {
	data() {
		return {
			index: 0
		}
	},
	props: ['nav']
}
</script>