# Announcements

### Get your reviews in

### Assignments for this Week
* Wed May 25th: Read: SQL Joins & Relations Links
* Fri May 27th: Pair Assignment 8 : CRUD Due
* Fri May 27th: Portfolio Assignment 7 : Functional Due
* Note: There is no assignment for Portfolio 8: CRUD

# Review

## Finding something in a directory - example
```
find . // finds all files and directories in current dir (recursively)
find . -type f // find files in current dir (recursively)
find . -type f | grep LECTURE // finds all files named LECTURE in current dir (recursively)
find . -type f | xargs grep -i SQL // finds all files in current dir (recursively) that contain text 'SQL'
```

## Checking and changing ownership - example
```
$ ls -al
total 24
drwxr-xr-x   6 kbrumer  staff   204 May 24 15:34 .
drwxr-xr-x  37 kbrumer  staff  1258 May 24 15:31 ..
-rw-r--r--   1 kbrumer  staff  4683 May 24 15:34 LECTURE.md
-rw-r--r--   1 kbrumer  staff   716 May 10 14:30 README.md
drwxr-xr-x   7 kbrumer  staff   238 May 24 15:31 demo
drwxr-xr-x   6 kbrumer  staff   204 May 10 14:30 screenshots
ABBBCCCDDD     EE       FF       GG              HH  

A - indicates file (-), directory (d) or symbolic link (l)
B - read, write and execute permissions on the file for the owner
+C - read, write and execute permissions on the file for the group
D - read, write and execute permissions on the file for everyone
E - owner
F - group
G - file size in bytes (use ls -h to get a more readable)
H - file name
```

## Unix permissions 
  read, write, execute (rwx)
  owner, group, everyone

```
  chown -R kbrumer:staff demo // changes the ownership of the demo dir (recusrively) to owner kbrumer, group staff
  chmod +x test.sh // makes the test.sh file executable
```

# Learning Objectives

1. Understanding the concept of a relational database.
2. How to create and drop tables.
3. How to insert records.
4. How to select records.
5. How to update records.
6. How to delete records.
7. Exposure to formation of more advanced SQL queries.
8. Knowledge of how to interact with WebSQL in the browser.
9. Ability to interact with Web SQL using JavaScript.


# Lecture

## Databases

RDBMS: Relational database management system 

[Relational Model](https://en.wikipedia.org/wiki/Relational_model)

PostgreSQL, SQLite, MySql, MSSQL

# Demo

1. Add the following to PostgreSQL
2. Demonstrate `SELECT`, `INSERT`, `UPDATE`, `DELETE` and `JOIN`

```
/*
from https://github.com/b4oshany/school
*/

DROP TABLE IF EXISTS courses;
CREATE TABLE courses (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(32) DEFAULT NULL,
  teacher_id INT NOT NULL
);

INSERT INTO courses VALUES
(10001, 'Computer Science 142', 1234),
(10002, 'Computer Science 143', 5678),
(10003, 'Computer Science 190M', 9012),
(10004, 'Informatics 100', 1234);

DROP TABLE IF EXISTS grades;
CREATE TABLE grades (
  student_id INT NOT NULL,
  course_id INT NOT NULL,
  grade varchar(2) DEFAULT NULL
);

INSERT INTO grades VALUES
(123, 10001, 'B-'),
(123, 10002, 'C'),
(456, 10001, 'B+'),
(888, 10002, 'A+'),
(888, 10003, 'A+'),
(404, 10004, 'D+'),
(404, 10002, 'B'),
(456, 10002, 'D-');

DROP TABLE IF EXISTS students;
CREATE TABLE students (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(32) DEFAULT NULL,
  email VARCHAR(32) DEFAULT NULL,
  password VARCHAR(16) DEFAULT NULL
);

INSERT INTO students VALUES
(123, 'Bart', 'bart@fox.com', 'bartman'),
(404, 'Ralph', 'ralph@fox.com', 'catfood'),
(456, 'Milhouse', 'milhouse@fox.com', 'fallout'),
(888, 'Lisa', 'lisa@fox.com', 'vegan');

DROP TABLE IF EXISTS teachers;
CREATE TABLE teachers (
  id INT NOT NULL PRIMARY KEY,
  name VARCHAR(32) DEFAULT NULL
);

INSERT INTO teachers VALUES
(1234, 'Krabappel'),
(5678, 'Hoover'),
(9012, 'Stepp');
```

# Live Coding

# Questions?





  






