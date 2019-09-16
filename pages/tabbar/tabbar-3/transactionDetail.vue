<template>
	<view class="tDetail">
		<view class="content">
			<view class="top">
				<view class="top_left">
					<navigator url="transaction" class="header-back">
						<image src="../../../static/img/tabbar/back.png" mode=""></image>
					</navigator>
					<image src="../../../static/img/tabbar/pic.png" mode=""></image>
					<text>已签收</text>
				</view>
				<view class="top_right">
					<view class="top_right_tip">
						<text class="top_right_tip_txt">05</text>
					</view>
					<text class="top_right_txt">...</text>
					<view class="top_right_info" v-show="false">
						<view class="top_right_info_box">
							<image src="../../../static/img/tabbar/liaotian.png" mode=""></image>
							<view class="top_right_info_box_txt">
								<text>消息</text>
							</view>
							<view class="top_right_info_box_txt_tip">
								<text>05</text>
							</view>
						</view>
						<view class="top_right_info_box">
							<image src="../../../static/img/tabbar/index.png" mode=""></image>
							<view class="top_right_info_box_txt">
								<text>首页</text>
							</view>
						</view>
						<view class="top_right_info_box">
							<image src="../../../static/img/tabbar/kefu.png" mode=""></image>
							<view class="top_right_info_box_txt">
								<text>专属客服</text>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="center">
				<view class="line"></view>
				<view class="center_box">
					<view class="center_box_left">
						<view class="center_box_left_date"></view>
						<view class="center_box_left_time"></view>
					</view>
					<view class="center_box_right">
						<text class="center_box_right_txt">收</text>
						<text class="center_box_right_address">【收货地址】广东省东莞市 南城街道 高盛科技园北区C座</text>
					</view>
				</view>
				<view class="center_box">
					<view class="center_box_left">
						<view class="center_box_left_date">07-25</view>
						<view class="center_box_left_time">12:20</view>
					</view>
					<view class="center_box_right">
						<view class="center_box_right_txt">
							<image src="../../../static/img/tabbar/duigou.png" mode=""></image>
						</view>
						<view class="center_box_right_left">
							<view class="center_box_right_left_title">已签收</view>
							<view class="center_box_right_left_address">广东省东莞市南城白马公司 已签收 签收人：王某某。快件已送达，如有 疑问请联系：13888888888，投诉电话：0769-8</view>
						</view>
					</view>
				</view>
				<view class="center_box">
					<view class="center_box_left">
						<view class="center_box_left_date">07-25</view>
						<view class="center_box_left_time">12:20</view>
					</view>
					<view class="center_box_right">
						<view class="center_box_right_txt" style="background-color: #FFFFFF;">
							<image src="../../../static/img/tabbar/paisong.png" mode=""></image>
						</view>
						<view class="center_box_right_left">
							<view class="center_box_right_left_title">已签收</view>
							<view class="center_box_right_left_address">广东省东莞市南城白马公司 已签收 签收人：王某某。快件已送达，如有 疑问请联系：13888888888，投诉电话：0769-8</view>
						</view>
					</view>
				</view>
				<view class="center_box">
					<view class="center_box_left">
						<view class="center_box_left_date">07-25</view>
						<view class="center_box_left_time">12:20</view>
					</view>
					<view class="center_box_right">
						<view class="center_box_right_txt" style="background-color: #FFFFFF;">
							<image src="../../../static/img/tabbar/translate.png" mode=""></image>
						</view>
						<view class="center_box_right_left">
							<view class="center_box_right_left_title">已签收</view>
							<view class="center_box_right_left_address">广东省东莞市南城白马公司 已签收 签收人：王某某。快件已送达，如有 疑问请联系：<text class="phone" style="color: #FF4302;">13888888888</text>，投诉电话：<text
								 class="phone" style="color: #FF4302;">0769-8</text></view>
						</view>
					</view>
				</view>
				<view class="center_box">
					<view class="center_box_left">
						<view class="center_box_left_date">07-25</view>
						<view class="center_box_left_time">12:20</view>
					</view>
					<view class="center_box_right">
						<text class="center_box_right_txt">收</text>
						<view class="center_box_right_left">
							<view class="center_box_right_left_title">已签收</view>
							<view class="center_box_right_left_address">广东省东莞市南城白马公司 已签收 签收人：王某某。快件已送达，如有 疑问请联系：13888888888，投诉电话：0769-8</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 猜你喜欢 -->
		<my-like :itemData="items"></my-like>
	</view>
</template>

