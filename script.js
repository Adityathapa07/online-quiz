/* =========================================================
   ONLINE QUIZ SYSTEM
   COMPLETE JAVASCRIPT
========================================================= */


/* =========================================================
   QUIZ DATABASE
========================================================= */

const quizData = {

    "10th": {

        "Mathematics": {

            icon: "📐",

            description: "Practice important Class 10 Mathematics concepts.",

            questions: [

                {
                    question: "What is the value of √144?",
                    options: ["10", "11", "12", "14"],
                    answer: 2
                },

                {
                    question: "What is the degree of a quadratic polynomial?",
                    options: ["1", "2", "3", "4"],
                    answer: 1
                },

                {
                    question: "What is the value of sin 90°?",
                    options: ["0", "1", "1/2", "-1"],
                    answer: 1
                },

                {
                    question: "A triangle has how many sides?",
                    options: ["2", "3", "4", "5"],
                    answer: 1
                },

                {
                    question: "What is 15 × 4?",
                    options: ["45", "50", "60", "65"],
                    answer: 2
                }

            ]

        },


        "Science": {

            icon: "🔬",

            description: "Test your Class 10 Science knowledge.",

            questions: [

                {
                    question: "What is the chemical formula of water?",
                    options: ["CO2", "H2O", "O2", "NaCl"],
                    answer: 1
                },

                {
                    question: "Which organ pumps blood in the human body?",
                    options: ["Lungs", "Brain", "Heart", "Kidney"],
                    answer: 2
                },

                {
                    question: "What is the SI unit of force?",
                    options: ["Joule", "Newton", "Watt", "Pascal"],
                    answer: 1
                },

                {
                    question: "Plants prepare food by which process?",
                    options: ["Respiration", "Digestion", "Photosynthesis", "Transpiration"],
                    answer: 2
                },

                {
                    question: "Which gas is required for respiration?",
                    options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
                    answer: 0
                }

            ]

        },


        "Social Science": {

            icon: "🌍",

            description: "Test your knowledge of history, geography and civics.",

            questions: [

                {
                    question: "Which is the largest continent?",
                    options: ["Africa", "Asia", "Europe", "Australia"],
                    answer: 1
                },

                {
                    question: "India became independent in which year?",
                    options: ["1945", "1946", "1947", "1950"],
                    answer: 2
                },

                {
                    question: "What is the capital of India?",
                    options: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
                    answer: 1
                },

                {
                    question: "How many houses are there in Indian Parliament?",
                    options: ["1", "2", "3", "4"],
                    answer: 1
                },

                {
                    question: "Which ocean lies south of India?",
                    options: ["Atlantic", "Pacific", "Indian Ocean", "Arctic"],
                    answer: 2
                }

            ]

        },


        "English": {

            icon: "📖",

            description: "Practice English grammar and vocabulary.",

            questions: [

                {
                    question: "What is the opposite of 'Hot'?",
                    options: ["Warm", "Cold", "Heat", "Fire"],
                    answer: 1
                },

                {
                    question: "Which is a noun?",
                    options: ["Run", "Beautiful", "School", "Quickly"],
                    answer: 2
                },

                {
                    question: "Choose the correct spelling.",
                    options: ["Beautifull", "Beautiful", "Beutiful", "Beautifool"],
                    answer: 1
                },

                {
                    question: "What is the plural of 'Child'?",
                    options: ["Childs", "Childes", "Children", "Childrens"],
                    answer: 2
                },

                {
                    question: "Which word is a verb?",
                    options: ["Run", "Book", "Beautiful", "Red"],
                    answer: 0
                }

            ]

        }

    },


    /* =====================================================
       CLASS 11
    ===================================================== */

    "11th": {

        "Physics": {

            icon: "⚛️",

            description: "Class 11 Physics practice quiz.",

            questions: [

                {
                    question: "What is the SI unit of velocity?",
                    options: ["m/s", "kg", "Newton", "Joule"],
                    answer: 0
                },

                {
                    question: "What is the SI unit of force?",
                    options: ["Joule", "Newton", "Watt", "Pascal"],
                    answer: 1
                },

                {
                    question: "Acceleration is the rate of change of?",
                    options: ["Distance", "Velocity", "Mass", "Force"],
                    answer: 1
                },

                {
                    question: "Which quantity is scalar?",
                    options: ["Velocity", "Force", "Speed", "Acceleration"],
                    answer: 2
                },

                {
                    question: "What is the approximate value of g?",
                    options: ["5.8 m/s²", "7.8 m/s²", "9.8 m/s²", "12.8 m/s²"],
                    answer: 2
                }

            ]

        },


        "Chemistry": {

            icon: "🧪",

            description: "Class 11 Chemistry practice quiz.",

            questions: [

                {
                    question: "What is the atomic number of hydrogen?",
                    options: ["1", "2", "8", "10"],
                    answer: 0
                },

                {
                    question: "H2O is the chemical formula of?",
                    options: ["Oxygen", "Water", "Hydrogen", "Salt"],
                    answer: 1
                },

                {
                    question: "What is the charge of an electron?",
                    options: ["Positive", "Negative", "Neutral", "Variable"],
                    answer: 1
                },

                {
                    question: "Which gas is present most in Earth's atmosphere?",
                    options: ["Oxygen", "Nitrogen", "Hydrogen", "CO2"],
                    answer: 1
                },

                {
                    question: "NaCl is commonly known as?",
                    options: ["Sugar", "Baking soda", "Common salt", "Water"],
                    answer: 2
                }

            ]

        },


        "Mathematics": {

            icon: "📐",

            description: "Class 11 Mathematics practice quiz.",

            questions: [

                {
                    question: "What is 5²?",
                    options: ["10", "20", "25", "30"],
                    answer: 2
                },

                {
                    question: "What is the value of sin 0°?",
                    options: ["0", "1", "-1", "1/2"],
                    answer: 0
                },

                {
                    question: "How many degrees are in a straight angle?",
                    options: ["90°", "180°", "270°", "360°"],
                    answer: 1
                },

                {
                    question: "What is 10 factorial?",
                    options: ["100", "1000", "3628800", "10000"],
                    answer: 2
                },

                {
                    question: "A set with no elements is called?",
                    options: ["Universal set", "Empty set", "Finite set", "Equal set"],
                    answer: 1
                }

            ]

        },


        "Computer Science": {

            icon: "💻",

            description: "Class 11 Computer Science basics.",

            questions: [

                {
                    question: "CPU stands for?",
                    options: [
                        "Central Processing Unit",
                        "Computer Personal Unit",
                        "Central Program Unit",
                        "Control Processing Unit"
                    ],
                    answer: 0
                },

                {
                    question: "Which is an input device?",
                    options: ["Monitor", "Printer", "Keyboard", "Speaker"],
                    answer: 2
                },

                {
                    question: "Binary number system uses how many digits?",
                    options: ["2", "8", "10", "16"],
                    answer: 0
                },

                {
                    question: "RAM is what type of memory?",
                    options: ["Permanent", "Volatile", "Optical", "External"],
                    answer: 1
                },

                {
                    question: "Which language is used for web page structure?",
                    options: ["HTML", "C", "SQL", "Python"],
                    answer: 0
                }

            ]

        }

    },


    /* =====================================================
       CLASS 12
    ===================================================== */

    "12th": {

        "Physics": {

            icon: "⚛️",

            description: "Class 12 Physics practice quiz.",

            questions: [

                {
                    question: "What is the SI unit of electric charge?",
                    options: ["Volt", "Coulomb", "Ohm", "Watt"],
                    answer: 1
                },

                {
                    question: "The unit of resistance is?",
                    options: ["Volt", "Ampere", "Ohm", "Coulomb"],
                    answer: 2
                },

                {
                    question: "Which particle has negative charge?",
                    options: ["Proton", "Neutron", "Electron", "Photon"],
                    answer: 2
                },

                {
                    question: "Speed of light is approximately?",
                    options: [
                        "3 × 10⁸ m/s",
                        "3 × 10⁶ m/s",
                        "3 × 10⁵ m/s",
                        "3 × 10³ m/s"
                    ],
                    answer: 0
                },

                {
                    question: "What is the unit of power?",
                    options: ["Joule", "Watt", "Newton", "Pascal"],
                    answer: 1
                }

            ]

        },


        "Chemistry": {

            icon: "🧪",

            description: "Class 12 Chemistry practice quiz.",

            questions: [

                {
                    question: "What is the pH of pure water at 25°C?",
                    options: ["0", "5", "7", "14"],
                    answer: 2
                },

                {
                    question: "Which element has atomic number 6?",
                    options: ["Oxygen", "Carbon", "Nitrogen", "Hydrogen"],
                    answer: 1
                },

                {
                    question: "NaOH is a?",
                    options: ["Acid", "Base", "Salt", "Metal"],
                    answer: 1
                },

                {
                    question: "Which gas is released during photosynthesis?",
                    options: ["CO2", "Oxygen", "Nitrogen", "Hydrogen"],
                    answer: 1
                },

                {
                    question: "HCl is commonly known as?",
                    options: ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Acetic acid"],
                    answer: 0
                }

            ]

        },


        "Mathematics": {

            icon: "📐",

            description: "Class 12 Mathematics practice quiz.",

            questions: [

                {
                    question: "What is the derivative of x²?",
                    options: ["x", "2x", "x²", "2"],
                    answer: 1
                },

                {
                    question: "What is the integral of 1 dx?",
                    options: ["1", "x", "x²", "0"],
                    answer: 1
                },

                {
                    question: "What is sin 90°?",
                    options: ["0", "1", "-1", "1/2"],
                    answer: 1
                },

                {
                    question: "What is the determinant of a 2×2 identity matrix?",
                    options: ["0", "1", "2", "4"],
                    answer: 1
                },

                {
                    question: "A matrix with equal rows and columns is called?",
                    options: ["Row matrix", "Column matrix", "Square matrix", "Zero matrix"],
                    answer: 2
                }

            ]

        },


        "Computer Science": {

            icon: "💻",

            description: "Class 12 Computer Science practice quiz.",

            questions: [

                {
                    question: "Which language is used to query databases?",
                    options: ["HTML", "SQL", "CSS", "XML"],
                    answer: 1
                },

                {
                    question: "What does DBMS stand for?",
                    options: [
                        "Database Management System",
                        "Data Basic Management System",
                        "Database Machine System",
                        "Data Management Software"
                    ],
                    answer: 0
                },

                {
                    question: "Which data structure follows FIFO?",
                    options: ["Stack", "Queue", "Tree", "Graph"],
                    answer: 1
                },

                {
                    question: "Which data structure follows LIFO?",
                    options: ["Queue", "Stack", "Array", "Tree"],
                    answer: 1
                },

                {
                    question: "Which is a programming language?",
                    options: ["HTML", "Python", "HTTP", "URL"],
                    answer: 1
                }

            ]

        }

    },


    /* =====================================================
       BCA SEMESTER 1
    ===================================================== */

    "BCA Sem 1": {

        "Programming in C": {

            icon: "💻",

            description: "Learn and practice C programming basics.",

            questions: [

                {
                    question: "Which symbol is used to end a C statement?",
                    options: [".", ";", ":", ","],
                    answer: 1
                },

                {
                    question: "Which function is the starting point of a C program?",
                    options: ["start()", "main()", "begin()", "run()"],
                    answer: 1
                },

                {
                    question: "Which header file is commonly used for printf()?",
                    options: ["conio.h", "stdio.h", "math.h", "string.h"],
                    answer: 1
                },

                {
                    question: "Which data type stores a single character?",
                    options: ["int", "float", "char", "double"],
                    answer: 2
                },

                {
                    question: "Which operator is used for assignment?",
                    options: ["==", "=", "!=", ">="],
                    answer: 1
                }

            ]

        },


        "Computer Fundamentals": {

            icon: "🖥️",

            description: "Basic computer fundamentals for BCA.",

            questions: [

                {
                    question: "CPU stands for?",
                    options: [
                        "Central Processing Unit",
                        "Central Program Unit",
                        "Computer Processing Unit",
                        "Control Program Unit"
                    ],
                    answer: 0
                },

                {
                    question: "Which is an output device?",
                    options: ["Keyboard", "Mouse", "Monitor", "Scanner"],
                    answer: 2
                },

                {
                    question: "Which memory is volatile?",
                    options: ["ROM", "RAM", "Hard Disk", "SSD"],
                    answer: 1
                },

                {
                    question: "1 KB equals?",
                    options: ["100 bytes", "512 bytes", "1024 bytes", "2048 bytes"],
                    answer: 2
                },

                {
                    question: "Which is an operating system?",
                    options: ["Windows", "Google", "HTML", "CPU"],
                    answer: 0
                }

            ]

        }

    },


    /* =====================================================
       BCA SEMESTER 2
    ===================================================== */

    "BCA Sem 2": {

        "Data Structures": {

            icon: "🌳",

            description: "Practice important Data Structures concepts.",

            questions: [

                {
                    question: "Which data structure follows LIFO?",
                    options: ["Queue", "Stack", "Tree", "Graph"],
                    answer: 1
                },

                {
                    question: "Which data structure follows FIFO?",
                    options: ["Stack", "Queue", "Tree", "Array"],
                    answer: 1
                },

                {
                    question: "Which structure contains nodes and edges?",
                    options: ["Array", "Stack", "Graph", "Variable"],
                    answer: 2
                },

                {
                    question: "Binary search requires the data to be?",
                    options: ["Random", "Sorted", "Deleted", "Encrypted"],
                    answer: 1
                },

                {
                    question: "Which sorting algorithm uses divide and conquer?",
                    options: ["Bubble Sort", "Merge Sort", "Linear Search", "Selection"],
                    answer: 1
                }

            ]

        },


        "Object Oriented Programming": {

            icon: "🧩",

            description: "Practice OOP concepts.",

            questions: [

                {
                    question: "OOP stands for?",
                    options: [
                        "Object Oriented Programming",
                        "Object Operating Program",
                        "Open Object Programming",
                        "Object Organized Programming"
                    ],
                    answer: 0
                },

                {
                    question: "Which concept hides implementation details?",
                    options: ["Inheritance", "Encapsulation", "Polymorphism", "Compilation"],
                    answer: 1
                },

                {
                    question: "Which concept allows a class to inherit another class?",
                    options: ["Inheritance", "Encapsulation", "Abstraction", "Function"],
                    answer: 0
                },

                {
                    question: "Same function name with different parameters is?",
                    options: ["Overloading", "Overriding", "Inheritance", "Abstraction"],
                    answer: 0
                },

                {
                    question: "A class is a blueprint for?",
                    options: ["Functions", "Objects", "Variables", "Loops"],
                    answer: 1
                }

            ]

        }

    },


    /* =====================================================
       BCA SEMESTER 3
    ===================================================== */

    "BCA Sem 3": {

        "Operating System": {

            icon: "⚙️",

            description: "Practice Operating System concepts.",

            questions: [

                {
                    question: "What is an operating system?",
                    options: [
                        "Application software",
                        "System software",
                        "Programming language",
                        "Database"
                    ],
                    answer: 1
                },

                {
                    question: "Which manages CPU scheduling?",
                    options: ["Compiler", "Operating System", "Browser", "Database"],
                    answer: 1
                },

                {
                    question: "PCB stands for?",
                    options: [
                        "Process Control Block",
                        "Program Control Board",
                        "Process Computer Block",
                        "Program Control Block"
                    ],
                    answer: 0
                },

                {
                    question: "Which scheduling algorithm uses time quantum?",
                    options: ["FCFS", "Round Robin", "SJF", "Priority"],
                    answer: 1
                },

                {
                    question: "Which is an example of an operating system?",
                    options: ["Linux", "HTML", "SQL", "C++"],
                    answer: 0
                }

            ]

        },


        "DBMS": {

            icon: "🗄️",

            description: "Practice Database Management System concepts.",

            questions: [

                {
                    question: "DBMS stands for?",
                    options: [
                        "Database Management System",
                        "Data Basic Management System",
                        "Database Machine System",
                        "Data Management Software"
                    ],
                    answer: 0
                },

                {
                    question: "Which language is used to query databases?",
                    options: ["HTML", "SQL", "CSS", "XML"],
                    answer: 1
                },

                {
                    question: "Which key uniquely identifies a record?",
                    options: ["Foreign key", "Primary key", "Candidate key", "Secondary key"],
                    answer: 1
                },

                {
                    question: "A collection of related data is called?",
                    options: ["Database", "Program", "Algorithm", "Network"],
                    answer: 0
                },

                {
                    question: "Which command is used to retrieve data?",
                    options: ["SELECT", "DELETE", "DROP", "UPDATE"],
                    answer: 0
                }

            ]

        },


        "Software Engineering": {

            icon: "🛠️",

            description: "Practice Software Engineering concepts.",

            questions: [

                {
                    question: "SDLC stands for?",
                    options: [
                        "Software Development Life Cycle",
                        "System Design Life Cycle",
                        "Software Data Life Cycle",
                        "System Development Level Cycle"
                    ],
                    answer: 0
                },

                {
                    question: "Which model follows sequential phases?",
                    options: ["Agile", "Waterfall", "Spiral", "Prototype"],
                    answer: 1
                },

                {
                    question: "Testing is performed to find?",
                    options: ["Features", "Errors", "Users", "Servers"],
                    answer: 1
                },

                {
                    question: "DFD stands for?",
                    options: [
                        "Data Flow Diagram",
                        "Data File Diagram",
                        "Design Flow Data",
                        "Data Function Diagram"
                    ],
                    answer: 0
                },

                {
                    question: "What is maintenance performed after?",
                    options: ["Coding only", "Software delivery", "Planning", "Design only"],
                    answer: 1
                }

            ]

        }

    },


    /* =====================================================
       BCA SEMESTER 4
    ===================================================== */

    "BCA Sem 4": {

        "Computer Networks": {

            icon: "🌐",

            description: "Practice Computer Network concepts.",

            questions: [

                {
                    question: "LAN stands for?",
                    options: [
                        "Local Area Network",
                        "Large Area Network",
                        "Local Access Network",
                        "Long Area Network"
                    ],
                    answer: 0
                },

                {
                    question: "Which device connects different networks?",
                    options: ["Switch", "Router", "Keyboard", "Monitor"],
                    answer: 1
                },

                {
                    question: "HTTP is used for?",
                    options: ["Web communication", "Printing", "Audio", "Database only"],
                    answer: 0
                },

                {
                    question: "IP stands for?",
                    options: ["Internet Protocol", "Internal Program", "Internet Program", "Input Protocol"],
                    answer: 0
                },

                {
                    question: "Which topology uses a central device?",
                    options: ["Bus", "Ring", "Star", "Mesh"],
                    answer: 2
                }

            ]

        },


        "Java Programming": {

            icon: "☕",

            description: "Practice Java Programming concepts.",

            questions: [

                {
                    question: "Java was developed by?",
                    options: ["Sun Microsystems", "Microsoft", "Apple", "IBM"],
                    answer: 0
                },

                {
                    question: "Java is primarily a?",
                    options: ["Markup language", "Programming language", "Database", "Browser"],
                    answer: 1
                },

                {
                    question: "Which keyword creates an object?",
                    options: ["class", "new", "object", "create"],
                    answer: 1
                },

                {
                    question: "Which method is the entry point in Java?",
                    options: ["start()", "main()", "run()", "execute()"],
                    answer: 1
                },

                {
                    question: "Java supports?",
                    options: ["OOP", "Only procedural programming", "Only HTML", "Only SQL"],
                    answer: 0
                }

            ]

        }

    },


    /* =====================================================
       BCA SEMESTER 5
    ===================================================== */

    "BCA Sem 5": {

        "Web Development": {

            icon: "🌐",

            description: "Practice HTML, CSS and JavaScript.",

            questions: [

                {
                    question: "HTML stands for?",
                    options: [
                        "Hyper Text Markup Language",
                        "High Text Machine Language",
                        "Hyperlink Text Markup Language",
                        "Home Tool Markup Language"
                    ],
                    answer: 0
                },

                {
                    question: "CSS is used for?",
                    options: ["Styling", "Database", "Server", "Operating system"],
                    answer: 0
                },

                {
                    question: "JavaScript is mainly used for?",
                    options: ["Interactivity", "Database hardware", "Printing", "Formatting disks"],
                    answer: 0
                },

                {
                    question: "Which tag creates a hyperlink?",
                    options: ["<p>", "<a>", "<h1>", "<img>"],
                    answer: 1
                },

                {
                    question: "Which language structures a web page?",
                    options: ["CSS", "HTML", "SQL", "Python"],
                    answer: 1
                }

            ]

        },


        "Python Programming": {

            icon: "🐍",

            description: "Practice Python programming basics.",

            questions: [

                {
                    question: "Python is a?",
                    options: ["Programming language", "Database", "Browser", "Operating system"],
                    answer: 0
                },

                {
                    question: "Which symbol is used for comments in Python?",
                    options: ["//", "#", "/*", "--"],
                    answer: 1
                },

                {
                    question: "Which function displays output?",
                    options: ["display()", "print()", "show()", "output()"],
                    answer: 1
                },

                {
                    question: "Which data type stores key-value pairs?",
                    options: ["List", "Tuple", "Dictionary", "Set"],
                    answer: 2
                },

                {
                    question: "Python files normally use which extension?",
                    options: [".java", ".py", ".cpp", ".html"],
                    answer: 1
                }

            ]

        }

    },


    /* =====================================================
       BCA SEMESTER 6
    ===================================================== */

    "BCA Sem 6": {

        "Artificial Intelligence": {

            icon: "🤖",

            description: "Practice Artificial Intelligence concepts.",

            questions: [

                {
                    question: "AI stands for?",
                    options: [
                        "Artificial Intelligence",
                        "Automatic Internet",
                        "Advanced Information",
                        "Artificial Internet"
                    ],
                    answer: 0
                },

                {
                    question: "Machine Learning is a part of?",
                    options: ["AI", "HTML", "DBMS", "Operating System"],
                    answer: 0
                },

                {
                    question: "Which is an AI application?",
                    options: ["Chatbot", "Keyboard", "Monitor", "Printer"],
                    answer: 0
                },

                {
                    question: "AI systems can learn from?",
                    options: ["Data", "Keyboard", "Printer", "Monitor"],
                    answer: 0
                },

                {
                    question: "Which technology is related to AI?",
                    options: ["Machine Learning", "Word processing only", "Printing", "File compression"],
                    answer: 0
                }

            ]

        },


        "Cyber Security": {

            icon: "🔐",

            description: "Practice Cyber Security fundamentals.",

            questions: [

                {
                    question: "What does cybersecurity protect?",
                    options: ["Digital systems", "Only books", "Only buildings", "Only roads"],
                    answer: 0
                },

                {
                    question: "Which is a strong password?",
                    options: ["123456", "password", "Aditya@2026#X", "abcdef"],
                    answer: 2
                },

                {
                    question: "Phishing is commonly used to?",
                    options: [
                        "Steal sensitive information",
                        "Improve speed",
                        "Print documents",
                        "Create databases"
                    ],
                    answer: 0
                },

                {
                    question: "Which is used to protect network traffic?",
                    options: ["Firewall", "Keyboard", "Monitor", "Mouse"],
                    answer: 0
                },

                {
                    question: "OTP stands for?",
                    options: [
                        "One Time Password",
                        "Online Transfer Program",
                        "One Transfer Password",
                        "Open Time Protocol"
                    ],
                    answer: 0
                }

            ]

        }

    }

};


