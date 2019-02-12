# bamazon
<h1>My Bamazon App!</h1>

<p>My bamazon app is pretty simple in code and execution. Because It took my machine so long to set up the sql server, I felt slightly behind on some of the concepts. After reviewing the in-class assignments and taking a stab at the homework, mySQL and sql servers in general make a lot more sense to me. The toughest part (in my opinion) was constructing the queries in the js file, but once I figured out the proper syntax, the rest fell into place. The app functions as follows...</p>

<ol>
    <li>The First thing the app does is create a connection to the sql server through my localhost</li>
    <li>After the connection is established, the start() function is run. Inside the start function the following things happen</li>
    <ul>
        <li>A query is sent to the mySQL database that selects all items from my products table</li>
        <li>A for loop is run through the results that are called back, and the information is formatted and logged to the console</li>
    </ul>
    <li>After the start function has returned results, the purchasePrompt() function is run. Inside that function the following things happen</li>
    <ul>
        <li>An inquirer prompt is run with two questions: One asking the ID of the item and one asking how many of that item the user wishes to purchase</li>
        <li>A query is then sent to the DB that grabs the id, price, and stock_quantity values of the items where the id(table value) matches the user input from the first prompt question</li>
        <li>Useful values are stored into variables for ease of use</li>
        <li>An if/else statement validates that there are enough of the selected product to fulfill the user's desired quantity. If there is enough, then a second query is run</li>
        <li>The second Query updates the table value of stock_quantity to subtract the user's desired quantity from the total wherever the id matches the user input. Then it multiples the user's quantity by the price to provide an order total.</li>
        <li>The start and purchasePrompt functions are run again and the whole thing starts over.</li>
    </ul>
</ol>
<p>I spent a good amount of time trying to figure out how to get the inquirer prompt to run after the table is logged to the console (i.e. at the bottom of the table) but with no luck. If I had a little more time I would have liked to fix that, just to make the app flow a little bit better.</p>