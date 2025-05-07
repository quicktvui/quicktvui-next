<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useLang } from '../../composables/lang'
import resourceLocale from '../../../i18n/pages/resource.json'

const lang = useLang()
const resourceLang = computed(() => resourceLocale[lang.value])
const viewFlag = ref<boolean>(true)

const viewMore = () => {
  viewFlag.value = !viewFlag.value
}
</script>

<template>
  <div class="page-cooperation">
    <div class="cooperation-content">
      <img class="home_bg" src="/cooperation/content-background.png" />
      <div class="cooperation-content-title">大屏快应用开发框架-商务合作</div>
      <div class="cooperation-content-subtitle">
        <p>
          开发技术永久免费使用，如您希望服务自主可控，可根据您的企业规模和需求，选择不同的产品套餐
        </p>
      </div>
      <div class="fix_price_box">
        <div class="fix_price_content">
          <div class="fix_price fix_price1">
            <div
              class="fix_price_title f_weight g_color"
              style="font-weight: 600"
            >
              社区版
            </div>
            <div class="fix_price_title2">满足个人/小团队使用</div>
            <div class="fix_price_title3_box">
              <div class="fix_price_title3_span2">免费</div>
            </div>
            <div class="fix_price_btn_box">
              <a class="fix_price_btn" href="/zh-CN/guide/basic/installation"
                >免费使用</a
              >
            </div>
            <div class="fix_price_line_box">
              <div class="fix_price_line" />
            </div>
            <div class="fix_price_title_4">该方案包括以下能力：</div>
            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>独立SDK</div>
            </div>
            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>自定义服务端</div>
            </div>
            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>支持打包原生安卓应用</div>
            </div>
            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>开源示例项目</div>
            </div>
            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>丰富的文档支持</div>
            </div>
          </div>
          <div class="fix_price fix_price2">
            <div class="fix_price_title f_weight" style="font-weight: 600">
              SaaS版
            </div>
            <div class="fix_price_title2">中型企业云端解决方案</div>
            <div class="fix_price_title3_box" style="display: flex">
              <div class="fix_price_title3_tip f_weight">按资源付费</div>
            </div>
            <div class="fix_price_btn_box">
              <div class="fix_price_btn2">
                <img
                  style="
                    width: 28px;
                    height: 21px;
                    margin-top: 11px;
                    margin-left: 29px;
                    margin-right: 11px;
                  "
                  src="/cooperation/wx_icon.png"
                />
                <div>appweare</div>
              </div>
            </div>
            <div class="fix_price_line_box">
              <div class="fix_price_line" />
            </div>
            <div class="fix_price_title_4">该方案包括「社区版能力」</div>
            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>完整的线上发布系统</div>
            </div>

            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>一键打包服务</div>
            </div>
            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>自动更新</div>
            </div>
            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>多租户支持</div>
            </div>
            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>7X24多中心云计算运维保障</div>
            </div>
          </div>
          <div class="fix_price fix_price2">
            <div class="fix_price_title f_weight" style="font-weight: 600">
              私有化部署版
            </div>
            <div class="fix_price_title2">大型企业定制解决方案</div>
            <div class="fix_price_title3_box" style="display: flex">
              <div class="fix_price_title3_tip f_weight">咨询报价</div>
            </div>
            <div class="fix_price_btn_box">
              <div class="fix_price_btn2">
                <img
                  style="
                    width: 28px;
                    height: 21px;
                    margin-top: 11px;
                    margin-left: 29px;
                    margin-right: 11px;
                  "
                  src="/cooperation/wx_icon.png"
                />
                <div>appweare</div>
              </div>
            </div>
            <div class="fix_price_line_box">
              <div class="fix_price_line" />
            </div>
            <div class="fix_price_title_4">该方案包括「SaaS版能力」</div>
            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>委托部署</div>
            </div>

            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>CMS编排系统</div>
            </div>
            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>营销工具</div>
            </div>
            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>闭源项目源码</div>
            </div>
            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>免费工具快应用</div>
            </div>
            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>专属技术支持</div>
            </div>
          </div>
          <div class="fix_price fix_price2">
            <div class="fix_price_title f_weight" style="font-weight: 600">
              合作运营版
            </div>
            <div class="fix_price_title2">共同运营 共享资源收益</div>
            <div class="fix_price_title3_box" style="display: flex">
              <div class="fix_price_title3_tip f_weight">咨询报价</div>
            </div>
            <div class="fix_price_btn_box">
              <div class="fix_price_btn2">
                <img
                  style="
                    width: 28px;
                    height: 21px;
                    margin-top: 11px;
                    margin-left: 29px;
                    margin-right: 11px;
                  "
                  src="/cooperation/wx_icon.png"
                />
                <div>appweare</div>
              </div>
            </div>
            <div class="fix_price_line_box">
              <div class="fix_price_line" />
            </div>
            <div class="fix_price_title_4">该方案包括「SaaS版能力」</div>
            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>BOT模式</div>
            </div>

            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>为原有系统拓展快应用能力</div>
            </div>
            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>代运营桌面卡片</div>
            </div>
            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>付费分成</div>
            </div>
            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>高自主保证，高安全保证</div>
            </div>
            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>高品质售后服务</div>
            </div>
            <div class="fix_price_title_5">
              <img src="/cooperation/price_icon.png" />
              <div>全面技术支持和维护</div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="view_box">
        <div class="view_content g_width" @click="viewMore">
          <div class="view_text f_weight">查看版本功能对比</div>
          <img
            class="view_icon"
            :src="`/cooperation/feature_${viewFlag ? 'top' : 'down'}_icon.png`"
          />
        </div>
      </div> -->
      <!-- <div v-show="!viewFlag" class="diff_box">
        <div class="diff g_width">
          <div class="diff_tab">
            <div style="flex: 1">核心能力</div>
            <div style="flex: 2">社区版</div>
            <div style="flex: 1">私有化部署</div>
          </div>
          <div class="diff_content">
            <div style="flex: 1">
              <div class="diff_content_text">快应用管理</div>
            </div>
            <div style="flex: 3">
              <img class="diff_icon" src="/cooperation/price_icon.png" />
            </div>
            <div style="flex: 1">
              <img
                class="diff_icon"
                style="margin-left: 72px"
                src="/cooperation/price_icon.png"
              />
            </div>
          </div>
          <div class="diff_content">
            <div style="flex: 1">
              <div class="diff_content_text">数据统计</div>
            </div>
            <div style="flex: 3">
              <img class="diff_icon" src="/cooperation/price_icon.png" />
            </div>
            <div style="flex: 1">
              <img
                class="diff_icon"
                style="margin-left: 72px"
                src="/cooperation/price_icon.png"
              />
            </div>
          </div>
          <div class="diff_content">
            <div style="flex: 1">
              <div class="diff_content_text">扩展插件管理</div>
            </div>
            <div style="flex: 3">
              <img class="diff_icon" src="/cooperation/price_no_icon.png" />
            </div>
            <div style="flex: 1">
              <img
                class="diff_icon"
                style="margin-left: 72px"
                src="/cooperation/price_icon.png"
              />
            </div>
          </div>
          <div class="diff_content">
            <div style="flex: 1">
              <div class="diff_content_text">卡片功能</div>
            </div>
            <div style="flex: 3">
              <img class="diff_icon" src="/cooperation/price_no_icon.png" />
            </div>
            <div style="flex: 1">
              <img
                class="diff_icon"
                style="margin-left: 72px"
                src="/cooperation/price_icon.png"
              />
            </div>
          </div>
          <div class="diff_content">
            <div style="flex: 1">
              <div class="diff_content_text">审核管理</div>
            </div>
            <div style="flex: 3">
              <img class="diff_icon" src="/cooperation/price_no_icon.png" />
            </div>
            <div style="flex: 1">
              <img
                class="diff_icon"
                style="margin-left: 72px"
                src="/cooperation/price_icon.png"
              />
            </div>
          </div>
          <div class="diff_content">
            <div style="flex: 1">
              <div class="diff_content_text">系统管理</div>
            </div>
            <div style="flex: 3">
              <img class="diff_icon" src="/cooperation/price_no_icon.png" />
            </div>
            <div style="flex: 1">
              <img
                class="diff_icon"
                style="margin-left: 72px"
                src="/cooperation/price_icon.png"
              />
            </div>
          </div>
          <div class="diff_content">
            <div style="flex: 1">
              <div class="diff_content_text">灰度投放</div>
            </div>
            <div style="flex: 3">
              <img class="diff_icon" src="/cooperation/price_no_icon.png" />
            </div>
            <div style="flex: 1">
              <img
                class="diff_icon"
                style="margin-left: 72px"
                src="/cooperation/price_icon.png"
              />
            </div>
          </div>
          <div class="diff_content">
            <div style="flex: 1">
              <div class="diff_content_text">集群部署</div>
            </div>
            <div style="flex: 3">
              <img class="diff_icon" src="/cooperation/price_no_icon.png" />
            </div>
            <div style="flex: 1">
              <img
                class="diff_icon"
                style="margin-left: 72px"
                src="/cooperation/price_icon.png"
              />
            </div>
          </div>
        </div>
      </div> -->

      <div class="feature_box">
        <div class="feature_content g_width" style="width: 1000px">
          <div class="feature_title f_weight g_color">核心功能</div>
          <div class="feature_grid">
            <div class="feature_line">
              <img class="feature_img" src="/cooperation/feature_1.png" />
              <div>
                <div class="feature_top f_weight">快应用管理后台</div>
                <div class="feature_bottom">从开发测试到预览发布</div>
              </div>
            </div>

            <div class="feature_line feature_mr">
              <img class="feature_img" src="/cooperation/feature_2.png" />
              <div>
                <div class="feature_top f_weight">快应用 CMS 系统</div>
                <div class="feature_bottom">快速编排大屏瀑布流的页面</div>
              </div>
            </div>
          </div>
          <div class="feature_grid">
            <div class="feature_line">
              <img class="feature_img" src="/cooperation/feature_3.png" />
              <div>
                <div class="feature_top f_weight">营销工具</div>
                <div class="feature_bottom">创建营销活动，如资源位、抽奖等</div>
              </div>
            </div>

            <div class="feature_line feature_mr">
              <img class="feature_img" src="/cooperation/feature_4.png" />
              <div>
                <div class="feature_top f_weight">电视应用模版</div>
                <div class="feature_bottom">
                  针对大屏场景的常用项目模版，如影视、音乐等
                </div>
              </div>
            </div>
          </div>
          <div class="feature_grid">
            <div class="feature_line">
              <img class="feature_img" src="/cooperation/feature_5.png" />
              <div>
                <div class="feature_top f_weight">数据统计</div>
                <div class="feature_bottom">查看快应用相关的统计分析数据</div>
              </div>
            </div>

            <div class="feature_line feature_mr">
              <img class="feature_img" src="/cooperation/feature_6.png" />
              <div>
                <div class="feature_top f_weight">免费应用工具箱</div>
                <div class="feature_bottom">天气、日历等免费工具快应用</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="home_footer"
        style="
          background: url('/cooperation/home_footer.jpg') no-repeat;
          background-size: cover;
        "
      >
        <div class="footer_box g_width">
          <div class="footer_content">
            <div class="footer_title" style="font-weight: 600">
              开启高效研发之旅
            </div>
            <div class="footer_title2">
              <p>立即联系客户支持经理，</p>
              <p>了解和评估如何帮助您的团队更进一步</p>
            </div>
            <div class="footer_btn_box">
              <!-- <div class="footer_btn1">联系我们</div> -->
              <!--						<div class="footer_btn2">免费体验</div>-->
            </div>
            <div class="footer_title2" style="font-size: 18px">
              联系我们：quicktvui@163.com
            </div>
          </div>
          <img class="footer_img" src="/cooperation/footer_icon.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@media (min-width: 1000px) {
  .fix_price {
    width: 240px;
  }
  .fix_price_box {
    height: 832px;
  }
  .cooperation-content-title {
    font-size: 45px;
  }
  .cooperation-content-subtitle {
    font-size: 22px;
  }

  .feature_box {
    width: 100%;
    display: flex;
    background-color: white;
  }
  .footer_title {
    font-size: 40px;
  }
  .footer_title2 {
    font-size: 20px;
  }
}
@media (max-width: 1000px) {
  .cooperation-content-title {
    font-size: 45px;
  }
  .cooperation-content-subtitle {
    font-size: 22px;
  }
  .fix_price {
    width: 480px;
  }

  .feature_box {
    width: 100%;
    display: flex;
    background-color: white;
  }
  .footer_title {
    font-size: 40px;
  }
  .footer_title2 {
    font-size: 20px;
  }
}
@media (max-width: 720px) {
  .cooperation-content-title {
    font-size: 27px;
    margin-top: 40px;
  }
  .cooperation-content-subtitle {
    font-size: 17px;
  }
  .fix_price {
    width: 240px;
  }
  .feature_box {
    display: none;
  }
  .footer_title {
    font-size: 28px;
  }
  .footer_title2 {
    font-size: 16px;
  }
}
.page-cooperation {
  box-sizing: border-box;
  // min-width: 1000px;
}
.cooperation-content {
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
  align-items: center;

  .cooperation-content-title {
    font-weight: 800;
    // font-size: 45px;
    text-align: center;
    color: rgba(70, 76, 91, 1);
  }

  .cooperation-content-subtitle {
    max-width: 800px;
    display: flex;
    margin-top: 20px;
    color: rgba(60, 60, 67, 0.78);
    // font-size: 22px;
    text-align: center;
    font-weight: 500;
  }

  .g_color {
    color: rgba(70, 76, 91, 1);
  }
  .c_color {
    color: rgba(60, 60, 67, 0.78);
  }
  .f_weight {
    font-weight: 500;
  }
  .home_bg {
    position: absolute;
    top: -121px;
    left: 0px;
    width: 100%;
    height: 1400px;
    z-index: -1;
  }
  .g_width {
    width: 1145px;
  }
  .title_box {
    width: 100%;
    display: flex;
    margin-top: 123px;
  }
  .title {
    margin: auto;
    font-size: 45px;
    text-align: center;
    font-weight: 800;
  }
  .title2 {
    margin: auto;
    font-size: 22px;
    text-align: center;
    line-height: 42px;
    font-weight: 500;
  }
  .fix_price_box {
    width: 100%;
    // height: 832px;
    display: flex;
    // margin-top: 106px;
  }
  .fix_price_content {
    margin: auto;
    display: flex;
    // width: 100%;
    width: 1100px;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .fix_price {
    /* width:405px;
    height:832px; */
    // width: 360px;
    // height: 787px;
    // width: 240px;
    height: 653px;
    background: #fff;
    /* box-shadow: 8px 3px 21px 3px #a2a2a2; */
    box-shadow: 8px 3px 21px 3px rgba(151, 176, 212, 0.2);
    border-radius: 20px 20px 20px 20px;
    margin-bottom: 20px;
  }
  .fix_price1 {
    // margin-left: 100px;
  }
  .fix_price2 {
    // margin-right: 100px;
  }
  .fix_price_title {
    width: 100%;
    height: 35px;
    // font-size: 30px;
    font-size: 24px;
    color: #464c5b;
    text-align: center;
    margin-top: 57px;
    margin-top: 32px;
  }
  .fix_price_title2 {
    color: #8a8a8a;
    // font-size: 22px;
    font-size: 15px;
    width: 66%;
    margin-left: 17%;
    height: 22px;
    text-align: center;
    margin-top: 19px;
  }
  .fix_price_title3_box {
    width: 100%;
    height: 31px;
    margin-top: 20px;
  }
  .fix_price_title3_tip {
    color: #464c5b;
    font-size: 22px;
    margin: auto;
  }
  .fix_price_title3_span1 {
    color: #464c5b;
    font-size: 24px;
    margin-left: 136px;
    font-weight: 10;
  }
  .fix_price_title3_span2 {
    color: #464c5b;
    font-size: 22px;
    /* margin-left: 16px;
    margin-right: 17px; */
    text-align: center;
    width: 100%;
    font-weight: 500;
  }
  .fix_price_title3_span3 {
    color: #464c5b;
    font-size: 24px;
    font-weight: 10;
  }
  .fix_price_btn_box {
    display: flex;
    width: 78%;
    height: 50px;
    margin-top: 26px;
    margin-left: 11%;
  }
  .fix_price_btn {
    width: 280px;
    height: 46px;
    background: linear-gradient(to right, #50c6ff, #3569ff);
    border-radius: 10px 10px 10px 10px;
    color: #fff;
    font-size: 20px;
    text-align: center;
    line-height: 46px;
    margin: auto;
    cursor: pointer;
    font-weight: 600;
  }
  .fix_price_btn2 {
    width: 280px;
    height: 46px;
    border-radius: 10px 10px 10px 10px;
    // 3cc800
    border: 2px solid #3570ff;
    color: #3570ff;
    font-size: 20px;
    text-align: center;
    line-height: 44px;
    margin: auto;
    cursor: pointer;
    display: flex;
    /* font-weight: 600; */
  }
  .fix_price_line_box {
    width: 100%;
    display: flex;
    margin-top: 23px;
  }
  .fix_price_line {
    width: 186px;
    height: 1px;
    background: #d7d7d7;
    margin: auto;
  }
  .fix_price_title_4 {
    color: #303030;
    font-size: 16px;
    margin-top: 22px;
    width: 85%;
    margin-left: 25px;
    margin-bottom: 22px;
  }
  .fix_price_title_5 {
    width: 100%;
    margin-left: 22px;
    display: flex;
    margin-bottom: 21px;
  }
  .fix_price_title_5 img {
    width: 17px;
    height: 18px;
    margin-right: 7px;
  }
  .fix_price_title_5 div {
    font-size: 14px;
    color: #303030;
    line-height: 20px;
  }
  .view_box {
    width: 100%;
    display: flex;
    margin-top: 74px;
  }
  .view_content {
    margin: auto;
    text-align: center;
    position: relative;
    cursor: pointer;
  }
  .view_text {
    color: #024dfe;
    font-size: 32px;
  }
  .view_icon {
    position: absolute;
    width: 22px;
    height: 13px;
    left: calc(50% + 160px);
    top: 6px;
  }
  .diff_box {
    width: 100%;
    display: flex;
    background-color: white;
  }
  .diff {
    margin: auto;
  }
  .diff_tab {
    height: 88px;
    width: 100%;
    display: flex;
    background: #f6f6f9;
    border-radius: 20px 20px 20px 20px;
  }
  .diff_tab div {
    text-align: center;
    font-size: 24px;
    color: #303030;
    line-height: 88px;
  }
  .diff_content {
    width: 100%;
    border-bottom: 1px solid #d7d7d7;
    display: flex;
  }
  .diff_content div {
    display: flex;
  }
  .diff_icon {
    width: 26px;
    height: 26px;
    margin: auto;
  }
  .diff_content_text {
    width: 100%;
    font-size: 18px;
    color: #303030;
    text-align: center;
    line-height: 68px;
    margin-left: 97px;
    /* font-weight: 400; */
  }
  // .feature_box {
  //   width: 100%;
  //   display: flex;
  //   background-color: white;
  // }
  .feature_content {
    margin: auto;
  }
  .feature_title {
    margin-top: 97px;
    font-size: 40px;
    text-align: center;
    margin-bottom: 117px;
  }
  .feature_grid {
    width: 100%;
    display: flex;
    margin-bottom: 70px;
  }
  .feature_line {
    width: 50%;
    display: flex;
  }
  .feature_img {
    width: 50px;
    height: 50px;
    margin-right: 31px;
  }
  .feature_top {
    color: #464c5b;
    font-size: 26px;
  }
  .feature_bottom {
    color: #8a8a8a;
    font-size: 18px;
    margin-top: 12px;
  }
  .feature_mr {
    margin-left: 265px;
  }
  .qa_box {
    width: 100%;
    display: flex;
  }
  .qa_content {
    /* height:300px; */
    margin: auto;
    /* background:#ccc; */
  }
  .qa_title {
    color: #464c5b;
    font-size: 40px;
    width: 100%;
    text-align: center;
    margin-top: 64px;
  }
  .qa_content_border {
    border-bottom: 1px solid #d7d7d7;
  }
  .qa_content_box {
    width: 100%;
    /* height:56px; */
    position: relative;
    cursor: pointer;
  }
  .qa_text {
    color: #464c5b;
    font-size: 24px;
    margin-top: 34px;
  }
  .qa_icon {
    position: absolute;
    right: 0px;
    top: 0px;
    width: 22px;
    height: 13px;
  }
  .qa_a_none {
    margin-top: 39px;
    /* margin-bottom:32px; */
    color: #8a8a8a;
    font-size: 20px;
    height: 0px;
    overflow: hidden;
    transition: all 0.3s ease;
  }
  .qa_a {
    margin-bottom: 25px;
    margin-top: 28px;
    max-height: 300px;
    color: #8a8a8a;
    font-size: 18px;
    transition: all 0.3s ease;
  }

  .cp_box {
    width: 100%;
    display: flex;
  }
  .cp_content {
    margin: auto;
  }
  .cp_content_title {
    width: 100%;
    text-align: center;
    font-size: 40px;
    margin-top: 130px;
  }
  .cp_icon_box {
    display: flex;
    margin-top: 73px;
  }
  .cp_icon_content {
    /* width: 469px;
    height: 161px; */
    width: 360px;
    height: 130px;
    background: #fff;
    /* box-shadow: 8px 3px 21px 3px #a2a2a2; */
    box-shadow: 8px 3px 21px 3px rgba(151, 176, 212, 0.2);
    border-radius: 20px 20px 20px 20px;
    display: flex;
  }
  .cp_img {
    width: 50px;
    height: 50px;
    margin-top: 43px;
    margin-left: 68px;
    margin-right: 34px;
  }
  .cp_text {
    color: #1879bd;
    font-weight: 600;
    font-size: 36px;
    height: 130px;
    line-height: 130px;
  }
  .home_footer {
    width: 100%;
    height: 450px;
    display: flex;
  }
  .footer_box {
    display: flex;
    margin: auto;
  }
  .footer_content {
    margin: auto;
    flex: 4;
    margin-left: 105px;
  }
  .footer_title {
    // font-size: 40px;
    color: #fff;
    text-align: left;
    margin-top: 19px;
  }
  .footer_title2 {
    // font-size: 20px;
    color: #fff;
    font-weight: 400;
    text-align: left;
    width: 676px;
    margin-top: 31px;
    line-height: 38px;
  }
  .footer_btn_box {
    display: flex;
    margin-top: 57px;
  }
  .footer_btn1 {
    width: 220px;
    height: 61px;
    background: #fff;
    line-height: 61px;
    text-align: center;
    color: #0076d5;
    font-size: 28px;
    border-radius: 10px 10px 10px 10px;
    margin-right: 34px;
    cursor: pointer;
  }
  .footer_btn2 {
    box-sizing: border-box;
    width: 180px;
    height: 51px;
    font-weight: 600;
    line-height: 47px;
    text-align: center;
    color: #fff;
    font-size: 24px;
    cursor: pointer;
    border-radius: 10px 10px 10px 10px;
    border: 3px solid #ffffff;
  }
  .footer_img {
    /* width: 236px;
    height: 266px; */
    width: 189px;
    height: 212px;
    flex: 1;
    margin-right: 167px;
    margin-top: 45px;
  }
}
</style>
