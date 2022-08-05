<template>
  <div class="header">
    <van-nav-bar :left-arrow="true" right-text="创建新账号" @click-right="toSignUpPage" @click-left="toProfilePage">
    </van-nav-bar>
  </div>
  <div class="content">
    <van-form @submit="onSubmit" ref="signInForm">
      <van-cell-group inset>
        <van-field v-model="account" name="account" label="用户名/邮箱" placeholder="请输入用户名或邮箱"
          :rules="[{ required: true, message: '请输入用户名或邮箱' }]" />
        <van-field v-model="password" type="password" name="密码" label="密码" placeholder="请输入密码"
          :rules="[{ required: true, message: '请输入密码' }]">
          <template #extra>
            <span>忘记密码?</span>
          </template>
        </van-field>
      </van-cell-group>

      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          登录
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
import { useStore } from "vuex";
import { Form, Field, CellGroup, Checkbox } from "vant";
import { computed, ref, watch } from "vue";
import { useRouter } from "vue-router";
import TextToast from "@/components/TextToast.vue";

export default {
  name: "SignIn",
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Checkbox.name]: Checkbox,
    TextToast
  },
  setup() {
    const checked = ref(false);
    const account = ref("");
    const password = ref("");
    const router = useRouter()
    const store = useStore()
    const toast = ref(null)
    const text = ref("")

    const onSubmit = async () => {
      const responseData = await store.dispatch('user/signIn', { account: account.value, password: password.value })
      if (responseData.code !== 1) {
        text.value = responseData.message
        toast.value.showToast()
      }
      else {
        await router.push({ name: 'home' })
      }
    };

    const toSignUpPage = () => {
      router.push({ name: "signup" })
    }

    const toProfilePage = () => {
      router.push({ name: "profile" })
    }
    return {
      checked,
      account,
      password,
      onSubmit,
      toSignUpPage,
      toProfilePage,
      text,
      toast
    };
  },
};
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
</style>