/* =========================================================
   GLOBAL VARIABLES
========================================================= */

let selectedLevel = "";
let selectedTopic = "";

let currentQuestions = [];

let currentQuestionIndex = 0;

let score = 0;

let answerSelected = false;

let currentStudent = "";


/* =========================================================
   SECTION NAVIGATION
========================================================= */

function showSection(sectionId, clickedButton) {

    const sections =
        document.querySelectorAll(".section");

    sections.forEach(section => {

        section.classList.remove("active-section");

    });


    const selectedSection =
        document.getElementById(sectionId);

    if (selectedSection) {

        selectedSection.classList.add("active-section");

    }


    const buttons =
        document.querySelectorAll(".nav-btn");

    buttons.forEach(button => {

        button.classList.remove("active");

    });


    if (clickedButton) {

        clickedButton.classList.add("active");

    }


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    if (sectionId === "admin") {

        resetAdmin();

    }

}


/* =========================================================
   CATEGORY DATA
========================================================= */

let selectedCategory = "10th";


/* =========================================================
   LOAD TOPICS
========================================================= */

function loadTopics(category = "10th") {

    selectedCategory = category;

    const topicGrid =
        document.getElementById("topicGrid");

    const noTopics =
        document.getElementById("noTopics");

    const title =
        document.getElementById("selectedCategoryTitle");


    topicGrid.innerHTML = "";


    const topics =
        quizData[category] || {};


    title.textContent =
        category + " Subjects";


    const searchValue =
        document
            .getElementById("topicSearch")
            .value
            .toLowerCase()
            .trim();


    let count = 0;


    Object.keys(topics).forEach(topic => {

        const data = topics[topic];


        if (
            searchValue &&
            !topic.toLowerCase().includes(searchValue)
        ) {

            return;

        }


        count++;


        const card =
            document.createElement("div");

        card.className = "topic-card";


        card.innerHTML = `

            <div class="topic-icon">
                ${data.icon}
            </div>

            <h3>
                ${escapeHTML(topic)}
            </h3>

            <p>
                ${escapeHTML(data.description)}
            </p>

            <div class="topic-info">

                <span>
                    ${data.questions.length} Questions
                </span>

                <span>
                    Start →
                </span>

            </div>

        `;


        card.onclick = function () {

            openTopicQuiz(category, topic);

        };


        topicGrid.appendChild(card);

    });


    if (count === 0) {

        noTopics.style.display = "block";

    } else {

        noTopics.style.display = "none";

    }


    updateCategoryButtons();

}


