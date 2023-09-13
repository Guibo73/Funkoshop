module.exports = {
    homeView: async (req, res) => {
        await res.render('home', {
            view: {
                title: "Home | Funkoshop"
            }
        });
    }
};