function findMatching(arr, str){
    const matchedNames = arr.filter(cb)
    return matchedNames

    function cb(nm){
      return  nm.toUpperCase() === str.toUpperCase()
        
    }
}


function fuzzyMatch(arr, str){
    const fuzzyMatchedNames = arr.filter(cb)
    return fuzzyMatchedNames

    function cb(nm){
        let three = nm.slice(0,2)
        return three === str
    }
}


let matchName = (arr, str) => {
    const matchNames = arr.filter(cb)
    return matchNames

    function cb(nm){
        return nm.name === str
    }
}