/* =========================================================
   SEARCH TOPICS
========================================================= */

function searchTopics() {

    loadTopics(selectedCategory);

}


/* =========================================================
   SHOW CATEGORY
========================================================= */

function showCategory(category) {

    selectedCategory = category;

    document
        .getElementById("topicSearch")
        .value = "";


    loadTopics(category);

}


/* =========================================================
   CATEGORY BUTTON ACTIVE STATE
========================================================= */

function updateCategoryButtons() {

    const buttons =
        document.querySelectorAll(".category-btn");


    buttons.forEach(button => {

        button.classList.remove("active");


        if (
            button.textContent
                .toLowerCase()
                .includes(
                    selectedCategory
                        .replace("BCA Sem ", "Semester ")
                        .replace("10th", "10th")
                        .replace("11th", "11th")
                        .replace("12th", "12th")
                )
        ) {

            button.classList.add("active");

        }

    });

}


/* =========================================================
   OPEN TOPIC QUIZ
========================================================= */

function openTopicQuiz(level, topic) {

    selectedLevel = level;

    selectedTopic = topic;


    document.getElementById("quizLevel").value =
        level;


    updateQuizSubjects();


    document.getElementById("quizTopic").value =
        topic;


    showSection(
        "quiz",
        document.querySelectorAll(".nav-btn")[2]
    );

}


