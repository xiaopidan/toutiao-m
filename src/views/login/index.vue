<template>
  <div class="login-container">
    <!-- 导航栏 -->
    <van-nav-bar class="page-nav-bar" title="登录"/>

    <!-- 登录表单 -->
    <van-form @submit="onSubmit">
        <van-field
            v-model="user.mobile"
            name="用户名"
            placeholder="请输入手机号"
        >
            <template #left-icon>
                <i class="toutiao toutiao-shouji"></i>
            </template>
        </van-field>
        <van-field
            v-model="user.code"
            name="验证码"
            placeholder="请输入验证码"
        >
            <template #left-icon>
                <i class="toutiao toutiao-yanzhengma"></i>
            </template>
            <template #button>
                <van-button class="send-sms-btn" round size="small" type="default">发送验证码</van-button>
            </template>
        </van-field>

        <div class="login-btn-wrap">
            <van-button class="login-btn" block type="info" native-type="submit">登录</van-button>
        </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user.js'

export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '13911111111',
        code: '246810'
      }
    }
  },
  methods: {
    async onSubmit (values) {
      const user = this.user
      console.log('this====>', this)
      this.$toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration: 0
      })

      try {
        const res = await login(user)
        console.log(res)
        this.$toast.success('登录成功')
      } catch (error) {
        if (error.response.status === 400) {
          this.$toast.fail('手机号或验证码错误')
        } else {
          this.$toast.fail('登录失败，请稍后重试')
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
    .toutiao {
        font-size: 37px;
    }

    .send-sms-btn {
        width: 156px;
        height: 46px;
        line-height: 46px;
        background-color: #ededed;
        font-size: 22px;
        color: #666;
    }

    .login-btn-wrap {
        padding: 53px 33px;
        .login-btn {
            background-color: #6db4fb;
            border: none;
        }
    }
}
</style>>
