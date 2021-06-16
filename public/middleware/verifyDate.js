let hour = new Date().getHours()
let day=new Date().getDay()

function verifyDate(req, res, next){
    if (8 <hour && hour < 18 && day!==0 && day!==6 ){
        next()
    }
    else{
        console.log("This web application is only available during working hours (Monday to Friday,  from 9 to 17)")
    }
}
module.exports = verifyDate
