class Game{

    constructor(){}

    getState(){
        var gamestateRef=database.ref("gameState")
        gamestateRef.on("value",function(data){
        gamestate=data.val()    
        }
        )
        }
        update(state){
            database.ref("/").update({
                gameState:state
            }
            
            )

            
            
        }
start(){
 if(gamestate===0){
     form=new Form( )
     form.display()
 }   
}
}
