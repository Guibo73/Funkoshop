module.exports = {
    homeView: async (req, res) => {
        await res.render('home', {
            view: {
                title: "Home | Funkoshop"
            }
        });
    }    
/*redirectToItem : (req, res) => {
        const itemId = req.params.id;
        res.redirect(`/items/${itemId}`);
    }*/
};