import {FC, useState, useRef, useEffect, useCallback, useMemo} from 'react';
import "./Payment.css"
import Footer from '../../components/Footer/Footer';
import CardForm from '../../components/CardForm/CardForm';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { stat } from 'fs';

interface creditCard {
  creditNumber:string,
  creditName : string,
  months:string,
  year:string,
  cvv:string

}



const Payment:FC = () => {

  // const [creditCardCvv,setCreditCardCvv] = useState(false) 
  const {creditCard,boolCVV} = useTypedSelector(state =>state.payment)
  


  return (
    <>
      <div className='cont payment'>
        <div className='payment-grid'>

          <div className='flip-card'> 
            <div className='flip-card-inner' style={{transform:boolCVV ? "rotateY(180deg)":'rotateY(0)'}}>
              <div className='flip-card-front flip'>
                  <div className='card'>
                    <div>
                      <svg width="48" height="36" viewBox="0 0 100 76" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid">
                        <defs><linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="a">
                          <stop stopColor="#F3D08F" offset="0%"/><stop stopColor="#FAD766" offset="100%"/></linearGradient></defs><path d="M92.727 75.455h-85.455c-4 0-7.273-3.273-7.273-7.273v-60.909c0-4 3.273-7.273 7.273-7.273h85.455c4 0 7.273 3.273 7.273 7.273v60.909c0 4-3.273 7.273-7.273 7.273" fill="url(#a)"/><path d="M72.123 28.485h27.878v-1.818h-29.648c-.965 0-1.832.601-2.172 1.504-2.287 6.072-2.433 12.594-.438 19.842.455 1.654.435 3.4-.1 5.03-2.036 6.195-7.779 19.988-18.551 19.988-11.008 0-16.096-15.699-17.334-21.952-.155-.784-.122-1.592.107-2.357 1.695-5.648 2.094-10.64-.016-19.59-.205-.87-.182-1.783.048-2.646 4.48-16.755 12.882-20.147 12.965-20.179.356-.132.593-.472.593-.852v-5.455h-1.818v3.776c0 .65-.332 1.252-.884 1.596-2.803 1.742-8.904 6.936-12.557 20.456-.18.668-.781 1.136-1.473 1.133l-28.722-.139v1.818l27.416.133c1.468.007 2.735 1.041 3.037 2.478 1.416 6.741 1.219 11.039.082 15.458-.316 1.23-1.42 2.096-2.69 2.109l-27.844.27v1.819l28.605-.278c.693-.007 1.296.473 1.435 1.152 1.442 7.041 6.887 23.07 19.05 23.07 6.368 0 12.062-4.25 16.467-12.29 2.644-4.828 4.067-9.591 4.541-11.346h29.901v-1.818h-28.016c-1.158 0-2.183-.772-2.489-1.889-1.692-6.164-1.761-11.755-.2-16.959.371-1.235 1.538-2.061 2.827-2.061zm-17.15-21.914c.045.022 4.519 2.322 9.253 10.041.172.28.47.434.776.434.198 0 .399-.064.571-.202.365-.292.416-.837.172-1.235-3.57-5.805-7.024-8.71-8.775-9.931-.43-.299-.68-.792-.68-1.315v-4.363h-1.818v5.758c0 .345.195.659.502.813z" fill="#0C0200"/>
                    </svg>
                    </div>
                    <div className='visa'>visa</div>
                  </div>
                  <div className='card-number'>
                    <p>{creditCard.number}</p>
                  </div>
                  <div className='card-name-expiration'>
                    <div className='card-name'>
                      <span className='name'>Full name</span>
                      <span>{creditCard.name}</span>
                    </div>
                    <div className='card-name'>
                      <span className='name'>expiration MM</span>
                      <span>{creditCard.months ? creditCard.months : "M"}/{creditCard.year ? creditCard.year : "Y"}</span>
                    </div>
                  </div>
              </div>
              <div className='flip-card-back flip'>
                <div className='black-line'></div>
                <div className='cvv-card'>
                  <span>CVV</span>
                  <div className='white-line'>{creditCard.cvv}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <CardForm />
      </div>
      <Footer/>
    </>
  )
}

export default Payment