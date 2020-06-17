/* 
1. Create the following classes:
    - Book class. It should have an author and publisher property.
    - Author class. It should have a name and books property.
    - Publisher class.  It should have an authors and books property.
    - Review class.  It should have a rating and user property.
    -Prevent the properties from being accessed by outside code, using the encapsulation concept of 
     "private variables".  Create methods that return the values of these private variables in case
      other pieces of the code need to access the data of the 4 classes.  Also create methods that allow
      outside code to "set" new values for the properties on the classes, without directly manipulating
      the values themselves. 
      */
    //your code here...

    class Book {

      #author;
      #publisher;

      getAuthor() {
        return this.#author;
      }

      setAuthor(author) {
        this.#author = author;
      }

      getPublisher() {
        return this.#publisher;
      }

      setPublisher(publisher) {
        this.#publisher = publisher;
      }
    }

    const newBook = new Book();
    newBook.setAuthor('Douglas Adams');
    newBook.setPublisher('Randomhouse');
    console.log(newBook.getAuthor());
    console.log(newBook.getPublisher());

    class Author {

      #name;
      #books;

      getName() {
        return this.#name;
      }

      setName(name) {
        this.#name = name;
      }

      getBooks() {
        return this.#books;
      }

      setBooks(books) {
        this.#books = books;
      }
   }

   const newAuthor = new Author();
   newAuthor.setName('Isaac Asimov');
   newAuthor.setBooks(['Foundation', 'Foundation and Empire', 'Second Foundation']);
   console.log(newAuthor.getName());
   console.log(newAuthor.getBooks());


    class Publisher {

      #authors;
      #books;

      getAuthors() {
        return this.#authors;
      }

      setAuthors(authors) {
        this.#authors = authors;
      }

      getBooks() {
        return this.#books
      }

      setBooks(books) {
        this.#books = books;
      }

    }

    const newPublisher = new Publisher();
    newPublisher.setAuthors(['Dave Barry', 'Douglas Adams', 'Stanislaw Lem']);
    newPublisher.setBooks(['Dave Barry\'s Guide to Guys', 'Mostly Harmless', 'The Star Diaries']);
    console.log(newPublisher.getAuthors());
    console.log(newPublisher.getBooks());

    class Review {

      #rating;
      #user;

      getRating() {
        return this.#rating;
      }

      setRating(rating) {
        this.#rating = rating;
      }

      getUser() {
        return this.#user;
      }

      setUser(user) {
        this.#user = user;
      }

    }

    const newReview = new Review();
    newReview.setRating('5 Stars');
    newReview.setUser('BigVicBetts');
    console.log(newReview.getRating());
    console.log(newReview.getUser());


