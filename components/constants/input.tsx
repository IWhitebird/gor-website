export const codeInput = 
`print("Welcome to gor , let's write program to find prime numbers 😀")

fn isPrime(num) {
    if(num <= 1) {
        return false
    }
    else if (num == 2) {
        return true
    }
    else if (num % 2 == 0) {
        return false
    }
    else {
        for (let i = 3 ; i < num ; i = i + 1) {
            if (num % i == 0) {
                return false
            }
        }
        return true
    }
}

fn findPrimes(n) {
    for(let k = 2 ; k <= n ; k = k + 1) {
        if(isPrime(k)){
            print(k)
        }
    }
    return 0
}

findPrimes(10)
`