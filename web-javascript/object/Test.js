<html>
<head>
<script >
window.onload = function() {

    //Object Literat
    var cat = {
       name:"Fluffy",
       color:"Black"    
    };
    
    //Constructor function
    function Cat(name,color){
        this.name=name
        this.color=color
    }
    
    //Need to use the NEW commond 
    var newCat = new Cat("Bunty","Yellow");
    
    //Class symbol
    class Dog{
        constructor(name,sound){
            this.name=name
            this.sound=sound
        }
    }
    
    var doggy = new Dog("Pintu","BHO...BHO");  
    Object.defineProperty(doggy,'name',{writable:false});
    doggy.name="New Pintu";
   
    //Enumerate Properties
    for (prop in doggy){
        //alert(prop);
       // alert(doggy[prop]);
    }
    
    //Define A composite property
    
    function Employee(id,name){
      this.name=name
      this.id=id
    }
    
    var emp=  {
        id:"111",
        name:{first:"Abhishek",last:"Kumar"}  
    }
    
    Object.defineProperty(emp,'fullName',{
    
        set: function(val){
            var nameParts = val.split(' ');
            this.name.first=nameParts[0];
            this.name.last=nameParts[1];           
        },
        
        get: function(){
            return this.name.first+' '+this.name.last;          
        }
    
    });
    
    
    emp.fullName="Ayaan Kumar";
    //alert(JSON.stringify(emp));
    alert(emp.fullName);
    
};
</script>
</head>
<body>

</body>
</html>
