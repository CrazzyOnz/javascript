
function Book(name,price){
    this.priceChanging = [];
    this.priceChanged = [];
    
    this.price = function(val){
    
        //Call before changing the price
        if(val !=null && val!=price){ 
            
            for( var i=0;i<this.priceChanging.length;i++){
                
                if(!this.priceChanging[i](this,val)){
                   return price;
                }
            }//End of For Loop
                   
                price=val;
                   
            for( var i=0;i<this.priceChanged.length;i++){
                this.priceChanged[i](this);
            }      
                   
        }//End of the IF
        
         return price; 
    };
    
    this.onPriceChanging = function(callback){      
        this.priceChanging.push(callback);
    };
    
    this.onPriceChanged = function(callback){
          this.priceChanged.push(callback);
    }
    
}
    


function tryObservable(){
    
    console.log("Enterring tryObservable");
    
    var book = new Book("Bhagbad Gita",23);
    book.onPriceChanging(function(b,price){
    
    if(price>100){
        console.log("Too Costly ....!!!"+price);     
        return false;    
    }
        
    return true;    

}); 
    
    book.onPriceChanged(function(b){
        console.log("New Price is "+b.price());
    });

     book.price(40);
     book.price(200);
    
    
}