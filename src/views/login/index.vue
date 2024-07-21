<script lang="ts" setup>
import { reactive, ref } from "vue"
import { useRouter } from "vue-router"
import { useUserStore } from "@/store/modules/user"
import { type FormInstance, type FormRules } from "element-plus"
import { User, Lock, Key, Picture, Loading } from "@element-plus/icons-vue"
import { getLoginCodeApi } from "@/api/login"
import { type LoginRequestData } from "@/api/login/types/login"
// import ThemeSwitch from "@/components/ThemeSwitch/index.vue"
// import Owl from "./components/Owl.vue"
import { useFocus } from "./hooks/useFocus"

const router = useRouter()
const { isFocus, handleBlur, handleFocus } = useFocus()

/** 登录表单元素的引用 */
const loginFormRef = ref<FormInstance | null>(null)

/** 登录按钮 Loading */
const loading = ref(false)
/** 验证码图片 URL */
const codeUrl = ref("")
/** 登录表单数据 */
const loginFormData: LoginRequestData = reactive({
  username: "admin",
  password: "12345678",
  code: ""
})
/** 登录表单校验规则 */
const loginFormRules: FormRules = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    { min: 8, max: 16, message: "长度在 8 到 16 个字符", trigger: "blur" }
  ],
  code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
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
          createCode()
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
/** 创建验证码 */
const createCode = () => {
  // 先清空验证码的输入
  loginFormData.code = ""
  // 获取验证码
  codeUrl.value = ""
  getLoginCodeApi().then((res) => {
    codeUrl.value = res.data
  })
}

/** 初始化验证码 */
createCode()
</script>

<template>
  <div class="login-container">
    <!-- <ThemeSwitch class="theme-switch" /> -->
    <!-- <Owl :close-eyes="isFocus" />  -->
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
            <!-- <el-form-item prop="code">
            <el-input
              v-model.trim="loginFormData.code"
              placeholder="验证码"
              type="text"
              tabindex="3"
              :prefix-icon="Key"
              maxlength="7"
              size="large"
            >
              <template #append>
                <el-image :src="codeUrl" @click="createCode" draggable="false">
                  <template #placeholder>
                    <el-icon>
                      <Picture />
                    </el-icon>
                  </template>
                  <template #error>
                    <el-icon>
                      <Loading />
                    </el-icon>
                  </template>
                </el-image>
              </template>
            </el-input>
          </el-form-item> -->
            <el-button :loading="loading" type="primary" size="large" @click.prevent="handleLogin">登 录</el-button>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #3981f4;
  width: 100%;
  min-height: 100%;

  .login-content {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 840px;
    height: 600px;
    // box-shadow: 0 0 10px #dcdfe6;
    // background-color: var(--el-bg-color);
    overflow: hidden;
    .img-container {
      width: 420px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .theme-switch {
    position: fixed;
    top: 5%;
    right: 5%;
    cursor: pointer;
  }
  .login-card {
    height: 100%;
    width: 420px;
    background: #fff;
    // background-color: var(--el-bg-color);
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
