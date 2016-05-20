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
function initInputHandlerExample4() {

    function getListEntry(value) {
        return '<li>' + value+ ' <small class="killme">x</small></li>'
    }

    function registerKillHandler() {
        $('.killme').click(function(){
            this.parentElement.remove();
        });
    }

    $('#testid4').keypress(function(element){
        if(element.which == 13) {
            $('#example4list').append(getListEntry(this.value));
            this.value = "";
            registerKillHandler();
        }
    });
}

function init() {
    console.log("ready");
    initInputHandlerExample1();
    initInputHandlerExample2();
    initInputHandlerExample3();
    initInputHandlerExample4();
}

$(document).ready(init);