/* =========================================================
   UPDATE QUIZ SUBJECTS
========================================================= */

function updateQuizSubjects() {

    const level =
        document.getElementById("quizLevel").value;

    const subjectSelect =
        document.getElementById("quizTopic");


    subjectSelect.innerHTML = "";


    if (!level || !quizData[level]) {

        subjectSelect.innerHTML = `

            <option value="">
                First select class / semester
            </option>

        `;

        return;

    }


    const defaultOption =
        document.createElement("option");

    defaultOption.value = "";

    defaultOption.textContent =
        "Select Subject";

    subjectSelect.appendChild(defaultOption);


    Object.keys(quizData[level]).forEach(subject => {

        const option =
            document.createElement("option");

        option.value = subject;

        option.textContent = subject;

        subjectSelect.appendChild(option);

    });

}


/* =========================================================
   START QUIZ
========================================================= */

function startQuiz() {

    const studentName =
        document
            .getElementById("studentName")
            .value
            .trim();


    const level =
        document
            .getElementById("quizLevel")
            .value;


    const topic =
        document
            .getElementById("quizTopic")
            .value;


    if (!studentName) {

        alert("Please enter student name.");

        return;

    }


    if (!level) {

        alert("Please select class or semester.");

        return;

    }


    if (!topic) {

        alert("Please select a subject.");

        return;

    }


    currentStudent = studentName;

    selectedLevel = level;

    selectedTopic = topic;


    currentQuestions =
        quizData[level][topic].questions;


    currentQuestionIndex = 0;

    score = 0;

    answerSelected = false;


    document
        .getElementById("quizSetup")
        .classList.add("hidden");


    document
        .getElementById("activeQuiz")
        .classList.remove("hidden");


    document
        .getElementById("currentLevel")
        .textContent = level;


    document
        .getElementById("currentTopic")
        .textContent = topic;


    loadQuestion();

}


