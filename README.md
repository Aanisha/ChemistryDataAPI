# ChemistryDataAPI

This is a public JSON based API,which gives information about Chemical Elements.Ideal to use in any of your Chemistry related projects,feel free to make some amazing code project.

Base URL:https://chemistrydata.herokuapp.com/

API documentation:https://drive.google.com/file/d/10hFZmmxUmn2gPiG6mlpsI-XWlAMjf035/view?usp=drivesdk

When fetching data from React App, don't forget to include

```
"proxy": "http://localhost:5000/"
```
 in the package.json

And fetch the data using something like this:


```
    fetch("/elements/")
      .then( res=> res.json() )
      .then( data=> setData(data) )
      .catch( err=>console.log("cant fetch the data") )
```
