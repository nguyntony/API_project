const ajax = (url, callback, method = "GET") => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", (evt) => {
        let req = evt.target;
        if (req.readyState !== 4) return;
        if (req.status === 200 || req.status === 304) return callback(req.response) //this is all on one line
        callback(null, req.status)
    })
    request.open(method, url)

    //Setting some headers...Don't sweat it right now
    request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
    request.setRequestHeader("Access-Control-Allow-Origin", "*");

    //request.setRequestHeader("Content-Type","application/json");
    //request.setRequestHeader("Accept","application/json");
    //Use above for APIs in the future
    request.send()
}

export default ajax;