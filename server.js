
// server.js
const http = require('http'); 
 
const products = [ 
  { id: 1, name: 'Laptop', price: 1200 }, 
  { id: 2, name: 'Mouse', price: 25 }, 
  { id: 3, name: 'Keyboard', price: 75 } 
]; 
 
// This is the function that will handle all incoming requests. 
const requestListener = function (req, res) { 
  // Set the response header to indicate that we're sending JSON data. 
  res.setHeader('Content-Type', 'application/json'); 
 
  // Check the request URL to determine the response. 
  if (req.url === '/api/products') { 
    // If the URL is '/api/products', send back the list of products. 
    res.writeHead(200); // 200 is the HTTP status code for OK. 
    res.end(JSON.stringify(products)); 
  } else { 
    // If the URL is anything else, send a "Not Found" response. 
    res.writeHead(404); // 404 is the HTTP status code for Not Found. 
    res.end(JSON.stringify({ message: 'Resource not found' })); 
  } 
}; 
// Create the server instance. 
const server = http.createServer(requestListener); 
 
// Define the port and host for the server to listen on. 
const host = 'localhost'; 
const port = 3000; 
 
// Start the server and log a message to the console. 
server.listen(port, host, () => { 
  console.log(`Server is running on http://${host}:${port}`); 
   
});
