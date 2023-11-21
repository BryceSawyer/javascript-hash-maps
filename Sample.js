const HashMap = require('./HashMap');

const hashMap = new HashMap(10);

// Assigned
hashMap.assign('JavaScript', 'a high-level, interpreted programming language');
hashMap.assign('Python', 'an interpreted, high-level, general-purpose programming language');
hashMap.assign('Java', 'a class-based, object-oriented programming language');
hashMap.assign('C++', 'a general-purpose programming language with object-oriented features');
hashMap.assign('HTML', 'a markup language used for creating the structure of a web page');
hashMap.assign('CSS', 'a style sheet language used for describing the look and formatting of a document written in HTML');
hashMap.assign('Node.js', 'an open-source, cross-platform JavaScript runtime environment');
hashMap.assign('React', 'a JavaScript library for building user interfaces');
hashMap.assign('MongoDB', 'a NoSQL database program');
hashMap.assign('Express', 'a web application framework for Node.js');
hashMap.assign('Git', 'a distributed version control system');
hashMap.assign('Linux', 'an open-source Unix-like operating system');
hashMap.assign('API', 'Application Programming Interface, a set of rules allowing one software application to interact with another');
hashMap.assign('REST', 'Representational State Transfer, an architectural style for designing networked applications');
hashMap.assign('JSON', 'JavaScript Object Notation, a lightweight data interchange format');
hashMap.assign('Blockchain', 'a decentralized and distributed ledger technology');
hashMap.assign('Artificial Intelligence', 'the simulation of human intelligence in machines');
hashMap.assign('Big Data', 'large and complex data sets that cannot be easily processed using traditional data processing applications');
hashMap.assign('Cybersecurity', 'the practice of protecting systems, networks, and programs from digital attacks');
hashMap.assign('Cloud Computing', 'the delivery of computing services over the internet');

hashMap.printHashMap();

// Retrieved
console.log('\nRetrieved')
console.log(hashMap.retrieve('JavaScript'))
console.log(hashMap.retrieve('Node.js'))
console.log(hashMap.retrieve('Python'))
console.log(hashMap.retrieve('React'))

