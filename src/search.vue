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

<style>
.searchCom .searchData{
 text-align: left;
 margin: 10px 1%;
 width: 98%;
 height: 40px;
 overflow: hidden;
}
.searchCom .searchData .searchs{
  background: WhiteSmoke;
  background-image: url(https://www.easyicon.net/api/resizeApi.php?id=1183666&size=128);
  background-position: 6px 9px;
  background-repeat: no-repeat;
  background-size: 14px;
  padding-left: 7%;
  margin: 4px 2%;
  width: 89%;
  height: 32px;
  border-radius: 3%;
  font-size: 14px;
  color: black;
  border: none;
}
.searchCom .searchData .searchs:focus{outline:none}

.searchCom .searchData .cancelImg{
  display: inline-block;
  width: 28px;
  height: 28px;
  position: absolute;
  right: 5%;
  top: 2.3%;
  z-index: 20;
  background-image: url(https://www.easyicon.net/api/resizeApi.php?id=1182472&size=128);
  background-position: 6px 10px;
  background-repeat: no-repeat;
  background-size: 14px;
}
</style>
    
