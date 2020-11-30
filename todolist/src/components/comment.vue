<template>
  <div class="content">
    <el-input
        type="textarea"
        :rows="4"
        placeholder="请输入内容"
        :disabled="isChange"
        v-model="textarea">
    </el-input>
    <div class="bnt" style="margin-top: 10px">
      <el-button @click="addEvent" :disabled="isOk">提交</el-button>
      <el-button @click="bntChange">状态切换</el-button>
    </div>
    <div class="show" style="margin-top: 10px">
      <div v-for="item in lists">
        <span>{{item.value}}</span>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "comment",
  data() {
    return {
      textarea:'',
      lists:[],
      isChange:false,
      isOk:true
    }
  },
  watch: {
    lists: {
      deep: true,
      handler: function (newVal, oldVal) {
        if(newVal) {
          this.setlocal('lists', newVal)
        }else{
          this.setlocal('lists', oldVal)
        }
      }
    },
    textarea(value) {
      if(value){
        this.isOk = false
      }
    }
  },
  mounted: function(){
    this.lists = this.getlocal('lists') || [];
  },
  methods: {
    bntChange() {
      this.isChange = !this.isChange
      if(this.textarea) {
        this.isOk = !this.isOk
      }
    },
    addEvent() {
      console.log(33)
      this.lists.push({value:this.textarea})
      this.textarea = ''
      this.isOk = true
    },
    setlocal(key,val) {
      localStorage.setItem(key, JSON.stringify(val));
    },
    getlocal(key) {
      return JSON.parse(localStorage.getItem(key));
    },
  }

}
</script>

<style scoped>
.content {
  margin: 30px auto;
}

</style>