/*
2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.  
      Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a compnay name and # of employees.  Create at least 3 different
      companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a child
      class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee
      instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer,
      1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.
    
    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make
      sense, considering what the classes are supposed to be representing.


*/
    //your code here...

    class ParentCompany {
      constructor(name, childCompanies, employees) {
        this.name = name;
        this.childCompanies = childCompanies;
        this.employees = employees;
      }

      buyCompany(newCompany) {
        this.childCompanies = [...this.childCompanies, newCompany];
      }

      renameCompany(newName) {
        this.name = newName;
      }
    }

    class ChildCompany extends ParentCompany {
      constructor(name, sites, employees) {
        super()
        this.name = name;
        this.sites = sites;
        this.employees = employees;
      }

      addSite(newSite) {
        this.sites = [...this.sites, newSite]
      }

      fireCEO() {
        newLeadership = this.employees.filter(emp => emp.jobTitle !== 'CEO');
        this.employees = newLeadership;
      }
    }

    class Site extends ChildCompany {
      constructor(name, location, employees, locationType) {
        super(name)

        this.location = location;
        this.employees = employees;
        this.locationType = locationType;
      }

      role() {
        switch(this.locationType) {
          case 'legal':
            console.log('We provide legal protections for the company.');
            break;
          case 'manufacturing':
            console.log('We produce the items that the company sells.');
            break;
          case 'marketing':
            console.log('We influence the public to buy our products.');
        }
      }

      move(newLocation) {
        this.location = newLocation;
      }



    }

    class Employee {
      constructor(name, jobTitle, salary, company) {
        this.name = name;
        this.jobTitle = jobTitle;
        this.salary = salary;
        this.company = company;
      }

      takingLunch() {
        if (this.salary < 20000) {
          console.log('Mmmm.  This catfood is rotten!');
        }
        else if (this.salary < 40000) {
          console.log('This McDonald\'s hamburger isn\'t TOO bad.');
        }
        else if (this.salary < 80000) {
          console.log('What should we do today?  Olive Garden or Longhorn Steakhouse?');
        }
        else {
          console.log('Mmmm.  I LOVE Ruth\'s Chris Steakhouse!')
        }
        
      }

      working() {
        switch(this.jobTitle) {
          case 'CEO': 
            console.log('I am doing CEO stuff, so LEAVE ME ALONE!');
            break;
          case 'manager':
            console.log('Hmmm.  Should I fire him?  Or promote him?');
            break;
          case 'secretary':
            console.log(`Hello?  This is ${this.name} with ${this.company}.  Can I help you?`);
            break;
          case 'engineer':
            console.log('This stuff just DOESN\'T ADD UP!!!');
            break;
          case 'financial officer':
            console.log('Well, we\'re in the red again this quarter.  The shareholders are NOT gonna be happy.');
            break;
          case 'janitor':
            console.log('We\'re almost out of toilet cleaner.  I better get some more.');
            break;
          case 'marketer':
            console.log('Should we use THIS flyer?  Or THAT one?');
            break;
          case 'HR':
            console.log('I\'ll have to check with corporate HR and get back to you on that.');
            break;
          case 'lawyer':
            console.log('Your honor, I OBJECT!!!');
            break;
          case 'machine operator':
            console.log('This stupid machine keeps JAMMING UP!!');
            break;
          case 'mechanic':
            console.log('We\'re still waiting on the part for your machine.');
            break;
          default:
            console.log('I just do what I do...');
        }
      }
    }

    // Make the employees for all three divisions of ABC Company.
    const dallasManEmployeesABC = [
      new Employee('Fred Smith', 'manager', 65000, 'ABC Company'),
      new Employee('John C Riley', 'janitor', 18000, 'ABC Company'),
      new Employee('Harry Smoot', 'machine operator', 25000, 'ABC Company'),
      new Employee('Janelle Spencer', 'machine operator', 25000, 'ABC Company'),
      new Employee('Harold Tong', 'secretary', 40000, 'ABC Company'),
      new Employee('Beverly Williams', 'mechanic', 48000, 'ABC Company')
    ]

    const seattleLegalEmployeesABC = [
      new Employee('Julia Simpson', 'manager', 85000, 'ABC Company'),
      new Employee('Hillary Duff', 'lawyer', 80000, 'ABC Company'),
      new Employee('Spencer Friedman', 'lawyer', 80000, 'ABC Company'),
      new Employee('Darlene Johnson', 'janitor', 20000, 'ABC Company'),
      new Employee('Hank Goldberg', 'secretary', 42000, 'ABC Company'),
      new Employee('Frederick Perriwinkle', 'engineer', 75000, 'ABC Company')
    ]

    const denverMarketingEmployeesABC = [
      new Employee('Jonathan Trachian', 'manager', 80000, 'ABC Company'),
      new Employee('Janice Elsinore', 'marketer', 65000, 'ABC Company'),
      new Employee('Beatrice Rosenbalm', 'secretary', 45000, 'ABC Company'),
      new Employee('Jose Rodriguez', 'marketer', 65000, 'ABC Company'),
      new Employee('Ivan Golsczewic', 'janitor', 19500, 'ABC Company'),
    ]

    const abcCorporate = [
      new Employee('Franics Witherington III', 'CEO', 500000, 'ABC Compnay'),
      new Employee('Mary Frederick', 'secretary', 68000, 'ABC Company'),
      new Employee('Clarence Gilyard', 'janitor', 23000, 'ABC Company'),
      new Employee('Eugene Smithfield', 'engineer', 86000, 'ABC Company'),
      new Employee('Phoebe Bettinger', 'financial officer', 125000, 'ABC Company')
    ]
    // Create the three sites for ABC Company
    const dallasManufacturingABC = new Site('ABC Company', 'Dallas, TX', dallasManEmployeesABC ,'manufacturing');
    const seattleLegalABC = new Site('ABC Company', 'Seattle, WA', seattleLegalEmployeesABC, 'legal');
    const denverMarketingABC = new Site('ABC Company', 'Denver, CO', denverMarketingEmployeesABC,'marketing');

    // Create the ABC Company instance
    const abcCompany = new ChildCompany('ABC Company', [dallasManufacturingABC, seattleLegalABC, denverMarketingABC], abcCorporate);


    // Make the employees for all three divisions of Keystone Manufacturing.

    const phillyManEmployeesKeystone = [
      new Employee('Jamichael Lawrence', 'manager', 75000, 'Keystone Manufacturing'),
      new Employee('Jennifer Prescott', 'secretary', 48000, 'Keystone Manufacturing'),
      new Employee('Eugene Smallwood', 'machine operator', 38000, 'Keystone Manufacturing'),
      new Employee('Harold Johnson', 'machine operator', 39500, 'Keystone Manufacturing'),
      new Employee('Nancy Johnson', 'janitor', 23000, 'Keystone Manufacturing'),
      new Employee('Horace Bryant', 'mechanic', 43000, 'Keystone Manufacturing'),
      new Employee('Beatrice Morgan', 'HR', 47500, 'Keystone Manufacturing')
    ]

    const desMoinesManEmployeesKeystone = [
      new Employee('Monica Ellis', 'manager', 73000, 'Keystone Manufacturing'),
      new Employee('Jeffrey Johnson', 'secretary', 45000, 'Keystone Manufacturing'),
      new Employee('Francis McDermott', 'machine operator', 36500, 'Keystone Manufacturing'),
      new Employee('Tia Vandermeer', 'janitor', 22000, 'Keystone Manufacturing'),
      new Employee('Gerald Hendrix', 'machine operator', 38500, 'Keystone Manufacturing'),
      new Employee('Susan Somers', 'mechanic', 44500, 'Keystone Manufacturing'),
      new Employee('Jonathan Guttenberg', 'HR', 48000, 'Keystone Manufacturing')
    ]

    const phoenixManEmployeesKeystone = [
      new Employee('Harold Carmichael', 'manager', 78000, 'Keystone Manufacturing'),
      new Employee('Monica Smithers', 'secretary', 44500, 'Keystone Manufacturing'),
      new Employee('Garrett McDonald', 'machine operator', 37500, 'Keystone Manufacturing'),
      new Employee('Kevin Philips Bong', 'mechanic', 48000, 'Keystone Manufacturing'),
      new Employee('Jose Rocio', 'machine operator', 39500, 'Keystone Manufacturing'),
      new Employee('Stephanie Johnson', 'janitor', 19500, 'Keystone Manufacturing'),
      new Employee('Richard Sudfield', 'HR', 45000, 'Keystone Manufacturing')
    ]

    const keystoneCorporate = [
      new Employee('Rick Smithfield', 'CEO', 480000, 'Keystone Manufacturing'),
      new Employee('Patricia Shadrick', 'secretary', 68000, 'Keystone Manufacturing'),
      new Employee('Janelle Bettendorf', 'financial officer', 110000, 'Keystone Manufacturing'),
      new Employee('Julia Rodriguez', 'engineer', 87000, 'Keystone Manufacturing'),
      new Employee('Sarah Peterson', 'janitor', 23000, 'Keystone Manufacturing'),
      new Employee('Fred Sanford', 'lawyer', 95000, 'Keystone Manufacturing')
    ]
    
    // Create the 3 sites for Keystone Manufacturing
    const phillyManufacturingKeystone = new Site('Keystone Manufacturing', 'Philadelphia, PA', phillyManEmployeesKeystone, 'manufacturing');
    const desMoinesManufacturingKeystone = new Site('Keystone Manufacturing', 'Des Moines, IA', desMoinesManEmployeesKeystone, 'manufacturing');
    const phoenixManufacturingKeystone = new Site('Keystone Manufacturing', 'Phoenix, AZ', phoenixManEmployeesKeystone, 'manufacturing');

    // Create the Keystone Manufacturing instance
    const keystoneManufacturing = new ChildCompany('Keystone Manufacturing', [phillyManufacturingKeystone, desMoinesManufacturingKeystone, phoenixManufacturingKeystone], keystoneCorporate);


    // Make the employees for all three divisions of Taylor Marketing.

    const sanDiegoMarEmployeesTaylor = [
      new Employee('Henry Derringer', 'manager', 67000, 'Taylor Marketing'),
      new Employee('Francis Sudfield', 'secretary', 43000, 'Taylor Marketing'),
      new Employee('Roger Murdock', 'marketer', 54000, 'Taylor Marketing'),
      new Employee('Suzanna Danna', 'marketer', 54500, 'Taylor Marketing'),
      new Employee('Pedro Stehpens', 'janitor', 23500, 'Taylor Marketing'),
      new Employee('Patricia Johnson', 'HR', 44500, 'Taylor Marketing')
    ]

    const austinMarEmployeesTaylor = [
      new Employee('Jennifer Black', 'manager', 67500, 'Taylor Marketing'),
      new Employee('Jonathan Butterfield', 'secretary', 43500, 'Taylor Marketing'),
      new Employee('Veronica Rodriguez', 'marketer', 55000, 'Taylor Marketing'),
      new Employee('Frank Gendall', 'marketer', 54500, 'Taylor Marketing'),
      new Employee('Terrance Gustafson', 'janitor', 23500, 'Taylor Marketing'),
      new Employee('Jonathan Templeton', 'HR', 46500, 'Taylor Marketing')
    ]

    const chattanoogaMarEmployeesTaylor = [
      new Employee('Sarah Baker', 'manager', 68000, 'Taylor Marketing'),
      new Employee('Stephen Oates', 'secretary', 42500, 'Taylor Marketing'),
      new Employee('Rachel Templeton', 'marketer', 56500, 'Taylor Marketing'),
      new Employee('Cindy Harrison', 'marketer', 56000, 'Taylor Marketing'),
      new Employee('Gabe Sanchez', 'HR', 47500, 'Taylor Marketing'),
      new Employee('Bernard Longer', 'janitor', 19500, 'Taylor Marketing')
    ]

    const taylorCorporate = [
      new Employee('Paul Trachian', 'CEO', 510000, 'Taylor Marketing'),
      new Employee('Cindy Hanson', 'secretary', 68000, 'Taylor Marketing'),
      new Employee('Eileen Mink', 'financial officer', 135000, 'Taylor Marketing'),
      new Employee('Thomas Tucker', 'engineer', 84500, 'Taylor Marketing'),
      new Employee('Jackie Money', 'janitor', 22500, 'Taylor Marketing'),
      new Employee('Jeremiah Trotter', 'lawyer', 102000, 'Taylor Marketing')
    ]

    // Create the 3 sites for Taylor Marketing

    const sanDiegoMarketingTaylor = new Site('Taylor Marketing', 'San Diego, CA', sanDiegoMarEmployeesTaylor, 'marketing');
    const austinMarketingTaylor = new Site('Taylor Marketing', 'Austin, TX', austinMarEmployeesTaylor, 'marketing');
    const chattanoogaMarketingTaylor = new Site('Taylor Marketing', 'Chattanooga, TN', chattanoogaMarEmployeesTaylor, 'marketing');



    // Create the Taylor Marketing instance

    const taylorMarketing = new ChildCompany('Taylor Manufacturing', [sanDiegoMarketingTaylor, austinMarketingTaylor, chattanoogaMarketingTaylor], taylorCorporate);

    
    // Create employees for the parent company

    const harrisonHoldingsCorporate = [
      new Employee('Heather Wallace', 'CEO', 750000, 'Harrison Holdings'),
      new Employee('Amy Felter', 'secretary', 68000, 'Harrison Holdings'),
      new Employee('Jonathan McGilligan', 'financial officer', 153000, 'Harrison Holdings'),
      new Employee('Jake Plummer', 'janitor', 24000, 'Harrison Holdings'),
      new Employee('Eugene Miller', 'engineer', 89000, 'Harrison Holdings')
    ]

    // Create only instance of parent company

    const harrisonHoldings = new ParentCompany('Harrison Holdings', [abcCompany, keystoneManufacturing, taylorMarketing], harrisonHoldingsCorporate);
    
