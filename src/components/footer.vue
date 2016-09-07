<style lang="less" scoped>
.footer{
	color: #fff;
	background-color: #2c2c2c;
	text-align: center;
	
	&_box{
		width: 1200px;
		margin: 0 auto;
		padding: 20px 0;
	}

	&>h2{
		font-weight: normal;
		line-height: 2;
	}
	
	.friends{
		a{
			display: inline-block;
			margin: 20px;
			
			img{
				height: 25px;
			}
		}
	}

	.copyright{
		font-size: 12px;
		line-height: 2;
	}
}
</style>
<template>
<footer class="footer">
	<section class="footer_box">
		<h2>我们的朋友</h2>
		<div class="friends">
			<a href="" v-for="its in icon">
				<img :src="its" alt="">
			</a>
		</div>
		<p class="copyright">Copyright  2015 冀1301ICP备01010号-1</p>
	</section>
</footer>
</template>
<script>
import iconCxy from '../assets/img/icon-cxy.png'
import iconBp from '../assets/img/icon-bp.png'
import iconCs from '../assets/img/icon-cs.png'
import iconLib from '../assets/img/icon-lib.png'
import iconNav from '../assets/img/icon-nav.png'

export default {
	data() {
		return {
			icon : {
				cxy : iconCxy,
				bp  : iconBp,
				cs  : iconCs,
				lib : iconLib,
				nav : iconNav
			}
		}
	}
}
</script>