/* =========================================================
   LOAD QUESTION
========================================================= */

function loadQuestion() {

    const question =
        currentQuestions[currentQuestionIndex];


    answerSelected = false;


    document
        .getElementById("nextButton")
        .disabled = true;


    document
        .getElementById("instantFeedback")
        .innerHTML = "";


    document
        .getElementById("questionCounter")
        .textContent =
        `${currentQuestionIndex + 1}/${currentQuestions.length}`;


    document
        .getElementById("questionNumber")
        .textContent =
        `Q${currentQuestionIndex + 1}`;


    document
        .getElementById("questionText")
        .textContent =
        question.question;


    const optionsContainer =
        document.getElementById("optionsContainer");


    optionsContainer.innerHTML = "";


    question.options.forEach((option, index) => {

        const optionElement =
            document.createElement("div");


        optionElement.className = "option";


        optionElement.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;


        optionElement.onclick = function () {

            selectAnswer(index, optionElement);

        };


        optionsContainer.appendChild(optionElement);

    });


    const progress =
        ((currentQuestionIndex) /
            currentQuestions.length) * 100;


    document
        .getElementById("progressFill")
        .style.width =
        progress + "%";

}


/* =========================================================
   SELECT ANSWER
========================================================= */

function selectAnswer(selectedIndex, selectedElement) {

    if (answerSelected) {

        return;

    }


    answerSelected = true;


    const question =
        currentQuestions[currentQuestionIndex];


    const options =
        document.querySelectorAll(".option");


    options.forEach(option => {

        option.classList.add("disabled");

    });


    if (selectedIndex === question.answer) {

        selectedElement.classList.add("correct");

        score++;


        showFeedback(
            true,
            "✓ Correct Answer!"
        );

    } else {

        selectedElement.classList.add("wrong");


        options[question.answer]
            .classList.add("correct");


        showFeedback(
            false,
            "✗ Wrong Answer!"
        );

    }


    document
        .getElementById("nextButton")
        .disabled = false;


    if (
        currentQuestionIndex ===
        currentQuestions.length - 1
    ) {

        document
            .getElementById("nextButton")
            .textContent =
            "🏆 View Result";

    }

}


