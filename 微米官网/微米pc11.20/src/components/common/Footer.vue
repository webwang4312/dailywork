<template>
  <div class="uenc_foot">
    <div class="foot-top">
      <ul class="foot-box">
        <li>
          <div class="foot-box1">
            <div class="circle">
              <img src="@assets/images/footer/telegram.png" @click="telegram" />
            </div>
          </div>
        </li>
        <li>
          <div class="foot-box2">
            <div class="circle">
              <img src="@assets/images/footer/twitter.png" @click="twitter" />
            </div>
          </div>
        </li>
        <li>
          <div class="foot-box3">
            <div class="circle">
              <img src="@assets/images/footer/facebook.png" @click="facebook" />
            </div>
          </div>
        </li>
        <li>
          <div class="foot-box4">
            <div
              class="circle"
              @mouseenter="gotoshow()"
              @mouseleave="gotohide()"
            >
              <img src="@assets/images/footer/erweima.png" />
            </div>
          </div>
        </li>
      </ul>
      <ul class="hovershow" v-if="show">
        <img src="@assets/images/indexhover/juxing.png" class="imgshow" />
        <li class="club">
          <img src="@assets/images/indexhover/club.png" />
          <br />
          <span>Energy Club</span>
        </li>
        <li class="wallet">
          <img src="@assets/images/indexhover/wallet.png" />
          <br />
          <span>UENC Wallet</span>
        </li>
      </ul>
      <div class="component">
        <span class="neirong">FAQ'S</span>
        <span>|</span>
        
        <span class="neirong">{{ $t("Mediaannouncement[0]") }}</span>
        <span>|</span>
        <span class="neirong">{{ $t("Partner[0]") }}</span>
      </div>
    </div>
    <div class="foot-zhong"></div>
    <footer>
      <p>{{ $t("shangbiao[0]") }}</p>
    </footer>
  </div>
</template>
<script>
export default {
  name: "foot",
  data() {
    return {
      nowLang: "en",
      show: false,
    };
  },
  created() {},
  mounted() {},
  methods: {
    gotoshow() {
      this.show = true;
    },
    gotohide() {
      this.show = false;
    },
    telegram() {
      window.open("https://t.me/UniversalEnergyChain");
    },
    twitter() {
      window.open("https://twitter.com/ENChain_enc");
    },
    facebook() {
      window.open("https://fb.me/uencclubglobal");
    },
  },
};
</script>
<style lang="less">
@keyframes colorchange {
  0% {
    background: rgba(51, 51, 51, 1);
  }
  100% {
    background: rgba(0, 159, 205, 1);
  }
}
.uenc_foot {
  width: 100%;
  height: 202px;
  background-color: #0c0c0c;
  position: relative;
  z-index: 20;
  .foot-top {
    width: 1200px;
    height: 111px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    // z-index: 20;
    .foot-box {
      display: flex;
      flex-direction: row;
      position: relative;
      img {
        align-content: center;
      }
      .circle {
        width: 40px;
        height: 40px;
        background: rgba(51, 51, 51, 1);
        position: relative;
        left: 5px;
        top: 5px;
        border-radius: 50%;
      }
      .foot-box1 {
        width: 50px;
        height: 50px;
        background: rgba(51, 51, 51, 1);
        border-radius: 50%;
        margin-top: 30px;
        img {
          position: relative;
          top: 9px;
          cursor: pointer;
          left: 15%;
        }
      }
      .foot-box1:hover {
        .circle {
          animation: colorchange 0.1s linear;
          animation-fill-mode: forwards;
        }
      }
      .foot-box2:hover {
        .circle {
          animation: colorchange 0.1s linear;
          animation-fill-mode: forwards;
        }
      }
      .foot-box3:hover {
        .circle {
          animation: colorchange 0.1s linear;
          animation-fill-mode: forwards;
        }
      }
      .foot-box3 {
        img {
          left: 33% !important;
        }
      }
      .foot-box2,
      .foot-box3,
      .foot-box4 {
        width: 50px;
        height: 50px;
        background: rgba(51, 51, 51, 1);
        border-radius: 50%;
        position: relative;
        margin-left: 40px;
        margin-top: 30px;
        img {
          cursor: pointer;
          position: relative;
          top: 7px;
          left: 17%;
        }
      }
      .foot-box4:hover {
        .circle {
          animation: colorchange 0.1s linear;
          animation-fill-mode: forwards;
        }
      }
    }
    .component {
      position: absolute;
      left: 60%;
      top: 55px;
      span {
        margin-left: 39px;
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(153, 153, 153, 1);
      }
    }
  }
  .foot-zhong {
    width: 100%;
    height: 1px;
    background: rgba(0, 159, 205, 1);
  }
  footer p {
    margin: 0 auto;
    width: 372px;
    height: 13px;
    font-size: 12px;
    font-family: PingFang SC;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    line-height: 42px;
    text-align: center;
  }
  .hovershow {
    display: flex;
    flex-direction: row;
    position: relative;
    top: -97px;
    left: -25%;
    float: left;
    z-index: 30;
    opacity: 1;
    .imgshow {
      width: 310px;
      height: 181px;
      position: relative;
    }
    .club {
      width: 120px;
      height: 120px;
      position: relative;
      left: -280px;
      top: 20px;
      span {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 24px;
        position: relative;
        left: 9px;
      }
    }
    .wallet {
      width: 120px;
      height: 120px;
      position: relative;
      left: -260px;
      top: 20px;
      span {
        font-size: 16px;
        font-family: PingFang SC;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
        line-height: 24px;
        position: relative;
        left: 9px;
      }
    }
  }
}
.foot_word {
  font-size: 18px;
  color: #fff;
}
</style>
