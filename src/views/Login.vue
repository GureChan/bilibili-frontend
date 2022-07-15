<template>
  <div class="header">
    <van-nav-bar :left-arrow="true" right-text="创建新账号"></van-nav-bar>
  </div>
  <div class="content">
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="username"
          name="账号"
          label="账号"
          placeholder="请输入账号"
          :rules="[{ required: true, message: '请填写用户名' }]"
          :border="false"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        >
          <template #extra>
            <span>忘记密码?</span>
          </template>
        </van-field>
      </van-cell-group>

      <van-field name="checkbox" :border="false">
        <template #input>
          <van-checkbox v-model="checked" shape="square">
            我已阅读并同意《用户隐私保护政策》
          </van-checkbox>
        </template>
      </van-field>

      <div style="margin: 16px">
        <van-button
          round
          block
          type="primary"
          native-type="submit"
          :disabled="isPassChecked"
        >
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import loginIcon from "@/assets/icon/user-circle.svg";
import mailIcon from "@/assets/icon/mail.svg";
import { Form, Field, CellGroup, Checkbox } from "vant";
import { computed, ref } from "vue";

export default {
  name: "Login",
  components: {
    [Form.name]: Form,
    [Field.name]: Field,
    [CellGroup.name]: CellGroup,
    [Checkbox.name]: Checkbox,
  },
  setup() {
    const checked = ref(false);
    const username = ref("");
    const password = ref("");
    const isPassChecked = computed(() => {
      return !(username.value && password.value && checked.value);
    });
    const onSubmit = () => {
      console.log("在搞后端，再等等");
    };

    return {
      loginIcon,
      mailIcon,
      checked,
      username,
      password,
      isPassChecked,
      onSubmit,
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
.van-field > span {
  color: #1989fa;
}
:deep(.van-cell) {
  margin: 4px 0;
}
</style>
