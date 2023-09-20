import './App.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import Popup from 'reactjs-popup'

function App() {
  return (
    <div>
      {/*navbar*/}
      <nav className='all-align'>
        <div  className="logo-align">
        <div className='img-align'>
        <img className="nav-logo" src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695128704/NIL_logo_Transparent_1_1_uhvyc9.png" alt="logo"/>
        <img className="company-name" src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695128713/Screenshot_2023-07-25_165513-removebg-preview_1_kd8ned.png" alt="notinline"/>
        </div>
        <div className="para-align">
        <p className="logo-para">Home</p>
        <p className="logo-para">Health conditions</p>
        <p className="logo-lab">lab tests</p>
        <p className="logo-para">Medicine</p>
        <div className="button-align">
        <button className="logo-button">For patients</button>
        <button className="logo-button">For hospitals</button>
        </div>
        <button className="play-button">
          <img className="play-img" src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695131048/Rectangle_48_n1alay.png" alt="play-store"/>
          <p className="play-para">play store</p>
        </button>
        </div>
        </div>
        <div>
        <Popup
          trigger={
            <button type="button" className='hamburger'>
              <GiHamburgerMenu size={25}/>
            </button>
          }
        >
          {close => (
            <div className="modal-container">
              <ul className='popup-align'>
              <li className="logo-para">Home</li>
              <li className="logo-para">Health conditions</li>
              <li className="logo-lab">lab tests</li>
              <li className="logo-para">Medicine</li>
              <li>
              <button className="logo-button">For patients</button>
              <button className="logo-button">For hospitals</button>
              </li>
              <li className='button-align'>
              <button className="play-button">
              <img className="play-img" src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695131048/Rectangle_48_n1alay.png" alt="play-store"/>
              <p className="play-para">play store</p>
              </button>
              </li>
              </ul>
              <button type="button" className="close-btn">
                <AiOutlineCloseCircle size={18} onClick={() => close()} />
              </button>
            </div>
          )}
        </Popup>
        </div>

      </nav>
      

      {/*fill-details*/}
      <div className='fill'>
        <div className='fill-all'>
        <div className='fill-align'>
          <h1 className='fill-heading'>Fill in the details to get a call!</h1>
          <div className="input-align">
            <img className='fill-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695141412/person_afgon3.svg" alt="person"/>
            <input className='fill-input' placeholder='Full name'/>
          </div>
          <div className="input-align">
            <img className='fill-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695141808/call_hi8dic.svg" alt="phone"/>
            <input className='fill-input' placeholder='Phone number'/>
          </div>
          <div className="input-align">
            <img className='fill-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695141815/distance_azoxok.svg" alt="location"/>
            <input className='fill-input' placeholder='Location'/>
          </div>
          <div className='details-align'>
            <img className='check-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695141911/check_igdd6s.svg" alt="check"/>
            <p className='fill-para'>By continuing, you agree to our <span className='span-para'>T&C </span>and privacy policy</p>
          </div>
          <div className='fill-button-align'>
          <button className='fill-button'>Proceed</button>
          </div>
          </div>
          <div className='button-display'>
          <button className='button-offer'>Get a Full Body Checkup <span className='button-offer1'>Now</span> at</button>
          <p className='offer-para'>70% OFF</p>
          <button className='mobile'>70% OFF</button>
          </div>
          </div>
          <div>
            <div className='arrange'>
            <div className='align-best'>
            <h1 className='best-heading'>Best in class</h1>
            <img className='best-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695177368/Vector_1_wbh8nq.png" alt="line"/>
            </div>
            <h1 className='lab-head'>lab tests!</h1>
            </div>
            <div className='arrange-box'>
            <div className='lab-img'>
              <div className='box'>
                <img className='box-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695180377/Ellipse_1_lwanlm.svg" alt="eclipse1"/>
                <p className='box-para'>Timely sample collection</p>
                </div>
                <div className='box1'>
                <img className='box-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695189799/Ellipse_2_lrtubn.svg" alt="eclipse1"/>
                <p className='box-para'>Complementary report consultation</p>
                </div>
                <div className='box2'>
                <img className='box-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695189928/Ellipse_3_zfqb5f.svg" alt="eclipse1"/>
                <p className='box-para'>Accurate timely reports</p>
                </div>
            </div>
            </div>
          </div>

      </div>


       {/* NABL */}
       <div>
        <div className='nabl-whole-align'> 
        <div className='nabl-align'>
          <img src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695189964/Rectangle_80_xocdnd.png" alt="nabl"/>
          <p className='nabl-para'>NABL Accredited Labs</p>
        </div>
        <div className='nabl-align'>
          <img src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695189971/Rectangle_81_kybim9.png" alt="sample"/>
          <p className='nabl-para'>Free sample collection</p>
        </div>
        </div> 
        <div className='explanding'>
          <h1 className='expand-para'>We keep</h1>
          <div className='line-div'>
            <h1 className='expand-span-para'>expanding</h1>
            <img className='expand-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695177368/Vector_1_wbh8nq.png" alt="line"/>
          </div>
          <h1 className='expand-para'>!</h1>
          </div>    
          <div className='rating-container'>
            <div className='rating'>
            <h1 className='rate-head'>5+</h1>
              <p className='rate-para'>labs</p>
            </div >
            <div className='rating'>
            <h1 className='rate-head'>100+</h1>
              <p className='rate-para'>Collection centers</p>
            </div>
            <div className='rating'>
            <h1 className='rate-head'>1000+</h1>
              <p className='rate-para'>Monthly tests</p>
            </div>
            <div className='rating'>
            <h1 className='rate-head'>2200+</h1>
              <p className='rate-para'>Test menu</p>
            </div>
            <div className='rating'>
              <h1 className='rate-head'>5+</h1>
              <p className='rate-para'>Cities present in</p>
            </div>
          </div>
          <div className='explanding'>
          <h1 className='expand-para'>Top</h1>
          <div className='line-div'>
            <h1 className='expand-span-para'>packages</h1>
            <img className='expand-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695177368/Vector_1_wbh8nq.png" alt="line"/>
          </div>
          </div> 
          <p className='explore-para'>Explore our wide range of tests! We ensure that you don’t miss out on any chance to keep yourself healthy.</p>
          <div className='whole-align'>
            <div className='rating-div'>
              <h1 className='basic'>Basic Full Body Checkup</h1>
              <div className='basic-align'>
                <p className='basic-para'>4.5</p>
                <img className='basic-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695189808/grade_l2n9oh.svg" alt="star"/>
                <p className='basic-review'>(75 reviews)</p>
              </div>
              <p className='basic-number'>Number of tests - 53</p>
              <div className='basic-align'>
              <p className='mrp-para'>MRP:</p>
                <p className='mrp-strike'><span>&#8377;</span> 10000</p>
              <p className='mrp'><span>&#8377;</span>8490</p>
              </div>
              <div className='basic-button-align'>
              <button className='basic-button'>Book Now</button>
              </div>
            </div>
            <div className='rating-div'>
              <h1 className='basic'>Advance Full Body Checkup</h1>
              <div className='basic-align'>
                <p className='basic-para'>4.7</p>
                <img className='basic-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695189808/grade_l2n9oh.svg" alt="star"/>
                <p className='basic-review'>(100 reviews)</p>
              </div>
              <p className='basic-number'>Number of tests - 12</p>
              <div className='basic-align'>
              <p className='mrp-para'>MRP:</p>
                <p className='mrp-strike'><span>&#8377;</span> 12000</p>
              <p className='mrp'><span>&#8377;</span>10000</p>
              </div>
              <div className='basic-button-align'>
              <button className='basic-button'>Book Now</button>
              </div>
            </div>
            <div className='rating-div'>
              <h1 className='basic'>Liver Function Test (LFT)</h1>
              <div className='basic-align'>
                <p className='basic-para'>4.3</p>
                <img className='basic-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695189808/grade_l2n9oh.svg" alt="star"/>
                <p className='basic-review'>(43 reviews)</p>
              </div>
              <p className='basic-number'>Number of tests - 89</p>
              <div className='basic-align'>
              <p className='mrp-para'>MRP:</p>
                <p className='mrp-strike'><span>&#8377;</span> 13299</p>
              <p className='mrp'><span>&#8377;</span>11299</p>
              </div>
              <div className='basic-button-align'>
              <button className='basic-button'>Book Now</button>
              </div>
            </div>




          </div>
        </div>

        {/*who*/}
        <div className='explore-div'>
        <div className='explanding'>
          <h1 className='expand-para'>Why</h1>
          <div className='line-div'>
            <h1 className='expand-span-para'>choose</h1>
            <img className='who-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695177368/Vector_1_wbh8nq.png" alt="line"/>
          </div>
          <h1 className='expand-para'>?</h1>
          </div>
          <p className='explore-para'>We want you and your heart to be healthy so you can live a happy life!</p>
          <div className='div-women'>
            <div className='div'>
          <div className='learn'>
          <div className='who-div'>
            <div >
            <h1 className='who-head'>NABL Accredited Labs</h1>
            <p className='who-para'>Get accurate and safe results from our NABL-certified lab partners.  </p>
            </div>
            <img className='who-end-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695198225/Ellipse_16_tysgnq.svg" alt="i"/>
            
          </div>
          <div className='who-div'>
            <div >
            <h1 className='who-head'>Value experience</h1>
            <p className='who-para'>Experience seamless care without the hassle of waiting in long lines for an appointment. Book with us for a healthier lifestyle.</p>
            </div>
            <img className='who-end-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695199103/Ellipse_14_1_cgeuw4.svg" alt="i"/>
            
          </div>
          </div>
          <div className='learn'>
          <div className='who-div'>
            <div >
            <h1 className='who-head'>Timely collections</h1>
            <p className='who-para'>We collect samples timely to prevent treatment delays and ensure your continued well-being.  </p>
            </div>
            <img className='who-end-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695199114/Ellipse_13_ijbszx.svg" alt="i"/>
            
          </div>
          <div className='who-div'>
            <div >
            <h1 className='who-head'>Transparency</h1>
            <p className='who-para'> Enjoy hassle free medical assistance with our transparent approach. We prioritize transparency for your smooth medical journey.</p>
            </div>
            <img className='who-end-img' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695199123/Ellipse_15_wnpyag.svg" alt="i"/>
            
          </div>
          </div>
          
            </div>
            <img className='doctor' src="https://res.cloudinary.com/dbpsrpa2n/image/upload/v1695199391/expressive-young-woman-posing-studio-removebg-preview-transformed_1_zvvbtc.png" alt="doctor"/>
            </div>
        </div>

    </div>
  );
}

export default App;
