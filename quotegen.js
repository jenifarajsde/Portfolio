


async function quote() {


    try{

        document.getElementById("quote").innerText="Loading...";

        let res=await fetch("https://dummyjson.com/quotes/random");

        if(!res.ok){

            throw new Error("Failed to fetch quote");
        }


        let data= await res.json();

        let content= data.quote;

        let author= data.author;

        document.getElementById("quote").innerHTML= `<p style="font-size:20px;"> ${content}</p>
  <p style="margin-top:10px; font-weight:bold;">- ${author} </p>`;


    }

    catch(err){

        document.getElementById("quote").innerText="Error:"+ err.message;
    }
    
}

quote();