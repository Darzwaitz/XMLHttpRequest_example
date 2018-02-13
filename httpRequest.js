document.getElementById('button').addEventListener('click', loadText);//event listener

function loadText(){

    let xhr = new XMLHttpRequest();
    // console.log(xhr);
    xhr.open('GET', 'testFile.txt', true); // 3 params for open method-requesttype / file name / true or false if asynchronous or not

    // to display loader gif etc.
    // xhr.onprogress = function(){
    //     // code to be updated
    //     console.log('READYSTATE: ', xhr.readyState); // readystate is 3 : 'processing request'
    // }

    xhr.onload = function() {
        if (this.status === 200) {// HTTP status - 200 : 'OK'
             console.log(this.responseText);
        
            }
        }
    

    // xhr.onerror = function(){
    //     // document.getElementById('displayRequest').innerHTML = 'Request error..';// if there's an error - display error message
        
    // }

    xhr.send(); // !! Send request
}