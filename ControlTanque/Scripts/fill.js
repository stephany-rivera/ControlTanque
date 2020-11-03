
///Init (initial program values)   
var maximum, minimum, highlevel, lowlevel, valueTank;
var maximumCapacity;
    maximum = 100;
    minimum = 1;
    highlevel = 84;
    lowlevel = 15;
    maximumCapacity = 100000;
    
    
    

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
        var options = {
            series: [{
                type: 'liquidFill',
                waveAnimation: true,
                animation: true,
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
        
        function updateMaximumMinimum() {
            var newMinimum = document.getElementById("inputMinimum").value;
            var newMaximum = document.getElementById("inputMaximum").value;
            maximum = newMaximum;
            minimum = newMinimum;

            var currentValueModify = document.getElementById("inputModify").value;
            var currenValueAlertH = document.getElementById("inputHigh").value;
            var currentValueAlertL = document.getElementById("inputLow").value;
            
            if (currentValueModify > newMaximum) {
                document.getElementById("inputModify").value = newMaximum;
            }
            else if (currentValueModify < newMinimum) {
                document.getElementById("inputModify").value = newMinimum;
            }

            if (currentValueAlertL > newMaximum) {
                document.getElementById("inputLow").value = newMaximum;
            }
            else if (currentValueAlertL < newMinimum) {
                document.getElementById("inputLow").value = newMinimum;
            }
            
            if (currenValueAlertH > newMaximum) {
                document.getElementById("inputHigh").value = newMaximum;
            }
            else if (currenValueAlertH < newMinimum) {
                document.getElementById("inputHigh").value = newMinimum;
            }


            document.getElementById("inputModify").min = newMinimum;
            document.getElementById("inputModify").max = newMaximum;
            document.getElementById("inputLow").min = newMinimum;
            document.getElementById("inputLow").max=newMaximum;
            document.getElementById("inputHigh").max = newMaximum;
            document.getElementById("inputLow").min = newMinimum;

            tank(document.getElementById("inputModify").value);

        }

//Clear tank minimum capacity


        document.getElementById("inputClear").onclick = function () { clearTank() };

        function clearTank() {
            if (confirm("Estás seguro que deseas vaciar el tanque")) {
                var minimum = document.getElementById("inputMinimum").value;
                tank(minimum);
                document.getElementById("levelShow").value = minimum;
                document.getElementById("inputModify").value = minimum;                
            } 
            
        }


// Alarm
        setInterval(alarm(), 3000);
        function alarm() {
            console.log("alarma");
            var highLevel=document.getElementById("inputHigh").value;
            var lowLevel = document.getElementById("inputLow").value;
            var currentLevel = document.getElementById("levelShow").value;
            if (currentLevel>=highlevel) {
                window.alert("El tanque tiene niveles altos");
            }
            if (currentLevel <= lowlevel) {

                window.alert("El tanque tiene niveles bajos");
            }

            
        
        
        }


    


        


 

