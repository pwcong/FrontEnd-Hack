;(function(global){

    "use strict";

    // nodes

    // [
    //     {
    //         title: '',
    //         el: null,
    //         children: [
    //             {
    //                 title: '',
    //                 el: null,
    //                 children: []
    //             },
    //             {
    //                 title: '',
    //                 el: null,
    //                 children: []
    //             },
    //         ]
    //     },
    //     {
    //         title: '',
    //         el: null,
    //         children: []
    //     }
    // ]

    function initStyle(){

        var style = document.createElement("style");

        style.innerHTML = "\
            .header-navigator{\
            }\
            .header-navigator-list{\
                cursor: pointer;\
            }\
            .header-navigator-list ol{\
                padding-left: 24px;\
            }\
            .header-navigator-list > span{\
                color: #333;\
                border-bottom: 1px solid #aaa;\
                transition: color 0.3s;\
            }\
            .header-navigator-list:hover > span{\
                color: #fc6423;\
                border-bottom: 1px solid #fc6423;\
            }\
            .header-navigator-list-on > span{\
                color: #fc6423;\
                border-bottom: 1px solid #fc6423;\
            }\
            .header-navigator-list > ol{\
                display: none;\
            }\
            .header-navigator-list-on > ol{\
                display: block;\
            }"

        document.head.appendChild(style);

    }

    function getRelativeTop(el, rel){

        var offsetTop=el.offsetTop; 

        if(el.offsetParent!=null && el.offsetParent != rel){
            offsetTop+=getRelativeTop(el.offsetParent); 
        }

        return offsetTop; 
    }
    
    function generateNavigationNode(title, el, children = []){

        return {
            title,
            el,
            children
        };

    }

    function handleNodes(root, el, nodes){
        
        var ol = document.createElement("ol");

        el.appendChild(ol);

        for(var i = 0; i < nodes.length; i++){

            var li = document.createElement("li");
            li.className = "header-navigator-list";
            
            ol.appendChild(li);

            var span = document.createElement("span");
            span.innerHTML = nodes[i].title;

            li.appendChild(span);

            if(nodes[i].children && nodes[i].children.length > 0){
                handleNodes(root, li, nodes[i].children);
            }

            (function(node, li){

                function checkHeaderNavigatorList(){

                    var relativeTop = getRelativeTop(node.el, root);

                    if(root.scrollTop >=  relativeTop -1 && root.scrollTop < (relativeTop + node.el.offsetHeight)){
                        li.className = "header-navigator-list header-navigator-list-on";

                    }else{
                        li.className = "header-navigator-list";
                    }

                    li.onclick = function(e){
                        
                        scrollTopTo(root, relativeTop, 0.1, 10);

                        if (e.stopPropagation){

                            e.stopPropagation();
                        }else{
                            
                            e.cancelBubble = true;
                            
                        }
                    }
                }


                if(root == document.body){

                    document.addEventListener("scroll", function(e){
                        checkHeaderNavigatorList();
                        
                    });
                }else{

                    root.addEventListener("scroll", function(e){

                        checkHeaderNavigatorList();

                        
                    });


                }



            })(nodes[i], li);
            
            

        }
        
    }

    function initHeaderNavigator(root, el, nodes){

        var headerNavigator = document.createElement("div");
        headerNavigator.className = "header-navigator";
        el.appendChild(headerNavigator);

        handleNodes(root, headerNavigator, nodes);

    }

    function init(){

        initStyle();

        global.generateNavigationNode = generateNavigationNode;
        global.initHeaderNavigator = initHeaderNavigator;
    }

    init();

})(window);