startSession(){
    var player1 = new Player(document.getElementById(player1));
    var player2 = new Player(document.getElementById(player2));
    var player3 = new Player(document.getElementById(player3));
    var player4 = new Player(document.getElementById(player4));
    var player5 = new Player(document.getElementById(player5));
    var player6 = new Player(document.getElementById(player6));
    var player7 = new Player(document.getElementById(player7));
    var player8 = new Player(document.getElementById(player8));
    var player9 = new Player(document.getElementById(player9));
    var player10 = new Player(document.getElementById(player10));

}

class Player{
    name;
    impostor = false;

    constructor(name) {
        this.name = name;
    }

    getName = () => {
        return this.name;
    };
}