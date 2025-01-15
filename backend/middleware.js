// MiddleWare Here
const ageFilter = (req, res, next) => {
    if (!req.query.age) {
        // res.render('ageError')
        next()
    } else if (req.query.age < 18) {
        // res.render('underAge')
        next()
    } else {
        next();
    }
}
module.exports = ageFilter;