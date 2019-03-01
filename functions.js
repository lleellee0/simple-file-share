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
    let file_name = this.files[0].path.split('\\')[this.files[0].path.split('\\').length - 1];
    the_return.innerHTML = this.files[0].path;


    const crypto = require('crypto');
    let sha1 = crypto.createHash('sha1');
    sha1.update(file_name + new Date());
    let output = sha1.digest('hex').slice(0, 6);

    share_link.innerHTML = `Share link : http://localhost:25548/${output}`;

    let express = require('express');
    let app = express();
    app.get(`/${output}`, (req, res) => {
        let fs = require('fs');

        let stream = 
            fs.createReadStream(this.files[0].path.replace(/\\/g, '\\\\'), { bufferSize: 64 * 1024});  // 스트림 생성
        res.attachment(file_name);  // 파일 이름 지정
        stream.pipe(res);   // 스트림으로 응답
    });

    app.listen(25548);
});  