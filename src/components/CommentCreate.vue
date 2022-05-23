<template>
    <div>
        <b-input-group :prepend="name" class="mt-3">
            <b-form-textarea
                id="textarea"
                v-model="context"
                :placeholder="'코멘트를 달아주세요~!'"
                rows="3"
                max-rows="6"
            ></b-form-textarea>
            <b-input-group-append>
                <b-button variant="info" @click="isSubComment ? createSubComment() : createComment()">작성하기</b-button>
            </b-input-group-append>
        </b-input-group>
    </div>
</template>
<script>
import data from "@/data";
export default {
    name:'CommentCreate',
    props:{
      contentId:Number,
      commentId:Number,
      reloadComment:Function,
      isSubComment:Boolean,
      reloadSubComments:Function
    },
    data(){
        return{
            name:'seyoung',
            context:'',
        }
    },
    methods:{
        createComment(){
            const commentData = {
                comment_id:data.Comment[data.Comment.length - 1].comment_id + 1,
                user_id:1,
                content_id:this.contentId,
                context:this.context,
                created_at:this.getCreatedAt(),
                updated_at:null
            }
            data.Comment.push(commentData);
            this.reloadComment();
            this.context = '';
        },
        getCreatedAt(){
            const today = new Date();
            const year = today.getFullYear();
            const month = today.getMonth() + 1;
            const date = today.getDate();
            const hour = today.getHours();
            const minute = today.getMinutes();
            const second = today.getSeconds();

            return `${year}-${month}-${date} ${hour}:${minute}:${second}`
        },
        createSubComment(){
            const subCommentData = {
                subcomment_id:data.SubComment[data.Comment.length - 1].subcomment_id + 1,
                user_id:1,
                comment_id:this.commentId,
                context:this.context,
                created_at:this.getCreatedAt(),
                updated_at:null
            }
            data.SubComment.push(subCommentData);
            this.reloadSubComments();
            this.context = '';
        },
    }
}
</script>