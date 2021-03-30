

const DENOM = [
  ["PENNY", 0.01],
  ["NICKEL", 0.05],
  ["DIME", 0.1],
  ["QUARTER", 0.25],
  ["ONE", 1],
  ["FIVE", 5],
  ["TEN", 10],
  ["TWENTY", 20],
  ["ONE HUNDRED", 100]
]

function checkCashRegister(price, cash, cid) {
    let cashRegisterResponse = {};
    let changeDue = Math.round(cash * 100 - price * 100) / 100 ;

    
  
  
    // const cashInDrawer = cid.reduce( (accumulator, currency) => {
    //   switch(currency[0]) {
    //     case("PENNY"):
    //       accumulator += currency[1] * 0.01;
    //       break;
    //     case("NICKEL"):
    //       accumulator += currency[1] * 0.05;
    //       break;
    //     case("DIME"):
    //       accumulator += currency[1] * 0.1;
    //       break;
    //     case("QUARTER"):
    //       accumulator += currency[1] * 0.25;
    //       break;
    //     case("ONE"):
    //       accumulator += currency[1] * 1;
    //       break;        
    //     case("FIVE"):
    //       accumulator += currency[1] * 5;
    //       break;        
    //     case("TEN"):
    //       accumulator += currency[1] * 10;
    //       break;        
    //     case("TWENTY"):
    //       accumulator += currency[1] * 20;
    //       break;                                
    //     case("ONE HUNDRED"):
    //       accumulator += currency[1] * 100;
    //       break;                         
    //   }
    //   return accumulator;
    // }, 0)
    // console.log(cashInDrawer);
    // console.log(changeDue);
  
  
    // if (changeDue > cashInDrawer) { 
    //   cashRegisterResponse.status = "INSUFFICIENT_FUNDS";
    //   cashRegisterResponse.change = [];
    // }
  
    // if (changeDue == cashInDrawer) { 
    //   cashRegisterResponse.status = "CLOSED";
    //   cashRegisterResponse.change = [...cid];
    // }
  
  
    return cashRegisterResponse;
  }
  
  console.log(checkCashRegister(19.05, 20.01, [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE",1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));