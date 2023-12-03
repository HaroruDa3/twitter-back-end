-- Active: 1698158298747@@localhost@5432@twitter
create table tbl_user
(
    user_name varchar(30) PRIMARY key,
    email VARCHAR(70) UNIQUE, 
    pass VARCHAR(30),
    is_active BOOLEAN DEFAULT true, 
    created_date TIMESTAMP DEFAULT current_timestamp, 
    deleted_date TIMESTAMP, 
    update_date TIMESTAMP
);

create table tbl_twitts 
(   
    id SERIAL PRIMARY key,
    twitt text,
    create_date TIMESTAMP default current_timestamp,
    user_name varchar(30) REFERENCES tbl_user (user_name) 
);