//Your code here
function justInvoke(fn){
  return fn.call();
}
function setThisWithCall(fn, thisValue, arg){
  return fn.call(thisValue,arg);
}
function setThisWithApply(fn, thisValue, arg){
  return fn.apply(thisValue,arg);
}
function returnNewFunctionOf(functionToBeCopied, thisValue){
  this.functionToBeCopied= newfunction.apply(thisValue);
  return newfunction;
}