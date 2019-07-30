USE reviews;

CREATE TABLE IF NOT EXISTS reviews (
  productid int,
  author text,
  rating smallint,
  date date,
  title text,
  review text,
  popularity int,
  PRIMARY KEY (productid, author)
);