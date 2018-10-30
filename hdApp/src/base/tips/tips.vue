<template>
  <div class='hb-dialog'>
    <button class="hb-dialog-close" v-if="showBtnClose">X</button>
    <h3 class="hd-dialog-title" v-if="title">{{title}}</h3>
    <div class="hd-dialog-desc">{{message}}</div>
    <div class="hd-dialog-settings">
      <button class="hd-dialog-cancel" v-if="showCancelBtn">
      取消
      </button>
      <button class="hd-dialog-confirm" v-if="showConfirmBtn">
      确定
      </button>
    </div>
  </div>
</template>
<script>
export default {
  name: "Tips",
  data() {
    return {
      title: false,
      message: "default message",
      timer: null,
      duration: 1500,
      closed: false,
      showBtnClose: false,
      showCancelBtn: false,
      showConfirmBtn: false
    };
  },
  mounted() {
    this.stratTimer();
  },
  methods: {
    stratTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          this.close();
        }, this.duration);
      }
    },
    close() {
      this.closed = true;
      if (typeof this.onClose === "function") {
        this.onClose();
      }
    }
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.$destroy(true);
        document.body.removeChild(this.$el);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.hb-dialog {
  position: fixed;
  left: 50%;
  top: 50%;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: #fff;
}
</style>


