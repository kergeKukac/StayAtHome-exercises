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

let additionalBlock = {
    title: "Added with JavaScript!",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$('body').append (
    '<h1>' +additionalBlock.title+ '</h1>',
    '<p>' +additionalBlock.text+ '</p>'
);