const byfindnewslid=async()=>{

    try {
        
        const res=await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`)
    let data=await res.json()
    let actual_data=data.articles;

 console.log(data)
 displaySlide(actual_data)
        
    } catch (error) {
    console.log(error)
        
    }


}
byfindnewslid()

let arr=JSON.parse(localStorage.getItem("news"))||[]
function displaySlide(data){
    let obj;
          document.getElementById('results').innerHTML=null
          
       data.forEach(function(e){
        // console.log(e.source.title)
        // document.getElementById('results').innerHTML=null
        let con=document.getElementById('results')
        
        let box=document.createElement("div")
        box.setAttribute("id","display_flex")
        let box1=document.createElement("div")
        let box2=document.createElement("div")
       
        box.setAttribute("class","news")
        let imgagr=document.createElement("img")
        imgagr.src=e.urlToImage
        imgagr.setAttribute("class","newsImg")
        let tittle=document.createElement("h3")
        tittle.innerText=e.title
        let des=document.createElement("p")
        des.innerText=e.description
        box1.append(imgagr)
        box2.append(tittle,des)
        
        box.append(box1,box2)
        // let 
        box.addEventListener("click",()=>{
             obj={
                img:e.urlToImage,
                tittle:e.title,
                description:e.description
            }
            arr.push(obj)
            console.log(imgagr,tittle,des)
            localStorage.setItem("news",JSON.stringify(arr))
            document.location.href="news.html   "

        })
        con.append(box)
       })
     
}