<template>
	<view class="dingdan">
		<my-header class="header">
			<navigator url="tabbar-2" class="header-back" slot="backImg" open-type="switchTab">
				<image src="../../../static/img/components/back.png"></image>
			</navigator>
			<view class="header-title" slot="title">订单详情</view>
			<view class="header-search" slot="right">
				<navigator class="dots">
					<view class="newsNumber">
						{{newsNumber}}
					</view>
					<text class="dot"></text>
					<text class="dot"></text>
					<text class="dot"></text>
				</navigator>
			</view>
		</my-header>
		<!-- 顶部装饰 -->
		<view class="decorate">
			<view class="text">交易成功</view>
			<image class="box" src="../../../static/img/tabbar/box.png"></image>
		</view>
		<!-- 收货信息 -->
		<view class="shouhuo">
			<view class="zuobiao"><view class="img"></view></view>
			<view class="text">
				<view class="top">
					<text class="name">{{orderData.name}}</text>
					<text class="phone">{{orderData.phone}}</text>
				</view>
				<view class="dizhi">
					<text>{{orderData.dizhi}}</text>
				</view>
			</view>
		</view>
		<!-- 订单详情 -->
		<view class="myOrder">
			<!-- 订单概要，价格数量等等 -->
			<view class="myOrder-outline">
				<view class="myTop">
					<image :src="orderData.picUrl"></image>
					<view class="text">
						<view class="left">
							<view class="order">{{orderData.order}}</view>
							<view class="taocan">{{orderData.taocan}}</view>
							<view class="tip">24小时发货</view>
						</view>
						<view class="right">
							<view class="price">¥&nbsp;{{orderData.price}}</view>
							<view class="number">×{{orderData.number}}</view>
						</view>
					</view>
				</view>
				<view class="myBottom">
					<view class="freight">
						<text>运费</text>
						<text class="right">¥{{orderData.freight}}</text>
					</view>
					<view class="payment">
						<text>实付款（含运费）</text>
						<text class="right">¥{{orderData.payment}}</text>
					</view>
				</view>
			</view>
			<view class="myOrder-xinxi">
				<view class="myOrder-xinxi-top">
					<view class="title">订单信息</view>
					<view class="orderData">
						<view>
							订单编号:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							{{orderData.bianhao}}
							<text class="copy">复制</text>
						</view>
						<view>交易订单号:&nbsp;&nbsp;&nbsp;{{orderData.dingdanHao}}</view>
						<view>创建时间:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{orderData.createTime}}</view>
						<view>付款时间:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{orderData.payTime}}</view>
						<view>成交时间:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{orderData.dealTime}}</view>
					</view>
				</view>
				<view class="myOrder-xinxi-bottom">
					<view class="tab">
						<navigator class="tab-container">
							<view class="messageImg image"></view>
							<text>联系卖家</text>
						</navigator>
					</view>
					<view class="tab">
						<navigator class="tab-container">
							<view class="phoneImg image"></view>
							<text>拨打电话</text>
						</navigator>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 猜你喜欢 -->
		<my-like :itemData="items"></my-like>
	</view>
</template>

<script>
	import MyHeader from '../../../components/header/header.vue'
	import MyLike from '../../../components/cainiXihuan/xihuan.vue';
	import {xihuanShuju,success} from './config.js';
	export default {
		name: 'xiangqing',
		components: {
			MyLike,
			MyHeader
		},
		data() {
			return {
				// 设置猜你喜欢数据
				items: xihuanShuju,
				// 订单数据
				orderData: success,
				// 右上角红标数字
				newsNumber: 66
			}
		},
		created() {
			
		}
	};
</script>

