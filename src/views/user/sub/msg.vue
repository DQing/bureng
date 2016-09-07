<style lang="less">
@borderColor: #c8c8c8;

.msg_box{
	padding: 60px 0;

	.msg_item{
		margin-top: 40px;
		.user_info{
			margin-right: 50px;
			&--avatar{
				width: 100px;
				height: 100px;
				overflow: hidden;
				padding: 4px;
				border-radius: 3px;
				border: 1px solid @borderColor;
				img{
					width: 100%;
				}
			}

			&--name{
				color: #666;
				margin-top: 10px;
				text-align: center;
			}
		}

		.data_box{
			position: relative;
			border: 1px dashed @borderColor;
			padding: 0 15px;

			&:before{
				content: '';
				display: block;
				position: absolute;
				top: 50px;
				left: -11px;
				width: 20px;
			    height: 20px;
			    border: 1px dashed #c8c8c8;
			    transform: rotate(45deg);
			    border-right: 0;
			    border-top: 0;
			    background: #fff;
			}

			h4{
				font-weight: normal;
				line-height: 36px;
			}

			.data_content{
				padding: 10px;
				color: #999;
				min-height: 60px;
			}

			.data_op{
				height: 36px;

				.time{
					line-height: 36px;
					color: #333;
				}
			}
		}
	}
}
</style>

<template>
	<div class="msg_box">
		<ui-filters :nav="filtersNav"></ui-filters>

		<section class="msg_inner">
			<div class="msg_item flex-wrap">
				<div class="user_info">
					<div class="user_info--avatar">
						<img src="http://tva2.sinaimg.cn/crop.0.0.640.640.180/7ad6a939jw8exihz16xj4j20hs0hsmxq.jpg" alt="">
					</div>
					<p class="user_info--name">Raito_MH</p>
				</div>	
				<div class="data_box flex-con">
					<h4 class="border-b">评论：【信息标题】</h4>
					<div class="data_content border-b">
						<p>“货不错，哥包了！”</p>
					</div>
					<div class="data_op">
						<span class="time">2014-11-09 20:38</span>
					</div>
				</div>	
			</div>

			<div class="msg_item flex-wrap">
				<div class="user_info">
					<div class="user_info--avatar">
						<img src="http://tva2.sinaimg.cn/crop.0.0.640.640.180/7ad6a939jw8exihz16xj4j20hs0hsmxq.jpg" alt="">
					</div>
					<p class="user_info--name">Raito_MH</p>
				</div>	
				<div class="data_box flex-con">
					<h4 class="border-b">评论：【信息标题】</h4>
					<div class="data_content border-b">
						<p>“货不错，哥包了！”</p>
					</div>
					<div class="data_op">
						<span class="time">2014-11-09 20:38</span>
					</div>
				</div>	
			</div>
		</section>
	</div>
</template>

<script>
import uiFilters from './filters'

export default {
	data() {
		return {
			filtersNav: [{
				'name': 'msg_new',
				'title': '新消息'
			},{
				'name': 'msg_sys',
				'title': '系统消息'
			},{
				'name': 'msg_user',
				'title': '用户消息'
			}],
		}
	},
	components: {
		uiFilters
	}
}
</script>