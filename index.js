<<<<<<< HEAD
//load express
const express = require("express");
const app = express();

//load data
const elements = require("./chemistry.json")

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server Start at port ${port}`));

app.use(express.static('public'));
//app.use(cors());
//endpoint retrieving all data
app.get('/elements', (req, res) => response.json(elements));

//endpoin retrieving only for an element
app.get('/elements/:element/',searchElement);

function searchElement(req,res) {
	let word=req.params.element;
	word=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
	console.log(word);
	//console.log(elements[word]);
  let reply = elements[word]? 
    reply=elements[word]:
		reply={ status:"Not Found" }
  console.log(reply.boil);
	res.send(reply);
=======
var fs=require('fs');
var data=fs.readFileSync('chemistry.json');
var elements=JSON.parse(data);
const express = require("express");
const app = express();
const cors=require('cors');

app.listen(process.env.PORT, () => console.log("Server Start at 5000 Port"));

app.use(express.static('public'));
app.use(cors());
app.get('/elements',alldata);
function alldata(request,response)
{
    response.send(elements);
}
app.get('/elements/:element/',searchElement);
function searchElement(request,response)
{
	var word=request.params.element;
	word=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
	console.log(word);
	//console.log(elements[word]);
	if(elements[word])
	{
		var reply=elements[word];
		
	}
	else
	{
		var reply={
			status:"Not Found"
		}
	}
    console.log(reply.boil);
	response.send(reply);
>>>>>>> 9d776b424af981768a9e122f97401525f7cdb8c9

}

