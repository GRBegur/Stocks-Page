# Stocks Information Application

> Retrives data from API, displays it in a table structure and provides added functionality such as search and sort.  

## Features
* Contains 2 pages Stocks and Quote
* Stocks, displays data from the given API
* Allows you to search for data based on a Symbol or a Name
* Quote, fetches information depending upon which symbol was selected from the given API
* Time column in the Quotes section allows you to sort data in ascending and descending order 
* Includes responsive UI

## Local Environment Setup
* Navigate into the current project directory , i.e /sensibull-assignment-guna-r-begur
* Run 'npm install' to install required dependencies
* If required for deployment, run 'npm build'
* Run 'npm start' and visit 'localhost:3000'

## Folder and Component Structure
* All the components defined are found under '/src/components'.
* Stocks incorporates the following components:
    * Home
    * Main
    * SearchBar
    * Table
    * TableBody
    * TableHeader
* Quote incorporates the following components:
    * Quote
    * QuoteInfo
    * QuoteHeader
    * QuoteData
* Header component is shared between both pages.
* '/api_data/' contains funtionalities used for fetching and converting data recieved from API
* All the CSS is included under '/style/App.css'
* Symbols used to represent sort are under '/images/'

## Funtionality Details
* API calls are handled through a custom function 'fetchData' which uses Axios
* 'fetchData' handles both CSV/JSON and returns JSON data
* CSV data is converted and returned as JSON by 'fetchData'. It utilises the 'csvToJson' function
* Fuzzy Search is implemented through fuse.js
* Vanilla CSS is used for styling.

## Further Possibelities
* The Stocks page can include more columns of data, a few such as:
    * Current Price
    * Info about whether price is on rise or fall
    * Divident yield
* The Quotes page, in addition to displaying symbol specific data, can also include a comparision section with respect to other Symbols
* It can also display a graph, indicating price changes over time.




