import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import '../style.css';
import GoogleMapReact from 'google-map-react';





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

  showingDetails(event) {
    var val = event.target.id;
    console.log(val);
      let idDetailsOverlay = val;
      let properValue = Number((val).match(/\d+$/));
      console.log(properValue);
      let detailsOfOffert = document.querySelector('#detail_'+ properValue);
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
  let overlayID = document.getElementsByClassName('overlay');

  for(let i=0; i < apartmentID.length; i++ ){
     apartmentID[i].id = i;
     detailID[i].id = "detail_" + i;
     overlayID[i].id = "over_" + i;
    }
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
        <div className="header">
          <div className="header_backgorund">
            <img className="icon" src={require('../images/my_logo.png')} alt='' />
            <button className="menu_btn"
              onClick={() => this.main()}
              onMouseEnter={(event) => this.mouseEnter(event)} onMouseLeave={(event) => this.mouseLeave(event)}
            > Main </button>
            <button className="menu_btn"
              onClick={() => this.about()}
              onMouseEnter={(event) => this.mouseEnter(event)} onMouseLeave={(event) => this.mouseLeave(event)}
            > About </button>
            <button className="menu_btn"
              onClick={() => this.contact()}
              onMouseEnter={(event) => this.mouseEnter(event)} onMouseLeave={(event) => this.mouseLeave(event)}
            > Contact </button>
          </div>
        </div>

        <div>
          <img className="background_photo" src={require('../images/backgorund_photo.jpg')} alt='' />
        </div>
        <div className="greyBackground center2"
          id="doesn't have"
          onClick={(id) => this.hidingDetails()} />

        <div className="apartments">
            <div
              className="full"
              onClick={(event)=>this.showingDetails(event)}
            >
              <img
                  src={require('../images/apartment0.jpg')}
                  alt=''
                  className="apartment apartment_style apartment_border_0"
                />
                <div className="overlay">
                  <div className="overlay_text">Lorem Ipsum 0</div>
                </div>
            </div>

            <div
              className="full"
              onClick={(event)=>this.showingDetails(event)}
            >
              <img
                src={require('../images/apartment1.jpg')}
                alt=''
                className="apartment apartment_style apartment_border_1"
               />
               <div className="overlay">
                 <div className="overlay_text">Lorem Ipsum 1</div>
               </div>
            </div>
            <div
              className="full"
              onClick={(event)=>this.showingDetails(event)}
            >
              <img
                src={require('../images/apartment2.jpg')}
                alt=''
                className="apartment apartment_style apartment_border_2"
             />
             <div className="overlay">
               <div className="overlay_text">Lorem Ipsum 2</div>
             </div>
          </div>
          <div
            className="full"
            onClick={(event)=>this.showingDetails(event)}
          >
              <img
                src={require('../images/apartment3.jpg')}
                alt=''
                className="apartment apartment_style apartment_border_3"
               />
               <div className="overlay">
                 <div className="overlay_text">Lorem Ipsum 3</div>
               </div>
          </div>
          <div
            className="full"
            onClick={(event)=>this.showingDetails(event)}
          >
              <img
                src={require('../images/apartment4.jpg')}
                alt=''
                className="apartment apartment_style apartment_border_4"
           />
           <div className="overlay">
             <div className="overlay_text">Lorem Ipsum 4</div>
           </div>
          </div>
          <div
            className="full"
            onClick={(event)=>this.showingDetails(event)}
          >
              <img
                src={require('../images/apartment5.jpg')}
                alt=''
                className="apartment apartment_style apartment_border_5"
                 />
                 <div className="overlay">
                   <div className="overlay_text">Lorem Ipsum 5</div>
                 </div>
          </div>
          <div
            className="full"
            onClick={(event)=>this.showingDetails(event)}
          >
              <img
                src={require('../images/apartment6.jpg')}
                alt=''
                className="apartment apartment_style apartment_border_6"
               />
               <div className="overlay">
                 <div className="overlay_text">Lorem Ipsum 6</div>
               </div>
          </div>
          <div
            className="full"
            onClick={(event)=>this.showingDetails(event)}
          >
              <img
                src={require('../images/apartment7.jpg')}
                alt=''
                className="apartment apartment_style apartment_border_7"
                 />
                 <div className="overlay">
                   <div className="overlay_text">Lorem Ipsum 7</div>
                 </div>
          </div>
          <div
            className="full"
            onClick={(event)=>this.showingDetails(event)}
          >
            <img
              src={require('../images/apartment8.jpg')}
              alt=''
              className="apartment apartment_style apartment_border_8"
               />
               <div className="overlay">
                 <div className="overlay_text">Lorem Ipsum 8</div>
               </div>
          </div>

            <div className="detail center2 apartment_border_0">
              <div>
                <p className="infos middle">Lorem ipsum 0</p>
                <img
                  src={require('../images/apartment0.jpg')}
                  alt=''
                  className="showed apartment_style" />
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
                    bootstrapURLKeys={{ key: /*here is a key */ }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom} >
                    <AnyReactComponent
                      lat={51.122890}
                      lng={17.031890}
                      value='text' />
                  </GoogleMapReact>
                </div>
              </div>

              <div className="detail center2 apartment_border_1">
                <div>
                  <p className="infos middle">Lorem ipsum 1</p>
                  <img
                    src={require('../images/apartment1.jpg')}
                    alt=''
                    className="showed apartment_style" />
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
                      bootstrapURLKeys={{ key: /*here is a key */ }}
                      defaultCenter={this.props.center}
                      defaultZoom={this.props.zoom} >
                      <AnyReactComponent
                        lat={51.092610}
                        lng={17.022700}
                        text="Lorem ipsum 1" />
                    </GoogleMapReact>
                  </div>
                </div>

                <div className="detail center2 apartment_border_2">
                  <div>
                    <p className="infos middle">Lorem ipsum 2</p>
                    <img
                      src={require('../images/apartment2.jpg')}
                      alt=''
                      className="showed apartment_style" />
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
                        bootstrapURLKeys={{ key: /*here is a key */ }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom} >
                        <AnyReactComponent
                          lat={51.109140}
                          lng={17.029300}
                          text="Lorem ipsum 2" />
                        </GoogleMapReact>
                      </div>
                    </div>

                    <div className="detail center2 apartment_border_3">
                      <div>
                        <p className="infos middle">Lorem ipsum 3</p>
                        <img
                          src={require('../images/apartment3.jpg')}
                          alt=''
                          className="showed apartment_style" />
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
                          bootstrapURLKeys={{ key: /*here is a key */ }}
                          defaultCenter={this.props.center}
                          defaultZoom={this.props.zoom} >
                          <AnyReactComponent
                            lat={51.106040}
                            lng={17.074980}
                            text="Lorem ipsum 3" />
                        </GoogleMapReact>
                      </div>
                    </div>

                    <div className="detail center2 apartment_border_4">
                      <div>
                        <p className="infos middle">Lorem ipsum 4</p>
                        <img
                          src={require('../images/apartment4.jpg')}
                          alt=''
                          className="showed apartment_style" />
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
                          bootstrapURLKeys={{ key: /*here is a key */ }}
                          defaultCenter={this.props.center}
                          defaultZoom={this.props.zoom} >
                             <AnyReactComponent
                              lat={51.122890}
                              lng={17.031890}
                              text="Lorem ipsum 4" />
                          </GoogleMapReact>
                        </div>
                      </div>

                      <div className="detail center2 apartment_border_5">
                        <div>
                          <p className="infos middle">Lorem ipsum 5</p>
                          <img
                            src={require('../images/apartment5.jpg')}
                            alt=''
                            className="showed apartment_style" />
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
                            bootstrapURLKeys={{ key: /*here is a key */ }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}  >
                            <AnyReactComponent
                              lat={51.122890}
                              lng={17.031890}
                              text="Lorem ipsum 5" />
                          </GoogleMapReact>
                        </div>
                      </div>

                      <div className="detail center2 apartment_border_6">
                        <div>
                        <p className="infos middle">Lorem ipsum 6</p>
                        <img
                          src={require('../images/apartment6.jpg')}
                          alt=''
                          className="showed apartment_style" />
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
                            bootstrapURLKeys={{ key: /*here is a key */' }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom} >
                            <AnyReactComponent
                              lat={51.122890}
                              lng={17.031890}
                              text="Lorem ipsum 6" />
                          </GoogleMapReact>
                        </div>
                      </div>

                      <div className="detail center2 apartment_border_7">
                        <div>
                        <p className="infos middle">Lorem ipsum 7</p>
                        <img
                          src={require('../images/apartment7.jpg')}
                          alt=''
                          className="showed apartment_style" />
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
                            bootstrapURLKeys={{ key: /*here is a key */ }}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom} >
                            <AnyReactComponent
                              lat={51.122890}
                              lng={17.031890}
                              text="Lorem ipsum 7" />
                          </GoogleMapReact>
                        </div>
                      </div>

                      <div className="detail center2 apartment_border_8">
                        <div>
                          <p className="infos middle">Lorem ipsum 8</p>
                          <img
                            src={require('../images/apartment8.jpg')}
                            alt=''
                            className="showed apartment_style" />
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
                              bootstrapURLKeys={{ key: /*here is a key */ }}
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
