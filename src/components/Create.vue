<template>
    <div>
        <b-input v-model="subject" placeholder="제목을 입력해 주세요"></b-input>
        <b-textarea
            v-model="context"
            placeholder="내용을 입력해 주세요"
            rows="3"
            max-rows="6"
        ></b-textarea>
        <b-button @click="updateContent" v-if="updateMode">수정</b-button>
        <b-button @click="uploadContent" v-else>저장</b-button>
        <b-button @click="cancle">취소</b-button>
    </div>
</template>
<script>
import data from "@/data"

export default {
    name:"Create",
    data(){
        return{
            contentId:Number(this.$route.params.contentId),
            subject: '',
            context:'',
            userId:1,
            created_at:'',
            updated_at :null,
            updateObject:null,
            updateMode: this.$route.params.contentId !== undefined ? true : false,
        }
    },
    created(){
        if(this.updateMode){
            // const contentId = Number(this.$route.params.contentId)
            this.updateObject = data.Content.filter(item => item.content_id === this.contentId)[0];
            this.subject = this.updateObject.title;
            this.context = this.updateObject.context;
        }
    },
    // beforeMount(){
    //     this.updateContent();
    // },
    methods:{
        cancle(){
            this.$router.push({
                name:'Board'
            })
        },
        uploadContent(){
            let items = data.Content.sort((a,b) => {return b.content_id - a.content_id});
            const content_id = items[0].content_id +1;

            data.Content.push(
                {
                    content_id: content_id,
                    user_id: this.userId,
                    title: this.subject,
                    context: this.context,
                    created_at: this.getCreatedAt(),
                    updated_at: null,
                }
            )
            this.$router.push({
                name:'Board'
            })
        },
        updateContent(){
            // const updateListIndex = data.Content.findIndex(item => item.content_id === this.contentId);
            // const updateList = data.Content[updateListIndex];
            this.updateObject.title = this.subject;
            this.updateObject.context = this.context;
            this.$router.push({
                name:'Board'
            })
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
        }
    },
   
}
</script>