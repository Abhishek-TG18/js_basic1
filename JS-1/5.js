let type = "express";

switch (type) {
    case "standard":
        console.log("Package may take upto 3-5 days");    
        break;
    case "express":
        console.log("package may take upto 1-2 days");
        break;
    case "overnight":
        console.log(" package would be delivered the next day");
        break;    

    default:
        console.log("select type must be only standard express and over night");
        break;
}