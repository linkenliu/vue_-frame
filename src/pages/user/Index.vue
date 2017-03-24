<template>
  <div>
    <h2>小编列表</h2>
    <hr/>
    <form action="/admin/editorList" class="form-inline" method="get">
      <div class="span10">
        <select class="m-wrap medium" name="postChoose">
          <option value="1">名称</option>
        </select>
        <input type="text" aria-controls="sample_editable_1" class="m-wrap medium" name="keyWord" placeholder="请输入用户名">
        <button class="btn" type="submit"><i
          class="icon-search"></i> 搜索
        </button>
      </div>
      <div class="clearfix span2" style="text-align: right">
        <div class="btn-group">
          <a class="btn green" @click="showModal()"> <i
            class="icon-plus"></i> 新增</a>
        </div>
      </div>
    </form>
    <br/>
    <br/>
    <hr/>
    <div class="bs-example4" data-example-id="contextual-table">
      <table class="table table-hover">
        <thead>
        <tr>
          <th>#</th>
          <th>用户名</th>
          <th>昵称</th>
          <th>电话</th>
          <th>Email</th>
          <th>创建时间</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr class="active" v-for="item in editorList">
          <th scope="row">1</th>
          <td>{{item.name}}</td>
          <td>{{item.nick_name}}</td>
          <td>{{item.phone}}</td>
          <td>{{item.email}}</td>
          <td>{{item.create_date | formatDate}}</td>
          <td>
            <span v-if="item.state == 1" class="badge badge-success">正常</span>
            <span v-else-if="item.state == 0" class="label label-warning">冻结</span>
            <span v-else class="label label-warning">未知</span>
          </td>
          <td>
            <a class="btn blue mini" @click="showModal(item.id)"> <i
              class="icon-edit"></i> 编辑
            </a>
            <button class="btn red delEditor mini" @click="showDelModal(item.id,item.name)"><i
              class="icon-trash"></i> 删除
            </button>
          </td>
        </tr>
        </tbody>
      </table>
    </div>


    <!--新增小编modal-->
    <div class="modal" id="editorModal" tabindex="0" v-show="isShowModal" role="dialog"
         aria-labelledby="gridSystemModalLabel" style="overflow-y: auto;">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header center">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"
                    @click="showModal()"></button>
            <h2 class="modal-title" id="ss">{{modalText}}</h2>
          </div>
          <form class="form-horizontal" @submit.prevent="saveEditor">
            <div class="modal-body">
              <div class="box-content">

                <div class="control-group">
                  <label class="control-label" style="width: 80px">用户名:</label>
                  <input type="text" placeholder="请输入用户名" style="margin-left: 10px" v-model="editor.name"
                         required="required" class="m-wrap span9">
                </div>
                <div class="control-group">
                  <label class="control-label" style="width: 80px">昵称:</label>
                  <input type="text" placeholder="请输入用户昵称" style="margin-left: 10px" v-model="editor.nick_name"
                         required="required" class="m-wrap span9">
                </div>
                <div class="control-group">
                  <label class="control-label" style="width: 80px">密码:</label>
                  <input type="text" placeholder="请输入密码" style="margin-left: 10px" v-model="editor.password"
                         required="required" class="m-wrap span9">
                </div>
                <div class="control-group">
                  <label class="control-label" style="width: 80px">电话:</label>
                  <input type="tel" placeholder="请输入电话" style="margin-left: 10px" v-model="editor.phone"
                         class="m-wrap span9">
                </div>
                <div class="control-group">
                  <label class="control-label" style="width: 80px">Email:</label>
                  <input type="email" placeholder="请输入Email" style="margin-left: 10px" v-model="editor.email"
                         class="m-wrap span9">
                </div>
                <div class="control-group">

                  <label class="control-label" style="width: 80px">用户组:</label>

                  <select class="m-wrap span9" style="margin-left: 10px" v-model="editor.group">
                    <option value="">Admin</option>

                    <option value="70a27b00fcdc11e6b013c9151fb101a5">BF-TV</option>

                    <option value="f36fa3d0fd5b11e69dc45b54a2e1609a">BF-Mobile</option>

                    <option value="80ba2cd0fd7311e6903b53ad7852b777">BF-Test</option>

                  </select>
                </div>

                <div class="control-group">
                  <label class="control-label" style="width: 80px !important;">审核:</label>

                  <div class="controls" style="margin-left: 100px !important;">
                    <label class="radio">
                      <div style="margin-left: 10px">
                        <input type="radio" checked="checked"
                               name="release_state" value="1" v-model="editor.state">
                        发布
                      </div>

                    </label>
                    <label class="radio">
                      <div style="margin-left: 10px">
                        <input name="release_state"
                               type="radio" value="0" v-model="editor.state">
                        冻结
                      </div>
                    </label>
                  </div>
                </div>

              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-default" data-dismiss="modal" @click="showModal()">
                <i
                  class="icon-remove"></i> 取消

              </button>
              <button type="submit" class="btn blue"><i
                class="icon-trash"></i> 保存
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    <!--删除小编modal-->

    <DeleteModal :isDelShowModal="isDelShowModal" :delObj="delObj" @delModel="getDelModel"
                 @showModel="getShowModel"></DeleteModal>

  </div>
