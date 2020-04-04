// type Integer = (n:number) => {String(n).match(/^[0-9]+$/)}
// let x:Integer = 3 //OK
// let y:Integer = 3.6 //wrong
//
// type ColorLevel(n:number) => n>0 && n<= 255
// type RGB = {red:ColorLevel, green:ColorLevel, blue:ColorLevel};
// let redColor:RGB = {red:255, green:0, blue:0}   //OK
// let wrongColor:RGB = {red:255, green:900, blue:0} //wrong
//
// type Hex(n:string) => n.match(/^([0-9]|[A-F])+$/)
// let hexValue:Hex = "F6A5" //OK
// let wrongHexValue:Hex = "F6AZ5" //wrong
