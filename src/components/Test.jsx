import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState, useContext } from "react";
import ThemeContext from "./Context";
import s from "../components/Test.module.css"


const Test=()=>{




        const options = {
            method: 'GET',
            url: 'https://bing-news-search1.p.rapidapi.com/news/trendingtopics',
            params: {textFormat: 'Raw', safeSearch: 'Off'},
            headers: {
              'X-BingApis-SDK': 'true',
              'X-RapidAPI-Key': 'da8a8db973mshbdcb549202eaa4dp163864jsne9ad78339bc8',
              'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
            }
          };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });
return(
    <div className={s.wrapper} >
    Test

    </div>
)
}


export default Test