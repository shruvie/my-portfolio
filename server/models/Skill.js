import mongoose from 'mongoose';

const skillschema = new mongoose.Schema(
    {imageUrl: String,
    skillname: String
});

const Skill = mongoose.model("Skill", skillschema)
export default Skill;