<template>
  <div>
    {{ title }}
    <button @click="openModal">Modal</button>
    <Modal
      :visible="modalVisible"
      title="信息提示"
      content="打开了一个弹框"
      v-model="modelValue"
      @handleOk="onOk"
    />
  </div>
</template>

<script setup>
import Modal from "../components/Modal/Modal.vue";
import { ref } from "vue";
const title = ref("666home");
// 控制弹框显示变量
let modalVisible = ref(false);
// 按钮触发事件
const openModal = () => {
  console.log("666");
  modalVisible.value = true;
};
const onCancel = (status) => {
  // 点击取消按钮，关闭弹框
  modalVisible.value = status;
};
</script>
