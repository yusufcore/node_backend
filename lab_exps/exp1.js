const fs = require("fs");
// creating a text file
fs.writeFile("student.txt", "Welcome to Node.js", 
    (err) => {
        if(err)
            console.log(err);
        else
            console.log("File created successfully.....");
});

// reading the created text file
fs.readFile("student.txt","utf8", (err,data)=>{
    if(err)
        console.log(err);
    else
        console.log(data);
});

// updating contents in the text file
fs.appendFile("student.txt","\n This is new data",
    (err)=>{
        if(err)
            console.log(err);
        else
            console.log("File Updated Successfully.....");
});