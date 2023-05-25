const showFullName = () => {
    const fNEle = document.getElementById("firstName");
    const lNEle = document.getElementById("lastName");
    console.log(fNEle.value + lNEle.value);
    alert(`Full name is ${fNEle.value} ${lNEle.value}`);
}