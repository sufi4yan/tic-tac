const allDivs = document.querySelectorAll(`main > *`)
let clicksX = []
let clicksO = []
let turn = 0
allDivs.forEach((item) => {
    item.addEventListener(`click`, () => {
        if (turn % 2 === 0) {
            filterer(clicksX)            
            item.innerText = `X` 
            clicksX.push(Number((item.id).slice(-1)))
            console.log(`clicks for O = ` + clicksO)
            console.log(`clicks for X = ` + clicksX)
            turn++
            let total = 0
            if (clicksX.length > 2) {
                
                clicksX.sort()
                clicksX.reverse()
                console.log(clicksX)
                
                if (checkWin(clicksX)) {
                    alert(`X won`)
                }
                
            }
            
        }
        else{
            filterer(clicksO)
            item.innerText = `O`
            clicksO.push(Number((item.id).slice(-1)))
            console.log(`clicks for O = ` + clicksO)
            console.log(`clicks for X = ` + clicksX)
            turn++
            let total = 0
            if (clicksO.length > 2) {
                
                clicksO.sort()
                clicksO.reverse()
                console.log(clicksO)
                
                if (checkWin(clicksO)) {
                    alert(`O won`)
                }

            }
        }
        
        // console.log(item.getBoundingClientRect().x)
        // console.log(item.getBoundingClientRect().y)
        console.log((item.id).slice(-1))
        
        
    }, {once: true})
})
function checkWin(player) {
    let win = false
    let yes = null
    win = filterer(player)[2]
    console.log(`win = ` + win)
    let difference = filterer(player)[0][0]
    let checker = filterer(player)[3][0]
        if (win){
            console.log(filterer(player)[3][0])
            console.log(filterer(player)[0][0])
            if ( difference === 1 || difference === 4) {
                console.log(`bongo`)
                checker % 3 === 0? win = true:win = false
                return win
                
            }
            if (difference === 2) {
                checker === 7 ? win = true: win = false
                
            }
           else{
            win = true
            console.log(`only else option`)
           }
        }
    return win
}
function filterer(arr) {
    arr.sort()
    arr.reverse()
    let difarr = []
    let whywin = []
    let newArr = []
    let win2 = false
    for (let i = 0; i < arr.length - 1; i++) {
        diff = arr[i] - arr[i + 1]
        difarr.push(diff)  
    }




    for (let i = 0; i < difarr.length - 1; i++){
        if (difarr[i] === difarr[i+1]){

            whywin = [difarr[i], difarr[i+1]]
            win2 = true
            newArr.push(arr[i+1])
            newArr.push(arr[i])
            newArr.push(arr[i+2])
            arr[i+3] === undefined? null : newArr.push(arr[i+3])
            

            
        }
    }
    newArr.sort()
    newArr.reverse()

    console.log(`difarr = ` + difarr)
    console.log(`filtered array = ` + newArr)
    console.log(`whywin = ` + whywin)
    set = [whywin, difarr, win2, newArr]
    return set
}