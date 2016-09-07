<style lang="less">
.favorite_box{
	padding: 60px 0;


}
</style>

<template>
	<div class="favorite_box">
		<ui-filters :nav="filtersNav"></ui-filters>
		
	</div>
</template>

<script>
import uiFilters from './filters'

export default {
	data() {
		return {
			filtersNav: [{
				'name': 'all',
				'title': '全部'
			},{
				'name': 'a',
				'title': '出手转让'
			},{
				'name': 'b',
				'title': '入手求购'
			},{
				'name': 'c',
				'title': '物品租赁'
			},{
				'name': 'd',
				'title': '失物招领'
			}],
		}
	},
	components: {
		uiFilters
	}
}
</script>