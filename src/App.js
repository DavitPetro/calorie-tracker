/*
    Filename: App.js
    Author: Davit Petrosyan
    Description: Main logical component of the calorie tracker app. 
    It uses the API functionality for finding nutritional info about the queried item.
*/
import './Style.css';

function App() {

  const parameters = {
    key: 'YKwPgkH8koOMHmcoOfafT8u75nOEQMrz44Ab42y2',
    query: 'apple',
    dataType: ["Survey (FNDDS)"],
    pageSize: 5,
  }

  async function componentDidMount() {
    const apiURL = `https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=${encodeURIComponent(parameters.key)}
    &query=${encodeURIComponent(parameters.query)}
    &dataType=${encodeURIComponent(parameters.dataType)}
    &pageSize=${encodeURIComponent(parameters.pageSize)}`
    const response = await fetch(apiURL);
    const data = response.json()
    console.log(data)   
 }

  return (
    <div id="content">
    </div>
  );
}

export default App;
