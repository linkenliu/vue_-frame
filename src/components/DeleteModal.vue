<template>
  <!--删除小编modal-->
  <div class="modal" id="deleteModal" tabindex="0" role="dialog" v-show="isDelShowModal"  aria-labelledby="gridSystemModalLabel" style="overflow-y: auto">
    <input type="hidden" id="del_key_id"/>
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header center">
          <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                  @click="setShowModel"></button>
          <h2 class="modal-title">{{delObj.delTitle}}</h2>
        </div>
        <form class="form-horizontal">
          <div class="modal-body">
            <div class="box-content">
              <span style="color: #d9534f;font-size: 26px">你确认要删除<span style="color: #5cb85c">{{delObj.delText}}</span>这条数据吗?</span>
            </div>
          </div>
        </form>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal"  @click="setShowModel">
            <i
              class="icon-remove"></i> 取消

          </button>
          <button  @click="setDelModel" type="button" class="btn red" ><i
            class="icon-trash"></i> 删除</button>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
  export default {

    props: {
      isDelShowModal: {
        type: Boolean,
        default: () => false
      },
      delObj: {
        type: Object,
        default: () => {}
      }
    },
    methods: {
      setDelModel: function () {
        this.$emit('delModel');
      },
      setShowModel:function () {
        this.$emit('showModel');
      }
    },
  }
</script>
