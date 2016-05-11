function initInputHandlerExample1() {
    $('#testid1').keypress(function(element){
        if(element.which == 13){
            alert("enter");
        }
    });
}

function initInputHandlerExample2() {
    $('#testid2').keypress(function(element){
        $('#testoutput2').text(element.target.value);
    });
}

function initInputHandlerExample3() {
    $('#testid3').keypress(function(element){
        if(element.which == 13){
            $('#example3list').append('<li>' +this.value+ ' </li>');
            this.value = "";
        }
    });
}
function init(){
    console.log("ready");
    initInputHandlerExample1();
    initInputHandlerExample2();
    initInputHandlerExample3();
}

$(document).ready(init);