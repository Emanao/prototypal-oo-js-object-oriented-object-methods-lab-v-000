function BoardMember(name, homeState, training){
  this.name = name;
  this.homeState = homeState;
  this.training = training;
}
BoardMember.prototyp.veto = function(){
  return `No, I must disagree`;
}
BoardMember.prototyp.approve = function(){
  return `You can do that!`
}
BoardMember.prototyp.doCharity = function(){
  return `I like to help people.`
}
BoardMember.prototyp.releasePressStatement = function(){
  return `You will see great things from Scuber.`
}

BoardMember.prototyp.sayHi = function(){
  return `Hi, my name is ${this.name}. I am from ${this.homeState}, and I was trained in ${this.training}.`
}
