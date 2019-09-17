<template>
	<view class="chat">
		<my-header class="header" style="background-color: #FFFFFF;">
			<navigator url="tabbar-4" class="header-back" slot="backImg" open-type="switchTab">
				<image src="../../../static/img/tabbar/back.png" style="width: 16rpx; height: 26rpx;"></image>
			</navigator>
			<view class="header-title" slot="title" style="font-weight: 600; font-size: 24rpx;">安昂商城客服
			</view>
		</my-header>
		<view class="uni-column">
			<view class="content" id="content" :style="{height:style.contentViewHeight+'px'}">
				<scroll-view id="scrollview" scroll-y="true" :style="{height:style.contentViewHeight+'px'}" :scroll-with-animation="true"
				 :scroll-top="scrollTop">
					<message-show v-for="(message,index) in messages" :key="index" v-bind:message="message" :id="index"></message-show>
					<view id="bottom"></view>
				</scroll-view>
			</view>
			<view class="foot">
				<chat-input @send-message="getInputMessage"></chat-input>
			</view>
		</view>
	</view>
</template>

<script>
	import MyHeader from '../../../components/header/header.vue'
	import chatInput from '../../../components/chat/chatinput.vue';
	import messageShow from '../../../components/chat/messageshow.vue';
	import http from '../../../utils/http.js'
	export default {
		data() {
			return {
				style: {
					pageHeight: 0,
					contentViewHeight: 0,
					footViewHeight: 90,
					mitemHeight: 0,
				},
				scrollTop: 0,
				// 一开始展示的数据
				messages: [{
					user: 'home',
					content: '你好'
				}, {
					user: 'customer',
					type: 'head', //input,content 
					content: '我很好'
				}],
				message: [],
				ws: new WebSocket("ws://47.92.147.48:10086"),
				my_uid: 1027,
				token: '',
				chat: {
					url: 'getWechatMessageByService?login_id='+ this.$store.state.login_id+'&employess_id=505',
					method: 'get'
				}
			};
		},
		components: {
			MyHeader,
			chatInput,
			messageShow
		},
		mounted() {
			this.getChatMessage()
		},
		// updated() {
		// 	this.getChatMessage()
		// },
		created: function() {
			
			//设置状态管理器中的值
			// this.$store.commit('swapId','1112313')
			// 打印状态管理器中的值
			console.log("从状态管理器中取出的login_id")
			console.log(this.$store.state.login_id);
			var that = this
			// uni.getStorage({
			// 	key: 'token',
			// 	success: function (res) {
			// 		that.token = res.data
			// 		console.log('获取用户登录token')
			// 		console.log(that.token)
			// 	}
			// })
			this.WebSocketTest()
			const res = uni.getSystemInfoSync();
			this.style.pageHeight = res.windowHeight;
			this.style.contentViewHeight = res.windowHeight - uni.getSystemInfoSync().screenWidth / 750 * (100); //像素
		},
		methods: {
			getInputMessage: function(message) { //获取子组件的输入数据
			    var that = this
				var data = {
					'type': 'text',
					'from_id': that.my_uid,
					'to_id': 505,
					'content': message.content
				}
				that.ws.send(JSON.stringify(data))
				console.log("获取输入框输入的消息：")
				console.log(message)
				this.addMessage('customer', message.content, false);
				// this.toRobot(message.content);
			},
			addMessage: function(user, content) {
				var that = this;
				that.messages.push({
					user: user,
					content: content
				});
				this.scrollToBottom();
			},
			scrollToBottom: function() {
				var that = this;
				var query = uni.createSelectorQuery();
				query.selectAll('.m-item').boundingClientRect();
				query.select('#scrollview').boundingClientRect();

				query.exec(function(res) {
					that.style.mitemHeight = 0;
					res[0].forEach(function(rect) {
						// console.info(rect.height);
						that.style.mitemHeight = that.style.mitemHeight + rect.height + 20;
					});

					if (that.style.mitemHeight > that.style.contentViewHeight) {
						that.scrollTop = that.style.mitemHeight - that.style.contentViewHeight;
					}
				});
			},

			// 连接WebSocketTest服务器
			WebSocketTest: function() {
				var that = this
				// 打开一个 web socket
				// ws = new WebSocket("ws://47.92.147.48:10086"); // 测试服务器
				// ws = new WebSocket("ws://127.0.0.1:10086"); // 本地服务器
				// 连接成功的回调
				that.ws.onopen = function() {
					// Web Socket 已连接上，使用 send() 方法发送数据

					console.log('连接成功, 发送自己的标识')
					var logo = {
						'type': 'login',
						'from_id': that.my_uid
					}
					that.ws.send(JSON.stringify(logo))

				};
				// 发送的数据成功 的回调
				that.ws.onmessage = function(evt) {
					var received_msg = evt.data;
					console.log('接收到的消息', received_msg)
				};

				that.ws.onclose = function(e) {
					// 关闭 websocket
					console.log('连接关闭', e)
				};
			},
			
			getChatMessage: function() {
				http.httpTokenRequest(this.chat,{}).then(res => {
					console.log(res.data);
					if (res.data.code == 200) {
						this.message = res.data.data
						console.log(this.message);
						for(var i = 0; i<this.message.length; i++) {
							if(this.message[i].from_id==this.$store.state.login_id) {
								this.messages.push({
									user: 'customer',
									content: this.message[i].content
								})
							}else {
								this.messages.push({
									user: 'home',
									content: this.message[i].content
								})
							}
						}
					}
				}, error => {
					console.log(error);
				})
			}
		
		// toRobot: function(info) {
			// this.addMessage('home', info, false);
			// var apiUrl = 'http://www.tuling123.com/openapi/api';
			// uni.request({
			// 	url: apiUrl,
			// 	data: {
			// 		"key": 'acfbca724ea1b5db96d2eef88ce677dc',
			// 		"info": info,
			// 		"userid": 'uni-test'
			// 	},
			// 	success: (res) => {
			// 		console.log(res)
			// 		this.addMessage('home', res.data.text, false);
			// 		this.scrollToBottom();
			// 		console.log('request success:' + res.data.text);
			// 	},
			// 	fail: (err) => {
			// 		console.log('request fail', err);
			// 		uni.showModal({
			// 			content: err.errMsg,
			// 			showCancel: false
			// 		})
			// 	}
			// });
		// },
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F0F0F0;
	}

	.uni-column {
		display: flex;
		flex-direction: column;
	}

	.content {

		display: flex;
		flex: 1;
		margin-bottom: 100px;

	}

	.foot {
		position: fixed;
		width: 100%;
		height: 90rpx;
		min-height: 90rpx;
		left: 0px;
		bottom: 0px;
		overflow: hidden;
	}
</style>
