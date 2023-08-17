DROP TABLE IF EXISTS resorts;

CREATE TABLE resorts (
    id INT GENERATED ALWAYS AS IDENTITY,
    resort_name VARCHAR(30) NOT NULL,
    country VARCHAR(30) NOT NULL,
    iso_Code VARCHAR (3) NOT NULL,
    region VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO resorts (resort_name, country, iso_Code, region) VALUES ('Lake Louise', 'Canada', 'CAN', 'North America');
INSERT INTO resorts (resort_name, country, iso_Code, region) VALUES ('Chamonix', 'France', 'FRA', 'Western Europe');
INSERT INTO resorts (resort_name, country, iso_Code, region) VALUES ('Pas de la Casa', 'Andorra', 'AND', 'Southern Europe');
INSERT INTO resorts (resort_name, country, iso_Code, region) VALUES ('Lake Tahoe', 'United States', 'USA', 'North America');
INSERT INTO resorts (resort_name, country, iso_Code, region) VALUES ('Les Deux Alpes', 'France', 'FRA', 'Western Europe');
INSERT INTO resorts (resort_name, country, iso_Code, region) VALUES ('Avoriaz', 'France', 'FRA', 'Western Europe');
INSERT INTO resorts (resort_name, country, iso_Code, region) VALUES ('Lecht', 'Austria', 'AUT', 'Western Europe');
INSERT INTO resorts (resort_name, country, iso_Code, region) VALUES ('Kaprun', 'Austria', 'AUT', 'Western Europe');
INSERT INTO resorts (resort_name, country, iso_Code, region) VALUES ('Nozawa Onsen', 'Japan', 'JPN', 'East Asia');