;(function(global){

    "use strict";

    var count = 0;

    var queue = [];

    var fileInput = document.getElementById("manager-tools-input-file");
    var uploadBtn = document.getElementById("manager-tools-btn-upload");

    var itemList = document.getElementById("manager-window-list");

    function checkQueue(){

        for (var i = 0; i < queue.length; i++){
            if(!queue[i].done && !queue[i].delete)
                return;
        }

        uploadBtn.style.display = "none";

    }


    function upload(key, showUpload, showProgress, showCheck){

        var i = 0;

        // 模拟上传
        function startTimer(){
            setTimeout(function(){

                i++;

                showProgress(i);

                if(i<100)
                    startTimer();
                else{
                    showCheck();

                    for(i = 0; i < queue.length; i++){
                        if(queue[i].key == key)
                            queue[i].done = true;
                    }

                    checkQueue();
                }

            },20);
        }

        startTimer();

    }

    function deleteItem(key){
        for(var i = 0; i < queue.length; i++){
            if(queue[i].key == key){
                queue[i].delete = true;
            }
        }

        checkQueue();
    }


    function addItem(file){
        
        var item = document.createElement("div");
        item.className = "manager-window-list-item";

        var itemImgDiv = document.createElement("div");
        itemImgDiv.className = "manager-window-list-item-img";
        var itemImg = document.createElement("img");
        itemImg.src = window.URL.createObjectURL(file);
        itemImgDiv.appendChild(itemImg);
        item.appendChild(itemImgDiv);

        var itemTools = document.createElement("div");
        itemTools.className = "manager-window-list-item-tools";
        var uploadSpan = document.createElement("span");
        uploadSpan.className = "fa fa-upload";
        itemTools.appendChild(uploadSpan);
        var checkSpan = document.createElement("span");
        checkSpan.className = "fa fa-check";
        checkSpan.style.display = "none";
        itemTools.appendChild(checkSpan);
        var loadingSpan = document.createElement("span");
        loadingSpan.className = "fa fa-spinner";
        loadingSpan.style.display = "none";
        itemTools.appendChild(loadingSpan);
        var trashSpan = document.createElement("span");
        trashSpan.className = "fa fa-trash";
        itemTools.appendChild(trashSpan);
        item.appendChild(itemTools);

        var itemProgress = document.createElement("div");
        itemProgress.className = "manager-window-list-item-progress";
        itemProgress.style.display = "none";
        var itemProgressBar = document.createElement("div");
        itemProgressBar.className = "manager-window-list-item-progress-bar";
        itemProgress.appendChild(itemProgressBar);
        item.appendChild(itemProgress);

        itemList.appendChild(item);

        
        function showUpload(){
            uploadSpan.style.display = "";
            checkSpan.style.display = "none";
            loadingSpan.style.display = "none";
            itemProgress.style.display = "none";
        }

        function showProgress(progress){
            uploadSpan.style.display = "none";
            checkSpan.style.display = "none";
            loadingSpan.style.display = "";
            itemProgress.style.display = "";
            itemProgressBar.style.width = progress + "%";
        }

        function showCheck(){
            uploadSpan.style.display = "none";
            checkSpan.style.display = "";
            loadingSpan.style.display = "none";
            itemProgress.style.display = "none";
        
        }

        var key = count++;

        queue.push({
            key,
            file,
            showUpload,
            showProgress,
            showCheck,
            done: false,
            delete: false
        });

        uploadSpan.onclick = function(e){
            upload(key, showUpload, showProgress, showCheck);
           
        }

        trashSpan.onclick = function(e){
            itemList.removeChild(item);
            deleteItem(key);
        }

        uploadBtn.style.display = "";

    }

    fileInput.onchange = function(e){

        for(var i = 0; i < e.target.files.length; i++){
            addItem(e.target.files[i]);
        }

    }

    uploadBtn.onclick = function(e){

        for(var i = 0; i < queue.length; i++){

            if(!queue[i].done && !queue[i].delete)
                upload(queue[i].key, queue[i].showUpload, queue[i].showProgress, queue[i].showCheck);
        }

    }

    itemList.ondragenter = function(e){
        e.preventDefault();

        itemList.style.backgroundColor = "#aaa";
    }

    itemList.ondragover = function(e){
        e.preventDefault();
        itemList.style.backgroundColor = "#aaa";
    }

    itemList.ondragleave = function(e){
        e.preventDefault();
        itemList.style.backgroundColor = "white";
    }

    itemList.ondrop = function(e){
        e.preventDefault();

        for(var i = 0; i < e.dataTransfer.files.length; i++){
            addItem(e.dataTransfer.files[i]);
        }
        
        itemList.style.backgroundColor = "white";
    }


})(window);