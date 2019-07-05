<template>
  <div class="container">
    <div class="banner">
      <Swiper :bannerList="activityList" @linkToDetail="linkToMiniprogram"/>
    </div>
    <div id="filter" :class="['filter',isMenuFixed ? 'fixed': ''] ">
      <div class="filter-link">
        <div class="filter-item" @click="showFilterBox(1)">选地区</div>
        <div class="filter-item" @click="showFilterBox(2)">选主题</div>
        <div class="filter-item" @click="showFilterBox(3)">选车型</div>
      </div>
      <div class="filter-selected" v-if="reset">
        <div class="selected-item" v-if="selectedItems.cityName">{{selectedItems.cityName}}</div>
        <div class="selected-item" v-if="selectedItems.subjectName">{{selectedItems.subjectName}}</div>
        <div class="selected-item" v-if="selectedItems.genreName">{{selectedItems.genreName}}</div>
        <div class="selected-reset" @click="resetFilter">重置</div>
      </div>
    </div>
    <div class="product-list">
      <product-list :products="products" @operateItem="showQrcode"/>
    </div>
    <load-more v-if="isMore" @loadMore="getMoreList"></load-more>

    <div class="filter-box" v-if="filterBoxShow" catchtouchmove="preventTouchMove">
      <div class="filter-box-top">
        <div class="filter-box-close" @click="closeFilterBox">关闭</div>
        <div class="filter-link">
          <div
            :class="['filter-item', currentTab==1?'activeTab':'']"
            @click="changeFilterTab(1)"
          >选地区</div>
          <div
            :class="['filter-item', currentTab==2?'activeTab':'']"
            @click="changeFilterTab(2)"
          >选主题</div>
          <div
            :class="['filter-item', currentTab==3?'activeTab':'']"
            @click="changeFilterTab(3)"
          >选车型</div>
        </div>
      </div>
      <div class="filter-box-main">
        <ul
          :class="['box-list', currentTab == 1 ? 'show':'hidden']"
          v-for="(item,index) in regionList"
          :key="index"
        >
          <li class="box-list-item" @click="confirmFilter(1,item)">{{item.regionName}}</li>
        </ul>
        <ul
          :class="['box-list', currentTab == 2 ? 'show':'hidden']"
          v-for="(item,index) in subjectList"
          :key="index"
        >
          <li class="box-list-item" @click="confirmFilter(2,item)">{{item.subName}}</li>
        </ul>
        <ul
          :class="['box-list', currentTab == 3 ? 'show':'hidden']"
          v-for="(item,index) in typeList"
          :key="index"
        >
          <li class="box-list-item" @click="confirmFilter(3,item)">{{item.genreName}}</li>
        </ul>
      </div>
    </div>

    <a href="/pages/search/main" v-if="isShowSearchBtn" open-type="switchTab" class="search-link">搜索</a>
    <data-null v-if="isDataNull"></data-null>
    <modal v-if="isShowModal" :modalData="modalData" @closeModal="closeQrcode"></modal>
  </div>
</template>

<script>
import ProductList from "@components/productList";
import Swiper from "@components/swiper";
import DataNull from "@components/dataNull";
import LoadMore from "@components/loadMore";
import Modal from "@components/showModal";
import Login from "@static/lib/login";
import request from "@static/utils/request";
import Data from "./data";

