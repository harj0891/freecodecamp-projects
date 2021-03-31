



function checkCashRegister(price, cash, cid) {   
  const DENOM = [
    ["PENNY", 1],
    ["NICKEL", 5],
    ["DIME", 10],
    ["QUARTER", 25],
    ["ONE", 100],
    ["FIVE", 500],
    ["TEN", 1000],
    ["TWENTY", 2000],
    ["ONE HUNDRED", 10000]
  ]

    let changeDue = Math.round(cash * 100 - price * 100) ;

    let changeToGive = {};
    let cashInDrawer = {};
    let cashRegisterResponse = {};
    

    // popullate cashInDrawer object
    cid.forEach(element => {
      cashInDrawer[element[0]] = Math.round(element[1] * 100);
    });

    // loop through each demonination in reverse 
    let denomCounter = DENOM.length-1;
    while(denomCounter >= 0) {
      let currency = DENOM[denomCounter][0];
      let currencyValue = DENOM[denomCounter][1];

      // highest value that can be used for change
      
      if (changeDue - currencyValue > 0) {
        changeToGive[currency] = 0;
        
        // loop through cashindraw and decrement changeDue and cashInDrawer
        while (cashInDrawer[currency] > 0 && changeDue - currencyValue >= 0) {       
          changeDue -= currencyValue;
          cashInDrawer[currency] -= currencyValue;
          changeToGive[currency] += currencyValue;

        }
      }    
      denomCounter --;      
    }

    console.log(changeDue, changeToGive, cashInDrawer);

    // if changeDue still an outstanding balance, then return INSUFFICIENT_FUNDS
    if (changeDue > 0) { 
      cashRegisterResponse.status = "INSUFFICIENT_FUNDS";
      cashRegisterResponse.change = [];
    }
  
    // if changeDue is 0, and drawer is empty, then return CLOSED (and empty drawer value)
    let isDrawerEmpty = true;

    Object.keys(cashInDrawer).forEach(currency => {      
      if (cashInDrawer[currency] > 0) {
        isDrawerEmpty = false; 
      }
    });

    

    if (changeDue == 0 && isDrawerEmpty) {
      
      let cashInDrawerArray = [];

      Object.keys(cashInDrawer).forEach(currency => {
        if (changeToGive[currency] > 0 ) {
          cashInDrawerArray.push([currency, changeToGive[currency] / 100])
        } else {
          cashInDrawerArray.push([currency, 0])
        }
        
      });

      cashRegisterResponse.status = "CLOSED";
      cashRegisterResponse.change = cashInDrawerArray;
    }
    
    
    // if changeDue is 0, and drawer is NOT empty then return OPEN (and change value)
    if (changeDue === 0 && !isDrawerEmpty) { 
      
      let changeArray = [];

      Object.keys(changeToGive).forEach(currency => {
        changeArray.push([currency, changeToGive[currency] / 100])
      });

      cashRegisterResponse.status = "OPEN";
      cashRegisterResponse.change = changeArray;
    }
  
    
    return cashRegisterResponse;
  }
  
  // console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

  // console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));

  console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));