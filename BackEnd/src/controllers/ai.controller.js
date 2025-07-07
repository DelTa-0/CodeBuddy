const aiService=require("../services/ai.service")

module.exports.getResponse=async (req,res)=>{
    const prompt=req.query.prompt;
    if(!prompt){
        res.status(400).send("Prompt is not recognized");
    }
    const response=await aiService(prompt);

    res.send(response);
}