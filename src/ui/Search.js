import React, { useState , useEffect} from 'react'


const Search = ({getGender,getPayment, getSearch}) => {
    
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
             getPayment(paymentMethod)
         }
         const onChangeGen = (gend) => {
            setGender(gend);
            getGender(gender);
        }
        const onChangeSearch = (val) => {
            setSearchV(val);
            getSearch(searchV);
        }
        
        return (
            <div className="row">
                <div className="col s1"></div>
                <div className="input-field col s6">
                    <input
                     type='text'
                     id='search'
                     className='validate'
                     placeholder='Search Transactions'
                     onChange={(e) => {onChangeSearch(e.target.value)}}
                     autoFocus
                    />
                    <i class="material-icons prefix">search</i>
                </div>
                <div className="col s1">

                </div>
                    <div class="input-field col s2">
                        <select onChange={(e) => onChangePay(e.target.value)}>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="check">Check</option>
                            <option value="money order">Money order</option>
                            <option value="cc">cc</option>
                            <option value="paypal">pay pal</option>
                            <option value="">-</option>
                        </select>
                        <label>Payment Method</label>
                    </div>
                    <div class="input-field col s2">
                        <select onChange={(e) => onChangeGen(e.target.value)}>
                            <option value="" disabled selected>Choose your option</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Prefer to skip">Prefer to skip</option>
                            <option value="">-</option>
                        </select>
                        <label>Gender</label>
                    </div>
            </div>
        )
    }
    

export default Search



