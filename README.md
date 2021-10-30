# A Data Retrieval And Display Application

## Problem Statement

Create web application with following 2 pages
* Stocks page
    * Display a table listing the symbol, name and category for each instrument
    * Provide a search box that fuzzy searches the symbol and name and filters the list of stocks shown in the table
    * On clicking any symbol, user must be redirected to quotes page for that symbol
    * For this page, load data from an API https://prototype.sbulltech.com/api/v2/instruments 

* Quotes page
    * For the selected instrument, show the list of quotes
    * The quotes must be sort-able by timestamp ascending or descending
    * Please refresh the quotes when the valid_till timestamp for the data expires
    * For this page, load data from /quotes API https://prototype.sbulltech.com/api/v2/quotes/{symbol}

