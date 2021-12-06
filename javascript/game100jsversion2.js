//this var are used in the game
var ex1 = 1, ex2 = 1, ex3 = 1, ex4 = 1, ex5 = 1, ex6 = 1, ex7 = 1, ex8 = 1, ex9 = 1, ex10 = 1, ex11 = 1, ex12 = 1, ex13 = 1, ex14 = 1, ex15 = 1, ex16 = 1, ex17 = 1, ex18 = 1, ex19 = 1, ex20 = 1, ex21 = 1, ex22 = 1, ex23 = 1, ex24 = 1, ex25 = 1, ex26 = 1, ex27 = 1, ex28 = 1, ex29 = 1, ex30 = 1, ex31 = 1, ex32 = 1, ex33 = 1, ex34 = 1, ex35 = 1, ex36 = 1, ex37 = 1, ex38 = 1, ex39 = 1, ex40 = 1, ex41 = 1, ex42 = 1, ex43 = 1, ex44 = 1, ex45 = 1, ex46 = 1, ex47 = 1, ex48 = 1, ex49 = 1, ex50 = 1, ex51 = 1, ex52 = 1, ex53 = 1, ex54 = 1, ex55 = 1, ex56 = 1, ex57 = 1, ex58 = 1, ex59 = 1, ex60 = 1, ex61 = 1, ex62 = 1, ex63 = 1, ex64 = 1, ex65 = 1, ex66 = 1, ex67 = 1, ex68 = 1, ex69 = 1, ex70 = 1, ex71 = 1, ex72 = 1, ex73 = 1, ex74 = 1, ex75 = 1, ex76 = 1, ex77 = 1, ex78 = 1, ex79 = 1, ex80 = 1, ex81 = 1, ex82 = 1, ex83 = 1, ex84 = 1, ex85 = 1, ex86 = 1, ex87 = 1, ex88 = 1, ex89 = 1, ex90 = 1, ex91 = 1, ex92 = 1, ex93 = 1, ex94 = 1, ex95 = 1, ex96 = 1, ex97 = 1, ex98 = 1, ex99 = 1, ex100 = 1;
var b1 = "#", b2 = "$", b3 = "+", b4 = "@", b5 = "&", b6 = "*", b7 = "^", b8 = "/", b9 = "-";
var click = 0;
var array = [100];
var update;
var y = 0;
//this function helps to output the O and X base on some condition
function even(odd){
  var tmp;
  tmp=y+1;
  if (odd % 2 == 0) {
    document.getElementById("t"+tmp).innerHTML = "O";
    document.getElementById("t"+tmp).style.backgroundColor = "grey";
    click++; array[y] = "O";
  } else {
    document.getElementById("t"+tmp).innerHTML = "X";
    document.getElementById("t"+tmp).style.backgroundColor = "brown"; click++; array[y] = "X";
  }
}
function func1() {
  y = 0;
  if (ex1) {
    even(click);
    check();
  }
  ex1 = 0;
}
function func2() {
  y = 1;
  if (ex2) {
   even(click); check();
  }
  ex2 = 0;
}
function func3() {
  y = 2;
  if (ex3) {
    even(click); check();
  }
  ex3 = 0;
}
function func4() {
  y = 3;
  if (ex4) {
   check();
   even(click);
  }
  ex4 = 0;
}
function func5() {
  y = 4;
  if (ex5) {
    even(click);
    check();
  }
  ex5 = 0;
}
function func6() {
  y = 5;
  if (ex6) {even(click); check();
  }
  ex6 = 0;
}
function func7() {
  y = 6;
  if (ex7) {even(click);check();
  }
  ex7 = 0;
}
function func8() {
  y = 7;
  if (ex8) {even(click); check();
  }
  ex8 = 0;
}
function func9() {
  y = 8;
  if (ex9) {even(click);check();
  }
  ex9 = 0;
}
function func10() {
  y = 9;
  if (ex10) {even(click);check();
  }
  ex10 = 0;
}
function func11() {
  y = 10;
  if (ex11) {even(click); check();
  }
  ex11 = 0;
}
function func12() {
  y = 11;
  if (ex12) {even(click); check();
  }
  ex12 = 0;
}
function func13() {
  y = 12;
  if (ex13) {even(click); check();
  }
  ex13 = 0;
}
function func14() {
  y = 13;
  if (ex14) {even(click);check();
  }
  ex14 = 0;
}
function func15() {
  y = 14;
  if (ex15) {even(click); check();
  }
  ex15 = 0;
}
function func16() {
  y = 15;
  if (ex16) {even(click);check();
  }
  ex16 = 0;
}
function func17() {
  y = 16;
  if (ex17) {even(click); check();
  }
  ex17 = 0;
}
function func18() {
  y = 17;
  if (ex18) {even(click); check();
  }
  ex18 = 0;
}
function func19() {
  y = 18;
  if (ex19) {even(click);check();
  }
  ex19 = 0;
}
function func20() {
  y = 19;
  if (ex20) {even(click); check();
  }
  ex20 = 0;
}
function func21() {
  y = 20;
  if (ex21) {even(click); check();
  }
  ex21 = 0;
}
function func22() {
  y = 21;
  if (ex22) {even(click);check();
  }
  ex22 = 0;
}
function func23() {
  y = 22;
  if (ex23) {even(click); check();
  }
  ex23 = 0;
}
function func24() {
  y = 23;
  if (ex24) {even(click);check();
  }
  ex24 = 0;
}
function func25() {
  y = 24;
  if (ex25) {even(click); check();
  }
  ex25 = 0;
}
function func26() {
  y = 25;
  if (ex26) {even(click); check();
  }
  ex26 = 0;
}
function func27() {
  y = 26;
  if (ex27) {even(click); check();
  }
  ex27 = 0;
}
function func28() {
  y = 27;
  if (ex28) {even(click); check();
  }
  ex28 = 0;
}
function func29() {
  y = 28;
  if (ex29) {even(click);check();
  }
  ex29 = 0;
}
function func30() {
  y = 29;
  if (ex30) {even(click);check();
  }
  ex30 = 0;
}
function func31() {
  y = 30;
  if (ex31) {even(click);check();
  }
  ex31 = 0;
}
function func32() {
  y = 31;
  if (ex32) {even(click); check();
  }
  ex32 = 0;
}
function func33() {
  y = 32;
  if (ex33) {even(click); check();
  }
  ex33 = 0;
}
function func34() {
  y = 33;
  if (ex34) {even(click); check();
  }
  ex34 = 0;
}
function func35() {
  y = 34;
  if (ex35) {even(click);check();
  }
  ex35 = 0;
}
function func36() {
  y = 35;
  if (ex36) {even(click);check();
  }
  ex36 = 0;
}
function func37() {
  y = 36;
  if (ex37) {even(click);check();
  }
  ex37 = 0;
}
function func38() {
  y = 37;
  if (ex38) {even(click);check();
  }
  ex38 = 0;
}
function func39() {
  y = 38;
  if (ex39) {even(click); check();
  }
  ex39 = 0;
}
function func40() {
  y = 39;
  if (ex40) {even(click); check();
  }
  ex40 = 0;
}
function func41() {
  y = 40;
  if (ex41) {even(click);check();
  }
  ex41 = 0;
}
function func42() {
  y = 41;
  if (ex42) {even(click); check();
  }
  ex42 = 0;
}
function func43() {
  y = 42;
  if (ex43) {even(click); check();
  }
  ex43 = 0;
}
function func44() {
  y = 43;
  if (ex44) {even(click); check();
  }
  ex44 = 0;
}
function func45() {
  y = 44;
  if (ex45) {even(click); check();
  }
  ex45 = 0;
}
function func46() {
  y = 45;
  if (ex46) {even(click);check();
  }
  ex46 = 0;
}
function func47() {
  y = 46;
  if (ex47) {even(click); check();
  }
  ex47 = 0;
}
function func48() {
  y = 47;
  if (ex48) {even(click); check();
  }
  ex48 = 0;
}
function func49() {
  y = 48;
  if (ex49) {even(click); check();
  }
  ex49 = 0;
}
function func50() {
  y = 49;
  if (ex50) {even(click); check();
  }
  ex50 = 0;
}
function func51() {
  y = 50;
  if (ex51) {even(click); check();
  }
  ex51 = 0;
}
function func52() {
  y = 51;
  if (ex52) {even(click); check();
  }
  ex52 = 0;
}
function func53() {
  y = 52;
  if (ex53) {even(click);check();
  }
  ex53 = 0;
}
function func54() {
  y = 53;
  if (ex54) {even(click); check();
  }
  ex54 = 0;
}
function func55() {
  y = 54;
  if (ex55) {even(click); check();
  }
  ex55 = 0;
}
function func56() {
  y = 55;
  if (ex56) {even(click);check();
  }
  ex56 = 0;
}
function func57() {
  y = 56;
  if (ex57) {even(click); check();
  }
  ex57 = 0;
}
function func58() {
  y = 57;
  if (ex58) {even(click); check();
  }
  ex58 = 0;
}
function func59() {
  y = 58;
  if (ex59) {even(click); check();
  }
  ex59 = 0;
}
function func60() {
  y = 59;
  if (ex60) {even(click);check();
  }
  ex60 = 0;
}
function func61() {
  y = 60;
  if (ex61) {even(click); check();
  }
  ex61 = 0;
}
function func62() {
  y = 61;
  if (ex62) {even(click); check();
  }
  ex62 = 0;
}
function func63() {
  y = 62;
  if (ex63) {even(click); check();
  }
  ex63 = 0;
}
function func64() {
  y = 63;
  if (ex64) {even(click); check();
  }
  ex64 = 0;
}
function func65() {
  y = 64;
  if (ex65) {even(click); check();
  }
  ex65 = 0;
}
function func66() {
  y = 65;
  if (ex66) {even(click); check();
  }
  ex66 = 0;
}
function func67() {
  y = 66;
  if (ex67) {even(click); check();
  }
  ex67 = 0;
}
function func68() {
  y = 67;
  if (ex68) {even(click);check();
  }
  ex68 = 0;
}
function func69() {
  y = 68;
  if (ex69) {even(click); check();
  }
  ex69 = 0;
}
function func70() {
  y = 69;
  if (ex70) {even(click);check();
  }
  ex70 = 0;
}
function func71() {
  y = 70;
  if (ex71) {even(click); check();
  }
  ex71 = 0;
}
function func72() {
  y = 71;
  if (ex72) {even(click); check();
  }
  ex72 = 0;
}
function func73() {
  y = 72;
  if (ex73) {even(click);check();
  }
  ex73 = 0;
}
function func74() {
  y = 73;
  if (ex74) {even(click); check();
  }
  ex74 = 0;
}
function func75() {
  y = 74;
  if (ex75) {even(click);check();
  }
  ex75 = 0;
}
function func76() {
  y = 75;
  if (ex76) {even(click); check();
  }
  ex76 = 0;
}
function func77() {
  y = 76;
  if (ex77) {even(click); check();
  }
  ex77 = 0;
}
function func78() {
  y = 77;
  if (ex78) {even(click); check();
  }
  ex78 = 0;
}
function func79() {
  y = 78;
  if (ex79) {even(click); check();
  }
  ex79 = 0;
}
function func80() {
  y = 79;
  if (ex80) {even(click);check();
  }
  ex80 = 0;
}
function func81() {
  y = 80;
  if (ex81) {even(click); check();
  }
  ex81 = 0;
}
function func82() {
  y = 81;
  if (ex82) {even(click);check();
  }
  ex82 = 0;
}
function func83() {
  y = 82;
  if (ex83) {even(click); check();
  }
  ex83 = 0;
}
function func84() {
  y = 83;
  if (ex84) {even(click); check();
  }
  ex84 = 0;
}
function func85() {
  y = 84;
  if (ex85) {even(click); check();
  }
  ex85 = 0;
}
function func86() {
  y = 85;
  if (ex86) {even(click); check();
  }
  ex86 = 0;
}
function func87() {
  y = 86;
  if (ex87) {even(click); check();
  }
  ex87 = 0;
}
function func88() {
  y = 87;
  if (ex88) {even(click); check();
  }
  ex88 = 0;
}
function func89() {
  y = 88;
  if (ex89) {even(click); check();
  }
  ex89 = 0;
}
function func90() {
  y = 89;
  if (ex90) {even(click);check();
  }
  ex90 = 0;
}
function func91() {
  y = 90;
  if (ex91) {even(click); check();
  }
  ex91 = 0;
}
function func92() {
  y = 91;
  if (ex92) {even(click);check();
  }
  ex92 = 0;
}
function func93() {
  y = 92;
  if (ex93) {even(click);check();
  }
  ex93 = 0;
}
function func94() {
  y = 93;
  if (ex94) {even(click);check();
  }
  ex94 = 0;
}
function func95() {
  y = 94;
  if (ex95) {even(click); check();
  }
  ex95 = 0;
}
function func96() {
  y = 95;
  if (ex96) {even(click); check();
  }
  ex96 = 0;
}
function func97() {
  y = 96;
  if (ex97) {even(click); check();
  }
  ex97 = 0;
}
function func98() {
  y = 97;
  if (ex98) {even(click); check();
  }
  ex98 = 0;
}
function func99() {
  y = 98;
  if (ex99) {even(click); check();
  }
  ex99 = 0;
}
function func100() {
  y = 99;
  if (ex100) {even(click); check();
  }
  ex100 = 0;
}

