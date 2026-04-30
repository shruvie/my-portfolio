import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
    {title : String,
    description : String,
    imageUrl : String,
    liveUrl : String,
    githubUrl : String,
    techStack : [String],
},{timestamps : true});

const Project = mongoose.model("Project", projectSchema);
export default Project;