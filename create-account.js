

function createAccount(pin, amount=0) {
    this.pin = pin
    this.balance = amount
}

createAccount.prototype.verify = function (pin, action) {
    if (this.pin === pin) return action()
    else return "Invalid PIN."
}

/** checkBalance: Given the correct PIN, return the current
 * balance. (If the PIN is invalid, return “Invalid PIN.”)
 */
createAccount.prototype.checkBalance = function (pin) {
    return this.verify(pin, ()=>`$${this.balance}`)
}

/** deposit: Given the correct PIN and a deposit amount,
 * increment the account balance by the amount. (If the
 * PIN is invalid, return “Invalid PIN.”)
 */
createAccount.prototype.deposit = function (pin, amount) {
    return this.verify(pin,()=>{
        this.balance += amount
        return `Succesfully deposited $${amount}. Current balance: $${this.balance}.`
    })
}

/**withdraw: Given the correct PIN and a withdrawal amount,
 * decrement the account balance by the amount.You also
 * shouldn’t be able to withdraw more than you have. (If
 * the PIN is invalid, return “Invalid PIN.”)
 */
createAccount.prototype.withdraw = function (pin, amount) {
    return this.verify(pin,()=>{
        if(amount <= this.balance) {
            this.balance -= amount
            return `Succesfully withdrew $${amount}. Current balance: $${this.balance}.`
        }
        else {
            return "Withdrawal amount exceeds account balance. Transaction cancelled."
        }
    })
}

/**changePin: Given the old PIN and a new PIN, change the
 * PIN number to the new PIN. (If the old PIN is invalid,
 * return “Invalid PIN.”)
 */
createAccount.prototype.changePin = function (oldPin, newPin) {
    return this.verify(oldPin, () => {
        this.pin = newPin
        return "PIN successfully changed!"
    })
}


module.exports = { createAccount };
