const library = require("../model/Library");

exports.getAllBooks = async (req, res) => {
  try {
    const getBooks = await library.find();

    if (!getBooks) {
      return res.status(404).json({ message: "Books not found!" });
    }

    res.json(getBooks);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error! " });
  }
};

exports.createBook = async (req, res) => {
  try {
    const addBook = new library(req.body);
    await addBook.save();
    res.status(201).json({ message: "Book Added Succefully..." });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

exports.deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await library.findByIdAndDelete(id);

    if (!deletedBook) {
      res.status(404).json({ message: "Book not found! " });
    }

    res
      .status(200)
      .json({ message: "Book Deleted Successfully...", deletedBook });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" });
  }
};

exports.updateBook = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedBook = await library.findByIdAndUpdate(id, req.body, { new : true, runValidators : true });

        if(!updatedBook){
            res.status(404).json({ message : "Book not found!" });
        }

        res.status(201).json({ message : "Book updated Successfully...", updatedBook});
    } catch (error) {
        res.status(500).json({ message : "Internal Server Error!"});
    }
}
