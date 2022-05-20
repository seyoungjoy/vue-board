<template>
  <div>
    <h1>게시판</h1>
    <b-table striped hover :items="getData" :fields="fields" @row-clicked="rowClick"></b-table>
    <b-button @click="create">작성하기</b-button>
  </div>
</template>

<script>
import data from '@/data';

  export default {
    name:"Board",
    data() {
      return {
        fields:[
            {
                key:'content_id',
                label:'글번호'
            },
            {
                key:'title',
                label:'제목'
            },
            {
                key:'created_at',
                label:'작성일'
            },
            {
                key:'user_name',
                label:'글쓴이'
            },
        ],
      }
    },
    computed:{
        getData(){
            let items = data.Content.sort((a,b)=>{return b.content_id - a.content_id})// content_id의 index로 내림차순 정렬된 배열
            items = items.map(contentItem => {
              return {...contentItem, user_name:data.User.filter(userItem => userItem.user_id === contentItem.user_id)[0].name}
            })
            return items;
        }
    },
    methods:{
        rowClick(item, index, e){
            this.$router.push({
              name:'Detail',
              params:{contentId : item.content_id}
            })
        },
        create(){
          this.$router.push({
            name:"Create"
          })
        }
    }

  }
</script>
