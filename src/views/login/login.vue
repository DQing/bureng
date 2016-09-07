<style lang="less">
@autoColor: #ffc124; //橘色

.view_login{
	.avatar{
		width: 90px;
		height: 90px;
		padding: 2px;
		border: 1px solid @autoColor;
		margin: 0 auto;

		img{
			width: 100%;
		}
	}

	.btn_area{
		margin-top: 15px;
		.btn{
			background-color: @autoColor;
		}
	}

}
</style>

<template>
	<cs-base :view="'login'">
		<div class="avatar">
			<img src="http://tva2.sinaimg.cn/crop.0.0.640.640.180/7ad6a939jw8exihz16xj4j20hs0hsmxq.jpg" alt="">
		</div>
		<div class="group_inputs">
			<ui-input :icon="icon.email">
				<input type="text" placeholder="输入邮箱" v-model="data.email">
			</ui-input>
			<ui-input :icon="icon.lock">
				<input type="text" placeholder="输入密码" v-model="data.password">
			</ui-input>
			<div class="input_other">
				<input type="checkbox">记住我
				<a href="">忘记密码</a>
			</div>
		</div>
		<div class="btn_area">
			<a v-link="{name: 'user-data' }" class="btn">登录</a>
		</div>
		<ui-sns></ui-sns>
	</cs-base>
</template>

<script>
import csBase from './base'
import uiInput from './input'
import uiSns from './sns'

import iconEmail from '../../assets/img/icon-email.png'
import iconLock from '../../assets/img/icon-lock.png'

export default {
	data() {
		return {
			icon: {
				email: iconEmail,
				lock: iconLock
			},
			data: {
				email: '',
				password: ''
			}
		}
	},
	components: {
		csBase,
		uiInput,
		uiSns
	}
}
</script>