<template>
  <div class="mailList">
    <div class="communication">
      <ul class="communicationsize">
        <li>
          <img src="../../assets/MailListImg/Newfriends.png" alt="" />
          <span>新的好友</span>
        </li>
        <li>
          <img src="../../assets/MailListImg/Mobilecontact.png" alt="" />
          <span>手机联系人</span>
        </li>
        <li>
          <img src="../../assets/MailListImg/Groupchat.png" alt="" />
          <span>群聊</span>
        </li>
        <li>
          <img src="../../assets/MailListImg/familynumber.png" alt="" />
          <span>我的亲情号</span>
        </li>
        <li>
          <img src="../../assets/MailListImg/Messagenumber.png" alt="" />
          <span>消息号</span>
        </li>
      </ul>
    </div>
    <div class="img">
      <img src="../../assets/MailListImg/zpicture.webp" alt="" />
    </div>
    <div class="myfriend">
      <span>我的好友</span>
    </div>
  </div>
</template>



<script>
export default {
  beforeRouteLeave(to, from, next) {
    this.$emit("lOrRActive", true);
    next();
  },
  created() {
    this.$emit("lOrRActive", false);
  },
};
</script>



<style lang="less" scoped>
.communication {
  widows: 100%;
  background: #fff;

  .communicationsize {
    width: 21.5625rem;
    margin: 0 auto;

    > li {
      display: flex;
      align-items: center;
      padding: 0.75rem 0;
      border-bottom: 1px solid #eeeeee;
      &:last-child {
        border-bottom: none;
      }

      > img {
        width: 2.5rem;
        height: 2.5rem;
      }

      > span {
        margin-left: 0.8125rem;
        font-size: 1rem;
        color: #333;
      }
    }
  }
}

.img {
  > img {
    width: 100%;
    height: auto;
    margin: 0.625rem 0;
  }
}

.myfriend {
  width: 100%;
  height: 100%;
  background: #fff;

  > span {
    display: flex;
    color: #333333;
    font-size: 1rem;
    width: 22.6875rem;
    padding: 0.5625rem 0 0.5625rem 0.75rem;
  }
}
</style>