<script>
	// 测试
	import http from '../../../utils/http.js';
	import MyLike from '../../../components/cainiXihuan/xihuan.vue'
	import {
		xihuanShuju,
		success
	} from './config.js'
	export default {
		data() {
			return {
				items: xihuanShuju,
				opts:{
					url: 'getLoginUserByLoginId?login_id=1018',
					method: 'get'
				},
				param:{}
			};
		},
		components: {
			MyLike
		},
		methods: {
			getLoginUser() {
				http.httpRequest(this.opts, this.param).then(res => {
					console.log(res);
				}, error => {
					console.log(error);
				})
				// uni.request({
				// 	url: 'http://workmantest.fologde.com/public/index.php/getLoginUserByLoginId?login_id=505',
				// 	data:{},
				// 	method: 'get',
				// }).then(res => {
				// 	console.log(res[1]);
				// })
			}
		},
		mounted() {
			console.log("123");
			this.getLoginUser()
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F0F0F0;
	}

	.tDetail {
		.content {
			.line {}

			.top {
				width: 720rpx;
				height: 80rpx;
				background-color: #FFFFFF;
				border-radius: 16rpx;
				margin: 10rpx auto;
				display: flex;
				justify-content: space-between;
				box-sizing: border-box;
				align-items: center;

				&_left {
					height: 100%;
					width: 50%;
					display: flex;
					justify-content: flex-start;
					box-sizing: border-box;
					align-items: center;

					image {
						width: 16rpx;
						height: 26rpx;
						margin-left: 30rpx;
					}

					image:nth-child(2) {
						width: 60rpx;
						height: 60rpx;
					}

					text {
						margin-left: 20rpx;
						font-weight: 600;
					}
				}

				&_right {
					padding-right: 10rpx;
					position: relative;

					&_tip {
						&_txt {
							display: block;
							height: 22rpx;
							width: 26rpx;
							border: 2rpx solid #FF4302;
							background-color: #FF4302;
							border-radius: 16rpx;
							font-size: 12rpx;
							color: #FFFFFF;
							text-align: center;
							line-height: 22rpx;
						}
					}

					&_txt {
						display: block;
						height: 26rpx;
						width: 26rpx;
						font-size: 30rpx;
						font-weight: 600;
						line-height: 0rpx;
						letter-spacing: 4rpx;
						margin-right: 6rpx;
					}

					&_info {
						position: absolute;
						width: 200rpx;
						height: 180rpx;
						background-color: #FFFFFF;
						border: 2rpx solid #FFFFFF;
						box-shadow: 6rpx 6rpx 8rpx #808080;
						right: 16rpx;
						top: 44rpx;
						z-index: 100;

						&_box {
							height: 33.33333%;
							width: 100%;
							border-bottom: 2rpx solid #DADADA;
							display: flex;
							align-items: center;
							box-sizing: border-box;
							padding-left: 10rpx;

							image {
								width: 30rpx;
								height: 30rpx;
							}

							&_txt {
								margin-left: 20rpx;
							}

							&_txt_tip {
								display: inline-block;
								height: 22rpx;
								width: 26rpx;
								border: 2rpx solid #FF4302;
								background-color: #FF4302;
								border-radius: 16rpx;
								font-size: 12rpx;
								color: #FFFFFF;
								text-align: center;
								line-height: 22rpx;
								margin-left: 30rpx;
							}
						}

						&_box:nth-child(3) {
							border-bottom: 0;
						}
					}
				}
			}

			.center {
				height: 1300rpx;
				width: 720rpx;
				background-color: #FFFFFF;
				border-radius: 16rpx;
				margin: 30rpx auto;
				box-sizing: border-box;
				padding-top: 20rpx;

				&_box {
					width: 100%;
					margin-top: 20rpx;
					display: flex;
					justify-content: flex-start;

					&_left {
						margin-left: 30rpx;
						margin-right: 10rpx;

						&_date {
							font-size: 16rpx;
							color: #797979;
						}

						&_time {
							font-size: 12rpx;
							color: #797979;
						}
					}

					&_right {
						display: flex;
						justify-conten: space-between;

						&_txt {
							display: inline-block;
							width: 50rpx;
							height: 50rpx;
							background-color: #FF4302;
							border: 2rpx solid #C8C7CC;
							border-radius: 50%;
							color: #FFFFFF;
							font-size: 24rpx;
							line-height: 50rpx;
							text-align: center;

							image {
								width: 24rpx;
								height: 20rpx;
							}
						}

						&_address {
							font-size: 16rpx;
							width: 500rpx;
							margin-left: 20rpx;
							margin-top: 10rpx;
						}

						&_left {
							margin-left: 20rpx;

							&_title {
								font-weight: 800;
							}

							&_address {
								font-size: 16rpx;
								width: 500rpx;
							}
						}

					}
				}
			}
		}
	}
</style>
