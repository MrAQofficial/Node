// MiddleWare Here
const ageFilter = (req, res, next) => {
    if (!req.query.age) {
        res.render('ageError')
    } else if (req.query.age < 18) {
        res.render('underAge')
    } else {
        next();
    }
}
module.exports = ageFilter;