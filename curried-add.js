function curriedAdd(x) {
    if(x===undefined) return 0
    else {
        return function internalAdd(y) {
            if(y===undefined) return x
            else {
                x = x + y
                return internalAdd
            }
        }
    }
}

module.exports = { curriedAdd };
