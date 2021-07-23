var names = ["Nikhil" , "Shivam" , "Jasmine" , "Sneha", "John"]
for(var i in names)
{
    var s= names[i];
    if(s[0]=='J' || s[0]=='j')
    console.log("Goodbye " + names[i]);
    else
    console.log("Hello " + names[i]);
}
