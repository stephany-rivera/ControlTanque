//plugin bootstrap minus and plus
//http://jsfiddle.net/laelitenetwork/puJ6G/



$('.btn-number').click(function(e){
    e.preventDefault();
    
    fieldName = $(this).attr('data-field');
    type      = $(this).attr('data-type');
    var input = $("input[name='"+fieldName+"']");
    var currentVal = parseInt(input.val());
    if (!isNaN(currentVal)) {
        if(type == 'minus') {
            
            if(currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
                if (fieldName == 'modify') {                   
                    tank(parseInt(input.val()));                   
                }
                if (name == 'maximum' || name == 'minimum') {
                    updateMaximumMinimum();
                }
            } 
            if(parseInt(input.val()) == input.attr('min')) {
                $(this).attr('disabled', true);
            }

        } else if(type == 'plus') {

            if(currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
                if (fieldName == 'modify') {
                    tank(parseInt(input.val()));                    
                }
                if (name == 'maximum' || name == 'minimum') {
                    updateMaximumMinimum();
                }
            }
            if(parseInt(input.val()) == input.attr('max')) {
                $(this).attr('disabled', true);
            }

        }
    } else {
        input.val(0);
    }
});



$('.input-number').focusin(function(){
    $(this).data('oldValue', $(this).val());       
});
$('.input-number').change(function () {    
    minValue =  parseInt($(this).attr('min'));
    maxValue =  parseInt($(this).attr('max'));
    valueCurrent = parseInt($(this).val());    
    
    name = $(this).attr('name');
    if(valueCurrent >= minValue) {
        $(".btn-number[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
        if (name == 'modify') {
            tank(valueCurrent);            
        }
        if(name=='maximum' || name=='minimum'){
            updateMaximumMinimum();
        }
        
    } else {
        alert('Lo siento, Este valor supera la cantidad mínimima permitida');
        $(this).val($(this).data('oldValue'));        
        if (name == 'modify') {
            tank(val($(this).data('oldValue')));
        }
    }
    if(valueCurrent <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
        if (name == 'modify') {
            tank(valueCurrent);
        }
        if (name == 'maximum' || name == 'minimum') {
            updateMaximumMinimum();
        }
    } else {
        alert('Lo siento, Este valor supera la cantidad máxima permitida');
        $(this).val($(this).data('oldValue'));       
        if (name == 'modify') {
            tank(val($(this).data('oldValue')));
        }
    }
    
    
});
$(".input-number").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) || 
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
});




//enabled-disabled 

var inputMax = document.getElementById("inputMaximum");
var inputMin = document.getElementById("inputMinimum");
var inputMinusMax = document.getElementById("minusMax");
var inputPlusMax = document.getElementById("plusMax");
var inputMinusMin = document.getElementById("minusMin");
var inputPlusMin = document.getElementById("plusMin");

inputMax.addEventListener("focus", focus, true);
inputMax.addEventListener("blur", blur, true);
inputMin.addEventListener("focus", focus, true);
inputMin.addEventListener("blur", blur, true);

inputMinusMax.addEventListener("focus", focus, true);
inputMinusMax.addEventListener("blur", blur, true);
inputPlusMax.addEventListener("focus", focus, true);
inputPlusMax.addEventListener("blur", blur, true);

inputMinusMin.addEventListener("focus", focus, true);
inputMinusMin.addEventListener("blur", blur, true);
inputPlusMin.addEventListener("focus", focus, true);
inputPlusMin.addEventListener("blur", blur, true);


function focus() {
    document.getElementById("inputModify").disabled = true;
    document.getElementById("minusModify").disabled = true;
    document.getElementById("plusModify").disabled = true;
    
}

function blur() {
    document.getElementById("inputModify").disabled = false;
    document.getElementById("minusModify").disabled = false;
    document.getElementById("plusModify").disabled = false;
   
}

