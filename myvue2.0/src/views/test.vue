<template>
  <div>
    <el-autocomplete
      v-model="searchtext"
      size="mini"
      :fetch-suggestions="querySearchGroup"
      @select="selectGroup"
      @input="groupListMe"
      placeholder="请输入"
    ></el-autocomplete>
    <el-select filterable :filter-method='groupListMe' clearable v-model="id" placeholder="请选择">
      <el-option
        v-for="item in optionsArr"
        :key="item.id"
        :label="item.title"
        :value="item.id"
      >
      </el-option>
    </el-select>
  </div>
</template>

<script>
import axios from "axios";

export default {
  
  data() {
    
    return {
     
      columns: [{ id: "id", title: "title" }],
      options: [],
      optionsArr:[{ id: "id", title: "title" }],
       id:'',
      searchtext:'',
    };
    
  },
  // created() {
  //   axios.get("api/mess").then((res) => {
  //     const arr = res.data.list;
  //     this.options = arr;
  //     if (arr.length === 0) {
  //       this.$alert("查询无数据", "温馨提示", {
  //         confirmButtonText: "确定",
  //       });
  //     } else {
  //       console.log(arr);

  //       this.options = arr;
  //     }
  //   });
  // },

  methods: {
    groupListMe() {
      
      axios.get("api/mess").then((res) => {
        const arr = res.data.list;
        console.log(this.searchtext)
        
        this.options = arr;
        if (arr.length === 0) {
          this.$alert("查询无数据", "温馨提示", {
            confirmButtonText: "确定",
          });
        } else {
          console.log(arr);
          this.optionsArr = [];
          this.options = arr;
         
          for (let item of this.options) {
              if (item.title.indexOf(this.searchtext) >= 0) {
            this.optionsArr.push({
              title: item.title,
              id: item.id,
            });
          }
           }
        }
      });
    },
     querySearchGroup(queryString, cb) {
                var groupArr = this.optionsArr;
                cb(groupArr);
            },
            selectGroup(val) {
                this.id = val.id
            }
  },
};
</script>