export default {
  data() {
    return {
      userInfo: {},
      isMenuFixed: false,
      menuTop: 0,
      filterBoxShow: false, //是否显示筛选框
      currentTab: 1,
      isShowSearchBtn: false, //是否显示搜索按钮
      // activityList: Data.indexInfo.activityList,
      // regionList: Data.indexInfo.regionList,
      // subjectList: Data.indexInfo.subjectList,
      // typeList: Data.indexInfo.genreList,
      // products: Data.productsData.communityResultBoList,
      activityList: [],
      regionList: [],
      subjectList: [],
      typeList: [],
      products: [],
      filterConfig: {
        //筛选参数
        current: "1",
        size: "20",
        genreId: "", //类型
        subjectId: "", //主题
        cityId: "" //地级市
      },
      selectedItems: {
        genreName: "",
        subjectName: "",
        cityName: ""
      },
      isMore: false, //是否显示加载更多按钮
      isDataNull: false,
      isShowModal: false,
      modalData: {}
    };
  },

  components: {
    ProductList,
    Swiper,
    LoadMore,
    DataNull,
    Modal
  },
  computed: {
    reset() {
      if (
        this.filterConfig.genreId != "" ||
        this.filterConfig.subjectId != "" ||
        this.filterConfig.cityId != ""
      ) {
        return true;
      }
      return false;
    }
  },
  onLoad() {
    // Login.login(); //微信授权登录
  },

  created() {
    this.getIndexInfo();
    this.initProductList();
  },
  methods: {
    initProductList() {
      //初始化加载第一页数据
      this.filterConfig.current = 1;
      this.products = [];
      this.getProductList();
    },
    reload() {
      this.filterConfig = {
        //筛选参数
        current: "1",
        size: "20",
        genreId: "", //类型
        subjectId: "", //主题
        cityId: "" //地级市
      };
      this.filterBoxShow = false;
      this.initProductList();
    },
    getMoreList() {
      //加载更多页数据
      this.filterConfig.current += 1;
      this.getProductList();
    },
    getIndexInfo() {
      //获取首页数据
      request(
        "communitym/community/subject/getIndexInfo.json",
        {},
        res => {
          if (res.statusCode == "200") {
            this.activityList = res.data.data.activityList;
            this.typeList = res.data.data.genreList;
            this.regionList = res.data.data.regionList;
            this.subjectList = res.data.data.subjectList;
          }
        },
        err => {}
      );
    },
    getProductList() {
      //请求接口
      request(
        "communitym/community/communityInfo/getCommunityInfoList.json",
        this.filterConfig,
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
    initClientRect() {
      // 查询菜单栏距离文档顶部的距离menuTop
      let query = wx.createSelectorQuery();
      query.select("#filter").boundingClientRect();
      query.exec(res => {
        this.menuTop = res[0].top;
        let top = res[0].top;
        if (top < 0) {
          this.isShowSearchBtn = true;
        } else {
          this.isShowSearchBtn = false;
        }
      });
    },
    showFilterBox(id) {
      //点击筛选弹出筛选框
      this.filterBoxShow = true;
      this.currentTab = id;
    },
    closeFilterBox() {
      //关闭筛选框
      this.filterBoxShow = false;
    },
    confirmFilter(tabId, item) {
      console.log(tabId);
      //确认筛选条件
      let list = {
        "1": "cityId",
        "2": "subjectId",
        "3": "genreId"
      };
      this.filterBoxShow = false;
      this.filterConfig[list[tabId]] = item.id;
      switch (tabId) {
        case 1:
          this.selectedItems = Object.assign({}, this.selectedItems, {
            cityName: item.regionName
          });
          break;
        case 2:
          this.selectedItems = Object.assign({}, this.selectedItems, {
            subjectName: item.subName
          });
          break;
        case 3:
          this.selectedItems = Object.assign({}, this.selectedItems, {
            genreName: item.genreName
          });
          break;
      }
      this.initProductList();
    },
    changeFilterTab(tabId) {
      //筛选弹窗tab切换
      this.currentTab = tabId;
    },

    resetFilter() {
      //重置筛选条件
      this.filterConfig = {
        current: "1",
        size: "20",
        genreId: "", //类型
        subjectId: "", //主题
        cityId: "" //地级市
      };
      this.selectedItems = Object.assign(
        {},
        {
          genreName: "",
          subjectName: "",
          cityName: ""
        }
      );
      this.initProductList();
    },
    showQrcode(res) {
      //显示二维码弹窗
      console.log(res);
      this.isShowModal = true;
      this.modalData = {
        title: res.mainTitle,
        qrImg: res.qrCode,
        tip: "请您在客服消息回复“加群”",
        id: res.id
      };
    },
    closeQrcode(data) {
      //关闭二维码弹窗
      this.isShowModal = false;
    },
    preventTouchMove() {
      //阻止弹窗下页面滑动
      return false;
    },
    linkToMiniprogram(data) {
      wx.navigateToMiniProgram({
        appId: "wx59e3e1b404f5f723",
        path: "/pages/index/index",
        extraData: {},
        envVersion: "develop",
        success(res) {
          // 打开成功
          console.log("打开成功");
        }
      });
    }
  },

  onPageScroll(scroll) {
    // 监听页面滚动距离scrollTop
    this.initClientRect();
  },
  onShow: function() {
    this.reload(); //刷新页面
  }
};
</script>

<style lang="less">
@import "./index.less";
</style>