let names =["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "go home"];

function golfScore (par, stroke){
    if(stroke == 1){
        return names[0];
    }else if(stroke<=par -2){
        return names[1];
    }else if(stroke==par -1){
        return names[2];
    }else if(stroke==par){
        return names[3];
    }else if(stroke==par +1){
        return names[4];
    }else if(stroke==par +2){
        return names[5];
    }else if(stroke>=par +3){
        return names[6];
    }
}
console.log(golfScore(5,4));
console.log(golfScore(5,8));
console.log(golfScore(9,4));
