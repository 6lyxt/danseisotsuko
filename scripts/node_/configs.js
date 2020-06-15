function saveConfig() {
    const fs = require('fs');
    fs.readFile("../gamedata/scenes/sceneSaver.json", (err, data) => {
        if (err) return err;

        return data;
    });
}