const cors = (req,res,next) => {
    res.header('Acces-Control-Allow-Origin','*');
    res.header('Acces-Control-Allow-Headers','*');
    res.header('Acces-Control-Allow-Methods','*');
    next();
}

module.exports = cors;