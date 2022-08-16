/*
    Filename: App.js
    Author: Davit Petrosyan
    Description: Main logical component of the calorie tracker app. 
    It uses the API functionality for finding nutritional info about the queried item.
*/
import './Style.css';
import React, {useState, useEffect} from 'react'

function App() {

  const [data, setData] = useState([])

  const parameters = {
    key: 'YKwPgkH8koOMHmcoOfafT8u75nOEQMrz44Ab42y2',
    query: 'apple',
    dataType: ["Survey (FNDDS)"],
    pageSize: 1,
  }

  useEffect(() => {
    async function fetchAPI() {
      const apiURL = `https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=${encodeURIComponent(parameters.key)}&query=${encodeURIComponent(parameters.query)}&dataType=${encodeURIComponent(parameters.dataType)}&pageSize=${encodeURIComponent(parameters.pageSize)}`
      const response = await fetch(apiURL)
      const result = await response.json()
      const item = result.results
      setData(item)
      console.log(result)
    }
    fetchAPI()
  }, [])

  return (
    <div id="content">
      <p>{data}</p>
    </div>
  );
}

export default App;
