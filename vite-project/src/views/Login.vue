<template>
  <div class='login'>
    <el-form ref='FormRef' :model='formData' status-icon :rules='rules' class='login_ruleForm'>
      <h2 class='login_title'>
        后台管理系统
      </h2>
      <el-form-item label='账号:' prop='username'>
        <el-input v-model='formData.username' placeholder='admin' type='username' />
      </el-form-item>
      <el-form-item label='密码:' prop='password'>
        <el-input v-model='formData.password' placeholder='123456' show-password type='password' />
      </el-form-item>
      <el-form-item class='login_btnItem'>
        <el-button class='login_btn' type='primary' @click='submitForm(FormRef)'>
          登录
        </el-button>
        <el-button class='login_btn' @click='resetForm(FormRef)'>
          重置
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts' setup>
import { LoginFormData } from '@/types/login'
import type { FormInstance } from 'element-plus'
import { login } from '@/axios/api'
const route = useRoute()
const router = useRouter()
const formData = reactive<LoginFormData>({
  username: 'admin',
  password: '123456'
})
const FormRef = ref<FormInstance>()
const rules = {
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    },
    {
      min: 3,
      max: 5,
      message: '用户名长度需要在3-5个字符之间',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    },
    {
      min: 3,
      max: 6,
      message: '密码长度需要在3-5个字符之间',
      trigger: 'blur'
    }
  ]
}
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate(async valid => {
    if (valid) {
      let formdata = formData
      try {
        let { data } = await login(formdata)
        localStorage.setItem('token', data.token)
        router.replace(route.query.key as string || '/')
      }
      catch (error) {
        console.log(error)
      }
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style scoped lang="less">
.login {
  width: 100%;
  height: 100%;
  background-image: url("../assets/bg.jpg");
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  .login_ruleForm {
    text-align: center;
    width: 500px;
    background-color: white;
    padding: 40px;
    border-radius: 20px;

    .login_title {
      margin-bottom: 30px;
    }

    &:deep(.el-form-item) {
      user-select: none
    }

    .login_btnItem {
      margin: 30px 0 0;

      &:deep(.el-form-item__content) {
        justify-content: center;

        .login_btn {
          width: 40%;
        }
      }
    }
  }
}
</style>