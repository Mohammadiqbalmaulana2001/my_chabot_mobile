import axios from "axios";

const {apiKey} = require("../constans");

const client = axios.create({
    headers: {
        "Authorization": "Bearer "+apiKey,
        "Content-Type": "application/json"
    }
})

const chatGptEndpoint = 'https://api.openai.com/v1/chat/completions';
const dalleUrl = 'https://api.openai.com/v1/images/generations';

export const apiCall = async (prompt, messages) => {
    try{
        const res = await client.post(chatGptEndpoint, {
            model: "gpt-3.5-turbo",
            messages:[{
                role: "user",
                content:  `Does this message want to generate an AI picture, image, art or anything similar? ${prompt} . Simply answer with a yes or no.`
            }]
        })
        console.log("data",res.data);
    }catch(err){
        console.log(err);
        return Promise.resolve({success: false , msg: err});
    }
}

