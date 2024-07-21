const contact_controller=require('../controllers/contact.controller')

module.exports=(app)=>{
    app.post('/contact_app/api/v1/contacts',contact_controller.createContact)
    app.get('/contact_app/api/v1/contacts',contact_controller.getAllContact)
    app.get('/contact_app/api/v1/contacts/name',contact_controller.getContactUsingName)
    app.put('/contact_app/api/v1/contacts',contact_controller.updateContact)
    app.delete('/contact_app/api/v1/contacts',contact_controller.deleteContact)
}