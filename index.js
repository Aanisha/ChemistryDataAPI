//load express module
const express = require("express");
const app = express();

//bring in the data
const elements = require("./chemistry.json")

//define a more robust port variable
const port=process.env.PORT|5000
app.listen(port, () => console.log(`Server Start at port ${port}`));

app.use(express.static('public'));

app.get('/elements', (req, res) => res.json(elements))

function searchElement(req,res) {
	let word=req.params.element;
	word=word.charAt(0).toUpperCase()+word.slice(1).toLowerCase();
  const subElements=elements.filter((element, index)=>
    Object.keys(elements[index])[0].startsWith(word)===true
  )

  const reply = subElements.length!=0  ?
    subElements:
    { status:"Not Found" } 
  console.log(reply)
	res.json(reply);
}
