import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI'

class App extends Component {
    state = {
        contacts: []
    }

    // Lifecycle Events: invoked immediately after the component is inserted
    componentDidMount() {
        ContactsAPI.getAll().then((contacts) => {
            this.setState({ contacts })
        })
    }

    // Function to remove the specifc contact
    removeContact = (contact) => {
        this.setState((state) => ({
            contacts: state.contacts.filter((c) => c.id !== contact.id)
        }))

        ContactsAPI.remove(contact)
    }

    render(){
      return (
        <div>
          <ListContacts
            onDeleteContact={this.removeContact}
            contacts={this.state.contacts} />
        </div>
    )
    }
  }

  export default App;