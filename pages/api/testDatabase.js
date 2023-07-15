import { executeQuery } from "./database";

const getAllCandidates = async (req, res) => {
    let candidatesData = await executeQuery("SELECT lastName, firstName FROM Candidates WHERE candidateID=?", [1])
   res.send(candidatesData); 
};

export default getAllCandidates;