<style lang="scss" scoped>
	.dingdan {
		background: #F0F0F0;
		.header {
			background:linear-gradient(-90deg,rgba(255,80,0,1),rgba(255,144,0,1));
			&-back{
				width: 16rpx;
				height: 26rpx;
				image {
					width: 16rpx;
					height: 26rpx;
				}
			}
			&-title {
				color: #fff;
			}
			&-search {
				position:relative;
				.dots {
					.newsNumber {
						text-align: center;
						line-height: 30rpx;
						color: #FF5000;
						position: absolute;
						right: -6rpx;
						top: -24rpx;
						height: 30rpx;
						width: 40rpx;
						background-color: #FFF;
						border-radius: 50%;
					}
					position: absolute;
					top: 16rpx;
					right: 20rpx;
					width: 30rpx;
					height: 30rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.dot {
						
						width:6rpx;
						height:6rpx;
						background: #fff;
						border-radius:50%;
					}
				}
			}
		}
		.decorate {
			width: 100%;
			height: 300rpx;
			position: relative;
			background:linear-gradient(-90deg,rgba(255,80,0,1),rgba(255,144,0,1));
			.text {
				color: #fff;
				position: absolute;
				top: 180rpx;
				left: 80rpx;
			}
			.box {
				position: absolute;
				top: 140rpx;
				right: 60rpx;
				width: 204rpx;
				height: 114rpx;
			}
		}
		.shouhuo {
			background: #FFF;
			width: 100%;
			padding: 20rpx;
			margin-bottom: 20rpx;
			min-height: 60rpx;
			.zuobiao {
				float: left;
				width: 60rpx;
				height: 60rpx;
				background: linear-gradient(-90deg,rgba(255,67,2,1),rgba(255,146,36,1));
				border-radius: 24rpx;
				margin: 0 20rpx 20rpx 0;
				.img {
					width: 60rpx;
					height: 60rpx;
					background-image: url("../../../static/img/tabbar/dizhi.png");
					background-size: 50% 60%;
					background-repeat: no-repeat;
					background-position: center;
				}
			}
			.text {
				display: inline-block;
				width: 620rpx;
				.top {
					.name {
						margin-right: 20rpx;
					}
					.phone {
						color: #757575;
					}
				}
			}
		}
		.myOrder {
			background: #F0F0F0;
			width: 100%;
			margin-top: 20rpx;
			&-outline {
				background: #FFF;
				width: 100%;
				padding: 20rpx;
				box-sizing: border-box;
				.myTop {
					width: 100%;
					height: 200rpx;
					image {
						float: left;
						width: 200rpx;
						height: 200rpx;
						border-radius: 6rpx;
					}
					.text {
						display: inline-block;
						width: 510rpx;
						height: 200rpx;
						float: right;
						
						.left {
							float: left;
							width: 360rpx;
							height: 100%;
							margin-left: 6rpx;
							.order {
								width: 100%;
								font-size: 24rpx;
								font-weight: 600;
							}
							.taocan {
								width: 100%;
								color: #B6B6B6;
							}
							.tip {
								font-family:PingFang;
								font-weight: 400;
								color: #FF4302;
								line-height: 30rpx;
							}
							
						}
						.right {
							width: 100rpx;
							height: 100%;
							word-wrap:break-word;
							float: right;
							text-align: right;
						}
					}
				}
				.myBottom {
					margin-top: 20rpx;
					height: 70rpx;
					width: 100%;
					.freight {
						width: 100%;
						.right {
							float: right;
						}
					}
					.payment {
						font-size: 26rpx;
						.right {
							float: right;
							color: #FF4302;
						}
					}
				}
			}
			&-xinxi {
				background: #FFF;
				width: 100%;
				margin-top: 20rpx;
				&-top {
					width: 710rpx;
					padding: 20rpx;
					.title {
						font-size: 26rpx;
						line-height: 28rpx;
						padding-left: 10rpx;
						width: 100%;
						height: 28rpx;
						border-left: 6rpx solid #FF4302;
						margin-bottom: 20rpx;
						font-weight: bold;
					}
					.orderData {
						width: 100%;
						line-height: 40rpx;
						color: #333232;
						.copy {
							color: #FF4302;
							float: right;
						}
					}
				}
				&-bottom {
					border-top: 2rpx solid #DADADA ;
					width: 100%;
					height: 60rpx;
					.tab {
						display: inline-block;
						wdith: 375rpx;
						height: 32rpx;
						margin: 14rpx 0;
						&:first-child {
							border-right: 2rpx solid #DADADA;
						}
						&-container {
							width: 140rpx;
							height:100%;
							margin:0 115rpx;
							.image {
								float: left;
								width: 32rpx;
								height: 32rpx;
								background-size: contain;
								background-repeat: no-repeat;
								margin-right: 10rpx;
							}
							.messageImg {
								background-image: url('../../../static/img/tabbar/lianxi.png');
							}
							.phoneImg {
								background-image: url('../../../static/img/tabbar/dianhua.png');
							}
						}
					}
				}
			}
		}
	}
</style>
