const proofs = $(".proofs")



proofs.hover(function(){
   
    let val = $(this).attr("src")
    let pdf = $('<iframe></iframe>').attr('src',val)
    pdf.addClass("pdf")
    $(".intro").hide()
    $(".learning").empty()
    $(".learning").after(pdf)
    

},
function(){
    const frames = $(".pdf")
    frames.on("click", function(event){
        console.log("out")
        if (frames !== event.target){
            console.log("in")
            $(".pdf").remove()   
            $(".intro").show()
        }
        
    })
    
})


