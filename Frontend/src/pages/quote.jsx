import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cardview from "../components/cardview";
import Menu from "./menu";
import Skeletongrid from '../components/skeletoncomponent';
const baseUrl = import.meta.env.VITE_PROD_BASE_URL;

export default function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
    axios.get(`${baseUrl}/Quote/show`)
      .then(response => {
        setQuotes(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
      setIsLoading(false);
    }, 2000);
  }, []);
  return(
    <>
    <Menu/>
    <GridView isLoading={isLoading} data={quotes}/>
    </>
  )
}


const GridView = ({ isLoading, data }) => {
  return (
    <>
      {isLoading
        ?
          <>
            <Skeletongrid/>
          </>
        : <Cardview cards={data}/>}
    </>
  );
};
