<template>
  <div class="commentItem">
    <div>{{ name }}</div>
    <div>{{ commentItem.created_at }}</div>
    <div>{{ commentItem.context }}</div>
    <b-button @click="updateComment">수정</b-button>
    <b-button @click="deleteComment">삭제</b-button>
  </div>
</template>

<script>
import data from "@/data"
export default {
  name:"PrCommentListItem",
  props:{
    commentItem:Object,
    reload:Function
  },
  data(){
    return{
      name:'',
    }
  },
  created(){
    this.name = data.User.filter(item => item.user_id === this.commentItem.user_id)[0].name
  },
  methods:{
    updateComment(){

    },
    deleteComment(){
      const commentIdx = this.commentItem.comment_id;
      const deleteArrayId = data.Comment.findIndex(item => item.comment_id === commentIdx);
      data.Comment.splice(deleteArrayId, 1);
      this.reload();

    }
  }
}
</script>
<style>
.commentItem{
  border:1px solid #000;
  margin-bottom:10px;
  padding:10px;
}
</style>
