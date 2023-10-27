document.addEventListener('DOMContentLoaded', function () {
    var modal = new bootstrap.Modal(document.getElementById('staticBackdrop'), {
        backdrop: false
    });

    var modalButton = document.getElementById('openModalBtn');

    modalButton.addEventListener('click', function() {
        modal.show();
    });
});

