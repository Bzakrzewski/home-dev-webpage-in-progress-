import React, {Component} from 'react';
import {browserHistory} from 'react-router';
import styled from 'styled-components'
import Coverflow from 'react-coverflow';
import '../style.css';


const Header = styled.div`
  position: fixed;
  display: inline-block;
  z-index: 2;
`

const Header_backgorund = styled.div`
  width: 98.3vw;
  height: 15vh;
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
  height: 102vh;
  position: absolute;
`

const Apartament = styled.img`
  width: 14vw;
  height: 26vh;
  margin: 5%;
  margin-left: 9%;
  margin-right: 9%;
  margin-bottom: 0%;
  z-index: 3;
  border-radius: 25px;
  border-style: solid;
  border-width: 3px;
  /*https://www.cssmatic.com/box-shadow*/
  -webkit-box-shadow: -7px -5px 19px 0px rgba(0,0,0,0.75);
  -moz-box-shadow: -7px -5px 19px 0px rgba(0,0,0,0.75);
  box-shadow: -7px -5px 19px 0px rgba(0,0,0,0.75);
`

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
    let coverFlowID = document.getElementsByClassName('coverFlowApartament');
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

  render() {
    return(
      <div>
        <Header>
          <Header_backgorund>
            <Icon src={require('../images/my_logo.png')} alt='' />
            <Button
              onClick={() => this.about()}
              onMouseEnter={(event) => this.mouseEnter(event)} onMouseLeave={(event) => this.mouseLeave(event)}
            > About </Button>
            <Button
              onClick={() => this.offer()}
              onMouseEnter={(event) => this.mouseEnter(event)} onMouseLeave={(event) => this.mouseLeave(event)}
            > Offer </Button>
            <Button
              onClick={() => this.contact()}
              onMouseEnter={(event) => this.mouseEnter(event)} onMouseLeave={(event) => this.mouseLeave(event)}
            > Contact </Button>
          </Header_backgorund>
        </Header>

        <div className="zxc">
          <Background_photo src={require('../images/backgorund_photo.jpg')}
                 alt='' />
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
                className='coverFlowApartament'
                style={{
                  display: 'block',
                  width: '100%',
                }}
              />
            </div>
              <img src={require('../images/apartment1.jpg')} alt='' className='coverFlowApartament'/>
              <img src={require('../images/apartment2.jpg')} alt='' className='coverFlowApartament'/>
              <img src={require('../images/apartment3.jpg')} alt='' className='coverFlowApartament'/>
              <img src={require('../images/apartment4.jpg')} alt='' className='coverFlowApartament'/>
          </Coverflow>
        </div>
        <div className="greyBackground center2"
             id="doesn't have it"
             onClick={(id) => this.closingApartMain()} />
        <div className="apartments ">


            <div className="apartmentsMain center2">
              <div>
                <p className="infos middle">Lorem ipsum</p>
                <Apartament
                  src={require('../images/apartment0.jpg')}
                  alt=''
                  className="showed"
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
            </div>


            <div className="apartmentsMain center2">
              <div>
                <p className="infos middle">Lorem ipsum</p>
                <Apartament
                  src={require('../images/apartment1.jpg')}
                  alt=''
                  className="showed"
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


            <div className="apartmentsMain center2">
              <div>
                <p className="infos middle">Lorem ipsum</p>
                <Apartament
                  src={require('../images/apartment2.jpg')}
                  alt=''
                  className="showed"
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


            <div className="apartmentsMain center2">
              <div>
                <p className="infos middle">Lorem ipsum</p>
                <Apartament
                  src={require('../images/apartment3.jpg')}
                  alt=''
                  className="showed"
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


            <div className="apartmentsMain center2">
              <div>
                <p className="infos middle">Lorem ipsum</p>
                <Apartament
                  src={require('../images/apartment4.jpg')}
                  alt=''
                  className="showed"
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
