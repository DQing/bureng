<style lang="less">
@autoColor: #ffc124; //橘色

.view_register{
	.input_other{
		&>a.agreement{
			float: none;
		}
	}

	.btn_area{
		margin-top: 15px;
		.btn{
			background-color: @autoColor;
		}
	}

	select{
		-webkit-appearance: none;
	    -webkit-box-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    border: none;
    	background: none;
    	color: #c8c8c8;
	}

}
</style>

<template>
	<cs-base :view="'register'">
		<h1 class="title">快速注册</h1>
		<div class="group_inputs">
			<ui-input :icon="icon.email">
				<input type="text" placeholder="输入邮箱" v-model="data.email">
			</ui-input>
			<ui-input :icon="icon.lock">
				<input type="text" placeholder="输入密码" v-model="data.password">
			</ui-input>
			<ui-input :icon="icon.lock">
				<input type="text" placeholder="确认密码" v-model="rePsw">
			</ui-input>
			<ui-input :icon="icon.home">
				<select name="school" v-model="data.school">
					<option value="">请选择学校</option>
					<option v-for="its in schools" :value="its.id" v-text="its.name"></option>
				</select>
			</ui-input>
			<div class="input_other">
				<input type="checkbox">同意
				<a v-link="{ name: 'agreement' }" class="agreement">使用协议</a>
			</div>
		</div>
		<div class="btn_area">
			<a v-link="{ name: 'user-data' }" class="btn">马上注册</a>
		</div>
		<ui-sns></ui-sns>
	</cs-base>
</template>

<script>
import csBase from './base'
import uiInput from './input'

import iconEmail from '../../assets/img/icon-email.png'
import iconLock from '../../assets/img/icon-lock.png'
import iconHome from '../../assets/img/icon-home.png'

export default {
	data() {
		return {
			icon: {
				email: iconEmail,
				lock: iconLock,
				home: iconHome
			},
			data: {
				email: '',
				password: '',
				school: ''
			},
			rePsw: '',
			schools: [{
				id: 0,
				name: '西安邮电大学'
			}]
		}
	},
	components: {
		csBase,
		uiInput
	}
}
</script>