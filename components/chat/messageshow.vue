<template>
	<view class="m-item" :id="'message'+id">
		<view class="m-left">
			<image class="head_icon" :src="abosultPaht+user.home.img" v-if="message.user=='home'"></image>
			<view class="name" v-if="message.user=='home'">安昂商城客服-小二</view>
		</view>
		<view class="m-content">
			<view class="m-content-head" :class="{'m-content-head-right':message.user=='customer'}">
				<view :class="'m-content-head-'+message.user">{{message.content}} </view>
			</view>
		</view>
		<view class="m-right">
			<image class="head_icon" :src="abosultPaht+user.customer.img" v-if="message.user=='customer'"></image>
		</view>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'

	export default {
		data() {
			return {
				abosultPaht: "../../../"
			}
		},
		props: ['message', 'id'],
		computed: mapState(['user'])
	}
</script>

<style>
	.m-item {
		display: flex;
		flex-direction: row;
		padding-top: 80rpx;
		position: relative;
	}
	/* .time {
		position: absolute;
	} */
	.m-item:first-child {
		padding-top: 200rpx;
	}
	.m-left {
		display: flex;
		width: 90rpx;
		justify-content: flex-start;
		align-items: flex-start;
		position: relative;
	}
	.m-left .name {
		width: 300rpx;
		position: absolute;
		left: 100rpx;
		top: -2rpx;
		z-index: 999;
		font-size: 20rpx;
	}
	.m-content {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		word-break: break-all;
	}
	.m-right {
		display: flex;
		width: 90rpx;
		justify-content: flex-end;
		align-items: flex-start;
	}
	.head_icon {
		width: 80rpx;
		height: 80rpx;
		border-radius: 16rpx;
	}
	.m-content-head {
		position: relative;
	}
	.m-content-head-right {
		display: flex;
		justify-content: flex-end;
	}
	.m-content-head-home {
		text-align: left;
		background: #FFFFFF;
		border-radius: 24rpx;
		padding: 20rpx;
		transform: translateY(20rpx);
	}
	.m-content-head-customer {
		border: 1px white solid;
		background: #FFA302;
		border-radius: 24rpx;
		padding: 20rpx;
	}
</style>