//this varaibles helps to keep track of the matching values 
var a1, a2, a3, a4, flag1, flag2, flag3, flag4;
//this var helps to set the player X and O scores
var pla1 = 0, pla2 = 0;
function check() {
  a1 = 0; a2 = 0; a3 = 0;
  a4 = 0, flag1 = 0, flag2 = 0, flag3 = 0, flag4 = 0;
  //loops through the array to find a match
  for (let j = 0; j < 3; ++j) {
    if (j == 1) {
      a1 = 9;
      a2 = 11;
      a3 = -11;
      a4 = -9;
    }
    if (j > 1) {
      a1 = a1 + 1;
      a2 = a2 - 1;
      a3 = a3 + 1;
      a4 = a4 - 1;
    }
    if (array[y] === array[y + 1 + a1]) {
      ++flag1;
      console.log("flag 1 was ++1 when j was " + j);
    }
    if (array[y] === array[y - 1 + a2]) {
      ++flag2;
      console.log("flag 2 was ++1 when j was " + j);
    }
    if (array[y] === array[y + 1 + a3]) {
      console.log("flag 3 was ++1 when j was " + j);
      ++flag3;
    }
    if (array[y] === array[y - 1 + a4]) {
      console.log("flag 4 was ++1 when j was " + j);
      ++flag4;
    }
    //this function helps to increement the value of the player when a condition is made;
    function valid()
    {
      if(flag1>2 && flag2>2 && flag3 >2 && flag4>2){
       return 4;
      }
      if((flag1>2 && flag2>2) || (flag1>2 && flag3>2) ||(flag2>2 && flag3>2) || (flag3>2 && flag4>2) ){
        return 2
      }
      if (flag1 > 2 || flag2 > 2 || flag3 > 2 || flag4 > 2){
        return 1;
      }else{
        return 0;
      }
    }
    //end if the function
    if (array[y] == "X" && (flag1 > 2 || flag2 > 2 || flag3 > 2 || flag4 > 2)) {
      pla1=valid() +pla1;
          alert("player X won");
      document.getElementById("p1").innerHTML = pla1;
        --click;
      }
    }
    if(array[y] == "O" && (flag1 > 2 || flag2 > 2 || flag3 > 2 || flag4 > 2))  {
        pla2=valid() +pla2;
        alert("player 0 won");
        document.getElementById("p2").innerHTML = pla2;
        --click;
    }
}
var set = 0;
function setting() {
  if (set % 2 == 0) {
    $("table").fadeOut(1500);
    $("div").removeClass("di");
    $("h3").fadeIn(1000);

  } else {
    $("table").fadeIn(1000);
    $("div").addClass("di");
    $("h3").fadeOut(1500);
  }
  ++set;
}
function gamesetting() {
  // $("td").toggle(1500);
  // update.innerHTML="";
  //  alert(update);
  for (let i = 0; i < 9; ++i) {
    alert(array[i]);
  }

}

