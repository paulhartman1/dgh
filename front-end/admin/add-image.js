$(document).ready(function () {

    
    $('#drop-area')
    .on('dragover', function (e) {
        e.preventDefault();
        e.stopPropagation();
        highlight(e);
      
    })
    .on('drop', function (e) {
        e.preventDefault();
        e.stopPropagation();
        unhighlight(e);
        if(e.originalEvent.dataTransfer.files) {
            handleFiles(e.originalEvent.dataTransfer.files);
        }
        console.log(e.target);
    })
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