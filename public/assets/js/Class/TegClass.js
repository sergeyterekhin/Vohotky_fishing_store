class TegMheader{
    _name=[];
    constructor(name){
        if(Array.isArray(name)){
        name.forEach(element => {
            this._name.push(document.querySelector(element));  
        })} else{
        this._name.push(document.querySelector(name));  
        }
    }

    set name(value){
        this._name=[];
        if(Array.isArray(value)){
            value.forEach(element => {
                this._name.push(document.querySelector(element));  
            })} else{
            this._name.push(document.querySelector(value));  
            }
    }

   show(){
    this._name.forEach(element => {
        element.style.display="block";   
    });
    
    }

    hiden(){
        this._name.forEach(element => {
            element.style.display="none";
        });
    
    }

    removeClass(name){
        this._name.forEach(element => {
            element.classList.remove(name);
        });
    
    }

    addClass(name){
        this._name.forEach(element => {
            element.classList.add(name); 
        });
     
    }
    
    hasClass(name){
        this._name.forEach(element => {
            if (element.classList.contains(name)) return false;
        });
     return true;
    }
}