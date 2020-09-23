const proofs = $(".proofs")



proofs.hover(function(){
    let frames = $(".pdf")
    if (frames.length != 0){
        $(".pdf").remove()  
    }
    let val = $(this).attr("src")
    let pdf = $('<iframe></iframe>').attr('src',val)
    pdf.addClass("pdf")
    $(".intro").hide()
    $(".learning").after(pdf)
    $(".learning").text("Go back to Learning Journey")
    


},
function(){
   // $(".pdf").remove()   
   // $(".intro").show()
    
})

let journey = $(".learning").val()
console.log()
if (journey === "Go back to Learning Journey"){
    $(".learning").on("click", function(){
        $(".pdf").remove()   
        $(".intro").show()
    })
}


