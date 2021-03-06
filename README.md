# Stocks Information Application

> Retrieves data from API, displays it in a table structure and provides added functionality such as search and sort.  

## Features
* Contains 2 pages Stocks and Quote
* Stocks, displays data from the given API
* Allows you to search for data based on a Symbol or a Name
* Quote, fetches information depending upon which symbol was selected from the given API
* Time column in the Quotes section allows you to sort data in ascending and descending order
* Quote data is refreshed frequently through new API calls, dpending on the recieved expiry time. 
* Includes responsive UI

## Local Environment Setup
* Navigate into the current project directory , i.e /Stocks-Page
* Run 'npm install' to install required dependencies
* If required for deployment, run 'npm build'
* Run 'npm start' and visit 'localhost:3000'

## Funtionality Details
* API calls are handled through a custom function 'fetchData' which uses Axios
* 'fetchData' handles both CSV/JSON and returns JSON data
* CSV data is converted and returned as JSON by 'fetchData'. It utilises the 'csvToJson' function
* Fuzzy Search is implemented through fuse.js
* Under Quote page API calls are frequently done depending upon the expiry time recieved
    * For each API call a new set of data with new set of expiry time is obtained
    * Among all the set of expiry time, the highest one is chosen and a timer is set for the difference of ExpiryTime and CurrentTime
    * After the timer has expired a new API call is made and data is updated.
    * A buffer of 5sec is added to the difference of Expiry and Current time so that if same data is recieved from API, previous data is displayed and a new request is made after 5sec.
* Vanilla CSS is used for styling.

## Further Possibelities
* The Stocks page can include more columns of data, a few such as:
    * Current Price
    * Info about whether price is on rise or fall
    * Divident yield
* The Quotes page, in addition to displaying symbol specific data, can also include a comparision section with respect to other Symbols
* It can also display a graph, indicating price changes over time.




