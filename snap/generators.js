function Generator(code){
  this.code = code;
};
Generator.prototype.next = function(){
  return this.code();
};
Generator.prototype.toString = function(){
  return "a Generator [" + this.code + "]";
};
