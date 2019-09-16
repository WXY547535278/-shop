<template>
	<view class="content">
		<my-header>
			<image class="header-back" src="../../../static/img/tabbar/back.png" slot="backImg"></image>
			<text class="header-title" slot="title">我的订单</text>
			<view class="header-search" slot="right">
				<navigator class="search">
					<image id="search" src="../../../static/img/tabbar/sousuo.png"></image>
				</navigator>
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
		<!-- 导航 -->
		<view class="nav" id="nav">
			<view class="navItem active" @click="changeDingdan($event.target)" data-id="0">全部</view>
			<view class="navItem" @click="changeDingdan($event.target)" data-id="1">待付款</view>
			<view class="navItem" @click="changeDingdan($event.target)" data-id="2">待发货</view>
			<view class="navItem" @click="changeDingdan($event.target)" data-id="3">待收货</view>
			<view class="navItem" @click="changeDingdan($event.target)" data-id="4">待评价</view>
		</view>
		<!-- 订单显示区域 -->

		<view class="dingdan">
			<view class="dingdan-item" v-for="(item,index) in items" :key="index">
				<text class="zhuangtai">{{item.type}}</text>
				<navigator url="./dingdanXiangqing" hover-class="navigator-hover" open-type="navigate">
					<view class="xiangqing">
						<image :src="item.picUrl"></image>
						<view class="text">
							<view class="left">
								<view class="name">{{item.name}}</view>
								<view class="taocan">{{item.taocan}}</view>
							</view>
							<view class="right">
								<view class="jiage">¥{{item.jiage}}</view>
								<view class="number">×{{item.number}}</view>
							</view>
						</view>
					</view>
				</navigator>
				<view class="bottom">
					<view class="heji">
						共{{item.number}}件商品&nbsp;合计：¥{{item.heji}}(含运费¥{{item.yunfei}})
					</view>
					<view class="caozuo">
						<navigator v-if="arr[0]||arr[1]||arr[2]||arr[3]||arr[4]">联系客服</navigator>
						<navigator v-if="arr[0]">追加评价</navigator>
						<navigator v-if="arr[0]||arr[2]||arr[3]||arr[4]">再次购买</navigator>
						<navigator v-if="arr[0]||arr[4]">删除订单</navigator>
						<navigator v-if="arr[1]">付款</navigator>
						<navigator v-if="arr[2]||arr[3]">确认收货</navigator>
						<navigator v-if="arr[2]">提醒发货</navigator>
						<navigator v-if="arr[4]">评价</navigator>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import MyHeader from '../../../components/header/header.vue';
	import {
		allItems,
		daifukuan,
		daifahuo,
		daishouhuo,
		daipingjia
	} from './config.js';
	export default {
		data() {
			return {
				// 设置订单数据默认类型
				items: '',
				// 用于判断订单操作按钮显示或隐藏的数组,当点击第几个订单导航时,这个数组第几个选项的值设为true
				arr: [1, '', '', '', ''],
				// 搜索图标旁边的数字红标数据
				newsNumber: 66,
				//保存当前导航激活项的索引值
				navItemID: '0'
			}
		},
		components: {
			MyHeader
		},
		onLoad() {

		},
		methods: {
			//清除所有nav元素激活样式
			clean(navItem) {
				for (let i = 0; i < navItem.length; i++) {
					navItem[i].className = 'navItem';
				}
			},
			// 点击导航改变订单展示区
			changeDingdan(e) {
				// 判断如果点击当前选中选项,什么也不做
				if (this.navItemID === e.dataset.id) {
					return;
				}
				// 修改订单显示区数据源对应当前点击选项
				this.navItemID = e.dataset.id;
				this.items = this.arr2[this.navItemID];
				// 订单操作图标开关
				this.arr = ['', '', '', '', ''];
				this.arr[this.navItemID] = true;
				// 切换选项卡样式
				this.clean(this.navItem);
				this.navItem[this.navItemID].className = 'navItem active';
			}
		},
		created() {
			// 定义一个数组保存各类数据的索引
			this.arr2 = [allItems, daifukuan, daifahuo, daishouhuo, daipingjia];
			//初始化订单数据
			this.items = this.arr2[this.navItemID]
		},
		mounted() {
			// 获取nav导航元素组
			this.navItem = this.$el.querySelector('#nav').querySelectorAll('.navItem');
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		width: 100%;
		height: 100%;
		padding-bottom: 30rpx;
		background-color: #F0F0F0;

		.header-back {
			width: 16rpx;
			height: 26rpx;
		}

		.header-title {
			color: #4C4C4C;
		}

		.header-search {
			position: relative;

			.search {
				position: absolute;
				right: 70rpx;
				top: 0;

				#search {
					width: 28rpx;
					height: 28rpx;
				}
			}

			.dots {
				.newsNumber {
					text-align: center;
					line-height: 30rpx;
					color: #fff;
					position: absolute;
					right: -6rpx;
					top: -24rpx;
					height: 30rpx;
					width: 40rpx;
					background-color: #FF4E02;
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
					width: 6rpx;
					height: 6rpx;
					background: rgba(76, 76, 76, 1);
					border-radius: 50%;
				}
			}
		}

		.nav {
			width: 100%;
			height: 48rpx;
			padding-top: 92rpx;
			background: #F0F0F0;
			display: flex;
			justify-content: space-around;
			align-items: center;

			view {
				padding-bottom: 10rpx;
			}

			.active {
				color: #FF4E02;
				border-bottom: 2rpx solid #FF4E02;
			}
		}

		.dingdan {
			width: 100%;

			&-item {
				position: relative;
				padding: 16rpx;
				width: 686rpx;
				margin: 16rpx auto;
				height: 360rpx;
				background-color: #fff;
				border-radius: 16rpx;

				.zhuangtai {
					color: #FF4E02;
				}

				.xiangqing {
					width: 100%;
					height: 200rpx;
					margin-top: 28rpx;

					image {
						width: 200rpx;
						height: 200rpx;
						float: left;
					}

					.text {
						display: inline-block;
						margin-left: 20rpx;
						width: 460rpx;
						height: 200rpx;
						position: relative;

						.left {
							position: absolute;
							left: 0;
							top: 0;
							width: 300rpx;
							height: 100%;

							.name {
								width: 100%;
								height: 68rpx;
								overflow: hidden;
							}

							.taocan {
								color: #B6B6B6;
								width: 100%;
								height: 128rpx;
								overflow: hidden;
							}
						}

						.right {
							position: absolute;
							text-align: right;
							top: 0;
							right: 0;
							width: 160rpx;

							.number {
								color: #B6B6B6;
							}
						}
					}
				}

				.bottom {
					width: 100%;

					.heji {
						float: right;
					}

					.caozuo {
						position: absolute;
						right: 8rpx;
						bottom: 20rpx;

						navigator {
							display: inline-block;
							width: 110rpx;
							height: 40rpx;
							background: rgba(255, 255, 255, 1);
							border: 2rpx solid rgba(173, 173, 173, 1);
							border-radius: 16rpx;
							line-height: 40rpx;
							text-align: center;
							margin: 0 10rpx;
						}
					}
				}
			}
		}
	}
</style>
