 
 function evenify(num){
    if (num % 2 == 0) {
        console.log(num, 'is even number')
    }
    else{
        console.log(num, 'age is odd number')
    }
}


function evenify_all(nums){
 for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    evenify(num)
 }
}

 nums = [2,33,4,67,99,77,111,8];
 evenify_all(nums)


    // if (num % 2 == 0) {
    //     console.log(num, 'is even number')
    // }
    // else{
    //     console.log(num, 'age is odd number')
    // }




friends_age = [12,23,22,24,25,26,2,72,29];
evenify_all(friends_age)

// for (let i = 0; i < friends_age.length; i++) {
    // const age = friends_age[i];
    // evenify(age)


    // if (age % 2 ==0) {
    //     console.log(age, 'is even number')
    // }
    // else{
    //     console.log(age, 'age is odd number')
    // }
    
