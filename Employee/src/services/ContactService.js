import axios from "axios";

const PRODUCT_API_BASE_URL = "https://60ac9dff9e2d6b0017457815.mockapi.io/ag/contacts";

class ContactService{
    
    getContacts(){
        return axios.get(PRODUCT_API_BASE_URL+"/");
    }


    getContactById(contactId){
        return axios.get(PRODUCT_API_BASE_URL+'/'+contactId);
    }
}

export default new ContactService();