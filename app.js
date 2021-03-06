const express=require('express');
const app=express();
const bodyParser=require("body-parser")

app.set("view engine","ejs");

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:true}))
// array of comics
const comics=[
    {
        title:"American Born Ce",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quae praesentium nobis omnis sit officia mollitia eligendi neque ex\ quos repellendus minima, molestiae accusantium corrupti nesciunt dolorum eius distinctio id consequuntur maiores, vitae eveniet repellat. Numquam officiis fugit at cum.",
        image:"http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg"
    },
    {
        title:"goku the heo",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quae praesentium nobis omnis sit officia mollitia eligendi neque ex quos repellendus minima, molestiae accusantium corrupti nesciunt dolorum eius distinctio id consequuntur maiores, vitae eveniet repellat. Numquam officiis fugit at cum.",
        image:"http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg"
    },
    {
        title:"batman",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam quae praesentium nobis omnis sit officia mollitia eligendi neque ex quos repellendus minima, molestiae accusantium corrupti nesciunt dolorum eius distinctio id consequuntur maiores, vitae eveniet repellat. Numquam officiis fugit at cum.",
        image:"http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg"
    }
]

// app routes


// root route
app.get("/",(req,res)=>{
    res.render("landing")
})

app.get("/comics",(req,res)=>{
    res.render("comics",{comics})
})

app.post("/comics",(req,res)=>{
    comics.push(req.body)
    res.redirect("/comics")
})

app.get("/comics/new",(req,res)=>{
    res.render("comics_new")
})


app.listen(3000,()=>{
    console.log("yelp clone runnig on port 3000!")
})