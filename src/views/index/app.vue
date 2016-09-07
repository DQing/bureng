<template>
	<ui-header></ui-header>
	<ui-show></ui-show>
	<!-- <ui-slide></ui-slide> -->
	<div class="bd_main">
		<ui-aside-menu>
			<ui-goods></ui-goods>
		</ui-aside-menu>
	</div>
	<ui-footer></ui-footer>
</template>

<script>
import uiHeader from '../../components/header'
import uiShow from './show'
//import uiSlide  from './slide'
import uiAsideMenu from '../../components/asideMenu'
import uiGoods from './goods'
import uiFooter from '../../components/footer'

export default {
	components: {
		uiHeader,
		uiShow,
		uiAsideMenu,
		uiGoods,
		uiFooter
	}
}
</script>
