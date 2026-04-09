const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const licensedPlaces = [
    "9985019887" // Next Level Club
    // Nanti isi Place ID di sini
];

app.get("/check", (req, res) => {
    const placeId = req.query.placeId;
    const isValid = licensedPlaces.includes(placeId);
    res.json({ valid: isValid });
});

app.listen(PORT, () => {
    console.log("Server berjalan di port " + PORT);
});
