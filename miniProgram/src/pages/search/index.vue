<template>
  <div class="search-page">
    <div class="search-top">
      <input v-model="searchConfig.search" type="text" class="search-input" placeholder="请输入你感兴趣的群">
      <div class="search-btn" @click="initSearchList">确定</div>
    </div>
    <!-- <div class="search-hot">
      <p class="search-hot-title">热门搜索</p>
      <ul class="search-hot-items">
        <li class="hot-item" @click="confirmSearch">本田</li>
        <li class="hot-item" @click="confirmSearch">丰田</li>
        <li class="hot-item" @click="confirmSearch">大众</li>
        <li class="hot-item" @click="confirmSearch">梅赛德斯奔驰</li>
        <li class="hot-item" @click="confirmSearch">梅赛德斯奔驰</li>
      </ul>
    </div>-->
    <!-- <div class="search-hot">
        <p class="search-hot-title">搜索历史</p>
        <ul class="search-hot-items">
                <li class="hot-item" @click="confirmSearch">本田</li>
                <li class="hot-item" @click="confirmSearch">丰田</li>
                <li class="hot-item" @click="confirmSearch">大众</li>
                <li class="hot-item" @click="confirmSearch">梅赛德斯奔驰</li>
                <li class="hot-item" @click="confirmSearch">梅赛德斯奔驰</li>
        </ul>
    </div>-->
    <div class="search-list">
      <product-list :products="products" @operateItem="showQrcode"/>
    </div>
    <load-more v-if="isMore" @loadMore="getMoreList"></load-more>
    <data-null v-if="isDataNull"></data-null>
    <modal v-if="isShowModal" :modalData="modalData" @closeModal="closeQrcode"></modal>
  </div>
</template>

<script>
import ProductList from "@components/productList";
import DataNull from "@components/dataNull";
import request from "@static/utils/request";
import Modal from "@components/showModal";
import LoadMore from "@components/loadMore";
export default {
  data() {
    return {
      searchConfig: {
        current: "1",
        size: "20",
        search: ""
      },
      products: [],
      isDataNull: false,
      isMore: false,
      isShowModal: false
    };
  },
  components: {
    ProductList,
    DataNull,
    Modal,
    LoadMore
  },

  methods: {
    initSearchList() {
      if (this.searchConfig.search == "") {
        return;
      } else {
        this.searchConfig.current = 1; //重置为第一页
        this.products = [];
      }
      this.getSearchList();
    },

    getMoreList() {
      this.searchConfig.current += 1;
      this.getSearchList();
    },
    getSearchList() {
      request(
        "communitym/community/communityInfo/searchCommunityInfoList.json",
        this.searchConfig,
        res => {
          if (res.statusCode == "200") {
            if (res.data.data.communityResultBoList) {
              this.products = this.products.concat(
                res.data.data.communityResultBoList
              );
            }
            if (this.products.length == 0) {
              this.isDataNull = true;
            } else {
              this.isDataNull = false;
            }
            if (res.data.data.haveNextPage) {
              this.isMore = true;
            } else {
              this.isMore = false;
            }
          }
        },
        err => {}
      );
    },
    showQrcode(res) {
      //显示二维码弹窗
      this.isShowModal = true;
      this.modalData = {
        title: res.mainTitle,
        qrImg: res.qrCode,
        tip: "识别二维码进群"
      };
    },
    closeQrcode(data) {
      //关闭二维码弹窗
      this.isShowModal = false;
    }
  },
  onShow() {
    this.searchConfig = {
      current: "1",
      size: "20",
      search: ""
    };
    this.isDataNull = false;
  }
};
</script>
<style lang="less">
@import "./index.less";
</style>