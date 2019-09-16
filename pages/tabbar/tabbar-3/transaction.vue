<template>
	<view class="content">
		<my-header class="header" style="background-color: #FFFFFF;">
			<navigator url="tabbar-3" class="header-back" slot="backImg" open-type="switchTab">
				<image src="../../../static/img/tabbar/back.png" style="width: 16rpx; height: 26rpx;"></image>
			</navigator>
			<view class="header-title" slot="title" style="font-weight: 600; font-size: 24rpx;">交易物流
			</view>
		</my-header>
		<view class="boxes">
			<navigator url="transactionDetail" class="header-back">
				<view class="box">
					<view class="box_top">
						<view class="box_top_left">
							<text>您的订单正在派送中</text>
						</view>
						<view class="box_top_right">
							<text>星期五</text>
						</view>
					</view>
					<view class="box_center">
						<image src="../../../static/img/tabbar/pic.png" mode="" style="z-index: 100;"></image>
						<view class="box_center_right">
							<view class="box_center_right_top">
								<text>您购买的低组装,四方型滑块TRS30BS【三环】低组装,四 方型...订单已签收！</text>
							</view>
							<view class="box_center_right_bottom">
								<text>来自527435137149178047</text>
							</view>
						</view>
					</view>
				</view>
			</navigator>
			<view class="box">

				<view class="box_top">
					<view class="box_top_left">
						<text>您的订单正在派送中</text>
					</view>
					<view class="box_top_right">
						<text>星期五</text>
					</view>
				</view>
				<view class="box_center">
					<image src="../../../static/img/tabbar/pic.png" mode="" style="z-index: 100;"></image>
					<view class="box_center_right">
						<view class="box_center_right_top">
							<text>您购买的低组装,四方型滑块TRS30BS【三环】低组装,四 方型...订单已签收！</text>
						</view>
						<view class="box_center_right_bottom">
							<text>来自527435137149178047</text>
						</view>
					</view>
				</view>
			</view>
			<view class="box">
				<view class="box_top">
					<view class="box_top_left">
						<text>您的订单正在派送中</text>
					</view>
					<view class="box_top_right">
						<text>星期五</text>
					</view>
				</view>
				<view class="box_center">
					<image src="../../../static/img/tabbar/pic.png" mode="" style="z-index: 100;"></image>
					<view class="box_center_right">
						<view class="box_center_right_top">
							<text>您购买的低组装,四方型滑块TRS30BS【三环】低组装,四 方型...订单已签收！</text>
						</view>
						<view class="box_center_right_bottom">
							<text>来自527435137149178047</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import MyHeader from '../../../components/header/header.vue'
	export default {
		data() {
			return {

			};
		},
		components: {
			MyHeader
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F0F0F0;
	}

	.content {
		width: 100%;
		height: 100%;
		display: flex;
		justify-content: center;

		.boxes {
			min-width: 600rpx;
			margin-top: 100rpx;

			.box {
				width: 700rpx;
				height: 300rpx;
				background-color: #FFFFFF;
				margin-top: 30rpx;
				border-radius: 16rpx;

				&_top {
					width: 100%;
					height: 60rpx;
					display: flex;
					justify-content: space-between;
					box-sizing: border-box;
					padding-top: 12rpx;
					padding-left: 16rpx;
					padding-right: 12rpx;

					&_left {
						font-weight: 600;
					}

					&_right {
						font-size: 12rpx;
						margin-top: 4rpx;
					}
				}

				&_center {
					width: 100%;
					height: 200rpx;
					margin-top: 14rpx;
					margin-left: 6rpx;
					box-sizing: border-box;
					padding-left: 8rpx;

					image {
						width: 200rpx;
						height: 200rpx;
						border-radius: 10rpx;
						float: left;
					}

					&_right {
						width: 480rpx;
						height: 200rpx;
						float: left;
						box-sizing: border-box;
						padding-left: 16rpx;

						&_top {
							width: 450rpx;
							height: 80rpx;
							font-size: 18rpx;
							margin-top: 20rpx;
							line-height: 36rpx;
						}

						&_bottom {
							width: 250rpx;
							height: 30rpx;
							margin-top: 50rpx;
							font-size: 18rpx;
							color: #484848;
						}

					}
				}
			}

		}
	}
</style>
