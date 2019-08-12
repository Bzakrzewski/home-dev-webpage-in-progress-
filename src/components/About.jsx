import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import '../style.css';

class About extends Component {
  main() { browserHistory.replace('/Main');  }
  offer() { browserHistory.replace('/Offer'); }
  contact() { browserHistory.replace('/Contact'); }
  mouseEnter(event) { event.target.style.color = 'white'; }
  mouseLeave(event) { event.target.style.color = 'black'; }

  render() {
    return(
      <div>
        <div className="header">
          <div className="header_backgorund">
            <img className="icon" src={require('../images/my_logo.png')} alt='' />
            <button className="menu_btn"
              onClick={() => this.main()}
              onMouseEnter={(event) => this.mouseEnter(event)} onMouseLeave={(event) => this.mouseLeave(event)}
            > Main </button>
            <button className="menu_btn"
              onClick={() => this.offer()}
              onMouseEnter={(event) => this.mouseEnter(event)} onMouseLeave={(event) => this.mouseLeave(event)}
            > Offer </button>
            <button className="menu_btn"
              onClick={() => this.contact()}
              onMouseEnter={(event) => this.mouseEnter(event)} onMouseLeave={(event) => this.mouseLeave(event)}
            > Contact </button>
          </div>
        </div>

          <div>
              <img className="background_photo" src={require('../images/backgorund_photo.jpg')}
                     alt='' />
              <h3>
                <p className="header_text">About company</p>
              </h3>

              <div id='par1'>
                <p className="par">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae mi enim. Vestibulum condimentum nibh ligula, ac tempus felis dapibus at. Aliquam hendrerit posuere massa sit amet semper. Phasellus vel lacinia diam, in blandit purus. Donec molestie massa ut pellentesque efficitur.</p>
              </div>

              <div id='par2'>
                <p className="par">Nunc accumsan nulla in lectus bibendum, eu commodo arcu faucibus. Nunc in nibh in felis blandit eleifend. Vivamus auctor, lacus sed finibus pellentesque, orci enim luctus leo, id tincidunt elit sapien pellentesque lacus. Nullam et tincidunt tellus. Ut placerat commodo ligula, luctus auctor turpis sodales mattis. Morbi neque turpis, bibendum ac dolor at, commodo commodo turpis.</p>
              </div>

              <div id='par3'>
                <p className="par">Ut gravida nisi condimentum est consectetur eleifend. Morbi orci tortor, euismod ac volutpat quis, consectetur ac magna. Aliquam erat volutpat. Ut ac malesuada elit, non faucibus turpis. Aenean commodo quam turpis. </p>
              </div>
        </div>
      </div>
    )
  }
}

export default About;
