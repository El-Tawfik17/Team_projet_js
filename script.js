document.querySelector('#push').onclick=function(){
// cette partie me permet dde verifier que l'utilisateur a au moin saisie quelque chose
    if(document.querySelector('#newtask  input').value.length== 0 || document.querySelector('#newtask  input').value=== "  "){
        alert("S'il vous plait veillez saisir quelques choses!!!")
    }
    else{
        // ======= Cette partie s'excute lorsque du texte est entrée par l'utilisateur=====
        // Dans cette partie j'injecte du Html depuis javascript dans mon code html
        document.querySelector('#tasks').innerHTML+=`
        <div class="task">
        
            <span id="taskname">
                ${document.querySelector('#newtask input').value}
            </span>
            <button class="delete">
                <i class="fa-solid fa-trash-can"></i>
        
            </button>


        </div>
        `; 
        // Cette partie récupère tout les boutton de suppression génerer par l'utilisateur
        let current_tasks=document.querySelectorAll(".delete");
        // Cette partie permet de parcourir le tableau et de les supprimer
        for(let i=0;i<current_tasks.length;i++){
            current_tasks[i].onclick=function(){
                
            this.parentNode.remove();
        }  
        }
        // Cette partie permet de récuperer les tasks sous forme d'un tableau
        let tasks= document.querySelectorAll(".task");
        // Cette boucle permet de parcourir le tableau et changer les classes
        for(var i=0;i<tasks.length;i++){
            tasks[i].onclick=function(){
                this.classList.toggle('completed');
            }
        }
    }
    // Cette partie permet de mettre à vide le champs de l'input
    document.querySelector("#newtask input").value="";
}