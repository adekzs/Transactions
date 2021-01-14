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
 
  const filterBasedOnParams = (pay, gen, ser) => {
    
    if(!isLoading) {
      if( pay && gen) {
        setUsedItem([]);
        let datafilter = items.filter((item)=> (item.Gender === gen) &&(item.PaymentMethod === pay));
        if (ser) {
          datafilter = datafilter.filter((item) => (item.FirstName.toString().toLowerCase().includes(ser.toLowerCase())) || 
          (item.LastName.toString().toLowerCase().includes(ser.toLowerCase()))
          || (item.UserName.toString().toLowerCase().includes(ser.toLowerCase())));
        }
        setUsedItem(datafilter);
        
      } else if (pay && !gen){
        setUsedItem([]);
        let datafilter = items.filter((item)=>(item.PaymentMethod === pay));
        if (ser) {
          datafilter = datafilter.filter((item) => (item.FirstName.toString().toLowerCase().includes(ser.toLowerCase())) || 
          (item.LastName.toString().toLowerCase().includes(ser.toLowerCase()))
          || (item.UserName.toString().toLowerCase().includes(ser.toLowerCase())));
        }
        setUsedItem(datafilter);

      } else if (!pay && gen) {
        setUsedItem([]);
        let datafilter = items.filter((item)=>(item.Gender === gen));
        if (ser) {
          datafilter = datafilter.filter((item) => (item.FirstName.toString().toLowerCase().includes(ser.toLowerCase())) || 
          (item.LastName.toString().toLowerCase().includes(ser.toLowerCase())) || 
          (item.UserName.toString().toLowerCase().includes(ser.toLowerCase())));
        }
        setUsedItem(datafilter);
      } else if (!pay && !gen){
        let datafilter = items;
        if (ser) {
          datafilter = datafilter.filter((item) => (item.FirstName.toString().toLowerCase().includes(ser.toLowerCase())) || 
          (item.LastName.toString().toLowerCase().includes(ser.toLowerCase()))
          || (item.UserName.toString().toLowerCase().includes(ser.toLowerCase())));
        }
          setUsedItem(datafilter);
      }else {
        let datafilter = items;
        if (ser) {
          datafilter = datafilter.filter((item) => (item.FirstName.toString().toLowerCase().includes(ser.toLowerCase())) || 
          (item.LastName.toString().toLowerCase().includes(ser.toLowerCase()))
          || (item.UserName.toString().toLowerCase().includes(ser.toLowerCase())));
        }
        setUsedItem(datafilter);
      }
  }
}

  return (
  <div>
      <Header/>
   <div className="container">
      <Search getChange={(pay,gen, ser)=> filterBasedOnParams(pay,gen,ser)}/>
      <TransactionGrid items={usedItem} isLoading={isLoading}></TransactionGrid>
   </div>
   </div>
  );
}

export default App;
