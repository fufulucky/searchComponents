<template>
  <div class="searchCom">
    <div class="searchData">
      <input 
      class="searchs" 
      placeholder="请输入搜索关键词" 
      v-model="msg" 
      @keyup.enter="submit"/>
      <span v-if="msg" class="cancelImg" @click="deleteData"></span>
    </div>     
  </div>
       
</template>

<script>
export default {
    name: 'pica-search',
    props: {
        value: ''
    },
    data() {
        return{
            msg:''
        }
    },
    watch: {
        msg(val){
           this.$emit("input",val);
        }
    },
    methods: {
        submit() {
            this.$emit("search",true);
        },
        deleteData() {
            this.msg = '';
        }
    }
}
</script>

<style lang="less">
.searchCom{
    text-align: center;
    .searchData{
    text-align: left;
    margin: 10px 1%;
    background-color:;
    width: 98%;
    height: 40px;
    .searchs{
        background: WhiteSmoke;
        background-image: url(../assets/images/search.png);
        background-position: 2px 2px;
        background-repeat: no-repeat;
        background-size: 28px;
        padding-left: 32px;
        margin: 4px 3%;
        width: 94%;
        height: 32px;
        border-radius: 3px;
        font-size: 14px;
        color: black;
    }
    .cancelImg{
        display: inline-block;
        width: 28px;
        height: 28px;
        background-size: 14px;
        background-repeat: no-repeat;
        position: absolute;
        right: 3%;
        top: 3.3%;
        z-index: 2;
        background-image: url(../assets/images/pica-delete.png);
        
    }
  }    
}

</style>
    
