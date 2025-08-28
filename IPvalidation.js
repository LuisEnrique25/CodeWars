const ip1 = "1.2.3.4"
const ip2 = "123.45.67.89"
const ip3 = "1.2.3"
const ip4 = "1.2.3.4.5"
const ip5 = "123.456.78.90"
const ip6 ="123.045.067.89"
const ip7 = ''

function isValidIP (str){
    let nums = str.split(".")
    
    if(nums.length !== 4) {
      return false;
    }else{
       for (let i = 0; i < nums.length; i++) {
        if(nums[i].length > 1 && nums[i].startsWith("0")) return false;
        if(nums[i] > 255 || nums[i] < 0) return false 
        
       }
    }
    return true
}

console.log(isValidIP(ip7));