/* =========================================================
   FEEDBACK
========================================================= */

function showFeedback(correct, message) {

    const feedback =
        document.getElementById("instantFeedback");


    if (correct) {

        feedback.className =
            "instant-feedback feedback-correct";

    } else {

        feedback.className =
            "instant-feedback feedback-wrong";

    }


    feedback.textContent = message;

}


/* =========================================================
   NEXT QUESTION
========================================================= */

function nextQuestion() {

    if (!answerSelected) {

        return;

    }


    if (
        currentQuestionIndex <
        currentQuestions.length - 1
    ) {

        currentQuestionIndex++;

        loadQuestion();

    } else {

        finishQuiz();

    }

}


/* =========================================================
   FINISH QUIZ
========================================================= */

function finishQuiz() {

    const total =
        currentQuestions.length;


    const percentage =
        Math.round(
            (score / total) * 100
        );


    const result = {

        id: Date.now(),

        student: currentStudent,

        level: selectedLevel,

        topic: selectedTopic,

        score: score,

        total: total,

        percentage: percentage,

        date: new Date().toLocaleString()

    };


    saveResult(result);


    document
        .getElementById("finalScore")
        .textContent =
        `${score}/${total}`;


    document
        .getElementById("resultStudent")
        .textContent =
        currentStudent;


    document
        .getElementById("resultLevel")
        .textContent =
        selectedLevel;


    document
        .getElementById("resultTopic")
        .textContent =
        selectedTopic;


    document
        .getElementById("resultPercentage")
        .textContent =
        percentage + "%";


    document
        .getElementById("quizSetup")
        .classList.remove("hidden");


    document
        .getElementById("activeQuiz")
        .classList.add("hidden");


    showSection(
        "result",
        document.querySelectorAll(".nav-btn")[3]
    );


    document
        .getElementById("studentName")
        .value = "";

}


