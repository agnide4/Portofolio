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
    $("#aboutMe").on("click", function(){
        console.log("clicked")
        $(".pdf").remove()   
        $(".intro").show()
        $(".learning").text("My Learning Journey")
    })
    
})



