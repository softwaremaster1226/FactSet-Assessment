import express from "express";
import searchController from "../controllers/search";
import searchQueryStringValidators from "../validators/search";

var router = express.Router();

router.get(
    "/search", 
    searchQueryStringValidators.searchQuery,
    searchController.searchGithub
);

module.exports = router;
