module.exports = {
  adminView: async (req, res) => {
      await res.render('admin/admin', {
          view: {
              title: "Admin | Funkoshop"
          }
      });
  }
};