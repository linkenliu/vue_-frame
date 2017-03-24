<template>
  <div class="header navbar navbar-inverse" style="background-color: whitesmoke;border-color: #ccc">

    <!-- BEGIN TOP NAVIGATION BAR -->

    <div class="navbar-inner" style="padding: 10px">

      <div class="container-fluid">

        <!-- BEGIN LOGO -->
        <router-link to="/index/system">
        <a class="brand">

          <p style="margin-left: 19px;font-size: 18px;line-height: 23px">BenFun</p>
        </a>
        </router-link>
        <!-- END LOGO -->

        <a href="javascript:;" class="btn-navbar collapsed" data-toggle="collapse" data-target=".nav-collapse">

          <img src="static/image/menu-toggler.png" alt=""/>
        </a>
        <!-- BEGIN TOP NAVIGATION MENU -->

        <ul class="nav pull-right">

          <!-- END TODO DROPDOWN -->

          <!-- BEGIN USER LOGIN DROPDOWN -->
          <li class="dropdown user">

            <p href="#" id="top_role_name" class="mini" data-toggle="" style="margin-top: 6px;border-radius:25px;background-color: #5bc0de">

              admin
            </p>

          </li>

          <li class="dropdown user">

            <a href="#" class="dropdown-toggle" data-toggle="dropdown" >

              <span style="color: #23527c;font-weight: bold" class="username"></span>
              <i class="icon-user"></i>
              <i class="icon-angle-down"></i>

            </a>

            <ul class="dropdown-menu">
              <li><a href="/admin/layout"><i class="icon-key"></i> Log Out</a></li>

            </ul>

          </li>

          <!-- END USER LOGIN DROPDOWN -->

        </ul>

        <!-- END TOP NAVIGATION MENU -->

      </div>

    </div>

    <!-- END TOP NAVIGATION BAR -->

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

<!-- BEGIN HEADER -->
<style>
  #top_role_name{
    border-radius:10% !important;
    box-shadow:  0 0 6px #5bc0de !important;
  }
  .brand:hover {
    color: #000000 !important;
  }
</style>
