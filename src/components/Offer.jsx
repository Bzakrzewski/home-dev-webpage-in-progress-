import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import styled from 'styled-components'
import '../style.css';
import GoogleMapReact from 'google-map-react';

const Header = styled.div`
  position: fixed;
  display: inline-block;
  z-index: 2;
`
const Header_backgorund = styled.div`
  width: 98.3vw;
  height: 15vh;
  position: absolute;
  z-index: 2;
`
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
const Background_photo = styled.img`
  width: 100vw;
  height: 150%;
  margin-left: -1%;
  margin-top: -1%;
`
const Apartament = styled.img`
  width: 14vw;
  height: 26vh;
  margin: 5%;
  margin-left: 9%;
  margin-right: 9%;
  margin-bottom: 0%;
  z-index: -1 !important;
  border-radius: 25px;
  border-style: solid;
  border-width: 3px;
  font-family: Courier New,Courier,Lucida Sans Typewriter,Lucida Typewriter,monospace;
  /*https://www.cssmatic.com/box-shadow*/
  -webkit-box-shadow: -7px -5px 19px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: -7px -5px 19px 0px rgba(0,0,0,0.75);
  box-shadow: -7px -5px 19px 0px rgba(0,0,0,0.75);
`
const AnyReactComponent = () => <img src=
      {require('../images/icons8-marker-48.png')}
       alt=''
        />;

class Offer extends Component {
  constructor(props){
      super(props);
      this.state = {
        apartments: [
          {apartment0: "apartment0", id: 0}
        ]
      }
    }

  about() { browserHistory.replace('/About'); }
  main() { browserHistory.replace('/Main'); }
  contact() { browserHistory.replace('/Contact'); }
  mouseEnter(event) { event.target.style.color = 'white'; }
  mouseLeave(event) { event.target.style.color = 'black'; }

  center2() {
    let centerMenu1 = document.querySelector('.center2');
    centerMenu1.classList.toggle('center');
  }

  showingDetails(i) {
    let idDetails = i.target.id;
    let detailsOfOffert = document.querySelector('#detail_'+ idDetails);
    detailsOfOffert.classList.toggle('center');
    let centerMenu2 = document.querySelector('.center2');
    centerMenu2.classList.toggle('centerBackgorund');
  }

  hidingDetails() {
    let detailsOfOffert = document.querySelector('.center');
    detailsOfOffert.classList.toggle('center');
    let centerMenu2 = document.querySelector('.center2');
    centerMenu2.classList.toggle('centerBackgorund');
  }

componentDidMount = () => {
  let apartmentID = document.getElementsByClassName('apartment');
  let detailID = document.getElementsByClassName('detail');

  for(let i=0; i < apartmentID.length; i++ ){
     apartmentID[i].id = i;
    }

  for(let i=0; i < detailID.length; i++ ){
       detailID[i].id = "detail_" + i;
      }

    apartmentID[0].style="border-color: #70FFC6;"
    apartmentID[1].style="border-color: #FFDA24;"
    apartmentID[2].style="border-color: #804512;"
    apartmentID[3].style="border-color: #2495FF;"
    apartmentID[4].style="border-color: #7B8D8E;"
    apartmentID[5].style="border-color: #FF526F;"
    apartmentID[6].style="border-color: #FEF1F2;"
    apartmentID[7].style="border-color: #FF9547;"
    apartmentID[8].style="border-color: #4FC0E8;"
  }

  static defaultProps = {
      center: {
        lat: 51.110790,
        lng: 17.031870
      },
      zoom: 12
    };

