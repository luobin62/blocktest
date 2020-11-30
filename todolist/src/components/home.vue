<template>
  <div id="apps">
    <div class="hello">
      <h1>todolist</h1>
      <div class="aside">
        <input class="input" placeholder="按回车添加代办事项" @keyup.enter="keyup" v-model="content"/>
      </div>
      <div class="main">
        <div v-for="(item,index) in list" class="item" >
          <input type="checkbox" @click="bntclick(index)" v-model="item.box">
          <span :class="{final:item.checks}">{{item.name}}</span>
          <button @click="deleteclick(index)" >删除</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {
  },
  data () {
    return {
      content: '',
      list:[],
      isshow: false,
      completed:false,
      isdelete: false,
      isbox:false,
    }
  },
  watch: {
    list: {
      deep: true,
      handler: function (newVal, oldVal) {
        if(newVal) {
          this.setlocal('list', newVal)
        }else{
          this.setlocal('list', oldVal)
        }
      }
    }
  },
  mounted: function(){
    this.list = this.getlocal('list') || [];
  },
  methods: {
    keyup() {
      this.list.push({name:this.content,checks:this.completed,shows:this.isshow,box:this.isbox})
      this.content=''
    },
    bntclick(index) {
      console.log(index)
      this.list[index].checks = !this.list[index].checks
      this.isbox = !(this.isbox)
    },
    deleteclick(index){
      this.list.splice(index,1)
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
#apps {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 100px;
  display: flex;
  flex-direction: column;
  min-height: 500px;
}
.hello h1  {
  text-align: center;
}
.hello .input {
  display: block;
  margin: 0 auto;
}
.item {
  width: 200px;
  height: 20px;
  margin: 5px auto;
  display: flex;
  padding: 2px;
}
.item span {
  flex: 1;
  margin-left: 2px;
}

.final {
  text-decoration: line-through;
}
.aside {
  padding: 10px;
}
.item button {
  display: none;
}
.item:hover {
  background-color: pink;
}
.item:hover>button {
  display: inline;
}
button {
  width: 50px;
}
</style>
