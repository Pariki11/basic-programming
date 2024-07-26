function helloworld() {
    console.log("สวัสดี");    
}

helloworld()

function helloName(name: string) {
    console.log(name)
}

helloName('Pari')

function getPi() {
    return 3.14
}

console.log(getPi)())
function helloworld() {
    console.log("สวัสดี");    
}

helloworld()

function helloName(name: string) {
    console.log(name)
}

helloName('Tui')

function getPi() {
    return 3.14
}

console.log(getPi)


function st(fname: string, sname: string) {
    
    if (fname=== 'pari' && sname === 'jame') {
        console.log('เริ่มสอน')
    } else {
        console.log('ไม่สอน')
    }
}

st('Tui','nit')

function et(fname: string, sname: string,aname: string) {
    
    if (fname=== 'mix' && sname === 'zane'|| aname ==='forth') {
        console.log('พร้อมเรียน')
    } else {
        console.log('ยังไม่พร้อมเรียน')
    }
}

et('mix' , 'zane' , 'forth')

function ot(sex: string, high: number, weight: number) {

    if (sex=== 'man' && (high > 170 || weight >50 && weight <=110)) {
        console.log('จับใบดำใบแดง')
    } else {
        console.log('ไม่เข้าเกณฑ์')
    }
 }

 ot('man',175,80)

 function ct(age: number, salay: number, total: number) {

    if (age>16 && salay<70000 && total<500000){
        console.log('รับ 10000 บาท')
    } else {
        console.log('อด')
    }
 }

 ct(20,25000,60000)