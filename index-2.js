function numberOneTriangle(n) {
    const result= document.getElementById('result');
    var n = document.getElementById("number").value;
  if (n < 1 || n > 10) {
    alert(
      "Số nhập vào không hợp lệ. Hãy nhập một số trong khoảng từ 1 đến 10."
    );
    return;
  }

  for (var i = 1; i <= n; i++) {
    var rowDiv = document.createElement("div");
    for (var j = 1; j <= i; j++) {
        var numberSpan = document.createElement("span");
					numberSpan.innerHTML = "*";
                    rowDiv.appendChild(numberSpan);
    }
    rowDiv.appendChild(document.createElement("br"));
    result.appendChild(rowDiv);
  }
}
