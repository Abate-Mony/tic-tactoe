//nothing to display here
var ex1 = 1, ex2 = 1, ex3 = 1, ex4 = 1, ex5 = 1, ex6 = 1, ex7 = 1, ex8 = 1, ex9 = 1, ex10 = 1, ex11 = 1, ex12 = 1, ex13 = 1, ex14 = 1, ex15 = 1, ex16 = 1, ex17 = 1, ex18 = 1, ex19 = 1, ex20 = 1, ex21 = 1, ex22 = 1, ex23 = 1, ex24 = 1, ex25 = 1, ex26 = 1, ex27 = 1, ex28 = 1, ex29 = 1, ex30 = 1, ex31 = 1, ex32 = 1, ex33 = 1, ex34 = 1, ex35 = 1, ex36 = 1, ex37 = 1, ex38 = 1, ex39 = 1, ex40 = 1, ex41 = 1, ex42 = 1, ex43 = 1, ex44 = 1, ex45 = 1, ex46 = 1, ex47 = 1, ex48 = 1, ex49 = 1, ex50 = 1, ex51 = 1, ex52 = 1, ex53 = 1, ex54 = 1, ex55 = 1, ex56 = 1, ex57 = 1, ex58 = 1, ex59 = 1, ex60 = 1, ex61 = 1, ex62 = 1, ex63 = 1, ex64 = 1, ex65 = 1, ex66 = 1, ex67 = 1, ex68 = 1, ex69 = 1, ex70 = 1, ex71 = 1, ex72 = 1, ex73 = 1, ex74 = 1, ex75 = 1, ex76 = 1, ex77 = 1, ex78 = 1, ex79 = 1, ex80 = 1, ex81 = 1, ex82 = 1, ex83 = 1, ex84 = 1, ex85 = 1, ex86 = 1, ex87 = 1, ex88 = 1, ex89 = 1, ex90 = 1, ex91 = 1, ex92 = 1, ex93 = 1, ex94 = 1, ex95 = 1, ex96 = 1, ex97 = 1, ex98 = 1, ex99 = 1, ex100 = 1;
var b1 = "#", b2 = "$", b3 = "+", b4 = "@", b5 = "&", b6 = "*", b7 = "^", b8 = "/", b9 = "-";
var click = 0;
var array = [100];
// alert(array[8]);
var update;
/*array[0]="X";
array[1]="X";
array[3]="X";
array[4]="X";*/
var y = 0;
// this is the beginniing
function func1() {
  y = 0;
  if (ex1) {
    if (click % 2 == 0) {
      document.getElementById("t1").innerHTML = "O";
      document.getElementById("t1").style.backgroundColor = "grey";
      click++; array[y] = "O";
    } else {
      document.getElementById("t1").innerHTML = "X";
      document.getElementById("t1").style.backgroundColor = "brown"; click++; array[y] = "X";
    } check();
  }
  ex1 = 0;
}
function func2() {
  y = 1;
  if (ex2) {
    if (click % 2 == 0) {
      document.getElementById("t2").innerHTML = "O";
      document.getElementById("t2").style.backgroundColor = "grey";
      click++; array[y] = "O";
    } else {
      document.getElementById("t2").innerHTML = "X";
      document.getElementById("t2").style.backgroundColor = "brown"; click++; array[y] = "X";
    } check();
  }
  ex2 = 0;
}
function func3() {
  y = 2;
  if (ex3) {
    if (click % 2 == 0) {
      document.getElementById("t3").innerHTML = "O";
      document.getElementById("t3").style.backgroundColor = "grey";
      click++; array[y] = "O";
    } else {
      document.getElementById("t3").innerHTML = "X";
      document.getElementById("t3").style.backgroundColor = "brown"; click++; array[y] = "X";
    } check();
  }
  ex3 = 0;
}
function func4() {
  y = 3;
  if (ex4) {
    if (click % 2 == 0) {
      document.getElementById("t4").innerHTML = "O";
      document.getElementById("t4").style.backgroundColor = "grey";
      click++; array[y] = "O";
    } else {
      document.getElementById("t4").innerHTML = "X";
      document.getElementById("t4").style.backgroundColor = "brown"; click++; array[y] = "X";
    } check();
  }
  ex4 = 0;
}
function func5() {
  y = 4;
  if (ex5) {
    if (click % 2 == 0) {
      document.getElementById("t5").innerHTML = "O";
      document.getElementById("t5").style.backgroundColor = "grey";
      click++; array[y] = "O";
    } else {
      document.getElementById("t5").innerHTML = "X";
      document.getElementById("t5").style.backgroundColor = "brown"; click++; array[y] = "X";
    } check();
  }
  ex5 = 0;
}
function func6() {
  y = 5;
  if (ex6) {
    if (click % 2 == 0) {
      document.getElementById("t6").innerHTML = "O";
      document.getElementById("t6").style.backgroundColor = "grey";
      click++; array[y] = "O";
    } else {
      document.getElementById("t6").innerHTML = "X";
      document.getElementById("t6").style.backgroundColor = "brown"; click++; array[y] = "X";
    } check();
  }
  ex6 = 0;
}
function func7() {
  y = 6;
  if (ex7) {
    if (click % 2 == 0) {
      document.getElementById("t7").innerHTML = "O";
      document.getElementById("t7").style.backgroundColor = "grey";
      click++; array[y] = "O";
    } else {
      document.getElementById("t7").innerHTML = "X";
      document.getElementById("t7").style.backgroundColor = "brown"; click++; array[y] = "X";
    } check();
  }
  ex7 = 0;
}
function func8() {
  y = 7;
  if (ex8) {
    if (click % 2 == 0) {
      document.getElementById("t8").innerHTML = "O";
      document.getElementById("t8").style.backgroundColor = "grey";
      click++; array[y] = "O";
    } else {
      document.getElementById("t8").innerHTML = "X";
      document.getElementById("t8").style.backgroundColor = "brown"; click++; array[y] = "X";
    } check();
  }
  ex8 = 0;
}
function func9() {
  y = 8;
  if (ex9) {
    if (click % 2 == 0) {
      document.getElementById("t9").innerHTML = "O";
      document.getElementById("t9").style.backgroundColor = "grey";
      click++; array[y] = "O";
    } else {
      document.getElementById("t9").innerHTML = "X";
      document.getElementById("t9").style.backgroundColor = "brown"; click++; array[y] = "X";
    } check();
  }
  ex9 = 0;
}
function func10() {
  y = 9;
  if (ex10) {
    if (click % 2 == 0) {
      document.getElementById("t10").innerHTML = "O";
      document.getElementById("t10").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t10").innerHTML = "X";
      document.getElementById("t10").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex10 = 0;
}
function func11() {
  y = 10;
  if (ex11) {
    if (click % 2 == 0) {
      document.getElementById("t11").innerHTML = "O";
      document.getElementById("t11").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t11").innerHTML = "X";
      document.getElementById("t11").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex11 = 0;
}
function func12() {
  y = 11;
  if (ex12) {
    if (click % 2 == 0) {
      document.getElementById("t12").innerHTML = "O";
      document.getElementById("t12").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t12").innerHTML = "X";
      document.getElementById("t12").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex12 = 0;
}
function func13() {
  y = 12;
  if (ex13) {
    if (click % 2 == 0) {
      document.getElementById("t13").innerHTML = "O";
      document.getElementById("t13").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t13").innerHTML = "X";
      document.getElementById("t13").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex13 = 0;
}
function func14() {
  y = 13;
  if (ex14) {
    if (click % 2 == 0) {
      document.getElementById("t14").innerHTML = "O";
      document.getElementById("t14").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t14").innerHTML = "X";
      document.getElementById("t14").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex14 = 0;
}
function func15() {
  y = 14;
  if (ex15) {
    if (click % 2 == 0) {
      document.getElementById("t15").innerHTML = "O";
      document.getElementById("t15").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t15").innerHTML = "X";
      document.getElementById("t15").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex15 = 0;
}
function func16() {
  y = 15;
  if (ex16) {
    if (click % 2 == 0) {
      document.getElementById("t16").innerHTML = "O";
      document.getElementById("t16").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t16").innerHTML = "X";
      document.getElementById("t16").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex16 = 0;
}
function func17() {
  y = 16;
  if (ex17) {
    if (click % 2 == 0) {
      document.getElementById("t17").innerHTML = "O";
      document.getElementById("t17").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t17").innerHTML = "X";
      document.getElementById("t17").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex17 = 0;
}
function func18() {
  y = 17;
  if (ex18) {
    if (click % 2 == 0) {
      document.getElementById("t18").innerHTML = "O";
      document.getElementById("t18").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t18").innerHTML = "X";
      document.getElementById("t18").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex18 = 0;
}
function func19() {
  y = 18;
  if (ex19) {
    if (click % 2 == 0) {
      document.getElementById("t19").innerHTML = "O";
      document.getElementById("t19").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t19").innerHTML = "X";
      document.getElementById("t19").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex19 = 0;
}
function func20() {
  y = 19;
  if (ex20) {
    if (click % 2 == 0) {
      document.getElementById("t20").innerHTML = "O";
      document.getElementById("t20").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t20").innerHTML = "X";
      document.getElementById("t20").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex20 = 0;
}
function func21() {
  y = 20;
  if (ex21) {
    if (click % 2 == 0) {
      document.getElementById("t21").innerHTML = "O";
      document.getElementById("t21").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t21").innerHTML = "X";
      document.getElementById("t21").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex21 = 0;
}
function func22() {
  y = 21;
  if (ex22) {
    if (click % 2 == 0) {
      document.getElementById("t22").innerHTML = "O";
      document.getElementById("t22").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t22").innerHTML = "X";
      document.getElementById("t22").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex22 = 0;
}
function func23() {
  y = 22;
  if (ex23) {
    if (click % 2 == 0) {
      document.getElementById("t23").innerHTML = "O";
      document.getElementById("t23").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t23").innerHTML = "X";
      document.getElementById("t23").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex23 = 0;
}
function func24() {
  y = 23;
  if (ex24) {
    if (click % 2 == 0) {
      document.getElementById("t24").innerHTML = "O";
      document.getElementById("t24").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t24").innerHTML = "X";
      document.getElementById("t24").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex24 = 0;
}
function func25() {
  y = 24;
  if (ex25) {
    if (click % 2 == 0) {
      document.getElementById("t25").innerHTML = "O";
      document.getElementById("t25").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t25").innerHTML = "X";
      document.getElementById("t25").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex25 = 0;
}
function func26() {
  y = 25;
  if (ex26) {
    if (click % 2 == 0) {
      document.getElementById("t26").innerHTML = "O";
      document.getElementById("t26").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t26").innerHTML = "X";
      document.getElementById("t26").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex26 = 0;
}
function func27() {
  y = 26;
  if (ex27) {
    if (click % 2 == 0) {
      document.getElementById("t27").innerHTML = "O";
      document.getElementById("t27").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t27").innerHTML = "X";
      document.getElementById("t27").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex27 = 0;
}
function func28() {
  y = 27;
  if (ex28) {
    if (click % 2 == 0) {
      document.getElementById("t28").innerHTML = "O";
      document.getElementById("t28").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t28").innerHTML = "X";
      document.getElementById("t28").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex28 = 0;
}
function func29() {
  y = 28;
  if (ex29) {
    if (click % 2 == 0) {
      document.getElementById("t29").innerHTML = "O";
      document.getElementById("t29").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t29").innerHTML = "X";
      document.getElementById("t29").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex29 = 0;
}
function func30() {
  y = 29;
  if (ex30) {
    if (click % 2 == 0) {
      document.getElementById("t30").innerHTML = "O";
      document.getElementById("t30").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t30").innerHTML = "X";
      document.getElementById("t30").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex30 = 0;
}
function func31() {
  y = 30;
  if (ex31) {
    if (click % 2 == 0) {
      document.getElementById("t31").innerHTML = "O";
      document.getElementById("t31").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t31").innerHTML = "X";
      document.getElementById("t31").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex31 = 0;
}
function func32() {
  y = 31;
  if (ex32) {
    if (click % 2 == 0) {
      document.getElementById("t32").innerHTML = "O";
      document.getElementById("t32").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t32").innerHTML = "X";
      document.getElementById("t32").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex32 = 0;
}
function func33() {
  y = 32;
  if (ex33) {
    if (click % 2 == 0) {
      document.getElementById("t33").innerHTML = "O";
      document.getElementById("t33").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t33").innerHTML = "X";
      document.getElementById("t33").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex33 = 0;
}
function func34() {
  y = 33;
  if (ex34) {
    if (click % 2 == 0) {
      document.getElementById("t34").innerHTML = "O";
      document.getElementById("t34").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t34").innerHTML = "X";
      document.getElementById("t34").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex34 = 0;
}
function func35() {
  y = 34;
  if (ex35) {
    if (click % 2 == 0) {
      document.getElementById("t35").innerHTML = "O";
      document.getElementById("t35").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t35").innerHTML = "X";
      document.getElementById("t35").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex35 = 0;
}
function func36() {
  y = 35;
  if (ex36) {
    if (click % 2 == 0) {
      document.getElementById("t36").innerHTML = "O";
      document.getElementById("t36").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t36").innerHTML = "X";
      document.getElementById("t36").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex36 = 0;
}
function func37() {
  y = 36;
  if (ex37) {
    if (click % 2 == 0) {
      document.getElementById("t37").innerHTML = "O";
      document.getElementById("t37").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t37").innerHTML = "X";
      document.getElementById("t37").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex37 = 0;
}
function func38() {
  y = 37;
  if (ex38) {
    if (click % 2 == 0) {
      document.getElementById("t38").innerHTML = "O";
      document.getElementById("t38").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t38").innerHTML = "X";
      document.getElementById("t38").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex38 = 0;
}
function func39() {
  y = 38;
  if (ex39) {
    if (click % 2 == 0) {
      document.getElementById("t39").innerHTML = "O";
      document.getElementById("t39").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t39").innerHTML = "X";
      document.getElementById("t39").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex39 = 0;
}
function func40() {
  y = 39;
  if (ex40) {
    if (click % 2 == 0) {
      document.getElementById("t40").innerHTML = "O";
      document.getElementById("t40").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t40").innerHTML = "X";
      document.getElementById("t40").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex40 = 0;
}
function func41() {
  y = 40;
  if (ex41) {
    if (click % 2 == 0) {
      document.getElementById("t41").innerHTML = "O";
      document.getElementById("t41").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t41").innerHTML = "X";
      document.getElementById("t41").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex41 = 0;
}
function func42() {
  y = 41;
  if (ex42) {
    if (click % 2 == 0) {
      document.getElementById("t42").innerHTML = "O";
      document.getElementById("t42").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t42").innerHTML = "X";
      document.getElementById("t42").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex42 = 0;
}
function func43() {
  y = 42;
  if (ex43) {
    if (click % 2 == 0) {
      document.getElementById("t43").innerHTML = "O";
      document.getElementById("t43").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t43").innerHTML = "X";
      document.getElementById("t43").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex43 = 0;
}
function func44() {
  y = 43;
  if (ex44) {
    if (click % 2 == 0) {
      document.getElementById("t44").innerHTML = "O";
      document.getElementById("t44").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t44").innerHTML = "X";
      document.getElementById("t44").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex44 = 0;
}
function func45() {
  y = 44;
  if (ex45) {
    if (click % 2 == 0) {
      document.getElementById("t45").innerHTML = "O";
      document.getElementById("t45").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t45").innerHTML = "X";
      document.getElementById("t45").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex45 = 0;
}
function func46() {
  y = 45;
  if (ex46) {
    if (click % 2 == 0) {
      document.getElementById("t46").innerHTML = "O";
      document.getElementById("t46").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t46").innerHTML = "X";
      document.getElementById("t46").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex46 = 0;
}
function func47() {
  y = 46;
  if (ex47) {
    if (click % 2 == 0) {
      document.getElementById("t47").innerHTML = "O";
      document.getElementById("t47").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t47").innerHTML = "X";
      document.getElementById("t47").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex47 = 0;
}
function func48() {
  y = 47;
  if (ex48) {
    if (click % 2 == 0) {
      document.getElementById("t48").innerHTML = "O";
      document.getElementById("t48").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t48").innerHTML = "X";
      document.getElementById("t48").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex48 = 0;
}
function func49() {
  y = 48;
  if (ex49) {
    if (click % 2 == 0) {
      document.getElementById("t49").innerHTML = "O";
      document.getElementById("t49").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t49").innerHTML = "X";
      document.getElementById("t49").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex49 = 0;
}
function func50() {
  y = 49;
  if (ex50) {
    if (click % 2 == 0) {
      document.getElementById("t50").innerHTML = "O";
      document.getElementById("t50").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t50").innerHTML = "X";
      document.getElementById("t50").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex50 = 0;
}
function func51() {
  y = 50;
  if (ex51) {
    if (click % 2 == 0) {
      document.getElementById("t51").innerHTML = "O";
      document.getElementById("t51").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t51").innerHTML = "X";
      document.getElementById("t51").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex51 = 0;
}
function func52() {
  y = 51;
  if (ex52) {
    if (click % 2 == 0) {
      document.getElementById("t52").innerHTML = "O";
      document.getElementById("t52").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t52").innerHTML = "X";
      document.getElementById("t52").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex52 = 0;
}
function func53() {
  y = 52;
  if (ex53) {
    if (click % 2 == 0) {
      document.getElementById("t53").innerHTML = "O";
      document.getElementById("t53").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t53").innerHTML = "X";
      document.getElementById("t53").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex53 = 0;
}
function func54() {
  y = 53;
  if (ex54) {
    if (click % 2 == 0) {
      document.getElementById("t54").innerHTML = "O";
      document.getElementById("t54").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t54").innerHTML = "X";
      document.getElementById("t54").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex54 = 0;
}
function func55() {
  y = 54;
  if (ex55) {
    if (click % 2 == 0) {
      document.getElementById("t55").innerHTML = "O";
      document.getElementById("t55").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t55").innerHTML = "X";
      document.getElementById("t55").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex55 = 0;
}
function func56() {
  y = 55;
  if (ex56) {
    if (click % 2 == 0) {
      document.getElementById("t56").innerHTML = "O";
      document.getElementById("t56").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t56").innerHTML = "X";
      document.getElementById("t56").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex56 = 0;
}
function func57() {
  y = 56;
  if (ex57) {
    if (click % 2 == 0) {
      document.getElementById("t57").innerHTML = "O";
      document.getElementById("t57").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t57").innerHTML = "X";
      document.getElementById("t57").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex57 = 0;
}
function func58() {
  y = 57;
  if (ex58) {
    if (click % 2 == 0) {
      document.getElementById("t58").innerHTML = "O";
      document.getElementById("t58").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t58").innerHTML = "X";
      document.getElementById("t58").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex58 = 0;
}
function func59() {
  y = 58;
  if (ex59) {
    if (click % 2 == 0) {
      document.getElementById("t59").innerHTML = "O";
      document.getElementById("t59").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t59").innerHTML = "X";
      document.getElementById("t59").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex59 = 0;
}
function func60() {
  y = 59;
  if (ex60) {
    if (click % 2 == 0) {
      document.getElementById("t60").innerHTML = "O";
      document.getElementById("t60").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t60").innerHTML = "X";
      document.getElementById("t60").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex60 = 0;
}
function func61() {
  y = 60;
  if (ex61) {
    if (click % 2 == 0) {
      document.getElementById("t61").innerHTML = "O";
      document.getElementById("t61").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t61").innerHTML = "X";
      document.getElementById("t61").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex61 = 0;
}
function func62() {
  y = 61;
  if (ex62) {
    if (click % 2 == 0) {
      document.getElementById("t62").innerHTML = "O";
      document.getElementById("t62").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t62").innerHTML = "X";
      document.getElementById("t62").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex62 = 0;
}
function func63() {
  y = 62;
  if (ex63) {
    if (click % 2 == 0) {
      document.getElementById("t63").innerHTML = "O";
      document.getElementById("t63").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t63").innerHTML = "X";
      document.getElementById("t63").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex63 = 0;
}
function func64() {
  y = 63;
  if (ex64) {
    if (click % 2 == 0) {
      document.getElementById("t64").innerHTML = "O";
      document.getElementById("t64").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t64").innerHTML = "X";
      document.getElementById("t64").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex64 = 0;
}
function func65() {
  y = 64;
  if (ex65) {
    if (click % 2 == 0) {
      document.getElementById("t65").innerHTML = "O";
      document.getElementById("t65").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t65").innerHTML = "X";
      document.getElementById("t65").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex65 = 0;
}
function func66() {
  y = 65;
  if (ex66) {
    if (click % 2 == 0) {
      document.getElementById("t66").innerHTML = "O";
      document.getElementById("t66").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t66").innerHTML = "X";
      document.getElementById("t66").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex66 = 0;
}
function func67() {
  y = 66;
  if (ex67) {
    if (click % 2 == 0) {
      document.getElementById("t67").innerHTML = "O";
      document.getElementById("t67").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t67").innerHTML = "X";
      document.getElementById("t67").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex67 = 0;
}
function func68() {
  y = 67;
  if (ex68) {
    if (click % 2 == 0) {
      document.getElementById("t68").innerHTML = "O";
      document.getElementById("t68").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t68").innerHTML = "X";
      document.getElementById("t68").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex68 = 0;
}
function func69() {
  y = 68;
  if (ex69) {
    if (click % 2 == 0) {
      document.getElementById("t69").innerHTML = "O";
      document.getElementById("t69").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t69").innerHTML = "X";
      document.getElementById("t69").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex69 = 0;
}
function func70() {
  y = 69;
  if (ex70) {
    if (click % 2 == 0) {
      document.getElementById("t70").innerHTML = "O";
      document.getElementById("t70").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t70").innerHTML = "X";
      document.getElementById("t70").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex70 = 0;
}
function func71() {
  y = 70;
  if (ex71) {
    if (click % 2 == 0) {
      document.getElementById("t71").innerHTML = "O";
      document.getElementById("t71").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t71").innerHTML = "X";
      document.getElementById("t71").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex71 = 0;
}
function func72() {
  y = 71;
  if (ex72) {
    if (click % 2 == 0) {
      document.getElementById("t72").innerHTML = "O";
      document.getElementById("t72").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t72").innerHTML = "X";
      document.getElementById("t72").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex72 = 0;
}
function func73() {
  y = 72;
  if (ex73) {
    if (click % 2 == 0) {
      document.getElementById("t73").innerHTML = "O";
      document.getElementById("t73").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t73").innerHTML = "X";
      document.getElementById("t73").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex73 = 0;
}
function func74() {
  y = 73;
  if (ex74) {
    if (click % 2 == 0) {
      document.getElementById("t74").innerHTML = "O";
      document.getElementById("t74").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t74").innerHTML = "X";
      document.getElementById("t74").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex74 = 0;
}
function func75() {
  y = 74;
  if (ex75) {
    if (click % 2 == 0) {
      document.getElementById("t75").innerHTML = "O";
      document.getElementById("t75").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t75").innerHTML = "X";
      document.getElementById("t75").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex75 = 0;
}
function func76() {
  y = 75;
  if (ex76) {
    if (click % 2 == 0) {
      document.getElementById("t76").innerHTML = "O";
      document.getElementById("t76").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t76").innerHTML = "X";
      document.getElementById("t76").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex76 = 0;
}
function func77() {
  y = 76;
  if (ex77) {
    if (click % 2 == 0) {
      document.getElementById("t77").innerHTML = "O";
      document.getElementById("t77").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t77").innerHTML = "X";
      document.getElementById("t77").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex77 = 0;
}
function func78() {
  y = 77;
  if (ex78) {
    if (click % 2 == 0) {
      document.getElementById("t78").innerHTML = "O";
      document.getElementById("t78").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t78").innerHTML = "X";
      document.getElementById("t78").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex78 = 0;
}
function func79() {
  y = 78;
  if (ex79) {
    if (click % 2 == 0) {
      document.getElementById("t79").innerHTML = "O";
      document.getElementById("t79").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t79").innerHTML = "X";
      document.getElementById("t79").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex79 = 0;
}
function func80() {
  y = 79;
  if (ex80) {
    if (click % 2 == 0) {
      document.getElementById("t80").innerHTML = "O";
      document.getElementById("t80").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t80").innerHTML = "X";
      document.getElementById("t80").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex80 = 0;
}
function func81() {
  y = 80;
  if (ex81) {
    if (click % 2 == 0) {
      document.getElementById("t81").innerHTML = "O";
      document.getElementById("t81").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t81").innerHTML = "X";
      document.getElementById("t81").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex81 = 0;
}
function func82() {
  y = 81;
  if (ex82) {
    if (click % 2 == 0) {
      document.getElementById("t82").innerHTML = "O";
      document.getElementById("t82").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t82").innerHTML = "X";
      document.getElementById("t82").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex82 = 0;
}
function func83() {
  y = 82;
  if (ex83) {
    if (click % 2 == 0) {
      document.getElementById("t83").innerHTML = "O";
      document.getElementById("t83").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t83").innerHTML = "X";
      document.getElementById("t83").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex83 = 0;
}
function func84() {
  y = 83;
  if (ex84) {
    if (click % 2 == 0) {
      document.getElementById("t84").innerHTML = "O";
      document.getElementById("t84").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t84").innerHTML = "X";
      document.getElementById("t84").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex84 = 0;
}
function func85() {
  y = 84;
  if (ex85) {
    if (click % 2 == 0) {
      document.getElementById("t85").innerHTML = "O";
      document.getElementById("t85").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t85").innerHTML = "X";
      document.getElementById("t85").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex85 = 0;
}
function func86() {
  y = 85;
  if (ex86) {
    if (click % 2 == 0) {
      document.getElementById("t86").innerHTML = "O";
      document.getElementById("t86").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t86").innerHTML = "X";
      document.getElementById("t86").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex86 = 0;
}
function func87() {
  y = 86;
  if (ex87) {
    if (click % 2 == 0) {
      document.getElementById("t87").innerHTML = "O";
      document.getElementById("t87").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t87").innerHTML = "X";
      document.getElementById("t87").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex87 = 0;
}
function func88() {
  y = 87;
  if (ex88) {
    if (click % 2 == 0) {
      document.getElementById("t88").innerHTML = "O";
      document.getElementById("t88").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t88").innerHTML = "X";
      document.getElementById("t88").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex88 = 0;
}
function func89() {
  y = 88;
  if (ex89) {
    if (click % 2 == 0) {
      document.getElementById("t89").innerHTML = "O";
      document.getElementById("t89").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t89").innerHTML = "X";
      document.getElementById("t89").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex89 = 0;
}
function func90() {
  y = 89;
  if (ex90) {
    if (click % 2 == 0) {
      document.getElementById("t90").innerHTML = "O";
      document.getElementById("t90").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t90").innerHTML = "X";
      document.getElementById("t90").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex90 = 0;
}
function func91() {
  y = 90;
  if (ex91) {
    if (click % 2 == 0) {
      document.getElementById("t91").innerHTML = "O";
      document.getElementById("t91").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t91").innerHTML = "X";
      document.getElementById("t91").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex91 = 0;
}
function func92() {
  y = 91;
  if (ex92) {
    if (click % 2 == 0) {
      document.getElementById("t92").innerHTML = "O";
      document.getElementById("t92").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t92").innerHTML = "X";
      document.getElementById("t92").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex92 = 0;
}
function func93() {
  y = 92;
  if (ex93) {
    if (click % 2 == 0) {
      document.getElementById("t93").innerHTML = "O";
      document.getElementById("t93").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t93").innerHTML = "X";
      document.getElementById("t93").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex93 = 0;
}
function func94() {
  y = 93;
  if (ex94) {
    if (click % 2 == 0) {
      document.getElementById("t94").innerHTML = "O";
      document.getElementById("t94").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t94").innerHTML = "X";
      document.getElementById("t94").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex94 = 0;
}
function func95() {
  y = 94;
  if (ex95) {
    if (click % 2 == 0) {
      document.getElementById("t95").innerHTML = "O";
      document.getElementById("t95").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t95").innerHTML = "X";
      document.getElementById("t95").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex95 = 0;
}
function func96() {
  y = 95;
  if (ex96) {
    if (click % 2 == 0) {
      document.getElementById("t96").innerHTML = "O";
      document.getElementById("t96").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t96").innerHTML = "X";
      document.getElementById("t96").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex96 = 0;
}
function func97() {
  y = 96;
  if (ex97) {
    if (click % 2 == 0) {
      document.getElementById("t97").innerHTML = "O";
      document.getElementById("t97").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t97").innerHTML = "X";
      document.getElementById("t97").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex97 = 0;
}
function func98() {
  y = 97;
  if (ex98) {
    if (click % 2 == 0) {
      document.getElementById("t98").innerHTML = "O";
      document.getElementById("t98").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t98").innerHTML = "X";
      document.getElementById("t98").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex98 = 0;
}
function func99() {
  y = 98;
  if (ex99) {
    if (click % 2 == 0) {
      document.getElementById("t99").innerHTML = "O";
      document.getElementById("t99").style.backgroundColor = "grey"; click++; array[y] = "O";
    } else {
      document.getElementById("t99").innerHTML = "X";
      document.getElementById("t99").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex99 = 0;
}
function func100() {
  y = 99;
  if (ex100) {
    if (click % 2 == 0) {
      document.getElementById("t100").innerHTML = "O";
      document.getElementById("t100").style.backgroundColor = "grey";
      click++; array[y] = "O";
    } else {
      document.getElementById("t100").innerHTML = "X";
      document.getElementById("t100").style.backgroundColor = "brown";
      click++; array[y] = "X";
    } check();
  }
  ex100 = 0;
}
// is the end that matters

var a1, a2, a3, a4, flag1, flag2, flag3, flag4;
var display = " ";
var pla1 = 0, pla2 = 0;
function check() {
  //alert(y);
  //trying to create a function to validate the game
  a1 = 0; a2 = 0; a3 = 0;
  a4 = 0, flag1 = 0, flag2 = 0, flag3 = 0, flag4 = 0;
  for (let j = 0; j < 3; ++j) {
    // alert("i think that im ok ", a1 + y + 1);
    //tracker one function

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
      display = "found a match in loop 1 at position " + j + "<br>" + display;
      document.getElementById("di").innerHTML = display;
      // alert(flag1);
    }
    //tracker two forloop

    if (array[y] === array[y - 1 + a2]) {
      //getting the position to pin from
      ++flag2;
      display = "found a match in loop 2 at position " + j + "<br>" + display;
      document.getElementById("di").innerHTML = display;

    }
    //end of tracker two forloop
    //tracker forloop3
    if (array[y] === array[y + 1 + a3]) {
      // alert("found a match in loop 3" + j);
      display = "found a match in loop 3 at position " + j + "<br>" + display;
      document.getElementById("di").innerHTML = display;
      ++flag3;
      // alert(a3+1);
    }
    //end of loop 3
    //start of loop 4
    if (array[y] === array[y - 1 + a4]) {
      display = "found a match in loop 4 at position " + j + "<br>" + display;
      document.getElementById("di").innerHTML = display;
      ++flag4;
    }
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
    
    //end of loop 4
    if (array[y] == "X") {
      if (flag1 > 2 || flag2 > 2 || flag3 > 2 || flag4 > 2) {
      pla1=valid() +pla1;
          alert("player X won");
      document.getElementById("p1").innerHTML = pla1;
        --click;
      }
    }
    if (array[y] == "O") {
      if (flag1 > 2 || flag2 > 2 || flag3 > 2 || flag4 > 2) {
        pla2=valid() +pla2;
        alert("player 0 won");
        document.getElementById("p2").innerHTML = pla2;
        --click;
      }
    }
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

  array[0] = "!", array[1] = "+", array[2] = "#", array[3] = "$", array[4] = "%", array[5] = "&", array[6] = "-", array[7] = "(", array[8] = "=";
  ex1 = 1, ex2 = 1, ex3 = 1, ex4 = 1, ex5 = 1, ex6 = 1, ex7 = 1, ex8 = 1, ex9 = 1; b1 = "#", b2 = "$", b3 = "+", b4 = "@", b5 = "&", b6 = "*", b7 = "^", b8 = "/", b9 = "-";
  document.getElementById("t1").innerHTML = " ";
  document.getElementById("t2").innerHTML = " ";
  document.getElementById("t3").innerHTML = " ";
  document.getElementById("t4").innerHTML = " ";
  document.getElementById("t5").innerHTML = " ";
  document.getElementById("t6").innerHTML = " ";
  document.getElementById("t7").innerHTML = " ";
  document.getElementById("t8").innerHTML = " ";
  document.getElementById("t9").innerHTML = " ";
  document.getElementById("t1").style.backgroundColor = "white";
  document.getElementById("t2").style.backgroundColor = "white";
  document.getElementById("t3").style.backgroundColor = "white";
  document.getElementById("t4").style.backgroundColor = "white";
  document.getElementById("t5").style.backgroundColor = "white";
  document.getElementById("t6").style.backgroundColor = "white";
  document.getElementById("t7").style.backgroundColor = "white";
  document.getElementById("t8").style.backgroundColor = "white";
  document.getElementById("t9").style.backgroundColor = "white";
}







