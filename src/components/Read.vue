<template>
  <div>

    <b-table striped hover :items="items" :fields="fields" @click="detail(index)"></b-table>
    <!-- <table>
      <tr>
        <td>글쓴이</td>
        <td>제목</td>
        <td>내용</td>
      </tr>
      <tr v-for="(value, index) in data" :key="index" @click="detail(index)">
        <td>{{ value.user_id }}</td>
        <td>{{ value.title }}</td>
        <td>{{ value.context }}</td>
      </tr>
    </table> -->
    <button @click="write">글쓰기</button>
  </div>
</template>
<script>
import data from '@/data'
export default {
  name:'Read',
  data(){
    return{
      items: data,
      // data:data,
      // fields:['user_id', 'title', 'context']
      fields:[
        {
          key:'user_id',
          label:'ID',
          sortable:false
        },
        {
          key:'title',
          sortable:false
        },
        {
          key:'context',
          label:'내용',
          sortable:false
        },
      ]
    }
  },
  methods:{
    write(){
      this.$router.push({
        path:'create'
      })
    },
    detail(index){
      alert(1);
      this.$router.push({
        name:'Detail',
        params:{
          contentId:index
        }
      })
     
    }
  }

}
</script>
