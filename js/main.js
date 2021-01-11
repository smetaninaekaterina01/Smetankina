var d= document;
const cartButton = d.querySelector("#cart-button");
const modal = d.querySelector(".modal");
const close = d.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
    modal.classList.toggle("is-open");
}
function st() { 
    var c = 0;
    if ((d.form1.elements[0]).checked)
        c = (Number(d.form1.elements[0].value) * d.form1.itemcount.value).toString();
    if ((d.form1.elements[1]).checked)
        c = (Number(d.form1.elements[1].value) * d.form1.itemcount.value).toString();
    if ((d.form1.elements[2]).checked)
        c = (Number(d.form1.elements[2].value) * d.form1.itemcount.value).toString();
    if ((d.form1.elements[3]).checked)
        c = (Number(d.form1.elements[3].value) * d.form1.itemcount.value).toString();
    form1.cc.value = c +" руб."
}