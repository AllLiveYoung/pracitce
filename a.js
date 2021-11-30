var flag = 1

function function1() {
  if (flag % 2 == 0) {
    var li;
    li = document.getElementById("result").innerText = '캠퍼스거꾸로'
    flag++
  } else {
    document.getElementById("result").innerText = '거꾸로캠퍼스'
    flag++
  }
}