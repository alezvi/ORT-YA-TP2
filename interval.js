
let obj = {
    id : null,
    action : function () {
        setTimeout(function () {
            console.log(this.id)
        }, 3000)
    }
}
