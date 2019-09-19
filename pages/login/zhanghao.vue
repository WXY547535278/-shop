<template>
	<view class="login">
		<view class="logo-container">
			<view class="logo-container-img"></view>
			<view class="logo-container-decoration">
				<view class="decoration"></view>
				<view class="decoration"></view>
			</view>
		</view>
		<view class="login-input">
			<form class="login-input-form" method="post" @submit="formSubmit">
				<view class="login-input-form-content">
					<view class="input-item">
						<image src="../../static/img/loginImg/icon_signal.png"/></image>
						<input confirmtype="text" name="username" autocomplete="off" placeholder="请输入用户名" required/>
					</view>
					<view class="input-item">
						<image src="../../static/img/loginImg/lock.png"/></image>
						<input confirmtype="text" name="password" autocomplete="off" password placeholder="请输入密码" required/>
					</view>
					<view class="link">
						<navigator class="left" url="../register/register">注册</navigator>
						<navigator class="right" url="duanxin">短信登录</navigator>
					</view>
				</view> 
				<button form-type="submit" class="submit-button">登 录</button>
				<view class="line">
					<text class="line-left"></text>
					<text class="line-text">OR</text>
					<text class="line-right"></text>
				</view>
				<navigator class="wechat" href=""></navigator>
				<navigator class="zhaohui" url="forgetPwd">忘记密码？</navigator>
			</form>
		</view>
		<view class="login-footer"> © 2019 安昂商城 版权所有 </view>
	</view>
</template>

<script>
	import http from '../../utils/http.js';
	export default {
		name: 'loginZhanghao',
		data() {
			return {
				login: {
					url: 'unifiedLogin',
					method: 'post'
				}
			}
		},
		methods: {
			formSubmit:function(e) {
				console.log(JSON.stringify(e.detail.value));
				http.httpRequest(this.login, JSON.stringify(e.detail.value)).then(res => {
					console.log(res);
					if(res.data.code == 400) {
						wx.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 1000
						})
					}
					if(res.data.code == 500) {
						wx.showToast({
							title: res.data.msg,
							icon: 'none',
							duration: 1000
						})
					}
					if (res.data.code == 200) {
						console.log("账号登录成功返回的token数据");
						console.log(res.data.data.token)
						console.log(res.data.data.employeeInfo.login_id)
						// 设置状态管理器中的login_id
						this.$store.commit('swapId',res.data.data.employeeInfo.login_id)
						uni.setStorage({
							key: 'token',
							data: res.data.data.token,
							success: function() {
								console.log('success')
							}
						})
						uni.showToast({
							title: '登录成功！',
							icon: 'success',
							duration: 1000,
							success: function() {
								setTimeout(function() {
									//要延时执行的代码
									uni.switchTab({
										url: '../tabbar/tabbar-2/tabbar-2'
									})
								}, 2000) //延迟时间
							}
						})
					}
				}, error => {
					console.log(error);
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.login {
		width: 100%;
		height: 100%;
		position: relative;
		.logo-container {
			position: absolute;
			width:100%;
			height: 478rpx;
			top: 0;
			background-image: url("../../static/img/loginImg/1330.png");
			background-size: 100% 100%;
			background-repeat: no-repeat;
			&-img {
				width: 298rpx;
				height: 114rpx;
				background-image: url("../../static/img/loginImg/logo.png");
				background-repeat: no-repeat;
				background-size: cover;
				position: absolute;
				left: 212rpx;
				top: 132rpx;
				z-index: 1000;
			}
			&-decoration {
				width: 100%;
				height: 280rpx;
				position: absolute;
				top: 300rpx;
				left: 0;
				.decoration {
					position: absolute;
					left: 0;
					width: 100%;
					height: 100%;
					background-image: url("../../static/img/loginImg/530.png");
					background-size: 150% 150%;
					background-position:30% 0%;
					&:first-child {
						// transform: scale(-1,1);
					}
					&:last-child {
						transform: scale(-1,1);
					}
				}
			}
		}
		&-input {
			position: absolute;
			left: 49rpx;
			top: 360rpx;
			width: 652rpx;
			height: 774rpx;
			background:rgba(255,255,255,1);
			box-shadow:0rpx 16rpx 119rpx 0rpx rgba(116,116,116,0.3);
			border-radius:44rpx 44rpx 44rpx 44rpx;
			&-form {
				padding: 66rpx 50rpx 0rpx 50rpx;
				line-height: 64rpx;
				display: block;
				&-content {
					.input-item {
						width: 550rpx;
						height: 64rpx;
						border-bottom: 2rpx solid #E5E5E5;
						&:first-child {
							margin-bottom: 30rpx;
						}
						image {
							width: 40rpx;
							height: 40rpx;
							margin-right: 30rpx;
						}
						input {
							font-size: 26rpx;
							display: inline-block;
							line-height: 64rpx;
						}
					}
					.link {
						font-size: 24rpx;
						width: 100%;
						height: 64rpx;
						position: relative;
						navigator {
							display: inline-block;
						}
						.left {
							margin-right: 400rpx;
							color: #FE6959;
						}
						.right {
							color: #999999;
						}
					}
				}
				.submit-button {
					width:564rpx;
					height:88rpx;
					background:linear-gradient(-90deg,rgba(253,137,87,1),rgba(255,78,2,1));
					box-shadow:0rpx 12rpx 44rpx 4rpx rgba(255,78,2,0.3);
					border-radius:44rpx;
					color:#fff;
					font-size: 34rpx;
					position: absolute;
					left: 44rpx;
					top: 334rpx;
				}
				.line {
					position: absolute;
					font-size: 20rpx;
					color: #ACACAC;
					left: 92rpx;
					top: 482rpx;
					width: 486rpx;
					height: 26rpx;
					line-height: 26rpx;
					text {
						display: inline-block;
					}
					&-left, &-right {
						width: 210rpx;
						height: 2rpx;
						background-color: #EEEEEE;
						margin-bottom: 6rpx;
					}
					&-text {
						padding: 0 6rpx;
					}
				}
				.wechat {
					position: absolute;
					left: 282rpx;
					top: 544rpx;
					width:88rpx;
					height:88rpx;
					background-color:rgba(40,182,2,1);
					background-image:  url("../../static/img/loginImg/wechat.png");
					background-size: 70% 60%;
					background-repeat: no-repeat;
					background-position: center;
					border-radius:50%;
				}
				.zhaohui {
					position: absolute;
					left: 266rpx;
					top: 710rpx;
					font-size: 24rpx;
					color: #FE6959;
				}
			}
		}
		&-footer {
			width: 100%;
			text-align: center;
			height: 20rpx;
			line-height: 20rpx;
			position: absolute;
			top: 1236rpx;
			font-size: 24rpx; //最小了，不能再小
			color: #aaaaaa;
		}
	}
</style>
