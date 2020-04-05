function setToRequired(nodeLists){

    nodeLists.map((nodeList)=>{
       
        nodeList.forEach(element => {
            if(element.type !== "file"){
                element.required=true;
            };
       })
    })  
}


var inputs = document.querySelectorAll("input")
var textArea = document.querySelectorAll("textarea")

setToRequired([inputs, textArea])
