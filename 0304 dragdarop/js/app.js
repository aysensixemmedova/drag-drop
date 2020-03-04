var drgitem=document.querySelectorAll(".dragitem")
var drpArea = document.querySelector(".dropArea")
for(var drg of drgitem){
    drg.addEventListener("dragstart",function(c){
        this.style ="background:#ccc";
        c.dataTransfer.setData("dId",this.id)
    })
    drg.addEventListener("dragleave",function(){
        this.style ="background:transparent";
    })
}
drpArea.addEventListener("dragover", function(e){
    e.preventDefault()
})
drpArea.addEventListener("drop", function(a){
a.preventDefault();
var dragId = a.dataTransfer.getData("dId")
var ditem = document.getElementById(dragId)
drpArea.appendChild(ditem)
ditem.style = "background:green;color:#fff"

})