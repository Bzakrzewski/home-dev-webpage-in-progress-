import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import styled from 'styled-components'
import '../style.css';

const Icon = styled.img`
  height: 20vh;
  weight: 10vw;
  float: left;
  margin-top: -2%;
`
const Button = styled.button`
  float: left;
  width: 5%;
  height: 25%;
  font-size: 13px;
  font-family: "Arial Rounded MT Bold", "Helvetica Rounded", Arial, sans-serif;
  font-weight: 700;
  margin: 1%;
  margin-top: 2%;
  background-color: Transparent;
  background-repeat:no-repeat;
  border: none;
  cursor:pointer;
  overflow: hidden;
  outline:none;
`

class Contact extends Component {
  about() { browserHistory.replace('/About'); }
  offer() { browserHistory.replace('/Offer'); }
  main() { browserHistory.replace('/Main'); }
  mouseEnter(event) { event.target.style.color = 'white'; }
  mouseLeave(event) { event.target.style.color = 'black'; }

  render() {
    return(
      <div>
        <Button
          onClick={() => this.about()}
          onMouseEnter={(event) => this.mouseEnter(event)}
          onMouseLeave={(event) => this.mouseLeave(event)}
        > About </Button>
        <Button
          onClick={() => this.offer()}
          onMouseEnter={(event) => this.mouseEnter(event)}
          onMouseLeave={(event) => this.mouseLeave(event)}
        > Offer </Button>
        <Button
          onClick={() => this.main()}
          onMouseEnter={(event) => this.mouseEnter(event)}
          onMouseLeave={(event) => this.mouseLeave(event)}
        > Main </Button>
        <div>
          <form name="senderMail" action="" method="post">
            <label>Your name:</label>
            <input name="yourName" type="text" />
            <label>Your email:</label>
            <input name="email" type="text" />
            <label>Subject:</label>
            <input name="subject" type="text" />
            <label>Message:</label>
            <textarea type="text" name="message"></textarea>
            <input type="submit" name="submit" value="Send email"/>
          </form>
        </div>
      </div>
    )
  }
}

export default Contact;
