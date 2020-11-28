class Form{

constructor() {}

display() {

var title = createElement("h2")
title.html("Car racing")
title.position(300,100)


var input = createInput("name")
input.position(300,150)

var button = createButton("Play")
button.position(300,200)

var greeting = createElement("h3")



button.mousePressed(function(){

    input.hide()
    button.hide()

    var name = input.value()
    playerCount+= 1
    player.update(name)
    player.updateCount(playerCount)

    greeting.html("Hello, Welcome " + name)
    greeting.position(300,160)

})


}


}