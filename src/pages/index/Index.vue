<template>
  <div>
    <TopBar></TopBar>
    <div class="page-container row-fluid" style="margin-top: -3px">
      <LeftMenu></LeftMenu>
      <Contents></Contents>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import TopBar from '@/components/TopBar'
  import LeftMenu from '@/components/LeftMenu'
  import Contents from '@/components/Contents'
  import Footer from '@/components/Footer'
  export default {
    components: {LeftMenu, TopBar, Contents,Footer},
    data () {
      return {}
    },
    methods: {}
  }
</script>