  render() {
    return(
      <div>
        <Header>
          <Header_backgorund>
            <Icon src={require('../images/my_logo.png')} alt='' />
            <Button
              onClick={() => this.main()}
              onMouseEnter={(event) => this.mouseEnter(event)} onMouseLeave={(event) => this.mouseLeave(event)}
            > Main </Button>
            <Button
              onClick={() => this.about()}
              onMouseEnter={(event) => this.mouseEnter(event)} onMouseLeave={(event) => this.mouseLeave(event)}
            > About </Button>
            <Button
              onClick={() => this.contact()}
              onMouseEnter={(event) => this.mouseEnter(event)} onMouseLeave={(event) => this.mouseLeave(event)}
            > Contact </Button>
          </Header_backgorund>
        </Header>

        <div>
          <Background_photo src={require('../images/backgorund_photo.jpg')} alt='' />
        </div>
        <div className="greyBackground center2"
          id="doesn't have"
          onClick={(id) => this.hidingDetails()} />

        <div className="apartments">
            <Apartament
              src={require('../images/apartment0.jpg')}
              alt=''
              className="apartment"
              onClick={(id)=>this.showingDetails(id)} />
            <Apartament
              src={require('../images/apartment1.jpg')}
              alt=''
              className="apartment"
              onClick={(id)=>this.showingDetails(id)} />
            <Apartament
              src={require('../images/apartment2.jpg')}
              alt=''
              className="apartment"
              onClick={(id)=>this.showingDetails(id)} />
            <Apartament
              src={require('../images/apartment3.jpg')}
              alt=''
              className="apartment"
              onClick={(id)=>this.showingDetails(id)} />
            <Apartament
              src={require('../images/apartment4.jpg')}
              alt=''
              className="apartment"
              onClick={(id)=>this.showingDetails(id)} />
            <Apartament
              src={require('../images/apartment5.jpg')}
              alt=''
              className="apartment"
              onClick={(id)=>this.showingDetails(id)} />
            <Apartament
              src={require('../images/apartment6.jpg')}
              alt=''
              className="apartment"
              onClick={(id)=>this.showingDetails(id)} />
            <Apartament
              src={require('../images/apartment7.jpg')}
              alt=''
              className="apartment"
              onClick={(id)=>this.showingDetails(id)} />
            <Apartament
              src={require('../images/apartment8.jpg')}
              alt=''
              className="apartment"
              onClick={(id)=>this.showingDetails(id)} />

            <div className="detail center2">
              <div>
                <p className="infos middle">Lorem ipsum 0</p>
                <Apartament
                  src={require('../images/apartment0.jpg')}
                  alt=''
                  className="showed" />
                <p className="infos">Address</p>
                <br />
                <p className="infos">Price: 200 000</p>
                <p className="infos">Number of rooms: 2</p>
                <p className="infos">Yardage: 40m2</p>
                <br />
                <p className="infos">Features:</p>
                <br />
                <p className="features">Garage</p>
                <p className="features">Parking</p>
                <p className="features">Monitoring</p>
              </div>
                <button className="showInvest"> Show investment </button>
                <div style={{ height: '400px', width: '100%' }}>
                  <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyCHbjs-2bDn06o_-VNoJq4V0ub3JTehNU8' }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom} >
                    <AnyReactComponent
                      lat={51.122890}
                      lng={17.031890}
                      value='text' />
                  </GoogleMapReact>
                </div>
              </div>

              <div className="detail center2">
                <div>
                  <p className="infos middle">Lorem ipsum 1</p>
                  <Apartament
                    src={require('../images/apartment1.jpg')}
                    alt=''
                    className="showed" />
                  <p className="infos">Address</p>
                  <br />
                  <p className="infos">Price: 200 000</p>
                  <p className="infos">Number of rooms: 2</p>
                  <p className="infos">Yardage: 40m2</p>
                  <br />
                  <p className="infos">Features:</p>
                  <br />
                  <p className="features">Garage</p>
                  <p className="features">Parking</p>
                  <p className="features">Monitoring</p>
                </div>
                  <button className="showInvest"> Show investment </button>
                  <div style={{ height: '407.5px', width: '100%' }}>
                    <GoogleMapReact
                      bootstrapURLKeys={{ key: /*here is my api key*/ }}
                      defaultCenter={this.props.center}
                      defaultZoom={this.props.zoom} >
                      <AnyReactComponent
                        lat={51.092610}
                        lng={17.022700}
                        text="Lorem ipsum 1" />
                    </GoogleMapReact>
                  </div>
                </div>

                <div className="detail center2">
                  <div>
                    <p className="infos middle">Lorem ipsum 2</p>
                    <Apartament
                      src={require('../images/apartment2.jpg')}
                      alt=''
                      className="showed" />
                    <p className="infos">Address</p>
                    <br />
                    <p className="infos">Price: 200 000</p>
                    <p className="infos">Number of rooms: 2</p>
                    <p className="infos">Yardage: 40m2</p>
                    <br />
                    <p className="infos">Features:</p>
                    <br />
                    <p className="features">Garage</p>
                    <p className="features">Parking</p>
                    <p className="features">Monitoring</p>
                    </div>
                    <button className="showInvest"> Show investment </button>
                    <div style={{ height: '200px', width: '100%' }}>
                      <GoogleMapReact
                        bootstrapURLKeys={{ key: 'AIzaSyCHbjs-2bDn06o_-VNoJq4V0ub3JTehNU8' }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom} >
                        <AnyReactComponent
                          lat={51.109140}
                          lng={17.029300}
                          text="Lorem ipsum 2" />
                        </GoogleMapReact>
                      </div>
                    </div>

                    <div className="detail center2">
                      <div>
                        <p className="infos middle">Lorem ipsum 3</p>
                        <Apartament
                          src={require('../images/apartment3.jpg')}
                          alt=''
                          className="showed" />
                        <p className="infos">Address</p>
                        <br />
                        <p className="infos">Price: 200 000</p>
                        <p className="infos">Number of rooms: 2</p>
                        <p className="infos">Yardage: 40m2</p>
                        <br />
                        <p className="infos">Features:</p>
                        <br />
                        <p className="features">Garage</p>
                        <p className="features">Parking</p>
                        <p className="features">Monitoring</p>
                        </div>
                        <button className="showInvest"> Show investment </button>
                        <div style={{ height: '200px', width: '100%' }}>
                        <GoogleMapReact
                          bootstrapURLKeys={{ key: 'AIzaSyCHbjs-2bDn06o_-VNoJq4V0ub3JTehNU8' }}
                          defaultCenter={this.props.center}
                          defaultZoom={this.props.zoom} >
                          <AnyReactComponent
                            lat={51.106040}
                            lng={17.074980}
                            text="Lorem ipsum 3" />
                        </GoogleMapReact>
                      </div>
                    </div>

                    <div className="detail center2">
                      <div>
                        <p className="infos middle">Lorem ipsum 4</p>
                        <Apartament
                          src={require('../images/apartment4.jpg')}
                          alt=''
                          className="showed" />
                        <p className="infos">Address</p>
                        <br />
                        <p className="infos">Price: 200 000</p>
                        <p className="infos">Number of rooms: 2</p>
                        <p className="infos">Yardage: 40m2</p>
                        <br />
                        <p className="infos">Features:</p>
                        <br />
                        <p className="features">Garage</p>
                        <p className="features">Parking</p>
                        <p className="features">Monitoring</p>
                      </div>
                      <button className="showInvest"> Show investment </button>
                      <div style={{ height: '200px', width: '100%' }}>
                        <GoogleMapReact
                          bootstrapURLKeys={{ key: 'AIzaSyCHbjs-2bDn06o_-VNoJq4V0ub3JTehNU8' }}
                          defaultCenter={this.props.center}
                          defaultZoom={this.props.zoom} >
                             <AnyReactComponent
                              lat={51.122890}
                              lng={17.031890}
                              text="Lorem ipsum 4" />
                          </GoogleMapReact>
                        </div>
                      </div>

                      <div className="detail center2">
                        <div>
                          <p className="infos middle">Lorem ipsum 5</p>
                          <Apartament
                            src={require('../images/apartment5.jpg')}
                            alt=''
                            className="showed" />
                          <p className="infos">Address</p>
                          <br />
                          <p className="infos">Price: 200 000</p>
                          <p className="infos">Number of rooms: 2</p>
                          <p className="infos">Yardage: 40m2</p>
                          <br />
                          <p className="infos">Features:</p>
                          <br />
                          <p className="features">Garage</p>
                          <p className="features">Parking</p>
                          <p className="features">Monitoring</p>
                        </div>
                        <button className="showInvest"> Show investment </button>
                        <div style={{ height: '200px', width: '100%' }}>
                          <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyCHbjs-2bDn06o_-VNoJq4V0ub3JTehNU8' }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}  >
                            <AnyReactComponent
                              lat={51.122890}
                              lng={17.031890}
                              text="Lorem ipsum 5" />
                          </GoogleMapReact>
                        </div>
                      </div>

                      <div className="detail center2">
                        <div>
                        <p className="infos middle">Lorem ipsum 6</p>
                        <Apartament
                          src={require('../images/apartment6.jpg')}
                          alt=''
                          className="showed" />
                        <p className="infos">Address</p>
                        <br />
                        <p className="infos">Price: 200 000</p>
                        <p className="infos">Number of rooms: 2</p>
                        <p className="infos">Yardage: 40m2</p>
                        <br />
                        <p className="infos">Features:</p>
                        <br />
                        <p className="features">Garage</p>
                        <p className="features">Parking</p>
                        <p className="features">Monitoring</p>
                        </div>
                        <button className="showInvest"> Show investment </button>
                        <div style={{ height: '200px', width: '100%' }}>
                          <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyCHbjs-2bDn06o_-VNoJq4V0ub3JTehNU8' }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom} >
                            <AnyReactComponent
                              lat={51.122890}
                              lng={17.031890}
                              text="Lorem ipsum 6" />
                          </GoogleMapReact>
                        </div>
                      </div>

                      <div className="detail center2">
                        <div>
                        <p className="infos middle">Lorem ipsum 7</p>
                        <Apartament
                          src={require('../images/apartment7.jpg')}
                          alt=''
                          className="showed" />
                        <p className="infos">Address</p>
                        <br />
                        <p className="infos">Price: 200 000</p>
                        <p className="infos">Number of rooms: 2</p>
                        <p className="infos">Yardage: 40m2</p>
                        <br />
                        <p className="infos">Features:</p>
                        <br />
                        <p className="features">Garage</p>
                        <p className="features">Parking</p>
                        <p className="features">Monitoring</p>
                        </div>
                        <button className="showInvest"> Show investment </button>
                        <div style={{ height: '200px', width: '100%' }}>
                          <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyCHbjs-2bDn06o_-VNoJq4V0ub3JTehNU8' }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom} >
                            <AnyReactComponent
                              lat={51.122890}
                              lng={17.031890}
                              text="Lorem ipsum 7" />
                          </GoogleMapReact>
                        </div>
                      </div>

                      <div className="detail center2">
                        <div>
                          <p className="infos middle">Lorem ipsum 8</p>
                          <Apartament
                            src={require('../images/apartment8.jpg')}
                            alt=''
                            className="showed" />
                          <p className="infos">Address</p>
                          <br />
                          <p className="infos">Price: 200 000</p>
                          <p className="infos">Number of rooms: 2</p>
                          <p className="infos">Yardage: 40m2</p>
                          <br />
                          <p className="infos">Features:</p>
                          <br />
                          <p className="features">Garage</p>
                          <p className="features">Parking</p>
                          <p className="features">Monitoring</p>
                          </div>
                          <button className="showInvest"> Show investment </button>
                          <div style={{ height: '200px', width: '100%' }}>
                            <GoogleMapReact
                              bootstrapURLKeys={{ key: 'AIzaSyCHbjs-2bDn06o_-VNoJq4V0ub3JTehNU8' }}
                              defaultCenter={this.props.center}
                              defaultZoom={this.props.zoom} >
                              <AnyReactComponent
                                lat={51.122890}
                                lng={17.031890}
                                text="Lorem ipsum 8" />
                            </GoogleMapReact>
                           </div>
                        </div>

                  </div>
          </div>
        )
      }
    }

export default Offer;
