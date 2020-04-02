const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 4001;
const pug = require('pug')
const multer = require('multer');
const app= express();
const fs = require('fs');

app.use(express.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/uploads'));
app.set('view engine', 'pug');

let upload = multer({dest: "uploads/"});
let submissionValues;
let targetPath;
let fileName;

const compiledHomepPageTemplate = pug.compileFile('views/homepage.pug');
const compiledListingTemplate = pug.compileFile('views/listing.pug');

app.get("/", (req,res) => {
          
            let style = `<link rel="stylesheet" href="homepageStyles.css">`
            let homepage = compiledHomepPageTemplate({
                descriptionShort: "",
                condition: "",
                price:"",
                details:"",
                style: style,
            })
            
            res.send(homepage) 
})

app.get("/filledform", (req,res) => {
    let style = `<link rel="stylesheet" href="homepageStyles.css">`
    
    let homepage = compiledHomepPageTemplate({
        descriptionShort: submissionValues.descriptionShort,
        condition: submissionValues.condition,
        price: submissionValues.price,
        details: submissionValues.details,
        style: style
    })  

    res.send(homepage)
})

app.post("/submitListing", upload.single('productImage'), (req,res) =>{
    let ext = ".jpg";

    if(req.file!==undefined){
        let filename = req.file.path.split("\\").pop();
        tempPath =`uploads\\${filename}`
        targetPath = `uploads/${filename}${ext}`;
        fileName=`${filename}${ext}`;

        if (path.extname(req.file.originalname).toLowerCase() === ".jpg") {
            fs.rename(tempPath, targetPath, err => {
                console.log("file succesfuly uploaded");
            }); 
        }
    
    }

    else{
        fileName="1200px-No_image_available.svg.png";
    }
  
    submissionValues=req.body;
    res.redirect("/listing");
})

app.get("/listing", (req,res)=>{

    let style = `<link rel="stylesheet" href="styles.css">`

    let listing = compiledListingTemplate({
        descriptionShort: submissionValues.descriptionShort,
        condition: submissionValues.condition,
        price: submissionValues.price,
        details: submissionValues.details,
        productImage: fileName,
        style: style
    })
    
    res.send(listing)
})


app.listen(PORT);
console.log("server is listening");