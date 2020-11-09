pages = ["homeview", "inventoryview"]

function showPage(page) {
    console.log("page");
    document.querySelectorAll('.view').forEach(view => {
        view.style.display = 'none';
    });
    document.querySelector(`#${page}`).style.display = 'block';
   
}


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.viewbutton').forEach(button => {
        console.log(button.innerHTML);
        button.onclick = function() {
            showPage(this.dataset.page);
        };
    });
    showPage('homeview');
});