<style lang="less">
@baseColor: #ffc124;
@borderColor: #c8c8c8;

.publish_box{
	padding: 60px 0;

	.filter_box{
		.school_box{
			width: 170px;
		}
	}

	.publish_goods{
		.goods_item{
			margin-top: 40px;
			.cover{
				width: 180px;
				height: 180px;
				padding: 6px;
				border: 1px solid @borderColor;
				border-radius: 3px;
				margin-right: 6px;

				img{
					width: 100%;
				}
			}

			.goods_bd{
				border: 1px solid @borderColor;
				border-radius: 3px;

				&--info{
					h4{
						line-height: 44px;
						font-weight: normal;
						font-size: 20px;
						text-align: center;
						border-bottom: 1px solid @borderColor;
					}
					border-right: 1px solid @borderColor;

					.content{
						color: rgba(0,0,0,0.54);
						padding: 10px;
						line-height: 1.5;
					}
				}

				&--intro{
					width: 110px;
				}
			}
		}
	}

}
</style>

<template>
	<div class="publish_box">
		<div class="filter_box flex-wrap">
			<div class="school_box">
				<ui-select-box :data="schoolList"></ui-select-box>
			</div>
			<ui-filters :nav="filtersNav"></ui-filters>
		</div>
		<div class="publish_goods">
			<div class="goods_item flex-wrap">
				<div class="cover">
					<img src="http://img1.nuandaocdn.com/Public/images/uploads/sale/20160520/573eb5b1a3d4f.jpg" alt="">
				</div>
				<div class="goods_bd flex-con flex-wrap">
					<div class="goods_bd--info flex-con">
						<h4>标题</h4>
						<div class="content">
							<p>购买时间：耗损程度：购买价格：包装、说明书、发票是否齐全：用途：其他：</p>
						</div>
					</div>
					<div class="goods_bd--intro"></div>
				</div>
			</div>

			<div class="goods_item flex-wrap">
				<div class="cover">
					<img src="http://img1.nuandaocdn.com/Public/images/uploads/sale/20160520/573eb5b1a3d4f.jpg" alt="">
				</div>
				<div class="goods_bd flex-con flex-wrap">
					<div class="goods_bd--info flex-con">
						<h4>标题</h4>
						<div class="content">
							<p>购买时间：耗损程度：购买价格：包装、说明书、发票是否齐全：用途：其他：</p>
						</div>
					</div>
					<div class="goods_bd--intro"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import uiSelectBox from '../../../components/selectbox'
import uiFilters from './filters'

export default {
	data() {
		return{
			filtersNav: [{
				'name': 'grounding',
				'title': '展示中'
			},{
				'name': 'undercarriage',
				'title': '已下架'
			}],
			schoolList: [{
				value: 0,
				title: '西安邮电大学'
			},{
				value: 1,
				title: '西北政法大学'
			},{
				value: 2,
				title: '西安工业大学'
			},{
				value: 3,
				title: '陕西师范大学'
			},{
				value: 4,
				title: '西安电子科技大学'
			}]
		}
	},
	components: {
		uiSelectBox,
		uiFilters
	}
}
</script>