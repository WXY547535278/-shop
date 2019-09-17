<template>
	<view class="footer">
		<view class="footer-left">
			<image src="../../../static/img/tabbar/yy.png" mode=""></image>
			<!-- <view class="uni-icon uni-icon-mic" @tap="startRecognize"> </view> -->
		</view>
		<view class="footer-center">
			<input class="input-text" type="text" v-model="inputValue"></input>
		</view>
		<view class="footer-right">
			<view id='msg-type' @tap="sendMessge">发送</view>
			<view id='msg-type' class="footer-right-more">＋</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "chat-input",
		data() {
			return {
				inputValue: ''
			}
		},
		methods: {
			startRecognize: function () {
				var options = {};
				var that = this;
				options.engine = 'iFly';
				that.inputValue = "";
				plus.speech.startRecognize(options, function (s) {
					console.log(s);
					that.inputValue += s;
				}, function (e) {
					console.log("语音识别失败：" + e.message);
				});
			},
			sendMessge: function () {
				console.log("sendMessge通过父组件触发")
				var that = this;
				if (that.inputValue.trim() == '') {

					that.inputValue = '';
				} else {

					//点击发送按钮时，通知父组件用户输入的内容
					this.$emit('send-message', {
						type: 'text',
						content: that.inputValue
					});
					that.inputValue = '';
				}
			}
		}
	}
</script>

<style>
	@import "../../common/icon.css";

	.footer {
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 80rpx;
		min-height: 80rpx;
		border-top: solid 2rpx #bbb;
		overflow: hidden;
		padding: 0;
		background-color: #E6E6E6;
	}
	.footer-left {
		width: 80rpx;
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.footer-left image {
		z-index: 999;
		width: 50rpx;
		height: 50rpx;
	}
	.footer-right {
		width: 160rpx;
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		color: #1482D1;
		font-weight: 600;
	}
	.footer-right-more{
		width: 40rpx;
		height: 40rpx;
		margin-left: 24rpx;
		background-color: #FF8900;
		border-radius: 50%;
		color: #FFFFFF;
		text-align: center;
		font-size: 40rpx;
		line-height: 40rpx;
		font-weight: 300;
	}
	.footer-center {
		flex: 1;
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.footer-center .input-text {
		flex: 1;
		background: #fff;
		border: solid 1px #ddd;
		padding: 10rpx !important;
		font-family: verdana !important;
		overflow: hidden;
		border-radius: 16rpx;
	}
</style>
