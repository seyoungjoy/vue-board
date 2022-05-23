<template>
  <div>
    <hr>
    <div>seyoung</div>
    <b-textarea
      placeholder="댓글을 입력하세요"
      v-model="context"
    ></b-textarea>
    <b-button @click="createComment">댓글달기</b-button>
  </div>
</template>

<script>
import data from "@/data"
export default {
  name:"PrCommentCreate",
  props:{
    contentId:Number,
    reload:Function
  },
  data(){
    return{
      context:''
    }
  },
  methods:{
    createComment(){
      data.Comment.push(
          {
            // comment_id : data.Comment.reduce((p,c)=> (p.comment_id > c.content_id) ? p : c).comment_id + 1,
            comment_id: data.Comment[data.Comment.length - 1].comment_id + 1,
            user_id: 1,
            content_id: this.contentId,
            context: this.context,
            created_at: '2019-03-29 14:11:11',
            updated_at: null
          }
      )
      this.reload();
      console.log(data.Comment)
    }
  },

}
</script>
