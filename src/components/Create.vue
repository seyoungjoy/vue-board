<template>
    <div>
      <b-input v-model="subject" placeholder="제목을 입력해 주세요."></b-input>
      <b-textarea
        v-model="context"
        placeholder="내용을 입력해 주세요"
        rows="10"
        max-rows="20"
      ></b-textarea>
      <b-button @click="uploadContent">저장</b-button>
      <b-button @click="cancel">취소</b-button>


<!--        <b-input v-model="subject" placeholder="제목을 입력해 주세요"></b-input>-->
<!--        <b-textarea-->
<!--            v-model="context"-->
<!--            placeholder="내용을 입력해 주세요"-->
<!--            rows="3"-->
<!--            max-rows="6"-->
<!--        ></b-textarea>-->
<!--        <b-button @click="uploadContent">저장</b-button>-->
<!--        <b-button @click="cancle">취소</b-button>-->
    </div>
</template>
<script>
import data from "@/data"

export default {
  name:"Create",
  data(){
    return{
      content_id:'',
      user_id:1,
      subject:'',
      context:'',
      created_at: '2019-11-11 12-22-22',
      update_at:null

    }
  },
  beforeMount(){

    console.log(currentTime)
  },
  methods:{
    uploadContent(){
      const currentId = data.Content[0].content_id+1;
      const currentTime = Date();
      const loadData = {
        content_id:currentId,
        user_id:this.user_id,
        title:this.subject,
        context:this.context,
        created_at:currentTime,
        update_at:this.update_at
      }
      data.Content.push(loadData);
      this.$router.push({
        name:"Board"
      })


    },
    cancel(){
      this.$router.push({
        name:'Board'
      })
    }
  }
}

</script>
