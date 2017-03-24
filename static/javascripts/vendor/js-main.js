require.config({
  paths: {
    jquery: ["http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min", '../jquery-1.10.1.min'] //配置第三方库，不能加.js后缀
  }
});
require(["jquery"], function ($) {
  $(function () {
    $("#leftMenu>ul li").on('click', function () {
      $("#leftMenu li").removeClass('menu-active');
      $(this).addClass('menu-active');
    });
    App.init(); // initlayout and core plugins
  });
});
