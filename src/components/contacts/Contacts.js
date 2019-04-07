import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../../actions/contactActions';

class Contacts extends Component {

  componentDidMount(){
    this.props.getContacts();
  }

  render() {
    const { contacts } = this.props;
    return (
      <React.Fragment>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map(item => (
          <Contact key={item.id} contact={item} />
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired
}

//allows this.props.contacts to use contacts in contactReducer 
const mapStateToProps = state => ({
  contacts: state.contact.contacts //coming from ../reducers/index.js
});

export default connect(mapStateToProps,{getContacts})(Contacts);
