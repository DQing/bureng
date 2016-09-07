<style lang="less">
@autoHeight: 30px;
@borderColor: #c8c8c8;

.ui_select{
	position: relative;
	color: rgba(0,0,0,0.54);
	font-size: 16px;
	.select_data{
		position: relative;
		padding: 0 8px;
		border: 1px solid @borderColor;
		line-height: @autoHeight;
		cursor: pointer;
		
		&:before{
			content:'';
			display: block;
			position: absolute;
			top: 0;
			right: 0;
			width: @autoHeight;
			height: @autoHeight;
			border-left: 1px solid @borderColor;
		}

		&:after{
			content: '';
			display: block;
			width: 0;
			height: 0;
			border-top: 6px solid @borderColor;
			border-left: 6px solid transparent;
			border-right: 6px solid transparent;
			position: absolute;
			top: 0;
			right: 9px;
			bottom: 0;
			margin: auto;
		}
	}

	.list_inner{
		position: absolute;
		width: 100%;
		height: 70px;
		overflow-y: scroll;
		background-color: #fff;
		line-height: @autoHeight;
		border: 1px solid @borderColor;
		border-top: 0;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		li{
			padding: 0 10px;
		}

		li+li{
			border-top: 1px solid @borderColor;
		}
	}
}
</style>

<template>
	<div class="ui_select">
		<div class="select_data" @click="status=!status" v-text="focusData.title"></div>
		<ul class="list_inner" v-show="status">
			<li v-for="its in data" v-text="its.title" @click="selectData(its)"></li>
		</ul>
	</div>
</template>
<script>
export default {
	data() {
		let focusData = this.data ? (this.focus || this.data[0]) : {title: '',value: ''}
		return {
			status: false,
			focusData: focusData
		}
	},
	props: ['data', 'focus'],
	methods: {
		selectData(its) {
			this.focusData.value = its.value;
			this.focusData.title = its.title;
			this.status = false
		}
	}
}
</script>