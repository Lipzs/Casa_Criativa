function onOff(){
    document
        .querySelector("#modal")
        .classList
        .toggle("hide")

    document
        .querySelector("body")
        .classList
        .toggle("hideScroll")

    document
        .querySelector("#modal")
        .classList
        .toggle("addScroll")

}

function textOver(){
    document
        .querySelector("#new")
        .innerHTML = "+ Adicionar ideia"
}

function textOut(){
    document
        .querySelector("#new")
        .innerHTML = "Novas idéias 💡"
}


