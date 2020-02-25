// for(let i=0;i<=16;i++){
//     console.log((1750*i+1)+","+(1750*(i+1)));
// }


const choosePart = 3;
switch (choosePart) {
    case 1: startJob=1;endJob=1750;break;
    case 2: startJob=1751;endJob=3500;break;
    case 3: startJob=3501;endJob=5250;break;
    case 4: startJob=5251;endJob=7000;break;
    case 5: startJob=7001;endJob=8750;break;
    case 6: startJob=8751;endJob=10500;break;
    case 7: startJob=10501;endJob=12250;break;
    case 8: startJob=12251;endJob=14000;break;
    case 9: startJob=14001;endJob=15750;break;
    case 10: startJob=15751;endJob=17500;break;
    case 11: startJob=17501;endJob=19250;break;
    case 12: startJob=19251;endJob=21000;break;
    case 13: startJob=21001;endJob=22750;break;
    case 14: startJob=22751;endJob=24500;break;
    case 15: startJob=24501;endJob=26250;break;
    case 16: startJob=26251;endJob=28000;break;
}
console.log(startJob+" : "+endJob);