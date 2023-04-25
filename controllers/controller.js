import { Model } from "mongoose";
import Questions from "../models/questionSchema.js";
import Results from "../models/resultSchema.js";

export async function getQuestions(req,res){
    try{
       const q= await Questions.find();
       res.json(q)
    } catch(error){
        res.json({error})
    }
}

export async function insertQuestions(req,res){
  try{
     Questions.insertMany({questions:[0],answers:[1]},function(err,data){
        res.json({msg:"data saved succcessfully"})
    })
  } catch(error){
    res.json({error})
  }
}

export async function dropQuestions(req,res){
    res.json("questions api delete request");


}

export async function getResult(req,res){
    res.json("result api get request");

}
export async function storeResult(req,res){
    res.json("result api post request");

}

export async function dropResult(req,res){
    res.json("result api delete request");
}