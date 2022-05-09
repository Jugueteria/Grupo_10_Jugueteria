function locals(req, res, next) {
    res.locals.userLocal = false;

    if (req.session.userLogin) {
        res.locals.userLocal = req.session.userLogin;
    }
    next()
}

module.exports = locals;