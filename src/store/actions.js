import * as types from './types';
export  default {
    increment:({commit})=>{
        //将事件请求发送给mutations, mutations对事件进行处理
        commit(types.INCREMENT);
    },
    decrement:({commit})=>{
        commit(types.DECREMENT);
    }
}