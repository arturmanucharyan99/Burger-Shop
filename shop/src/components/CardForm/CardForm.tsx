import { FC, FormEvent, memo, useEffect, useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypeSelector';
import { useDispatch } from 'react-redux';
import { ReducerTypePayment } from '../../types/payment';

interface creditCard {
  creditNumber: string;
  creditName: string;
  months: string;
  year: string;
  cvv: string;
}

const schema = yup.object().shape({
  creditNumber: yup.string().required('Credit Number is required'),
  creditName: yup.string().required('Full Name is required'),
  months: yup.string().required('Month is required'),
  year: yup.string().required('Year is required'),
  cvv: yup.string().required('CVV is required'),
});

const CardForm: FC = ({}) => {


  const { register, handleSubmit, formState: { errors } } = useForm<creditCard>({
    resolver: yupResolver(schema)
  });
  // const navigate = useNavigate();


  const {creditCard,boolCVV} = useTypedSelector(state=>state.payment)
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<creditCard> = async (data) => {
    console.log(data);
  }



  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
  //   switch (type) {
  //     case 'change':
  //       if (e.target.value.trim().length > 19) break;

  //       if(e.target.value.trim().length === 19){

  //         const stringTrim = e.target.value.replace(/\D/g, '').match(/.{1,4}/g);
  //         console.log(stringTrim?.join(' ').length);
          
  //         setCreditCard({
  //           ...creditCard,
  //           creditNumber: stringTrim ? stringTrim.join(' ') : ''
  //         });
  //       }
  //       break;
  //     case 'focus':
  //        setCreditCard({
  //         ...creditCard,
  //         creditNumber: e.target.value
  //       });
  //       break;
  //     case 'blur':
  //       setCreditCard({
  //         ...creditCard,
  //         creditNumber:  e.target.value.trim()
  //       });
  //       break;
  //     case 'changeName':
  //       setCreditCard({
  //         ...creditCard,
  //         creditName: e.target.value.toUpperCase()
  //       });
  //       break;
  //     case 'blurName':
  //       setCreditCard({
  //         ...creditCard,
  //         creditName: e.target.value.trim() === '' ? 'FULL NAME' : e.target.value
  //       });
  //       break;
  //     case 'focusName':
  //       setCreditCard({
  //         ...creditCard,
  //         creditName: creditCard.creditName.trim() === 'FULL NAME' ? '' : e.target.value
  //       });
  //       break;
  //     case 'cvvChange':
  //       setCreditCard({
  //         ...creditCard,
  //         cvv: e.target.value
  //       });
  //       break;
  //     case 'blurCVV':
  //       setCreditCardCvvCallback(false);
  //       break;
  //     default:
  //       break;
  //   }
  // }

  return (
    <div className='credit-form'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='credit-common'>
          <label htmlFor="">Credit Number</label>
          <input
            type="text"
            // placeholder='**** **** **** ****'
            maxLength={19}
            value={creditCard.number}
            {...register('creditNumber')}
            onBlur={(e) =>dispatch({type:ReducerTypePayment.blurNumber,payload:e.target.value})}
            onFocus={(e) =>dispatch({type:ReducerTypePayment.focusNumber,payload:e.target.value})}
            onChange={(e)=>dispatch({type:ReducerTypePayment.changeNumber,payload:e.target.value})}
          />
          {errors.creditNumber && <span className="card-error">{errors.creditNumber.message}</span>}
        </div>
        <div className='credit-common'>
          <label htmlFor="">Full Name</label>
          <input
            type="text"
            maxLength={25}
            value={creditCard.name}
            {...register('creditName')}
            onFocus={(e) =>dispatch({type:ReducerTypePayment.focusName,payload:e.target.value})}
            onBlur={(e) =>dispatch({type:ReducerTypePayment.blurName,payload:e.target.value})}
            onChange={(e) =>dispatch({type:ReducerTypePayment.changeName,payload:e.target.value})}
          />
          {errors.creditName && <span className="card-error">{errors.creditName.message}</span>}
        </div>
        <div className='credit-common year-months-cvs'>
          <div className='months'>
            <label className='label-common' htmlFor="">Expiration MM</label>
            <select
              id=""
              {...register('months')}
              onChange={(e) => dispatch({type:ReducerTypePayment.changeMonth,payload:e.target.value})}
            >
              <option value="">Month</option>
              {[...new Array(12)].map((el, index) => {
                const monthValue = index + 1;
                return <option key={monthValue} value={monthValue}>{monthValue < 10 ? `0${monthValue}` : monthValue}</option>
              })}
            </select>
            {errors.months && <span className="card-error">{errors.months.message}</span>}
          </div>
          <div className='year'>
            <label className='label-common' htmlFor="">Expiration YY</label>
            <select
               value={creditCard.year}
              {...register('year')}
              onChange={(e) => dispatch({type:ReducerTypePayment.changeYear,payload:e.target.value})}
            >
              <option value="">Year</option>
              {[...new Array(12)].map((el, index) => {
                const yearValue = index + 23;
                return <option key={yearValue} value={yearValue}>{yearValue}</option>
              })}
            </select>
            {errors.year && <span className="card-error">{errors.year.message}</span>}
          </div>
          <div className='cvv'>
            <label htmlFor="" className='label-common'>CVV</label>
            <input
              {...register('cvv')}
              id='cvv-id'
              type="text"
              onFocus={(e) => dispatch({type:ReducerTypePayment.focusCvv,payload:true})}
              onBlur={(e) => dispatch({type:ReducerTypePayment.blurCvv,payload:false})}
              onChange={(e) => dispatch({type:ReducerTypePayment.changeCvv,payload:e.target.value})}
              value={creditCard.cvv}
              maxLength={3}
            />
            {errors.cvv && <span className="card-error">{errors.cvv.message}</span>}
          </div>
        </div>
        <div className='credit-submit'>
          <button type='submit' className='form-submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default memo(CardForm);
