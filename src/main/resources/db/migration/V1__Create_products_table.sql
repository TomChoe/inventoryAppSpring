  create table PRODUCTS (
      ID serial,
      PRODUCT_NAME varchar(100) NOT NULL,
      PRODUCT_QUANTITY int,
      DATE_UPDATED timestamp not null DEFAULT NOW()
  );