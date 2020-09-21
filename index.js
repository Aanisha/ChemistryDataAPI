//var fs=require('fs');
//var data=fs.readFileSync('chemistry.json');
//var elements=JSON.parse(data);
const express = require("express");
const app = express();
//const cors=require('cors');
const port=process.env.PORT|5000
const elements = require("./chemistry.json")
app.listen(port, () => console.log(`Server Start at port ${port}`));

app.use(express.static('public'));
//app.use(cors());
app.get('/elements', (req, res) => response.send(elements))

app.get('/elements/:element/',searchElement);
function searchElement(request,response)
{
	const word=request.params.element;
	word=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
	console.log(word);
	//console.log(elements[word]);
  const reply = elements[word]? 
    elements[word]: { status:"Not Found" }
  console.log(reply.boil);
	response.send(reply);

}

