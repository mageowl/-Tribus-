var output = {
    element: document.getElementById("log"),
    print(text) {
        var html = text.split("\n").join("<br>")
        this.element.innerHTML += html + "<br>"
    },

    input(option1, option2, callback) {
        var button1 = document.getElementById("options").children[0]
        var button2 = document.getElementById("options").children[1]
        button1.innerHTML = option1
        button2.innerHTML = option2
        button1.onclick = () => {callback("option1")}
        button2.onclick = () => {callback("option2")}
    }
}
