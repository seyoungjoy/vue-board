<template>
    <div>
        <b-input v-model="subject" placeholder="제목을 입력해 주세요"></b-input>
        <b-textarea
            v-model="context"
            placeholder="내용을 입력해 주세요"
            rows="3"
            max-rows="6"
        ></b-textarea>
        <b-button @click="uploadContent">저장</b-button>
        <b-button @click="cancle">취소</b-button>
    </div>
</template>
<script>
import data from "@/data"

export default {
    name:"Create",
    data(){
        const contentId = this.$route.params.contentId;
        const contentData = data.Content.filter(item => item.content_Id === contentId);
        return{
            contentId:contentId,
            contentData:contentData,
            subject: '',
            context:'',
            userId:1,
            created_at:'2022-11-22 11:33:22',
            updated_at :null
        }
    },
    methods:{
        cancle(){
            this.$router.push({
                name:'Board'
            })
        },
        uploadContent(){
            let items = data.Content.sort((a,b) => {return b.content_id - a.content_id})
            const content_id = items[0].content_id +1
            data.Content.push(
                {
                    content_id: content_id,
                    user_id: this.userId,
                    title: this.subject,
                    context: this.context,
                    created_at: this.created_at,
                    updated_at: null,
                }
            )
            this.$router.push({
                name:'Board'
            })

        }
    },
    beforeMount(){
        console.log(this.contentData)
    }
}
</script>