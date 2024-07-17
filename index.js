const allDivs = document.querySelectorAll(`main > *`)
let clicksX = []
let clicksO = []
let turn = 0
const winCombos = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]]
allDivs.forEach((item) => {
    item.addEventListener(`click`, () => {
        let win = false
        if (turn % 2 === 0) {
            item.innerText = `X` 
            clicksX.push(Number((item.id).slice(-1)))
            turn++
            let total = 0
            if (clicksX.length > 2) {
               
                if (checkWin(clicksX)) {
                    alert(`X won`)
                }
                console.log(clicksX)
            }
            }
        else{

            item.innerText = `O`
            clicksO.push(Number((item.id).slice(-1)))
            turn++
            let total = 0
            if (clicksO.length > 2) {
                
                clicksO.sort()
                clicksO.reverse()
                console.log(clicksO)
                
                if (checkWin(clicksO)) {
                    alert(`O won`)
                    allDivs.forEach((e) => {
                        
                    })
                }
            }
        }
        console.log((item.id).slice(-1))
    }, {once: true})
})
function checkWin(player) {
    player.sort()
    let checkSubset = (parentArray, subsetArray) => {
        return subsetArray.every((el) => {
            return parentArray.includes(el)
        })
    }

    let win = false
    for (let i = 0; i < winCombos.length; i++) {
        win = false
            if (checkSubset(player, winCombos[i])) {
                win = true
                console.log(`wow`)
            }
            if (win){
                if (String(winCombos[i]) === String([1,2,3])) {document.querySelector(`main`).classList.add(`win-horz-upper`)}
                else if(String(winCombos[i]) === String([4,5,6])) {document.querySelector(`main`).classList.add(`win-horz-middle`)}
                else if(String(winCombos[i]) === String([7,8,9])){document.querySelector(`main`).classList.add(`win-horz-down`)}
                else if(String(winCombos[i]) === String([1,4,7])) {document.querySelector(`main`).classList.add(`win-vert-left`)}
                else if(String(winCombos[i]) === String([2,5,8])) {document.querySelector(`main`).classList.add(`win-vert-middle`)}
                else if(String(winCombos[i]) === String([3,6,9])) {document.querySelector(`main`).classList.add(`win-vert-right`)}
                else if(String(winCombos[i]) === String([3,5,7])) {document.querySelector(`main`).classList.add(`win-slant-357`)}
                else if(String(winCombos[i]) === String([1,5,9])) {document.querySelector(`main`).classList.add(`win-slant-159`)}    
                break        
            }
            
    }
    return win

}
