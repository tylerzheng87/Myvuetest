import Mock from 'mockjs'

const { messList }=Mock.mock({
    'messList|2000':[
    {
"id" : "@increment()",
"title" : "@ctitle()",
}
]
})

Mock.mock('api/mess','get',{
staus:200,
msg:'获取数据成功',
list:messList,

})

