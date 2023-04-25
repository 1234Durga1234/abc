import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
/** redux actions*/
import * as Action from '../redux/question_reducer'
import data,{answers} from "../database/data";

/**fetch qns hook to fetch api data and set valye to store */
export const useFetchQuestion=()=>{
const dispatch=useDispatch();

   const [getdata,setGetData] =useState({isLoading:false,apiData:[],serverError:null})
   useEffect(()=>{

setGetData(prev=>({...prev, isLoading:true}));

/**async fun fetch backend data */
    (async ()=>{
        try {
            let question=await data;
if(question.length>0){
    setGetData(prev=>({...prev, isLoading:false}));
    setGetData(prev=>({...prev, apiData:question}));
    /**dispatch an action */
    dispatch(Action.startExamAction({question,answers}))

} else{
    throw new Error('No Question Available');
}
        } catch (error) {
            setGetData(prev=>({...prev, isLoading:false}));
            setGetData(prev=>({...prev, serverError:error}));

        } 
    
    })();

   },[dispatch]);
   return [getdata,setGetData];
}
/**next action (incresing) */
export const MoveNextQuestion=()=> async (dispatch)=>{
    try{

      dispatch(Action.moveNextAction());
    } catch(error){
        console.log(error)
    }
}
/**prev action (decrese) */
export const MovePrevQuestion=()=> async (dispatch)=>{
    try{

      dispatch(Action.movePrevAction());
    } catch(error){
        console.log(error)
    }
}