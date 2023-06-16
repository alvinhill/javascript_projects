

function LET_TEST() {
    var x = 100;
    document.write(x);
    {
        var x = 33;
        document.write("<br>" + x);
    }
    document.write("<br>" + x);
}
   