/* =========================================================
   SAVE RESULT
========================================================= */

function saveResult(result) {

    let results =
        JSON.parse(
            localStorage.getItem("quizResults")
        ) || [];


    results.push(result);


    localStorage.setItem(
        "quizResults",
        JSON.stringify(results)
    );

}


/* =========================================================
   ADMIN LOGIN
========================================================= */

function adminLogin() {

    const username =
        document
            .getElementById("adminUsername")
            .value
            .trim();


    const password =
        document
            .getElementById("adminPassword")
            .value;


    if (
        username === "Aditya" &&
        password === "thapa@1234"
    ) {

        document
            .getElementById("adminLoginBox")
            .classList.add("hidden");


        document
            .getElementById("adminDashboard")
            .classList.remove("hidden");


        loadAdminDashboard();

    } else {

        alert(
            "Invalid username or password."
        );

    }

}


/* =========================================================
   ADMIN LOGOUT
========================================================= */

function adminLogout() {

    document
        .getElementById("adminDashboard")
        .classList.add("hidden");


    document
        .getElementById("adminLoginBox")
        .classList.remove("hidden");


    document
        .getElementById("adminUsername")
        .value = "";


    document
        .getElementById("adminPassword")
        .value = "";

}


/* =========================================================
   RESET ADMIN
========================================================= */

