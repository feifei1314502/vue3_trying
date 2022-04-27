<template>
  <div class="modal" v-if="modelValue">
    <div class="modal-content">
      <div class="modal-header">{{ props.title }}</div>
      <div class="modal-body">{{ props.content }}</div>
      <div class="modal-footer">
        <button @click="onCancel">取消</button>
        <button @click="onOk">确定</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  content: String,
  modelValue: {
    // 参数类型
    type: Boolean,
    //  参数默认值
    default: false,
  },
});

// 我们使用defineEmits来定义组件的触发事件。
const emit = defineEmits(["update:modelValue", "handleCancel", "handleOk"]);

// 点击取消按钮
const onCancel = () => {
//   emit("handleCancel", false);
  emit('update:modelValue', false);
};
// 点击确认按钮
const onOk = () => {
  emit("handleOk", false);
};
</script>

<style></style>
