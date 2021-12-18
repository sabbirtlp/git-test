// var javascript = {
//     name:'javascript',
//     libraries:['React','Angular','Vue','Mofij'],
//     printLibraries:function(){
//         this.libraries.forEach(library =>{
//             console.log(`${this.name} Loves ${library}`);
//         })
//     }
// }
// javascript.printLibraries();


// var javascript = {
//     name: "javascript",
//     libraries:['React','Angular','Vue'],
//     printLibraries: function(){
//         let self = this;
//         this.libraries.forEach(function(library){
//             console.log(`${self.name} Loves ${library}`);
//         })
//     }
// }

// javascript.printLibraries()



// const getText = document.getElementById("get-text");
// const display = document.getElementById("display")


// function show(){
//     display.innerHTML = this.value;
//     if(this.value.length === 20){
//         display.style.color = "red"; 
//     }
// }
// getText.addEventListener("keyup",show)


let searchInput = document.querySelector('.search');
let showData = document.querySelector('.show')

function show(){
        let self = this;
        setTimeout(function(){
        showData.innerHTML = self.value;
    },3000)
}

searchInput.addEventListener("keyup",show)







