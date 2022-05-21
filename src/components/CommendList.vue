<template>
    <div>
        <div v-for="item in comments" :key="item.comment_id">
            <CommentListItem :commentObj="item"/>
        </div>
        <div>
            <CommentCreate :contentId="contentId" :reloadComment="reloadComment"/>
        </div>
    </div>
</template>
<script>
import data from '@/data';
import CommentListItem from "./CommendListItem.vue"
import CommentCreate from "./CommentCreate.vue"

export default {
    name:"CommendList",
    components:{
        CommentListItem,
        CommentCreate
    },
    props:{
      contentId : Number  
    },
    data(){
        return{
            comments: data.Comment.filter(item => item.content_id === this.contentId)
        }
    },
    methods:{
        reloadComment(){
            this.comments = data.Comment.filter(item => item.content_id === this.contentId)
        }
    }
    
}
</script>