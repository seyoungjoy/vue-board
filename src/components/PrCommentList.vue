<template>
  <div>

    <div v-for="item in commentObj" :key="item.comment_id">
        <PrCommentListItem :commentItem="item" :reload="reload"/>
    </div>
    <div>
      <PrCommentCreate :contentId="contentId" :reload="reload"/>
    </div>
  </div>
</template>
<script>
import data from "@/data"
import PrCommentListItem from "@/components/PrCommentListItem";
import PrCommentCreate from "@/components/PrCommentCreate";

  export default {
    name:"PrCommentList",
    components:{
      PrCommentListItem,
      PrCommentCreate
    },
    props:{
      contentId:Number,
    },
    data(){
      return{
        commentObj : data.Comment.filter(item => item.content_id === this.contentId)
      }
    },
    created(){

    },
    methods:{
      reload(){
        this.commentObj = data.Comment.filter(item => item.content_id === this.contentId);
      }
    }

  }
</script>
