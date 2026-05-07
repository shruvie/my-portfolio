import mongoose from 'mongoose';

const certschema = new mongoose.Schema(
    {imageUrl: String,
    certificatename: String}
);

const Certificate = mongoose.model("Certificate", certschema)
export default Certificate;