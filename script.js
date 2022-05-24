//Define the special char into sp_char array
const sp_char= ['\u{00021}','\u{00022}','\u{00023}','\u{00024}','\u{00025}','\u{00026}','\u{00027}','\u{00028}','\u{00029}','\u{0002A}',
                '\u{0002B}','\u{0002C}','\u{0002D}','\u{0002E}','\u{0002F}','\u{0003A}','\u{0003B}','\u{0003C}','\u{0003D}','\u{0003E}',
                '\u{0003F}','\u{00040}','\u{0005B}','\u{0005C}','\u{0005D}','\u{0005E}','\u{0005F}','\u{00060}','\u{0007B}','\u{0007C}','\u{0007D}','\u{0007E}'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const max=128;

for (var i = 1; i <=max; i++) {
    // create option element
    var Pass_len_Option = document.createElement("option");
    Pass_len_Option.setAttribute("value", i);
    Pass_len_Option.textContent = i;
    // append to select
    document.querySelector("#pass_len").appendChild(Pass_len_Option);
  }


function writePassword ()
{
    var lowercase=0;
    var uppercase=0;
    var numeric=0;
    var special=0;
    var password;
    var flag=false;
    var draw;


    var passwordText = document.querySelector("#result");
    //get the value of the length of password
    var x =(document.getElementById("pass_len")).value;

    // If the checkbox is checked, set the value to 1
    if ((document.getElementById("lowercase")).checked)lowercase=1;
    if ((document.getElementById("uppercase")).checked)uppercase=1;
    if ((document.getElementById("numeric")).checked)numeric=1;
    if ((document.getElementById("special")).checked)special=1;

    //check at least one checkbox is checked
    if((lowercase==1)||(uppercase==1)||(numeric==1)||(special==1)){
        password="";
        //generate the code
        for (var i=0; i < parseInt(x); i++){
            flag=false; 
            while (!flag) {
                draw=Math.floor(Math.random() * 4)
                switch (draw){
                    case 0:
                        if (lowercase==1) flag=true;
                    break;
                    case 1:
                        if (uppercase==1) flag=true;
                    break;
                    case 2:
                        if (numeric==1) flag=true;
                    break;
                    case 3:
                        if (special==1) flag=true;
                    break;
                } 
            }
            switch (draw){
                case 0:
                    //random the lowercase no
                    password=password+ String.fromCharCode(97+Math.floor(Math.random() * 26));
                break;
                case 1:
                    //random the lowercase no
                    password=password+ String.fromCharCode(65+Math.floor(Math.random() * 26));
                break;
                case 2:
                    //random the nueric no
                    password=password+ Math.floor(Math.random() * 10);
                break;
                case 3:
                    //random the special char
                    password=password+ sp_char[Math.floor(Math.random() * 32)];
                break;
            }
        }
        //return the password to the text box
        passwordText.value =password;
    }
    else{
        //if no checkbox is checked, return a warning message
        passwordText.value = "Please at least select one password criteria!!";
    }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