function reset() {

  for(let k=0;k<100;++k){
    array[k]=String.fromCharCode(32+k);
    console.log(array[k]);
  }
  ex1 = 1, ex2 = 1, ex3 = 1, ex4 = 1, ex5 = 1, ex6 = 1, ex7 = 1, ex8 = 1, ex9 = 1, ex10 = 1, ex11 = 1, ex12 = 1, ex13 = 1, ex14 = 1, ex15 = 1, ex16 = 1, ex17 = 1, ex18 = 1, ex19 = 1, ex20 = 1, ex21 = 1, ex22 = 1, ex23 = 1, ex24 = 1, ex25 = 1, ex26 = 1, ex27 = 1, ex28 = 1, ex29 = 1, ex30 = 1, ex31 = 1, ex32 = 1, ex33 = 1, ex34 = 1, ex35 = 1, ex36 = 1, ex37 = 1, ex38 = 1, ex39 = 1, ex40 = 1, ex41 = 1, ex42 = 1, ex43 = 1, ex44 = 1, ex45 = 1, ex46 = 1, ex47 = 1, ex48 = 1, ex49 = 1, ex50 = 1, ex51 = 1, ex52 = 1, ex53 = 1, ex54 = 1, ex55 = 1, ex56 = 1, ex57 = 1, ex58 = 1, ex59 = 1, ex60 = 1, ex61 = 1, ex62 = 1, ex63 = 1, ex64 = 1, ex65 = 1, ex66 = 1, ex67 = 1, ex68 = 1, ex69 = 1, ex70 = 1, ex71 = 1, ex72 = 1, ex73 = 1, ex74 = 1, ex75 = 1, ex76 = 1, ex77 = 1, ex78 = 1, ex79 = 1, ex80 = 1, ex81 = 1, ex82 = 1, ex83 = 1, ex84 = 1, ex85 = 1, ex86 = 1, ex87 = 1, ex88 = 1, ex89 = 1, ex90 = 1, ex91 = 1, ex92 = 1, ex93 = 1, ex94 = 1, ex95 = 1, ex96 = 1, ex97 = 1, ex98 = 1, ex99 = 1, ex100 = 1;
  document.getElementById("t1").innerHTML="*";
  document.getElementById("t1").style.backgroundColor="white";
  document.getElementById("t2").innerHTML="*";
  document.getElementById("t2").style.backgroundColor="white";
  document.getElementById("t3").innerHTML="*";
  document.getElementById("t3").style.backgroundColor="white";
  document.getElementById("t4").innerHTML="*";
  document.getElementById("t4").style.backgroundColor="white";
  document.getElementById("t5").innerHTML="*";
  document.getElementById("t5").style.backgroundColor="white";
  document.getElementById("t6").innerHTML="*";
  document.getElementById("t6").style.backgroundColor="white";
  document.getElementById("t7").innerHTML="*";
  document.getElementById("t7").style.backgroundColor="white";
  document.getElementById("t8").innerHTML="*";
  document.getElementById("t8").style.backgroundColor="white";
  document.getElementById("t9").innerHTML="*";
  document.getElementById("t9").style.backgroundColor="white";
  document.getElementById("t10").innerHTML="*";
  document.getElementById("t10").style.backgroundColor="white";
  document.getElementById("t11").innerHTML="*";
  document.getElementById("t11").style.backgroundColor="white";
  document.getElementById("t12").innerHTML="*";
  document.getElementById("t12").style.backgroundColor="white";
  document.getElementById("t13").innerHTML="*";
  document.getElementById("t13").style.backgroundColor="white";
  document.getElementById("t14").innerHTML="*";
  document.getElementById("t14").style.backgroundColor="white";
  document.getElementById("t15").innerHTML="*";
  document.getElementById("t15").style.backgroundColor="white";
  document.getElementById("t16").innerHTML="*";
  document.getElementById("t16").style.backgroundColor="white";
  document.getElementById("t17").innerHTML="*";
  document.getElementById("t17").style.backgroundColor="white";
  document.getElementById("t18").innerHTML="*";
  document.getElementById("t18").style.backgroundColor="white";
  document.getElementById("t19").innerHTML="*";
  document.getElementById("t19").style.backgroundColor="white";
  document.getElementById("t20").innerHTML="*";
  document.getElementById("t20").style.backgroundColor="white";
  document.getElementById("t21").innerHTML="*";
  document.getElementById("t21").style.backgroundColor="white";
  document.getElementById("t22").innerHTML="*";
  document.getElementById("t22").style.backgroundColor="white";
  document.getElementById("t23").innerHTML="*";
  document.getElementById("t23").style.backgroundColor="white";
  document.getElementById("t24").innerHTML="*";
  document.getElementById("t24").style.backgroundColor="white";
  document.getElementById("t25").innerHTML="*";
  document.getElementById("t25").style.backgroundColor="white";
  document.getElementById("t26").innerHTML="*";
  document.getElementById("t26").style.backgroundColor="white";
  document.getElementById("t27").innerHTML="*";
  document.getElementById("t27").style.backgroundColor="white";
  document.getElementById("t28").innerHTML="*";
  document.getElementById("t28").style.backgroundColor="white";
  document.getElementById("t29").innerHTML="*";
  document.getElementById("t29").style.backgroundColor="white";
  document.getElementById("t30").innerHTML="*";
  document.getElementById("t30").style.backgroundColor="white";
  document.getElementById("t31").innerHTML="*";
  document.getElementById("t31").style.backgroundColor="white";
  document.getElementById("t32").innerHTML="*";
  document.getElementById("t32").style.backgroundColor="white";
  document.getElementById("t33").innerHTML="*";
  document.getElementById("t33").style.backgroundColor="white";
  document.getElementById("t34").innerHTML="*";
  document.getElementById("t34").style.backgroundColor="white";
  document.getElementById("t35").innerHTML="*";
  document.getElementById("t35").style.backgroundColor="white";
  document.getElementById("t36").innerHTML="*";
  document.getElementById("t36").style.backgroundColor="white";
  document.getElementById("t37").innerHTML="*";
  document.getElementById("t37").style.backgroundColor="white";
  document.getElementById("t38").innerHTML="*";
  document.getElementById("t38").style.backgroundColor="white";
  document.getElementById("t39").innerHTML="*";
  document.getElementById("t39").style.backgroundColor="white";
  document.getElementById("t40").innerHTML="*";
  document.getElementById("t40").style.backgroundColor="white";
  document.getElementById("t41").innerHTML="*";
  document.getElementById("t41").style.backgroundColor="white";
  document.getElementById("t42").innerHTML="*";
  document.getElementById("t42").style.backgroundColor="white";
  document.getElementById("t43").innerHTML="*";
  document.getElementById("t43").style.backgroundColor="white";
  document.getElementById("t44").innerHTML="*";
  document.getElementById("t44").style.backgroundColor="white";
  document.getElementById("t45").innerHTML="*";
  document.getElementById("t45").style.backgroundColor="white";
  document.getElementById("t46").innerHTML="*";
  document.getElementById("t46").style.backgroundColor="white";
  document.getElementById("t47").innerHTML="*";
  document.getElementById("t47").style.backgroundColor="white";
  document.getElementById("t48").innerHTML="*";
  document.getElementById("t48").style.backgroundColor="white";
  document.getElementById("t49").innerHTML="*";
  document.getElementById("t49").style.backgroundColor="white";
  document.getElementById("t50").innerHTML="*";
  document.getElementById("t50").style.backgroundColor="white";
  document.getElementById("t51").innerHTML="*";
  document.getElementById("t51").style.backgroundColor="white";
  document.getElementById("t52").innerHTML="*";
  document.getElementById("t52").style.backgroundColor="white";
  document.getElementById("t53").innerHTML="*";
  document.getElementById("t53").style.backgroundColor="white";
  document.getElementById("t54").innerHTML="*";
  document.getElementById("t54").style.backgroundColor="white";
  document.getElementById("t55").innerHTML="*";
  document.getElementById("t55").style.backgroundColor="white";
  document.getElementById("t56").innerHTML="*";
  document.getElementById("t56").style.backgroundColor="white";
  document.getElementById("t57").innerHTML="*";
  document.getElementById("t57").style.backgroundColor="white";
  document.getElementById("t58").innerHTML="*";
  document.getElementById("t58").style.backgroundColor="white";
  document.getElementById("t59").innerHTML="*";
  document.getElementById("t59").style.backgroundColor="white";
  document.getElementById("t60").innerHTML="*";
  document.getElementById("t60").style.backgroundColor="white";
  document.getElementById("t61").innerHTML="*";
  document.getElementById("t61").style.backgroundColor="white";
  document.getElementById("t62").innerHTML="*";
  document.getElementById("t62").style.backgroundColor="white";
  document.getElementById("t63").innerHTML="*";
  document.getElementById("t63").style.backgroundColor="white";
  document.getElementById("t64").innerHTML="*";
  document.getElementById("t64").style.backgroundColor="white";
  document.getElementById("t65").innerHTML="*";
  document.getElementById("t65").style.backgroundColor="white";
  document.getElementById("t66").innerHTML="*";
  document.getElementById("t66").style.backgroundColor="white";
  document.getElementById("t67").innerHTML="*";
  document.getElementById("t67").style.backgroundColor="white";
  document.getElementById("t68").innerHTML="*";
  document.getElementById("t68").style.backgroundColor="white";
  document.getElementById("t69").innerHTML="*";
  document.getElementById("t69").style.backgroundColor="white";
  document.getElementById("t70").innerHTML="*";
  document.getElementById("t70").style.backgroundColor="white";
  document.getElementById("t71").innerHTML="*";
  document.getElementById("t71").style.backgroundColor="white";
  document.getElementById("t72").innerHTML="*";
  document.getElementById("t72").style.backgroundColor="white";
  document.getElementById("t73").innerHTML="*";
  document.getElementById("t73").style.backgroundColor="white";
  document.getElementById("t74").innerHTML="*";
  document.getElementById("t74").style.backgroundColor="white";
  document.getElementById("t75").innerHTML="*";
  document.getElementById("t75").style.backgroundColor="white";
  document.getElementById("t76").innerHTML="*";
  document.getElementById("t76").style.backgroundColor="white";
  document.getElementById("t77").innerHTML="*";
  document.getElementById("t77").style.backgroundColor="white";
  document.getElementById("t78").innerHTML="*";
  document.getElementById("t78").style.backgroundColor="white";
  document.getElementById("t79").innerHTML="*";
  document.getElementById("t79").style.backgroundColor="white";
  document.getElementById("t80").innerHTML="*";
  document.getElementById("t80").style.backgroundColor="white";
  document.getElementById("t81").innerHTML="*";
  document.getElementById("t81").style.backgroundColor="white";
  document.getElementById("t82").innerHTML="*";
  document.getElementById("t82").style.backgroundColor="white";
  document.getElementById("t83").innerHTML="*";
  document.getElementById("t83").style.backgroundColor="white";
  document.getElementById("t84").innerHTML="*";
  document.getElementById("t84").style.backgroundColor="white";
  document.getElementById("t85").innerHTML="*";
  document.getElementById("t85").style.backgroundColor="white";
  document.getElementById("t86").innerHTML="*";
  document.getElementById("t86").style.backgroundColor="white";
  document.getElementById("t87").innerHTML="*";
  document.getElementById("t87").style.backgroundColor="white";
  document.getElementById("t88").innerHTML="*";
  document.getElementById("t88").style.backgroundColor="white";
  document.getElementById("t89").innerHTML="*";
  document.getElementById("t89").style.backgroundColor="white";
  document.getElementById("t90").innerHTML="*";
  document.getElementById("t90").style.backgroundColor="white";
  document.getElementById("t91").innerHTML="*";
  document.getElementById("t91").style.backgroundColor="white";
  document.getElementById("t92").innerHTML="*";
  document.getElementById("t92").style.backgroundColor="white";
  document.getElementById("t93").innerHTML="*";
  document.getElementById("t93").style.backgroundColor="white";
  document.getElementById("t94").innerHTML="*";
  document.getElementById("t94").style.backgroundColor="white";
  document.getElementById("t95").innerHTML="*";
  document.getElementById("t95").style.backgroundColor="white";
  document.getElementById("t96").innerHTML="*";
  document.getElementById("t96").style.backgroundColor="white";
  document.getElementById("t97").innerHTML="*";
  document.getElementById("t97").style.backgroundColor="white";
  document.getElementById("t98").innerHTML="*";
  document.getElementById("t98").style.backgroundColor="white";
  document.getElementById("t99").innerHTML="*";
  document.getElementById("t99").style.backgroundColor="white";
}