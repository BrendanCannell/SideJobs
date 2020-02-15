import React, {Component} from "react";
import { Card, Text, Button } from 'rebass';
import { Input } from '@rebass/forms'
// import Footer from '../../components/Footer/index'
import './style.css';
import API from '../../utils/API';

class SignOut extends Component {
    handleSignOut = () => {
          API.logoutUser()
            .catch(err => console.log(err));
        }
      };
// need button to call handlesignout