class Student {
   constructor(id, name, courses) {
    Object.defineProperty(this, "id", {
      value: id,            
      writable: false,     
      configurable: false,   
      enumerable: true      
    });
   }
}
