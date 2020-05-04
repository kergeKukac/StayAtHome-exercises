$("body").append(
    "<h1>Hello world!</h1>"
);

let names = ["Gábor","Dénes","Miklós","Géza","Jani","Tamás"];

names.forEach((name) => {
    if (name == "Jani"){
        $("body").append(
            "<ul>", name.bold() ,"</ul>"
        );
    } else {
        $("body").append(
            "<ul>", name ,"</ul>"
            
        );
    }
});