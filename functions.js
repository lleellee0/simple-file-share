document.querySelector("html").classList.add('js');

let fileInput  = document.querySelector( ".input-file" ),  
    button     = document.querySelector( ".input-file-trigger" ),
    the_return = document.querySelector(".file-return"),
    share_link = document.querySelector(".share-link");;
      
button.addEventListener( "keydown", function( event ) {  
    if ( event.keyCode == 13 || event.keyCode == 32 ) {  
        fileInput.focus();  
    }  
});
button.addEventListener( "click", function( event ) {
   fileInput.focus();
   return false;
});  
fileInput.addEventListener( "change", function( event ) {  
    // the_return.innerHTML = this.value;  
    the_return.innerHTML = this.files[0].path;

    let file_name = this.files[0].path.split('\\')[this.files[0].path.split('\\').length - 1];

    share_link.innerHTML = `Share link : http://localhost:25548/${file_name}`;


    let express = require('express');
    let app = express();
    app.get(`/hash`, (req, res) => {


        let fs = require('fs');

        let stream = fs.createReadStream(this.files[0].path.replace(/\\/g, '\\\\'), { bufferSize: 64 * 1024});
        res.attachment(file_name);
        stream.pipe(res);
    });

    app.listen(25548);
});  