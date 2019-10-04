module.exports = function encode(req, res) {
    const { string } = req.body

    let arr = string.split("");

    //console.log(arr);

    function encode(arr) {
        var a = [], b = [], prev;


        for (var i = 0; i < arr.length; i++) {
            if (arr[i] !== prev) {
                a.push(arr[i]);
                b.push(arr[i], 1);

            } else {
                b[b.length - 1]++;
            }
            prev = arr[i];
        }

        return [a, b];
    }

    let result = encode(arr);

    let data = result[1].toString();

    let payload = data.replace(/[{(,)}]/g, '')

    return res.send({encode_string: payload})
}


