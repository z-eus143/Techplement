import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cardview from "../components/cardview";
import Menu from "./menu";

export default function Quote() {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:4000/Quote/show')
      .then(response => {
        setQuotes(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return(
    <>
    <Menu/>
    <Cardview cards={quotes}/>
    </>
  )
}





