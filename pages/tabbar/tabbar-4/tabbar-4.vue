<template>
	<view class="content">
		<!-- 头部固定栏 -->
		<view class="content-header">
			<navigator href="" class="back">
				<image src="../../../static/img/tabbar/back.png"></image>
			</navigator>
			<text class="title">专属客服</text>
		</view>
		<!-- 客服列表 -->
		<view class="content-items">
			<view class="content-item" v-for="(item,index) in items" :key="index">
				<view class="jieshao">
					<view class="xinxi">
						<text class="name">{{item.name}}</text>
						<view>
							<view class="wechat tubiao"></view>
							{{item.wechat}}
						</view>
						<view>
							<view class="phone tubiao"></view>
							{{item.phone}}
						</view>
						<view>
							<view class="qq tubiao"></view>
							{{item.qq}}
						</view>
					</view>
					<view class="pic">
						<image :src="item.picurl"></image>
					</view>
				</view>
				<view class="contact">
					<view class="liaotian">
						<navigator url="chat">
							<image src="../../../static/img/tabbar/liaotian.png"></image>聊天
						</navigator>
					</view>
					<view class="call">
						<navigator url="../../login/duanxin">
							<image src="../../../static/img/tabbar/phone.png"></image>打电话
						</navigator>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		kefuItems
	} from './config';
	export default {
		data() {
			return {
				items: kefuItems
			}
		},
		onLoad() {

		},
		methods: {

		},

		created() {}
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		height: 100%;
		padding-top: 92rpx;
		padding-bottom: 30rpx;
		background-color: #F0F0F0;

		&-header {
			position: fixed;
			z-index: 1000;
			background-color: #F0F0F0;
			top: 0;
			width: 100%;
			height: 42rpx;
			padding-top: 50rpx;
			font-size: 24rpx;
			line-height: 24rpx;
			display: inline-block;

			.back {
				image {
					float: left;
					width: 16rpx;
					height: 26rpx;
					margin-left: 22rpx;
				}
			}

			.title {
				margin-left: 290rpx;
			}
		}

		&-items {
			width: 100%;

			.content-item {
				width: 706rpx;
				height: 242rpx;
				margin: 22rpx;
				background: rgba(255, 255, 255, 1);
				border-radius: 6rpx 6rpx 6rpx 6rpx;
				box-shadow: 0 0 10rpx 0px rgba(116, 116, 116, 0.2);

				.jieshao {
					width: 100%;
					height: 188rpx;
					position: relative;
					border-bottom: 1px solid #EFEFEF;

					.xinxi {
						width: 70%;
						height: 100%;
						padding: 20rpx 0 0 24rpx;
						line-height: 40rpx;

						view {
							color: #A1A1A1;
						}

						.name {
							color: #000;
						}

						.tubiao {
							width: 26rpx;
							height: 20rpx;
							margin-right: 10rpx;
							background-size: contain;
							background-repeat: no-repeat;
							display: inline-block;
						}

						.wechat {
							background-image: url("../../../static/img/tabbar/wechat.png");
						}

						.phone {
							background-image: url("../../../static/img/tabbar/phone2.png");
						}

						.qq {
							background-image: url("../../../static/img/tabbar/qq.png");
						}
					}

					.pic {
						image {
							width: 140rpx;
							height: 140rpx;
							position: absolute;
							top: 36rpx;
							right: 14rpx;
						}
					}
				}

				.contact {
					width: 100%;
					height: 54rpx;
					color: #A1A1A1;
					line-height: 54rpx;

					view {
						display: inline-block;

						image {
							width: 24rpx;
							height: 24rpx;
							margin-right: 6rpx;
							vertical-align: middle;
						}
					}

					navigator {
						display: inline-block;
					}

					.liaotian {
						margin-left: 140rpx;
					}

					.call {
						margin-right: 140rpx;
						float: right;
					}
				}
			}
		}
	}
</style>
