;(function(global){

    "use strict";

    var uploadURL = "https://sm.ms/api/upload"

    var fileInput = document.getElementById("ipt-file");
    var uploadButton = document.getElementById("btn-upload");

    var img = document.getElementById("img");

    var progressBar = document.getElementById("progress-bar");


    // 监听输入文件变化，动态加载图片
    fileInput.onchange = function(e){

        var file = e.target.files[0];

        img.src = window.URL.createObjectURL(file);

    }


    // 当点击上传按钮式执行函数
    uploadButton.onclick = function(e){

        progressBar.style.width = "0%";

        // 获取输入文件
        var file = fileInput.files[0];

        if(file != null){

            // 新建表单对象，并置入读取的文件
            var formData = new FormData();
            formData.append("smfile", file);

            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function(){
                if(xhr.readyState == 4 && xhr.status == 200){
                    alert("Upload successfully!");
                    console.log(xhr.responseText);
                }
            }

            // 监听上传进度
            xhr.upload.onprogress = function(e){

                // 已上传大小
                var loaded = e.loaded;
                // 总大小
                var total = e.total;

                // 通过计算 已上传大小/总大小 得出进度值
                var percent = 100 * loaded / total;

                progressBar.style.width = percent + "%";

            }

            
            xhr.open("post", uploadURL);
            xhr.send(formData);
        }else{
            alert("You have not selected file.")
        }

    }


})(window);