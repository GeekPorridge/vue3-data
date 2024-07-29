<script lang="ts" setup>
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import { useUserStore } from "@/store/modules/user"
import { type FormInstance, type FormRules } from "element-plus"
import { User, Lock } from "@element-plus/icons-vue"
import { type LoginRequestData } from "@/api/login/types/login"
import { useFocus } from "./hooks/useFocus"

const router = useRouter()
const { handleBlur, handleFocus } = useFocus()

/** 登录表单元素的引用 */
const loginFormRef = ref<FormInstance | null>(null)

/** 登录按钮 Loading */
const loading = ref(false)
/** 验证码图片 URL */
const codeUrl = ref("")
/** 登录表单数据 */
const loginFormData: LoginRequestData = reactive({
  username: "admin",
  password: "12345678"
})
/** 登录表单校验规则 */
const loginFormRules: FormRules = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 8, max: 16, message: "长度在 8 到 16 个字符", trigger: "blur" }
  ]
}
/** 登录逻辑 */
const handleLogin = () => {
  loginFormRef.value?.validate((valid: boolean, fields) => {
    if (valid) {
      loading.value = true
      useUserStore()
        .login(loginFormData)
        .then(() => {
          router.push({ path: "/" })
        })
        .catch(() => {
          loginFormData.password = ""
        })
        .finally(() => {
          loading.value = false
        })
    } else {
      console.error("表单校验不通过", fields)
    }
  })
}
</script>

<template>
  <div class="login-container">
    <div class="login-content">
      <div class="img-container">
        <img src="http://144.48.83.77:9002/xh_admin/images/登录界面/u14.png" />
      </div>
      <div class="login-card">
        <div class="title">
          <div class="logo">
            <img src="http://144.48.83.77:9002/xh_admin/images/登录界面/u15.svg" />
          </div>
          <div class="cn">企业数据服务解决方案系统</div>
          <div class="en">Enterprise Data Service Solutions</div>
        </div>
        <div class="content">
          <el-form ref="loginFormRef" :model="loginFormData" :rules="loginFormRules" @keyup.enter="handleLogin">
            <el-form-item prop="username">
              <el-input
                v-model.trim="loginFormData.username"
                placeholder="请输入用户名称"
                type="text"
                tabindex="1"
                :prefix-icon="User"
                size="large"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model.trim="loginFormData.password"
                placeholder="请输入登录密码"
                type="password"
                tabindex="2"
                :prefix-icon="Lock"
                size="large"
                show-password
                @blur="handleBlur"
                @focus="handleFocus"
              />
            </el-form-item>
            <el-button :loading="loading" type="primary" size="large" @click.prevent="handleLogin">登 录</el-button>
          </el-form>
        </div>
      </div>
    </div>
    <div class="footer">
      <p>Copyright © www.AAAAAAA.com, All Rights Reserved.</p>
      <p>助你快速打造友好美观的交互原型</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.img-container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
}
@media (max-width: 820px) {
  .img-container {
    display: none;
  }
}
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #3981f4;
  width: 100%;
  min-height: 100%;

  .footer {
    margin-top: 40px;

    p {
      color: #fff;
      text-align: center;
    }
  }
  .login-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 600px;
    overflow: hidden;
  }
  .theme-switch {
    position: fixed;
    top: 5%;
    right: 5%;
    cursor: pointer;
  }
  .login-card {
    padding: 0 25px;
    height: 100%;
    background: #fff;
    overflow: hidden;
    .title {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 50px 0 60px;

      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 115px;
        height: 115px;
        margin-bottom: 38px;
        img {
          height: 100%;
          width: 100%;
        }
      }

      .cn,
      .en {
        color: #0079fe;
      }
      .cn {
        font-size: 26px;
        font-weight: 700;
        line-height: 37px;
      }
      .en {
        font-size: 20px;
        line-height: 32px;
      }
    }
    .content {
      padding: 20px 60px 50px 60px;
      :deep(.el-input-group__append) {
        padding: 0;
        overflow: hidden;
        .el-image {
          width: 100px;
          height: 40px;
          border-left: 0px;
          user-select: none;
          cursor: pointer;
          text-align: center;
        }
      }

      :deep(.el-input__wrapper) {
        .el-input__inner {
          height: 48px;
          font-size: 16px;
        }
      }
      .el-button {
        width: 100%;
        height: 50px;
        margin-top: 10px;
      }
    }
  }
}
</style>
