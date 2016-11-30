'use strict';

function Calculator(val){
    
    this.val = val;
    
    this.add = function(addVal){
        this.val+=addVal;
        return this;
    };
    
    this.multiply = function(mulVal){
        this.val*=mulVal;
        return this;
    };
    
    this.show = function(callback){
        callback(this.val);
    };  
}



function tryChaining(){
    
    var cal=new Calculator(2).add(23).multiply(2).show(
        function(val){
            alert(val);
        }
    
    );
    console.log(cal);
}