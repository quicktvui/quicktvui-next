<script lang="ts" setup>
import { computed } from 'vue'
import { useLang } from '../../composables/lang'
import homeLocale from '../../../i18n/pages/home.json'

const lang = useLang()

const homeLang = computed(() => homeLocale[lang.value])
</script>

<template>
  <div class="cards">
    <el-card shadow="hover">
      <h3>开发便捷</h3>
      <p>内置了大量针对智能电视开发的UI组件，简单易用;</p>
    </el-card>
    <el-card shadow="hover">
      <h3>快速更新</h3>
      <p>利用前端生态，实现免下载、免安装，方便快速迭代；</p>
    </el-card>
    <el-card shadow="hover">
      <h3>接近原生的体验</h3>
      <p>采用react-native的形式,底层用native实现，保证接近原生的体验;</p>
    </el-card>
    <el-card shadow="hover">
      <h3>全面兼容</h3>
      <p>
        已适配市面上大部分型号的智能电视、盒子、智能投影等，可免除开发者大量的适配工作;
      </p>
    </el-card>
  </div>
</template>

<style lang="scss">
.home-page {
  @media (min-width: 1193px) {
    .cards {
      width: 1227px;
      margin: auto;
    }
  }
  @media (max-width: 1005px) {
    .cards {
      width: 100%;
      margin: 80px 0 0 0;
      // margin:auto;
    }
  }
  .cards {
    // width: 100%;
    // width:1145px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    // margin: 80px 0 0 0;
  }

  .el-card {
    height: 150px;
    max-width: 250px;
    background: var(--bg-color);
    border: 1px solid #f6f6f7;
    border-radius: 12px;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    transition: all 0.3s;
    margin-bottom: 20px;

    .el-card__body {
      padding: 0;
      height: 100%;
    }

    .el-card__footer {
      position: sticky;
      bottom: 0;
      padding: 0;
    }

    img {
      margin: 48px auto;
    }

    h3 {
      margin-top: 30px;
      font-size: 18px;
      color: var(--el-text-color-primary);
      // font-weight: normal;
      font-weight: 600;
      text-align: left;
      margin-left: 26px;
    }

    p {
      font-size: 14px;
      color: #99a9bf;
      padding: 0 25px;
      line-height: 20px;
      margin: 16px 0;
      text-align: left;
    }

    a {
      line-height: 52px;
      font-size: 14px;
      color: var(--brand-color);
      text-align: center;
      border: 0;
      padding: 0;
      cursor: pointer;
      background-color: var(--bg-color);
      transition: all 0.3s;
      text-decoration: none;
      display: block;

      &:hover {
        // color: #fff;
        // background: var(--brand-color);
      }
    }

    // &:hover {
    //   bottom: 6px;
    // }
  }

  @media (max-width: 250px) {
    .cards {
    }

    .el-card {
      height: auto;
    }
  }
}
</style>
