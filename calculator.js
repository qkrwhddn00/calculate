function add (char) {
    const display = document.getElementById("text_input");
    display.value = display.value + char; //display 란에 누르는 버튼 추가표기
}
function calculate() {
    const display = document.getElementById("text_input");
    const result = eval(display.value); //식계산하고  result 에 값 저장
    document.getElementById('result').value=result;
}
function AC() {
    document.getElementById('text_input').value = ""; // ac버튼 눌렀을 때 값 초기화 
    document.getElementById('result').value = "";
}
function DE() {
    const display = document.getElementById('text_input');
    const currentValue = display.value;
    if (currentValue.length > 0) {
        display.value = currentValue.slice(0, -1);
    }
    //최근 입력이 0보다 클경우 최근입력값의 마지막 문자를 없애고 display에 재할당
}

   