function resetAdmin() {

    const dashboard =
        document.getElementById("adminDashboard");


    const loginBox =
        document.getElementById("adminLoginBox");


    if (
        dashboard.classList.contains("hidden") === false
    ) {

        return;

    }


    loginBox.classList.remove("hidden");

}


/* =========================================================
   ADMIN DASHBOARD
========================================================= */

function loadAdminDashboard() {

    const results =
        JSON.parse(
            localStorage.getItem("quizResults")
        ) || [];


    document
        .getElementById("totalStudents")
        .textContent =
        results.length;


    const uniqueSubjects =
        new Set(
            results.map(result => result.topic)
        );


    document
        .getElementById("totalTopics")
        .textContent =
        uniqueSubjects.size;


    let average = 0;


    if (results.length > 0) {

        const totalPercentage =
            results.reduce(
                (sum, result) =>
                    sum + result.percentage,
                0
            );


        average =
            Math.round(
                totalPercentage /
                results.length
            );

    }


    document
        .getElementById("averageScore")
        .textContent =
        average + "%";


    const table =
        document.getElementById("resultsTable");


    table.innerHTML = "";


    if (results.length === 0) {

        table.innerHTML = `

            <tr>

                <td
                    colspan="7"
                    class="empty-row"
                >
                    📭 No quiz records available yet.
                </td>

            </tr>

        `;

        return;

    }


    results
        .slice()
        .reverse()
        .forEach((result, index) => {

            const row =
                document.createElement("tr");


            row.innerHTML = `

                <td>
                    ${index + 1}
                </td>

                <td>
                    <strong>
                        ${escapeHTML(result.student)}
                    </strong>
                </td>

                <td>
                    ${escapeHTML(result.level)}
                </td>

                <td>
                    ${escapeHTML(result.topic)}
                </td>

                <td>
                    ${result.score}/${result.total}
                </td>

                <td>
                    <strong>
                        ${result.percentage}%
                    </strong>
                </td>

                <td>
                    ${escapeHTML(result.date)}
                </td>

            `;


            table.appendChild(row);

        });

}


/* =========================================================
   CLEAR RESULTS
========================================================= */

function clearResults() {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete all quiz records?"
        );


    if (!confirmDelete) {

        return;

    }


    localStorage.removeItem("quizResults");


    loadAdminDashboard();


    alert("All quiz records have been deleted.");

}


/* =========================================================
   ESCAPE HTML
========================================================= */

function escapeHTML(value) {

    return String(value)

        .replaceAll("&", "&amp;")

        .replaceAll("<", "&lt;")

        .replaceAll(">", "&gt;")

        .replaceAll('"', "&quot;")

        .replaceAll("'", "&#039;");

}


/* =========================================================
   INITIAL PAGE LOAD
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadTopics("10th");

        updateQuizSubjects();

    }
);