export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	// Your code here!
    
    let i = nums.indexOf(n)
    
    if((i >= 0) && (i < nums.length-1))
        return nums[i+1]
    
    return null
    
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
    
    let r = {1:(str.match(/1/g) || []).length ,
            0:(str.match(/0/g) || []).length }
    
    return r
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');
	// Your code here!
    
    let s = n.toString()
    
    return parseInt([...s].reverse().join(""))
    
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	// Your code here!
    
    
    let r = 0
    
    for(let c of arrs) {
        r+= c.reduce((partialSum, a) => partialSum + a, 0)
    }
    
    return r
    
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	// Your code here!
    
    if(arr.length < 2) return arr
    
    let t = arr[0]
    
    arr[0] = arr[arr.length-1]
    
    arr[arr.length-1] = t
    
    return arr
    
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	// Your code here!
    
    for(let c of Object.values(haystack) ) {
        
        if(typeof c == "string") {
            if(c.toUpperCase().includes(searchTerm.toUpperCase() )) return true
        }
        
    }
    
    return false
    
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
    
    let r = {}
    
    for(var c of str.split(" ")) {
        //console.log(c)
    
        let cl = c.replace(/[\p{P}$+<=>^`|~]/gu, '').toLowerCase()
        
        if(r.hasOwnProperty( cl )) r[cl]++
        else r[cl] = 1
        
    }
    
    return r
    
};
