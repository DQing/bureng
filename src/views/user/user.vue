<style lang="less">
@borderColor: #e5e5e5;
@barColor: #ff6e52;

.user_box{
	background-color: #f4f4f4;
	min-height: 100px;
	padding: 40px 0;
	.inner{
		width: 1060px;
		margin: 0 auto;
		-webkit-justify-content: space-between;
		justify-content: space-between;

		.user{

			&_avatar{
				width: 175px;
				height: 175px;
				padding: 12px;
				border: 1px solid @borderColor;
				background-color: #fff;
				border-radius: 3px;

				img{
					width: 100%;
					vertical-align: middle;
				}
			}

			&_info{
				width: 484px;
				.intro{
					min-height: 130px;
					background-color: #fff;
					border: 1px solid @borderColor;
					padding: 36px 56px;
					color: rgba(0,0,0,0.54);
					-webkit-box-sizing: border-box;
					box-sizing: border-box;
				}

				.progress{
					margin-top: 40px;
					-webkit-align-items:center;
					align-items:center;
					
					.level{
						width: 20px;
						height: 20px;

						background: @barColor;

						&_current{
							margin-right: 15px;
						}

						&_next{
							margin-lefT: 15px;
						}
					}

					&_box{
						height: 15px;
						border: 1px solid @barColor;
						border-radius: 3px;
						overflow: hidden;
					}
					&_bar{
						height: 100%;
						background-color: @barColor;
					}
				}
			}

			&_medal{
				width: 235px;

				.medal_box{
					overflow: hidden;


					.medal_item{
						display: block;
						float: left;
						width: 55px;
						height: 55px;
						margin-right: 35px;
						margin-bottom: 20px;
						border: 1px solid @borderColor;
						background-color: #fff;
						box-sizing: border-box;

						&:nth-child(3n) {
							margin-right: 0;
						}
					}
				}
			}
		}

		h3{
			font-size: 20px;
			font-weight: normal;
			margin-bottom: 30px;
		}
	}
}
</style>

<template>
	<section class="user_box">
		<div class="inner flex-wrap">
			<div class="user_avatar">
				<img src="http://tp2.sinaimg.cn/2060888377/180/5741105390/1" alt="">
			</div>
			<div class="user_info">
				<h3>用户昵称</h3>
				<div class="intro">个人介绍</div>
				<div class="progress flex-wrap">
					<div class="level level_current"></div>
					<div class="progress_box flex-con">
						<div class="progress_bar" style="width: 20%;"></div>
					</div>
					<div class="level level_next"></div>
				</div>
			</div>
			<!-- 勋章 -->
			<div class="user_medal">
				<h3>我的勋章</h3>
				<div class="medal_box">
					<a class="medal_item"></a>
					<a class="medal_item"></a>
					<a class="medal_item"></a>
					<a class="medal_item"></a>
					<a class="medal_item"></a>
					<a class="medal_item"></a>
				</div>
			</div>
		</div>
	</section>
</template>