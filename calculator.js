function display(val){
    document.getElementById('result').value+=val;
}
function clr(){
    document.getElementById('result').value ="";
}
function final_result(){
    let input=document.getElementById('result').value;
    let calculate=eval(input);
    document.getElementById('result').value=calculate;
}