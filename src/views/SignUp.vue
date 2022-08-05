<template>
  <div class="header">
    <van-nav-bar :left-arrow="true" right-text="登录已有帐号" @click-right="toSignInPage" @click-left="toProfilePage">
    </van-nav-bar>
  </div>
  <div class="content">
    <van-form @submit="onSubmit" ref="form">
      <van-cell-group inset>
        <van-field v-model="email" name="email" label="邮箱" placeholder="请输入邮箱" :rules="emailRules" />

        <van-field v-model="password" type="password" name="password" label="密码" placeholder="请输入密码"
          :rules="passwordRules" />

        <van-field v-model="confirmPassword" type="password" name="confirmPassword" label="确认密码" placeholder="请再次输入密码"
          :rules="[{ validator: validatePasswordSame }]" />
      </van-cell-group>

      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          注册
        </van-button>
      </div>
    </van-form>
    <div class="tip">
      <span>登录注册就代表你同意<a href="">用户协议</a>和<a href="">隐私政策</a></span>
    </div>
    <TextToast :content="text" ref="toast" />
  </div>
</template>

<script>
import { Form, Field, CellGroup, Checkbox } from "vant";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import TextToast from "@/components/TextToast";

export default {
  name: "SignUp",
  components: {
    TextToast,
    [Form.name]: Form,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Checkbox.name]: Checkbox,

  },
  setup() {
    const regexEmail = /^[A-Za-z\d.]+@[a-zA-Z\d]+(\.[A-Za-z\d]+)+$/gm
    const regexPassword = /^(?!^\d+$)(?!^[a-zA-Z]+$)(?!^[\x21-\x2f\x3a-\x40\x5b-\x60\x7b-\x7e]+$)[\x21-\x7e]{8,30}/gm // 至少包含字母、数字和特殊字符中的两种,长度8-30
    const router = useRouter()
    const email = ref("")
    const password = ref("")
    const confirmPassword = ref("")
    const form = ref(null)
    const store = useStore()
    const text = ref("")
    const toast = ref(null)
    const emailRules = ref[{
      pattern: regexEmail,
      message: "请输入格式正确的邮箱"
    }, {
      required: true,
      message: "请输入邮箱"
    }]

    const passwordRules = ref[{
      pattern: regexPassword,
      message: "密码至少包含字母、数字和特殊字符中的两种，且密码长度要求8-30位"
    }, {
      required: true,
      message: "请输入密码"
    }]

    const validatePasswordSame = (value) => {
      if (!value) {
        return '请再次输入密码'
      }
      if (value !== password.value) {
        return '确认密码与密码输入不一致'
      }
    }

    const toSignInPage = () => {
      router.push({ name: "signin" })
    }

    const toProfilePage = () => {
      router.push({ name: "profile" })
    }

    const onSubmit = async () => {
      // 如果成功之后就直接跳转到用户页
      const responseData = await store.dispatch('user/signUp', {
        email: email.value,
        password: password.value
      })
      if (responseData.code !== 1) {
        text.value = responseData.message
        toast.value.showToast()
      }
      else {
        await router.push({ name: 'profile' })
      }
    }

    return {
      validatePasswordSame,
      toSignInPage,
      onSubmit,
      email,
      password,
      confirmPassword,
      form,
      emailRules,
      passwordRules,
      toProfilePage,
      text,
      toast
    }
  }
}
</script>

<style scoped>
:deep(.van-nav-bar__content .van-icon) {
  color: black;
}

:deep(.van-nav-bar__content .van-nav-bar__text) {
  color: black;
}

.content {
  position: relative;
  padding-top: 8px;
  padding-left: 8px;
  padding-right: 8px;
  flex: 1;
  overflow: auto;
}

.van-field>span {
  color: #1989fa;
}

:deep(.van-cell) {
  margin: 4px 0;
}

.tip>span {
  font-size: smaller;
}

.tip {
  text-align: center;
}

.tip>span {
  font-size: small;
}

a:link,
a:visited {
  color: #1989fa;
}

/* .toast {
    position: fixed;
    z-index: 999;
    padding: 8px 12px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.6);
    bottom: 20%;
    border-radius: 8px;
    left: 50%;
    transform: translate(-50%);
    display: none;
} */
</style>