import React, { Component } from 'react'
import ContactService from '../services/ContactService'
import { CCard, CRow, CCol, CCardImage, CCardBody, CCardTitle, CCardText, CButton } from '@coreui/react';

import CIcon from '@coreui/icons-react';
import { cilBriefcase, cilInstitution, cilEnvelopeClosed, cilPhone } from '@coreui/icons';

class ContactListComponent extends Component {
    
    constructor(props){
        super(props);

        this.state = {
            contacts: []
        }

    }
    
    viewContact(id){
        this.props.history.push(`/view-contact/${id}`);
    }

    
    componentDidMount(){
        ContactService.getContacts().then((res) => {
            this.setState({contacts: res.data});
        });
    }

    render() {
        return (
            <div >

                <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
                {this.state.contacts.map( contact =>
                    
                    <CCol xs >
                            
                        <CCard className="h-100">
                            <CRow className="g-0">
                                <CCol md={4}>
                                    <CCardImage orientation="top" src={contact.avatar}/>
                                </CCol>
                                <CCol md={8}>
                                    <CCardBody>
                                        <CCardTitle>{contact.first_name} {contact.last_name}</CCardTitle>
                                        <CCardText>
                                            <small className="text-medium-emphasis"><CIcon icon={cilBriefcase} size="sm"/><span>&nbsp;</span>{contact.job_title} </small>
                                            <br></br>
                                            <small className="text-medium-emphasis"><CIcon icon={cilInstitution} size="sm"/><span>&nbsp;</span>{contact.company} </small>
                                            
                                            <br></br>
                                            <small className="text-medium-emphasis"><CIcon icon={cilEnvelopeClosed} size="sm"/><span>&nbsp;</span>{contact.email}</small>
                                            <br></br>
                                            
                                            <small className="text-medium-emphasis"><CIcon icon={cilPhone} size="sm"/><span>&nbsp;</span>{contact.phone}</small>

                                        </CCardText>
                                        <CButton color="light" href="#" onClick={ () => this.viewContact(contact.id)}>View Profile</CButton>

                                    </CCardBody>
                                </CCol>
                            </CRow>

                        </CCard>
                    </CCol>
                    )}

                </CRow>
                  
            </div>
        )
    }
}

export default ContactListComponent