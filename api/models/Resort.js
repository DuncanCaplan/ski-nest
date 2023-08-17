const db = require("../database/connect");

class Resort {
  constructor({ id, resort_name, country, iso_Code, region }) {
    this.id = id;
    this.resort_name = resort_name;
    this.country = country;
    this.iso_Code = iso_Code;
    this.region = region;
  }

  static async getAll() {
    const response = await db.query("SELECT * FROM resorts;");

    if (!response.rows.length) {
      throw new Error("No resorts found");
    }
    return response.rows.map((r) => new Resort(r));
  }

  static async getOne(id) {
    const response = await db.query("SELECT * FROM resorts WHERE id = $1;", [
      id,
    ]);

    if (response.rows.length != 1) {
      throw new Error("Unable to locate resort");
    }
    return new Resort(response.rows[0]);
  }
}

module.exports = Resort;
