var cashButton = document.getElementById('cash-button')
var cashSound = document.getElementById('cashReg')
var canButton = document.getElementById('can-button')
var canSound = document.getElementById('canOpen')
var cannonButton = document.getElementById('cannon-button')
var cannonSound = document.getElementById('cannonFire')

cashButton.addEventListener('click', function(){
    cashSound.play()
})

canButton.addEventListener('click', function(){
    canSound.play()
})

cannonButton.addEventListener('click', function(){
    cannonSound.play()
})