<template>
  <div>
    <input v-model="writer" placeholder="글쓴이"/>
    <input v-model="title" placeholder="제목"/>
    <textarea v-model="content" placeholder="내용"/>
    <button @click="write" v-if="index === undefined">작성하기</button>
    <button @click="update" v-else>수정하기</button>
    
  </div>
</template>
<script>
import data from '@/data'
export default {
  name:'Create',
  data(){
    const index = this.$route.params.contentId;
    return{
      data: data,
      writer: index !== undefined ? data[index].writer : "",
      title:index !== undefined ? data[index].title : "",
      content:index !== undefined ? data[index].content : "",
      index:index
    }
  },
  methods:{
    write(){
      this.data.push({
        writer:this.writer,
        title:this.title,
        content:this.content
      })
      this.$router.push({
        path:'/',
      })
    },
    update(){
      this.data[this.index].writer = this.writer;
      this.data[this.index].title = this.title;
      this.data[this.index].content = this.content;
      alert('수정했습니다.')
      this.$router.push({
        path:'/'
      })
    }
  },
  
}
</script>