</template>

<script>
  import {EDITOR} from '@/api/index'
  import {Toast} from 'mint-ui';
  import DeleteModal from '@/components/DeleteModal'
  export default {
    components: {DeleteModal},
    data () {
      return {
        isShowModal: false,
        isDelShowModal: false,
        editorList: [],
        modalText: '',
        delObj: {
          delId: '',
          delText: '',
          delTitle: ''
        },
        editor: {
          group: '',
          state: 1
        }
      }
    },
    methods: {
      loadEditor (){
        EDITOR.getEditorList({}).then(res => {
          if (res.data.result_code == '0') {
            this.editorList = res.data.content;
          } else {
            alert(res.data.result)
          }
        });
      },
      showModal (id){
        if (id) {
          EDITOR.findOneEditor({id: id}).then(res => {
            let editor = res.data.content;
            this.editor = {
              id: editor.id,
              name: editor.name,
              nick_name: editor.nick_name,
              password: editor.password,
              phone: editor.phone,
              email: editor.email,
              state: editor.state
            };
          });
        } else {
          this.editor = {group: '', state: 1};
        }
        this.isShowModal = !this.isShowModal;
      },
      saveEditor(){
        let editor = this.editor;
        let message = '';
        if (editor.id) {
          this.modalText = '编辑小编';
          message = '修改成功';
        } else {
          this.modalText = '新增小编';
          message = '新增成功';
        }
        EDITOR.saveEditor(editor).then(res => {
          if (res.data.result_code == '0') {
            this.isShowModal = !this.isShowModal;
            Toast({message: message});
            this.loadEditor();
          } else {
            alert('新增失败:' + res.data.result);
          }
        });
      },
      showDelModal (delId, delText){
        if (delId) {
          this.isDelShowModal = !this.isDelShowModal;
          this.delObj.delId = delId;
          this.delObj.delText = delText;
          this.delObj.delTitle = '删除小编';
        } else {
          this.isDelShowModal = !this.isDelShowModal;
        }
      },
      getShowModel: function () {
        this.isDelShowModal = !this.isDelShowModal;
      },
      getDelModel: function () {
        let id = this.delObj.delId;
        EDITOR.deleteEditor({id: id}).then(res => {
          if (res.data.result_code == '0') {
            this.isDelShowModal = !this.isDelShowModal;
            Toast({message: '删除成功'});
            this.loadEditor();
          } else {
            alert(res.data.result);
          }
        });
      }
    },
    created () {
      this.loadEditor()
    }
  }
</script>
