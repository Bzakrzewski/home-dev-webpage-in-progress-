import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import Coverflow from 'react-coverflow';
import '../style.css';
import GoogleMapReact from 'google-map-react';




const AnyReactComponent = () => <img src=
      {require('../images/icons8-marker-48.png')}
       alt=''
        />;



let pics = document.getElementsByClassName('coverflow__figure__3bk_C');

class Main extends Component {
  about() { browserHistory.replace('/About'); }
  offer() { browserHistory.replace('/Offer'); }
  contact() { browserHistory.replace('/Contact'); }

  mouseEnter(event) { event.target.style.color = 'white'; }
  mouseLeave(event) { event.target.style.color = 'black'; }

  closingApartMain() {
    let visibleApartMain = document.querySelector('.center');
    visibleApartMain.classList.toggle('center');
    let centerMenu2 = document.querySelector('.center2');
    centerMenu2.classList.toggle('centerBackgorund');
  }

  componentDidMount = () => {
    let coverFlowID = document.getElementsByClassName('coverFlowApartment');
    let apartMainID = document.getElementsByClassName('apartmentsMain');

    for(let i=0; i < coverFlowID.length; i++ ){
       coverFlowID[i].id = i;
      }
    for(let i=0; i < apartMainID.length; i++ ) {
      apartMainID[i].id = "apartMain_" + i;
      }
    for (let i = 0; i < pics.length; i++) {
        pics[i].addEventListener('click', function(){
          if(pics[i].style.opacity === '1') {
            let visibleApartMain = document.querySelector('#apartMain_'+ i);
            visibleApartMain.classList.toggle('center');
            let centerMenu2 = document.querySelector('.center2');
            centerMenu2.classList.toggle('centerBackgorund');
          }
        });
    }
  }

  static defaultProps = {
      center: {
        lat: 51.121620,
        lng: 17.032000
      },
      zoom: 15
    };

  render() {
    return(
      <div>
        <div className="header">
          <div className="header_backgorund">
            <img className="icon" src={require('../images/my_logo.png')} alt='' />
            <button className="menu_btn"
              onClick={() => this.about()}
              onMouseEnter={(event) => this.mouseEnter(event)} onMouseLeave={(event) => this.mouseLeave(event)}
            > About </button>
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

        <div className="zxc">
          <img className="background_photo" src={require('../images/backgorund_photo.jpg')}
                 alt='' style={{position: 'absolute',
                                height: '102vh'
               }}/>
          <Coverflow
            width="800" height="501"
            displayQuantityOfSide={2}
            navigation={false}
            enableScroll={true}
            clickable={true}
            active={0}
          >
            <div
              role="menuitem"
              tabIndex="0"
            >
              <img
                src={require('../images/apartment0.jpg')}
                alt=''
                className='coverFlowApartment'
                style={{
                  display: 'block',
                  width: '100%',
                }}
              />
            </div>
              <img src={require('../images/apartment1.jpg')} alt='' className='coverFlowApartment'/>
              <img src={require('../images/apartment2.jpg')} alt='' className='coverFlowApartment'/>
              <img src={require('../images/apartment3.jpg')} alt='' className='coverFlowApartment'/>
              <img src={require('../images/apartment4.jpg')} alt='' className='coverFlowApartment'/>
          </Coverflow>
        </div>
        <div className="greyBackground center2"
             id="doesn't have it"
             onClick={(id) => this.closingApartMain()} />
        <div className="apartments ">


            <div className="apartmentsMain center2 apartment_border_0">
              <div>
                <p className="infos middle">Lorem ipsum</p>
                <img
                  src={require('../images/apartment0.jpg')}
                  alt=''
                  className="showed apartment_style"
                />
                <p className="infos">Address</p>
                <br />
                <p className="infos">Price: 200 000y</p>
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
                <div style={{ height: '170px', width: '100%' }}>
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


            <div className="apartmentsMain center2 apartment_border_1">
              <div>
                <p className="infos middle">Lorem ipsum</p>
                <img
                  src={require('../images/apartment1.jpg')}
                  alt=''
                  className="showed apartment_style"
                />
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
            </div>


            <div className="apartmentsMain center2 apartment_border_2">
              <div>
                <p className="infos middle">Lorem ipsum</p>
                <img
                  src={require('../images/apartment2.jpg')}
                  alt=''
                  className="showed apartment_style"
                />
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
            </div>


            <div className="apartmentsMain center2 apartment_border_3">
              <div>
                <p className="infos middle">Lorem ipsum</p>
                <img
                  src={require('../images/apartment3.jpg')}
                  alt=''
                  className="showed apartment_style"
                />
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
            </div>


            <div className="apartmentsMain center2 apartment_border_4">
              <div>
                <p className="infos middle">Lorem ipsum</p>
                <img
                  src={require('../images/apartment4.jpg')}
                  alt=''
                  className="showed apartment_style"
                />
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
            </div>
        </div>
      </div>
    )
  }
}

export default Main;
