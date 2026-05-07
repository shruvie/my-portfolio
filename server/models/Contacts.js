import mongoose  from "mongoose";

const contactschema = new.mongoose.Schema(
    {
        Contactno : Int,
        Email : String,
        Message : String
    }
);

const Contact= mongoose.model("Contact", contactschema);
export default Contact;