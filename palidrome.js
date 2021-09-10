

const palindrome=(str)=>{let i=0;let j=str.length-1;while(i<j){if(str[i]!=str[j])return false;i++;j--;}return true;};


function sum(){
    if(arguments.length > 1) {
        return arguments[0] + sum(arguments.slice(1))()
    }
    else if(arguments.length === 1) {
        return (x) => arguments[0] + x
    }
    else {
        return 0
    }
}


const domVisitor = (element, f) => {
    const stack = [element]
    while(stack.length) {
        const e = stack.pop()
        for( let child of e.children ) {
            stack.push(child)
        }
        f(e)
    }
}