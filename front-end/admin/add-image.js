$(document).ready(function () {


    $('#drop-area')
        .on('dragover', function (e) {
            preventDefaults(e);
            highlight(e);
        })
        .on('drop', function (e) {
            preventDefaults(e);
            unhighlight(e);
            if (e.originalEvent.dataTransfer.files) {
                handleFiles(e.originalEvent.dataTransfer.files);
            }
            console.log(e.target);
        })
        .on('dragleave', function (e) {
            preventDefaults(e);
            unhighlight(e);
        })

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    function submit(e) {
        e.preventDefault();
        this.className = 'upload-drop-zone';

        startUpload(e.dataTransfer.files)
    }


    function ondrag(e) {
        alert("SF)");
        this.className = 'upload-drop-zone drop';
        return false;
    }

    function highlight(e) {
        $('#drop-area').addClass('highlight')
    }

    function unhighlight(e) {
        $('#drop-area').removeClass('highlight')
    }

    function handleFiles(files) {
        ([...files]).forEach(uploadFile)
    }


})