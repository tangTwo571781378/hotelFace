<template>
  <el-form @submit.native.prevent="saveDevice" ref="form" :model="device" label-width="80px">
    <el-form-item label="设备序号">
      <el-input v-model="device.deviceKey"></el-input>
    </el-form-item>
    <el-form-item label="设备名称">
      <el-input type="textarea" v-model="device.name"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data() {
      return {
        device: {
         
        }
      }
    },
    methods: {
      saveDevice() {
        console.log('submit!');
      }
    }
  }
</script>