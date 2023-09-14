import inquirer from 'inquirer'; 
import qr from 'qr-image';
import fs from "fs";
import { throws } from "assert";
import { error } from "console";


inquirer.prompt([
   {"name":"URL","message":"Enter your url",}
  ])
  .then((answers) => {
    console.log(`Answer is ${answers.URL}`);
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('QR_code.png'));
    
    fs.writeFile("sahil.txt",abc,(err)=>{
        if(err) throw err;
        console.log("this file has been saved");

        
    })
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
 