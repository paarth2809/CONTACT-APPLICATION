const contact_model = require('../models/contact.model');

exports.createContact = async (req, res) => {
    try {
        const contact_body = req.body;
        const contact = await contact_model.create(contact_body);
        if (contact) {
            return res.status(201).send(contact);
        } else {
            return res.status(400).send({
                error: "Failed to create contact"
            });
        }
    } catch (err) {
        console.error("Error creating contact:", err);
        return res.status(500).send({
            error: "Contact not created due to server error"
        });
    }
};


exports.getAllContact=async(req,res)=>{
    try{
        const contact_obj=await contact_model.find()
        if(contact_obj){
            res.status(200).send(contact_obj)
        }
        else{
            res.staus(401).send({
                message: "failed to fetch contacts"
            })
        }
    }
    catch(err){
        res.status(400).send({
            err: "contact fetching failed"
        })
    }
}

exports.getContactUsingName=async(req,res)=>{
    try{
        const findName=req.body.name
        if(!findName){
            return res.status(400).send({
                message: "name not present in request body"
            })
        }
        const contact_obj=await contact_model.find({name: findName})
        if(contact_obj){
            res.status(200).send(contact_obj)
        }
        else{
            res.status(400).send({
                message: "failed to fetch contact of provided name"
            })
        }
    }
    catch(err){
        res.status(400).send({
            err: "failed to fetch contact of provided name"
        })
    }
}

exports.updateContact=async(req,res)=>{
    try{
        const findName=req.body.name
        if(!findName){
            return res.status(400).send({
                message: "name not present in request body so can't update contact"
            })
        }
        const updateContact=req.body

        const contact_obj=await contact_model.findOneAndUpdate({name: findName},updateContact,{new: true})
        if(contact_obj){
            res.status(200).send(contact_obj)
        }
        else{
            res.status(400).send({
                message: "failed to update contact of provided name"
            })
        }
    }
    catch(err){
        res.status(400).send({
            err: "failed to update contact of provided name"
        })
    }
}

exports.deleteContact=async(req,res)=>{
    try{
        const findName=req.body.name
        if(!findName){
            return res.status(400).send({
                message: "name not present in request body so can't update contact"
            })
        }

        const contact_obj=await contact_model.findOneAndDelete({name: findName})
        if(contact_obj){
            res.status(200).send({
                message: "contact deleted",
                contact_details: contact_obj
            })
        }
        else{
            res.status(400).send({
                message: "failed to delete contact of provided name"
            })
        }
    }
    catch(err){
        res.status(400).send({
            err: "failed to delete contact of provided name"
        })
    }
}