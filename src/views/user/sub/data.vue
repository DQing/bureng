<style lang="less" scoped>
@inputHeight: 32px;
@borderColor: #c8c8c8;

.data_box{
	padding: 50px 100px 30px;

	.label{
		margin-bottom: 40px;
		font-size: 20px;
		font-weight: normal;
		color: #333;

		span{
			margin-left: 55px;
    		font-size: 14px;
    		color: rgba(0,0,0,0.54);
		}
	}

	.data_bd{
		overflow: hidden;
		.item{
			width: 50%;
			float: left;
			margin-bottom: 20px;

			&_inner{
				&:nth-child(odd){
					margin-right: 116px;
				}

				&:nth-child(even) {
					margin-left: 116px;
				}
			}

			&_label{
				color: #333;
				font-size: 16px;
				float: left;
				line-height: 30px;
			}

			&_bd{
				margin-left: 100px;

				input{
					width: 100%;
					padding: 0 10px;
					height: @inputHeight;
					line-height: @inputHeight;
					font-size: 16px;
					color: rgba(0,0,0,0.54);
					-webkit-box-sizing: border-box;
					box-sizing: border-box;
					border: 1px solid @borderColor;
				}
			}

		}

		.sns-login{
			-webkit-justify-content: space-around;
			justify-content: space-around;
		}
	}

	.ui_btn{
		width: auto;
		height: @inputHeight;
		line-height: @inputHeight;
	}

	&_password {
		.data_bd{
			padding-left: 100px;

			.status_inner{
				a{
					display: inline-block;
					&:first-child{
						width: 120px;
					}
					&:last-child{
						margin-left: 90px;
						width: 210px;
					}
				}
			}

			.status_hint{
				margin-top: 20px;
				color: rgba(0,0,0,0.54);
				span{
					margin-left: 20px;
				}
			}
		}
	}
	
	.btn_save{
		width: 240px;
		margin: 0 auto;
	}
}
</style>

<template>
	<!-- 注册信息 -->
	<div class="data_box border-b">
		<h3 class="label">注册信息</h3>
		<div class="data_bd">
			<div class="item">
				<div class="item_inner">
					<div class="item_label">注册学校</div>
					<div class="item_bd">
						<ui-select-box :data="schoolList"></ui-select-box>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="item_inner">
					<div class="item_label">注册邮箱</div>
					<div class="item_bd">
						<input type="text" value="1234567@163.com">
					</div>
				</div>
			</div>
			<div class="item">
				<div class="item_inner">
					<div class="item_label">学生验证</div>
					<div class="item_bd">
						<a href="javascript:;" class="ui_btn ui_btn_default">未验证</a>
					</div>
				</div>
			</div>
			<div class="item">
				<div class="item_inner">
					<div class="item_label">邮箱验证</div>
					<div class="item_bd">
						<a class="ui_btn ui_btn_default">已验证</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 个人信息 -->
	<div class="data_box border-b">
		<h3 class="label">个人信息</h3>
		<div class="data_bd">
			<div class="item">
				<div class="item_inner">
					<div class="item_label">昵称</div>
					<div class="item_bd">
						<input type="text" value="Raito_MH">
					</div>
				</div>
			</div>
			<div class="item">
				<div class="item_inner">
					<div class="item_label">电话</div>
					<div class="item_bd">
						<input type="tel" value="13022827228">
					</div>
				</div>
			</div>
			<div class="item">
				<div class="item_inner">
					<div class="item_label">qq</div>
					<div class="item_bd">
						<input type="tel" value="12345678">
					</div>
				</div>
			</div>
		</div>
	</div>
	<!-- 密码状态 -->
	<div class="data_box data_box_password border-b">
		<h3 class="label">密码状态</h3>
		<div class="data_bd">
			<div class="status_inner">
				<a class="ui_btn ui_btn_default">良好</a>
				<a class="ui_btn ui_btn_default">修改密码</a>
			</div>
			<p class="status_hint">上次更新时间<span>2015/11/11</span></p>
		</div>
	</div>
	<!-- 绑定信息 -->
	<div class="data_box">
		<h3 class="label">绑定信息<span>第三方帐号绑定</span></h3>
		<div class="data_bd">
			<ui-sns></ui-sns>
		</div>
	</div>
	<div class="data_box">
		<a class="ui_btn ui_btn_default btn_save">保存</a>
	</div>
</template>

<script>
import uiSelectBox from '../../../components/selectbox'
import uiSns from '../../login/sns'

export default {
	data() {
		return{
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
		uiSns
	}
}
</script>