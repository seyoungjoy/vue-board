<template>
  <div>
    <input v-model="userId" placeholder="글쓴이"/>
    <input v-model="title" placeholder="제목"/>
    <textarea v-model="content" placeholder="내용"/>
    <button @click="index !== undefined ? update() : write()">{{index !== undefined ? '수정': '작성'}}</button>
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
      userId: index !== undefined ? data[index].user_id : "",
      title:index !== undefined ? data[index].title : "",
      content:index !== undefined ? data[index].context : "",
      index:index,
    }
  },
  // beforeMount(){
  //   console.log(this.data.Content);
  // },
  methods:{
    write(){
      this.data.push({
        user_id:this.userId,
        title:this.title,
        context:this.content
      })
      this.$router.push({
        path:'/',
      })
    },
    update(){
      data[this.index].user_id = this.userId;
      data[this.index].title = this.title;
      data[this.index].context = this.content;
      alert('수정되었습니다');
      this.$router.push({
        path:'/'
      })
    }
  },
  
}
</script>
