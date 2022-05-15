<template>
  <div>
    <div>{{data.writer}}</div>
    <div>{{data.title}}</div>
    <div>{{data.content}}</div>
    <button @click="deleteData">삭제하기</button>
    <button @click="updateData">수정하기</button>
  </div>
</template>
<script>
import data from '@/data'
export default {
  name:'Detail',
  data(){
    const index = this.$route.params.contentId;
    return{
      index:index,
      data:data[index],
    }
  },
  methods:{
    deleteData(){
      alert('데이터를 삭제했습니다.');
      data.splice(this.index,1);
      this.$router.push({
        path:'/'
      })
    },
    updateData(){
      this.$router.push({
        name:'Create',
        params:{contentId:this.index}
      })
    }
  }
}
</script>
