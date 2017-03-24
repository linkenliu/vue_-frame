<template>
  <div class="page-sidebar nav-collapse " id="leftMenu" style="background-color: #F7F7F7;">
    <ul class="page-sidebar-menu">
      <li>
        <div class="sidebar-toggler hidden-phone" style="margin-bottom: 13px"></div>
      </li>

      <li class="" id="adminIndex_li">
        <router-link to="/index/system">
          <i class="icon-home"></i>
          <span class="title">系统概述</span>
          <span class="selected"></span>
        </router-link>
      </li>
      <li class="" id="editorInfo_li">
        <router-link to="/index/user">
          <i class="icon-user"></i>
          <span class="title">小编信息</span>
          <span class="selected"></span>
        </router-link>
      </li>
    </ul>
    </li>
    </ul>
    <!-- END SIDEBAR MENU -->
  </div>
</template>

<script>
  export default {
    data () {
      return {

      }
    }
  }
</script>
