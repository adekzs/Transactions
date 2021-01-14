import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import TransactionGrid from './transaction/TransactionGrid'
import Header from './ui/Header'
import Search from './ui/Search'

function App() {
  const [items, setItem] = useState([]);
  const [usedItem, setUsedItem] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [paymentMethod, setPaymentMethod] = useState('');
  const [gender, setGender] = useState('');
  const [searchV, setSearchV] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const result =await axios('https://api.enye.tech/v1/challenge/records');
      console.log(result.data.records.profiles);
      setItem(result.data.records.profiles);
      setUsedItem(result.data.records.profiles);
      setIsLoading(false);
    }

    fetchItems(); 
  },[])
 
  useEffect(() => {
    const performOps = () => {
        if(!isLoading) {
          if( paymentMethod && gender) {
            setUsedItem([]);
            let datafilter = items.filter((item)=> (item.Gender === gender) &&(item.PaymentMethod === paymentMethod));
            if (searchV) {
              datafilter = datafilter.filter((item) => (item.FirstName.toString().toLowerCase().includes(searchV.toLowerCase())) || 
              (item.LastName.toString().toLowerCase().includes(searchV.toLowerCase()))
              || (item.UserName.toString().toLowerCase().includes(searchV.toLowerCase())));
            }
            setUsedItem(datafilter);
            
          } else if (paymentMethod && !gender){
            setUsedItem([]);
            let datafilter = items.filter((item)=>(item.PaymentMethod === paymentMethod));
            if (searchV) {
              datafilter = datafilter.filter((item) => (item.FirstName.toString().toLowerCase().includes(searchV.toLowerCase())) || 
              (item.LastName.toString().toLowerCase().includes(searchV.toLowerCase()))
              || (item.UserName.toString().toLowerCase().includes(searchV.toLowerCase())));
            }
            setUsedItem(datafilter);

          } else if (!paymentMethod && gender) {
            setUsedItem([]);
            let datafilter = items.filter((item)=>(item.Gender === gender));
            if (searchV) {
              datafilter = datafilter.filter((item) => (item.FirstName.toString().toLowerCase().includes(searchV.toLowerCase())) || 
              (item.LastName.toString().toLowerCase().includes(searchV.toLowerCase())) || 
              (item.UserName.toString().toLowerCase().includes(searchV.toLowerCase())));
            }
            setUsedItem(datafilter);
          } else if (!paymentMethod && !gender){
            let datafilter = items;
            if (searchV) {
              datafilter = datafilter.filter((item) => (item.FirstName.toString().toLowerCase().includes(searchV.toLowerCase())) || 
              (item.LastName.toString().toLowerCase().includes(searchV.toLowerCase()))
              || (item.UserName.toString().toLowerCase().includes(searchV.toLowerCase())));
            }
              setUsedItem(datafilter);
          }else {
            let datafilter = items;
            if (searchV) {
              datafilter = datafilter.filter((item) => (item.FirstName.toString().toLowerCase().includes(searchV.toLowerCase())) || 
              (item.LastName.toString().toLowerCase().includes(searchV.toLowerCase()))
              || (item.UserName.toString().toLowerCase().includes(searchV.toLowerCase())));
            }
            setUsedItem(datafilter);
          }
        
        }
      }
      performOps();
    // eslint-disable-next-line     
  }, [paymentMethod,gender,searchV]);

  return (
  <div>
      <Header/>
   <div className="container">
      <Search getGender = {(gend)=> {setGender(gend)}} getPayment={(pay)=>{setPaymentMethod(pay)}} getSearch={(val) => {setSearchV(val)}}/>
      <TransactionGrid items={usedItem} isLoading={isLoading}></TransactionGrid>
   </div>
   </div>
  );
}

export default App;
