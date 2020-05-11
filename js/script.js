'use strict';

(function () {
    let tableButton = document.querySelector('.table_button');

    function foo() {
        alert('“Hello, world!”');
    };

    tableButton.addEventListener('click', foo);
})();