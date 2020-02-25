(function startTheShow() {
    const path = "C:\\Foo\\Bar\\Baz\\file.js";
    const converted = path.replace(/\\/g,"__");
    console.log(converted)
})();