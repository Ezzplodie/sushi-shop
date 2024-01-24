function validatePIN (pin) {
  var pincode = 0;
  for (let i = 0;i < pin.lenght ; i++){
    pincode =+ pin[i]
    if (pincode.lenght === 4 || 6){
      return true;
    }else return false
  }
}