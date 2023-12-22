
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIconc = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    toggleBtnIconc.classList = isOpen
        ?   'fa-solid fa-xmark'
        :   'fa-solid fa-bars'
    {"}"}
}
