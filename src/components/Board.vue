<template>
  <div>
    <h1>게시판</h1>
    <b-table striped hover :items="items" :fields="fields"></b-table>
  </div>
</template>

<script>
import data from '@/data'
  export default {
      name:"Board",
    data() {
      return {
        items: data.Content,
        // fields:['content_id', 'title', 'created_at']
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
        ]
      }
    },
  }
</script>