/****************************************************************************************************************************************************************************************   
Bonus Exercise:

3. Building on Exercise 1, Do the following : 
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.  

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to
each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a
"HAS A" relationship.
*/



    //your code here...

    class Bookstore {
      constructor(books) {
        this.books = books;
      }

      addBook(newBook) {
        this.books = [...this.books, newBook]
      }
    }

    const gnomePress = new Publisher();
    gnomePress.setAuthors(['Isaac Asimov', 'Robert E Howard']);
    gnomePress.setBooks(['Foundation', 'Foundation and Empire', 'Second Foundation', 'The Coming of Conan', 'Conan the Barbarian', 'The Sword of Conan', 'King Conan', 'Conan the Conqueror']);
    
    const isaacAsimov = new Author();
    isaacAsimov.setName('Isaac Asimov');
    isaacAsimov.setBooks(['Foundation', 'Foundation and Empire', 'Second Foundation']);

    const robertEHoward = new Author();
    robertEHoward.setName('Robert E Howard');
    robertEHoward.setBooks(['The Coming of Conan', 'Conan the Barbarian', 'The Sword of Conan', 'King Conan', 'Conan the Conqueror']);
    
    const foundation = new Book();
    foundation.setAuthor(isaacAsimov);
    foundation.setPublisher(gnomePress);
    foundation.review = new Review();
    foundation.review.setUser('Fred McGuilicutty');
    foundation.review.setRating(5)
    
    const foundationAndEmpire = new Book();
    foundationAndEmpire.setAuthor(isaacAsimov);
    foundationAndEmpire.setPublisher(gnomePress);
    foundationAndEmpire.review = new Review();
    foundationAndEmpire.review.setUser('Hank Stram');
    foundationAndEmpire.review.setRating(4.75);

    const secondFoundation = new Book();
    secondFoundation.setAuthor(isaacAsimov);
    secondFoundation.setPublisher(gnomePress);
    secondFoundation.review = new Review();
    secondFoundation.review.setUser('Frank Gifford')
    secondFoundation.review.setRating(4.5);

    const theComingOfConan = new Book();
    theComingOfConan.setAuthor(robertEHoward);
    theComingOfConan.setPublisher(gnomePress);
    theComingOfConan.review = new Review();
    theComingOfConan.review.setUser('James Dean');
    theComingOfConan.review.setRating(4)

    const conanTheBarbarian = new Book();
    conanTheBarbarian.setAuthor(robertEHoward);
    conanTheBarbarian.setPublisher(gnomePress);
    conanTheBarbarian.review = new Review();
    conanTheBarbarian.review.setUser('Fred Williams');
    conanTheBarbarian.review.setRating(4.25);

    const theSwordOfConan = new Book();
    theSwordOfConan.setAuthor(robertEHoward);
    theSwordOfConan.setPublisher(gnomePress);
    theSwordOfConan.review = new Review();
    theSwordOfConan.review.setUser('Dean Cain');
    theSwordOfConan.review.setRating(3.5);

    const kingConan = new Book();
    kingConan.setAuthor(robertEHoward);
    kingConan.setPublisher(gnomePress);
    kingConan.review = new Review();
    kingConan.review.setUser('William Shakespeare');
    kingConan.review.setRating(2.5);

    const conanTheConqueror = new Book();
    conanTheConqueror.setAuthor(robertEHoward);
    conanTheConqueror.setPublisher(gnomePress);
    conanTheBarbarian.review = new Review();
    conanTheBarbarian.review.setUser('Alexander the Great');
    conanTheBarbarian.review.setRating(4);

    const bettsBooksInventory = [
      foundation, foundationAndEmpire, secondFoundation, theComingOfConan, conanTheBarbarian, theSwordOfConan, kingConan, conanTheConqueror
    ];

    const bettsBooks = new Bookstore(bettsBooksInventory);