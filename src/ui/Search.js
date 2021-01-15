import React, { useState , useEffect} from 'react'


const Search = ({getChange}) => {
    
    useEffect(() => {
        const M =window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
             M.FormSelect.init(elems, {});
          });
    }, [])

    const [gender, setGender] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
    const [searchV, setSearchV] = useState('');

    const onChangePay = (payment) => {
             setPaymentMethod(payment);
             getChange(payment, gender, searchV);
    }
         const onChangeGen = (gend) => {
            setGender(gend);
            getChange(paymentMethod, gend, searchV);
        }
        const onChangeSearch = (val) => {
            setSearchV(val);
            getChange(paymentMethod, gender, val);
        }
        
        return (
            <div className="row">
                <div className="col s1"></div>
                <div className="input-field col s12 m6">
                    <input
                     type='text'
                     id='search'
                     className='validate'
                     placeholder='Search Transactions'
                     onChange={(e) => {onChangeSearch(e.target.value)}}
                     autoFocus
                    />
                    <i className="material-icons prefix">search</i>
                </div>
                <div className="col s1">

                </div>
                    <div className="input-field col s12 m2">
                        <select className="browser-default" onChange={(e) => onChangePay(e.target.value)}>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="check">Check</option>
                            <option value="money order">Money order</option>
                            <option value="cc">cc</option>
                            <option value="paypal">pay pal</option>
                            <option value="">-</option>
                        </select>
                    </div>
                    <div className="input-field col s12 m2">
                        <select className="browser-default" onChange={(e) => onChangeGen(e.target.value)}>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Prefer to skip">Prefer to skip</option>
                            <option value="">-</option>
                        </select>
                    </div>
            </div>
        )
    }
    

export default Search



