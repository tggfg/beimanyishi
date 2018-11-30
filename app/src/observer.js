/*
    $on
        this.$on("事件名称",回调函数)
    $off
        this.$off("事件名称")  全部
        this.$off("事件名称",回调函数)
    $emit
        this.$emit("事件名称",[需要传递的值])


    eventList = {
        key:val
        click:[fn1,fn2,fn3]
    }
*/

const eventList = {}
console.log(eventList)
const $on = (eventType,cb)=>{
    /* 
       当绑定一个事件的时候，首先先要判断当前事件是否已经存在，如果已经存在则直接push回调函数 
       如果当前事件不存在的时候，给当前事件设置一个空的数组，然后在进行push
    */
    let event = eventList[eventType];
    if(!event){
        eventList[eventType] = [];
    }
    eventList[eventType].push(cb)
}


const $off = (eventType,cb)=>{
    /*
        当解绑事件的时候分为2种情况
            1、用户传递了第二个参数  解绑指定的
            2、用户没有传递第二个参数  解绑全部


        如果当前事件存在的情况下，首先判断用户是否传递了第二个参数，如果传递了。那么找到第二个参数在
        数组中的下班，并且移除掉

        如果用户没有传递第二个参数，那么就解绑所以  我们可以直接将数组清空
    
    */
    let event = eventList[eventType];
    if(event){
        if(cb){
            event.findIndex((item,index)=>{
                if(cb == item){
                    event.splice(index,1);
                }
            })
        }else{
            eventList[eventType] = [];
        }
    }
}

const $emit = (eventType,params)=>{
    /*
        当触发的时候我们判断当前事件类型 是否存在，如果存在的话执行当前事件上面所有的函数，如果不存在
        直接return
    */
    let event = eventList[eventType];

    if(!event)return;
    event.map((cb)=>{
      
        cb(params);
    })

}


export default {
    $on,
    $off,
    $emit
}

