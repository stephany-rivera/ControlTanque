
///Init (initial program values)   
var maximum, minimum, highlevel, lowlevel, valueTank;
var maximumCapacity;
var colorWaveNormal, colorWaveMin, colorWaveMax;
    maximum = 100;
    minimum = 1;
    highlevel = 84;
    lowlevel = 15;
    maximumCapacity = 100000;
    colorWaveNormal = 'blue';
    colorWaveMin = 'yellow';
    colorWaveMax = 'red';

    
        

//Init elements
    document.getElementById("levelShow").value = 35 ;
    document.getElementById("inputModify").value = 35;
    document.getElementById("inputMaximum").value = maximum ;
    document.getElementById("inputMinimum").value = minimum ;
    document.getElementById("inputHigh").value = highlevel;
    document.getElementById("inputLow").value = lowlevel;

//Init maximum value fields for capacity  
    document.getElementById("inputMaximum").min = 0;
    document.getElementById("inputMaximum").max = maximumCapacity;    
    document.getElementById("inputMinimum").min = 0;
    document.getElementById("inputMinimum").max = maximumCapacity;
    
    
    
    valueTank = 35;    
    tank(valueTank);
       

///Tank


    var _hmt = _hmt || [];
    (function () {
        var hm = document.createElement('script');
        hm.src = '//hm.baidu.com/hm.js?4bad1df23f079e0d12bdbef5e65b072f';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(hm, s);
    })();
  
    

    function tank(level) {       
        var percentage = ((level * 100) / (maximum - minimum)) / 100;
        alarm();
        var options = {
            series: [{
                type: 'liquidFill',
                waveAnimation: true,
                animation: true,
                color: [colorWaveNormal],
                data: [{
                    value: percentage
                }],
                shape: 'container',
            }]
        };
           
        
        var chart = echarts.init(document.getElementById('chart'));
        chart.setOption(options);
        window.onresize = function () {
            chart.resize();            
        };

        document.getElementById("levelShow").value = level;
        

    }




///Updates

        function update(levelCurrent) {
            document.getElementById("levelShow").value = levelCurrent;

        }
        

        document.getElementById("btnMaximum").onclick = function () { updateMaximumMinimum() };   


        function updateMaximumMinimum() {           
            var newMaximum = document.getElementById("inputMaximum").value;
            var newMinimum = document.getElementById("inputMinimum").value;
            maximum = newMaximum;
            minimum = newMinimum
         
            document.getElementById("inputModify").max = newMaximum;
            document.getElementById("inputLow").max = newMaximum;
            document.getElementById("inputHigh").max = newMaximum;

            document.getElementById("inputModify").min = newMinimum;
            document.getElementById("inputLow").min = newMinimum;
            document.getElementById("inputHigh").min = newMinimum;


            tank(document.getElementById("inputModify").value);
        }


//Clear tank minimum capacity


        document.getElementById("inputClear").onclick = function () { clearTank() };

        function clearTank() {
            if (confirm("Estás seguro que deseas vaciar el tanque")) {
                var minimum = document.getElementById("inputMinimum").value;
                document.getElementById("levelShow").value = minimum;
                document.getElementById("inputModify").value = minimum;
                tank(minimum);
                              
            } 
            
        }


// Alarm
        setInterval('alarm()', 8000);
        function alarm() {
            console.log("alarma");
            var highLevel=document.getElementById("inputHigh").value;
            var lowLevel = document.getElementById("inputLow").value;
            var currentLevel = document.getElementById("levelShow").value;
            if (currentLevel >= highlevel) {
                window.alert("El tanque tiene niveles altos");
                colorWaveNormal = colorWaveMax;
            }
            
            else if(currentLevel <= lowlevel) {
                colorWaveNormal = colorWaveMin;
                window.alert("El tanque tiene niveles bajos");
            }
            else {
                colorWaveNormal = 'blue';
            }
                    
        }


//enabled-disabled 
        enabledDisabled("inputMaximum");
        enabledDisabled("inputMinimum");
        enabledDisabled("minusMax");
        enabledDisabled("plusMax");
        enabledDisabled("minusMin");
        enabledDisabled("plusMin");

        enabledDisabled("inputHigh");
        enabledDisabled("inputLow");
        enabledDisabled("minusHigh");
        enabledDisabled("plusHigh");
        enabledDisabled("minusLow");
        enabledDisabled("plusLow");
        enabledDisabled("btnMaximum");
        


        function enabledDisabled(inputName) {
            var input = document.getElementById(inputName);
            input.addEventListener("focus", focus, true);
            input.addEventListener("blur", blur, true);
        }
        

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




    


        


 

