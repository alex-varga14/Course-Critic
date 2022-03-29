DELETE FROM Admins;
DELETE FROM Ratings;
DELETE FROM Reviews;
DELETE FROM Courses;

ALTER TABLE Courses AUTO_INCREMENT=0;
ALTER TABLE Reviews AUTO_INCREMENT=0;
ALTER TABLE Ratings AUTO_INCREMENT=0;








INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Computer Networks', 
'Principles and practice in modern telecommunications, computer communications and networks. Layered communication protocols and current physical, data link, network and Internet protocol layers.',
'Computer Science', 'CPSC', '441', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('An enjoyable course. Professor is enthusiastic and understand the material very well. Definitely one of the best professors
in the program. Assignments are a bit tricky as it is primarily socket-based programming. ', 
'Carey Williamson', 'Winter 2022', '2022-01-10', 28, 1);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(5, 4, 4, 1, 1);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Professor is funny and makes the lectures worth while. Certainly not an easy course but not too demanding workload-wise. 
Assignments are a bit of a challenge but most solutions can be found on github so its not a chore.', 
'Carey Williamson', 'Winter 2022', '2022-01-10', 31, 1);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(5, 4, 3, 1, 2);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('An interesting course with a great professor, but it was very challenging. Assignments took days to complete 
and were coded in a very un-orthodox style. Exams questions were as specific as they could possibly be.', 
'Carey Williamson', 'Winter 2022', '2022-01-10', 22, 1);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 5, 5, 1, 3);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Very interesting and valuable course. Could not have been taught better. Professor was fun and enthusiastic and frequently 
engaged with students. He remembers pretty much every students name and knows the class almost as well as he knows the course.', 
'Carey Williamson', 'Winter 2022', '2022-01-10', 18, 1);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(5, 3, 3, 1, 4);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Software Architecture', 
'Software architectures and design for non-functional software properties. Introduction to program comprehension skills including analysis of existing architectures.', 
'Software Engineering', 'SENG', '401', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('The TAs were definitely the best part of this course. This was the first course that introduced Gather Town while working online which provided
a great way for peers to interact.', 
'Yani Iannou', 'Winter 2022', '2022-01-10', 27, 2);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 3, 4, 2, 5);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('A very interesting course. Although most of the lectures were delivered online, the notes were clear and easy to understand.
All of the assignments and were team based, where a large group (we had 7) developed a full stack web application.', 
'Yani Iannou', 'Winter 2022', '2022-01-10', 28, 2);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 3, 4, 2, 6);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('The course content primarily consisted of analyzing various software models. The beginning of the semester was fairly light, only having to create
reports and diagrams for this application. Later, it had to be implemented which was much more tedious.  ', 
'Yani Iannou', 'Winter 2022', '2022-01-10', 16, 2);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 4, 3, 2, 7);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Software Requirements Engineering', 
'Introduction to elicitation, modelling, expression and validation of the requirements. Techniques and methodologies for requirements engineering.', 
'Software Engineering', 'SENG', '471', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('The course content is very straight forward and easy to understand. Honestly, most of it is common sense. You learn about different
project management methodologies and its all super simple.', 
'Mahmood Moussavi', 'Winter 2022', '2022-01-10', 18, 3);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 2, 3, 3, 8);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Course content is very simple and easy to understand. The assignments are quite bulky. They consist of a ton of writing and diagrams but no coding is required.', 
'Mahmood Moussavi', 'Winter 2022', '2022-01-10', 32, 3);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 3, 5, 3, 9);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Software Testing', 
'Concepts, methods, techniques, processes, and tools for software testing. The principles, processes, and applications of software reliability and software quality assurance.', 
'Software Engineering', 'SENG', '438', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('If you attend the lectures and take notes, youll be set for this class. Course content consists of 
the various forms of testing and the tools used for them. Everything is very straight forward and was taught well. ', 
'Behrouz Far', 'Winter 2022', '2022-01-10', 43, 4);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 2, 2, 4, 10);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('An interesting course and very applicable for all future software courses. Everything was easy to understand
and it provided a ton of tools for testing different kinds of software in different ways.', 
'Behrouz Far', 'Winter 2022', '2022-01-10', 17, 4);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 3, 3, 4, 11);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Honestly a fairly boring course.  Exams did ask fairly specific
questions but taking notes to review before exams will be enough for success. Labs are not very much work
and having a group of four makes it quite easy.', 
'Behrouz Far', 'Winter 2022', '2022-01-10', 26, 4);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(1, 3, 3, 4, 12);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Control Systems', 
'Component modelling and block diagram representation of feedback control systems. Mathematical modelling of dynamic systems; state-space representation and frequency domain representation of dynamic systems.', 
'Electrical Engineering', 'ENEL', '441', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Expect a ton of math. Very similar to both ENME 461 and ENEL 327 where you create models and perform signal analysis
to determine the behaviour of system. As I said, a lot of math. Get used to performing laplace transforms and
transfer functions.', 
'David Westwick', 'Winter 2022', '2022-01-10', 36, 5);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 4, 3, 5, 13);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('A super interesting course taught very well. The professor used a ton of examples and explained everything in great detail. 
The quizzes and exams do require you to go through practice problems on youre own.', 
'David Westwick', 'Winter 2022', '2022-01-10', 23, 5);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 4, 3, 5, 14);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Principles of Software Design', 
'Brief overview of typical software development lifecycles. Systematic methods for designing large-scale, quality software. Concepts such as abstraction, modularity, and software modelling will be covered. ', 
'Software Engineering', 'ENSF', '480', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('An introduction to modelling software and writing reports. Expect to write a fair bit of reports and create a ton of diagrams. 
Quizzes are quite time intensive as they require you to... you guessed it, make diagrams. ', 
'Mahmood Moussavi', 'Fall 2021', '2021-09-10', 28, 6);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 3, 3, 6, 15);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('An interesting and valuable course. Introduces modelling software and generating reports 
to reflect your goals. Expect to make large and complicated diagrams for the quizzes. The content itself is not difficult.', 
'Mahmood Moussavi', 'Fall 2021', '2021-09-10', 31, 6);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 4, 3, 6, 16);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Embedded System Interfacing', 
'Review of computer architecture; microcontrollers and their instruction sets; interfacing using common input/output devices, debugging and other software engineering practices.', 
'Computer Engineering', 'ENCM', '511', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('A fairly easy course. The lectures were quite boring. The professor just read through a microchips
user manual. The labs were fairly interesting consisting of C coding on microchips to ulitmately
develop a stop watch. And no final or mideterm!', 
'Christian Parker', 'Fall 2021', '2021-09-10', 35, 7);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 2, 2, 7, 17);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Principles of Operating Systems', 
'An introduction to operating systems principles. Performance measurement; concurrent programs; the management of information, memory and processor resources.', 
'Computer Science', 'CPSC', '457', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('One of the hardest coding courses in the program for sure. Assignments were quite difficult and require
un-orthodox coding practices. That being said, it was taught very well. ', 
'Pavol Federl', 'Fall 2021', '2021-09-10', 26, 8);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 5, 4, 8, 18);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Quite a difficult course. Threading and processor based programming are not the easiest conecpts to
wrap your head around and coding them is all the more difficult. The course was taught very well
and attendance to the lectures and tutorials is helpful.', 
'Pavol Federl', 'Fall 2021', '2021-09-10', 32, 8);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 4, 4, 8, 19);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Database Management Systems', 
'Conceptual, internal and external data bases. Relational data base systems and SQL. The normal forms, data base design, and the entity-relationship approach.', 
'Computer Science', 'CPSC', '471', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Course starts off fairly simpled, but dont be fooled, this is no walk in the park. 
The material is not that difficult but the quizzes require you to draw massive diagrams in a short period of time.', 
'Reda Alhajj', 'Fall 2021', '2021-09-10', 26, 9);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 3, 4, 9, 20);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('This course was entirely online based and I didnt attend a single lecture. I was able to comprehend
the course material fairly well through the course slides/notes but this course was still decently hard.', 
'Reda Alhajj', 'Fall 2021', '2021-09-10', 37, 9);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(2, 3, 4, 9, 21);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Very applicable course. Homework is very long but the experience is worth it. The final project
was quite difficult since I was in a group of two and we were required to design and develop a full stack web application. ', 
'Reda Alhajj', 'Fall 2021', '2021-09-10', 25, 9);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 4, 4, 9, 22);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Data Structures', 
'Fundamental data structures, including arrays, lists, stacks, queues, trees, hash tables, and graphs. Algorithms for searching and sorting. Introduction to analysis of algorithms. ', 
'Computer Science', 'CPSC', '319', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Very interesting course. Nearly all of the course conent is applicable to software 
development practices. The material is valuale and it is taught well. Labs were fairly straight forward and 
material was taught fairly well. ', 
'Jorg Denzinger', 'Winter 2021', '2021-01-10', 14, 10);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 3, 3, 10, 23);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Certainly an interesting and valuable course for the software industry. That being said, 
the professor is....uniqe. The lectures took place online but the professor refused to record the 
lectures for fear of students creating deepfakes.', 
'Jorg Denzinger', 'Winter 2021', '2021-01-10', 36, 10);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(2, 4, 3, 10, 24);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Engineering Design and Communication', 
'An interdisciplinary course involving the application of engineering principles, design, communications, leadership and project management concepts through a sequence of team-based design projects.', 
'Engineering', 'ENGG', '200', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('I very fun course. Students are divided into groups of four to work on a variety of 
projects. This course definitely helped me meet new people in first year and taught me how to productively
work in a group. ', 
'Emily Marasco', 'Winter 2021', '2021-01-10', 13, 11);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(5, 3, 3, 11, 25);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Behaviours of Liquids Gases and Solids', 
'An introduction to the behaviour of fluids and solids; phase transformations, the phase rule and phase diagrams. Ideal and real gases; equations of state and their engineering applications.', 
'Engineering', 'ENGG', '201', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Very interesting and quite difficult. Professor was great but the course
has some challenging material. In my third year of software engineering, 
I have never used the topics introduced in this class, although, it was interesting to learn.', 
'Sumon', 'Winter 2020', '2020-01-10', 25, 12);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 4, 3, 12, 26);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('This class is quite interesting, although it is still quite challenging. It is 
not very labour intensive but the quizzes, midterms and finals to require extensive studying. ', 
'Sumon', 'Winter 2020', '2020-01-10', 36, 12);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 4, 3, 12, 27);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Engineering Statics', 
'Force vectors; equilibrium of a particle in two and three dimensions; force system resultants; equilibrium of a rigid body in two and three dimensions.',
'Engineering', 'ENGG', '202', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Very interesting course. Nearly all of the course content is applicable 
to mechanical/civil engineering but the material is valuale and it is taught well.', 
'Marcus Dann', 'Winter 2020', '2020-01-10', 25, 13);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 4, 2, 13, 28);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('A great introduction to statics. Certainly a backbone course for 
mechanical and civil engineering as well as students interested in the mechatronics minor.', 
'Marcus Dann', 'Winter 2020', '2020-01-10', 14, 13);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 3, 2, 13, 29);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Fundamentals of Electrical Circuits and Machines', 
'Current, voltage and power; Kirchhoffs current and voltage laws; capacitors; electricity and magnetism fundamentals applied to circuit elements and machines.',
'Engineering', 'ENGG', '225', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Very interesting course taught very well. A base course for electrical engineering. 
Components are commonly used in software engieering and the mechatronics minor. ', 
'Anis Haque', 'Winter 2020', '2020-01-10', 35, 14);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 4, 3, 14, 30);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Certainly an interesting and valuable course for the electrical industry. That being said, 
the professor was fantastic. He covered a great range of problems and solutions in class.', 
'Anis Haque', 'Winter 2020', '2020-01-10', 4, 14);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(2, 4, 3, 14, 31);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Calculus for Engineers and Scientists', 
'An extensive treatment of differential and integral calculus in a single variable, with an emphasis on applications.',
'Mathematics', 'MATH', '275', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('A very interesting course that is fundamental for the various engineering industries. 
The math is not much more difficult than high school calculus and the professor was great.', 
'Jinniao Qiu', 'Fall 2019', '2019-09-10', 24, 15);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 3, 2, 15, 32);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Multivariable Calculus for Engineers and Scientists', 
'An introduction to calculus of several real variables: curves and parametrizations, partial differentiation, the chain rule, implicit functions.',
'Mathematics', 'MATH', '277', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Certainly more difficult than Math 275 and requires students to practice problems on their own. 
Professor was great and covered lots of examples in class.', 
'Yousry Elsabrouty', 'Winter 2020', '2020-01-10', 25, 16);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 4, 3, 16, 33);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Linear Methods I', 
'An introduction to systems of linear equations, vectors in Euclidean space and matrix algebra. ',
'Mathematics', 'MATH', '211', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Very interesting course and applicable to all engineering industries. You learn
concepts related to matrices and linear equations and introduced the euclidean theorem. ', 
'Mojtiba Aghajanpoorpasha', 'Fall 2019', '2019-09-10', 25, 17);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 4, 3, 17, 34);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Definitely an interesting course that is very applicable to engineering. Matrix arithmetic
is almost exclusively used in static and dynamics.', 
'Mojtiba Aghajanpoorpasha', 'Winter 2021', '2021-01-10', 32, 17);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 3, 2, 17, 35);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Electricity and Magnetism', 
'Electric and magnetic fields related to charges and current through Maxwells equations. Energy stored in fields, potential energy, and voltage.',
'Physics', 'PHYS', '259', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Very interesting course but is not very applicable to all engineering disciplines. Fairly
math intensive but not very difficult by any means. ', 
'Emma Spanswick', 'Winter 2020', '2020-01-10', 25, 18);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 3, 3, 18, 36);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('General Chemistry for Engineers', 
'Basic chemical concepts. Atomic and molecular structure. Chemical bonding. Chemical kinetics and equilibria. Acid-base and solubility equilibria.',
'Chemistry', 'CHEM', '209', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Fairly intersting course. Mainly just a review of chem-30. Not very labour intensive
or difficult by any means but the TAs are very nit-picky in labs.', 
'Amanda Musgrove', 'Fall 2019', '2019-09-10', 25, 19);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 2, 2, 19, 37);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Certainly not very applicable unless you are planning on going into chemical engineering.
Honestly just a review of chem 30.', 
'Amanda Musgrove', 'Fall 2019', '2019-09-10', 32, 19);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 3, 2, 19, 38);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Computing for Engineers', 
'Overview of computer systems. Functions of software components: operating systems, editors, compilers.',
'Engineering', 'ENGG', '233', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('A fairly interesting course but is applicable to all engineering disciplines. Any prior
experience with programming will make this class an absoulute breeze.', 
'Mahmood Moussavi', 'Fall 2019', '2019-09-10', 22, 20);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 2, 2, 20, 39);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Topics in World Music', 
'Selected topics examining non-western musical traditions from a historical, sociological, analytical or performative perspective.',
'Music', 'MUSI', '307', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('A great elective to take. Classes once a week, in the evenings, where you show up and listen
to music from around the world.', 
'Rod Squance', 'Winter 2020', '2020-01-10', 25, 21);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 2, 2, 21, 40);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Programming Fundamentals', 
'Key features of the C programming language. Pointers, memory models and memory management. Manipulation of text files and binary files.',
'Software Engineering', 'ENSF', '337', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('A foundational course for software development. Covers the basic features of C programming
and requires extensive coding and code analysis. ', 
'Mahmood Moussavi', 'Fall 2020', '2019-09-10', 25, 22);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 4, 3, 22, 41);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Definitely an interesting course that is very applicable to engineering. Matrix arithmetic
is almost exclusively used in static and dynamics. ', 
'Mahmood Moussavi', 'Winter 2021', '2021-01-10', 32, 22);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 3, 2, 22, 42);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Probability and Statistics for Engineers', 
'Presentation and description of data, introduction to probability theory, Bayes theorem, discrete and continuous probability distributions, estimation, and sampling distributions.',
'Engineering', 'ENGG', '319', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('An interesting course that covered a wide varity of statstical concepts. Expect to 
do a lot of math and writing practice questions is certainly required for a decent mark.', 
'Sumon', 'Winter 2020', '2020-01-10', 29, 23);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 4, 3, 23, 43);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Principles of Software Development', 
'A survey of software design and development topics for Engineering students. ',
'Software Engineering', 'ENSF', '409', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('This course was honestly all over the place. The course concepts seemed to bounce around
and cover a wide variety of seemingly unrelated topics.', 
'Emily Marasco', 'Fall 2020', '2020-09-10', 32, 24);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(1, 3, 4, 24, 44);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('This course requires a ton of coding. The assignments were very vague, open ended, 
and were marked fairly hard. ', 
'Emily Marasco', 'Fall 2020', '2020-01-10', 32, 24);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(2, 3, 3, 24, 45);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Digital Circuits', 
'Number systems and simple codes. Combinational logic: Boolean algebra, truth tables, minterms, maxterms, Karnaugh maps; gates, buffers, multiplexers and decoders; combinational circuit timing.',
'Electrical Engineering', 'ENEL', '353', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('A very interesting course that introduces the concepts of boolean algebra and mapping
digital circuits. It was taught very well (though the lectures were a bit dry).', 
'Norm Bartley', 'Fall 2020', '2020-09-10', 16, 25);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 3, 2, 25, 46);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Computer Organization', 
'Organization of a simple stored-program computer: CPU, busses and memory. Instruction sets, machine code, and assembly language. Conventions for assembly language generated by compilers.',
'Computer Engineering', 'ENCM', '369', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('An intersting course that provides foundational knowledge for computer processor. Required 
coding in MIPS assembly language which was not fun.', 
'Steve Norman', 'Fall 2019', '2019-09-10', 32, 26);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 4, 3, 26, 47);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Discrete Mathematics', 
'An introduction to proof techniques and abstract mathematical reasoning: sets, relations and functions; mathematical induction; integers, primes, divisibility and modular arithmetic.',
'Mathematics', 'MATH', '271', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('A very interesting course that lays out the foundations for 
mathematical proofs. This class is essentially just explaining math with english and 
requires a fair bit of logical thinking. ', 
'Thi Dinh', 'Fall 2020', '2020-09-10', 22, 27);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(5, 3, 3, 27, 48);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Very interesting course and foundational for mathematical logic. Professor
was enthusiastic and covered a wide variety of sample problems. ', 
'Thi Dinh', 'Fall 2020', '2020-09-10', 32, 27);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 3, 4, 27, 49);






INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Differential Equations', 
'Definition, existence and uniqueness of solutions; first order and higher order equations and applications; Homogeneous systems; Laplace transform; partial differential equations of mathematical physics.',
'Mathematics', 'MATH', '375', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('A very interesting math course taught incredibley well. The professor covered 
a wide variety of practice problems and explained everything in great detail.', 
'Yousry Elsabrouty', 'Fall 2019', '2019-09-10', 29, 28);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 4, 3, 28, 50);






INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Professional and Technical Communication', 
'An introduction to professional and technical communication in diverse media. ',
'Communications', 'COMS', '363', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('A very easy course. It was all online based and attendance to lectures was not mandatory. 
They did expect you to read the textbook but that honestly is not necessary. ', 
'Tania Smith', 'Fall 2019', '2019-09-10', 25, 29);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 2, 3, 29, 51);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Dynamics', 
'Kinematics of particles and rigid bodies: rectilinear, curvilinear and general plane motion. Kinetics of particles and planar rigid bodies.',
'Engineering', 'ENGG', '349', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('A very difficult course. Expands on topics introduced in ENGG 202 (statics) but 
covers them in great detail, all while nothing is at equilibrium.', 
'Ahmed Ghasemloonia', 'Winter 2021', '2021-09-10', 26, 30);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(3, 5, 4, 30, 52);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Expect to be doing a ton of math. Concepts are not very difficult but exams 
will combine multiple concepts into one question, really testing the extent of your knowledge.', 
'Ahmed Ghasemloonia', 'Winter 2021', '2021-01-10', 32, 30);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(2, 4, 3, 30, 53);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Acoustics, Optics and Radiation', 
'Wave motion as applied to acoustics, geometric and physical optics, and radiant energy transfer. Traditional and modern applications.',
'Physics', 'PHYS', '369', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('This course is everything waves. Very mathematics based and covers a wide variety of topics.
Most course components overlap so it is not difficult to get a good grasp of the whole material.', 
'Emma Spanswick', 'Winter 2021', '2021-01-10', 25, 31);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 3, 3, 31, 54);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Signal and Transforms', 
'Continuous-time systems. Impulse response and convolution. Fourier series and Fourier transform. Basics of discrete time signals. Sampling theory. Discrete convolution.',
'Electrical Engineering', 'ENEL', '327', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('This course is very math based. Be prepared to look at a ton of signal 
graphs for analysis and arithmetic. A foundational course for enel 441.', 
'Titus Mathews', 'Winter 2021', '2021-01-10', 25, 32);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(2, 3, 2, 32, 55);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Foundations of Mechatronics', 
'Modelling, analysis, and design of dynamic systems, including mechanical, electrical, electromechanical, fluidic, thermal, and mixed systems.',
'Mechanical Engineering', 'ENME', '461', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('Very interesting course and applicable to all engineering industries. You apply 
concepts from electrical, mechanical and software engineering.', 
'Jihyun Lee', 'Winter 2021', '2021-01-10', 31, 33);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 4, 3, 33, 56);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Team Design', 
'Preliminary and detailed engineering design and implementation of an engineering system that applies engineering knowledge to solving a real-life problem. ',
'Electrical Engineering', 'ENEL', '500', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('I have not actually taken this course yet but im definitely to see whats in store.
This rating and review is entire based on my expectations.', 
'Hamidreza Zareipour', 'Fall 2019', '2019-09-10', 18, 34);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 4, 4, 34, 57);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Software Performance Evaluaton', 
'Analyzing quality requirements of large-scale software. Performance analysis, testing, and tuning techniques. Evaluating software scalability. ',
'Software Engineering', 'SENG', '533', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('I have not actually taken this course yet but im definitely to see whats in store.
This rating and review is entire based on my expectations.', 
'Unknown', 'Fall 2019', '2019-09-10', 13, 35);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 4, 4, 35, 58);





INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Software Process and Project Management', 
'Analysis of methods, tools, and techniques for software process improvement and software project management as an effort to achieve quality software products.',
'Software Engineering', 'SENG', '511', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('I have not actually taken this course yet but im definitely to see whats in store.
This rating and review is entire based on my expectations.', 
'Guenther Ruhe', 'Fall 2019', '2019-09-10', 19, 36);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 4, 4, 36, 59);


INSERT INTO Courses(Title, Description, Faculty, CourseCode, CourseNo, Suggested)
VALUES('Mechatronics Design Labratory I', 
'A hands-on laboratory experience in the design and analysis of electro-mechanical components. Introduction to microprocessor-controlled electromechanical systems.',
'Mechanical Engineering', 'ENME', '561', false);

INSERT INTO Reviews(Comment, Instructor, Semester, Date, HelpfulCount, CourseID)
VALUES('I have not actually taken this course yet but im definitely to see whats in store.
This rating and review is entire based on my expectations.', 
'Jeff Pieper', 'Fall 2019', '2019-09-10', 12, 37);

INSERT INTO Ratings(Enjoyment, Difficulty, Workload, CourseID, ReviewID)
VALUES(4, 4, 4, 37, 60);











INSERT INTO Admins(Username, Password)
VALUES('domv', 'dominic');

INSERT INTO Admins(Username, Password)
VALUES('alexv', 'alexander');

INSERT INTO Admins(Username, Password)
VALUES('johncedrica', 'johncedric');

INSERT INTO Admins(Username, Password)
VALUES('ivant', 'ivan');

INSERT INTO Admins(Username, Password)
VALUES('tylert', 'tyler');

INSERT INTO Admins(Username, Password)
VALUES('maddym', 'madeline');

INSERT INTO Admins(Username, Password)
VALUES('ethanc', 'ethan');