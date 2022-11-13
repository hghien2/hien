function kiemtra_getSum(n) {
    let flag = true;
    if (n < 2) {
        flag = false
    }
    else {
        for (var i = 2; i < n - 1; i++) {
            if (n % i == 0) {
                flag = false
                break;
            }
        }
    }
    return flag
}

function getSum() {
    let list = document.getElementById("myList");
    const a = document.getElementById("soThuNhat").value;
    const b = document.getElementById("soThuHai").value;
    let sum = 0;
    for (i = a; i < b; i++) {
        let isSoNguyenTo = kiemtra_getSum(i);
        if (isSoNguyenTo == true) {
            sum += i;
        }
    } 
    let li = document.createElement("li");
    li.innerText = sum;
    list.appendChild(li);
}
const numberOneTriangle = (n) => {
    for(let i = 0; i< n; i++){
      for(let j =0; j<i; j++) {
        document.write("*")
      }
      document.write("<br/>")
    }
  }
  numberOneTriangle(5);
