#Lab Tasks

For lab tasks from here on out, questions that require exploration and responding to on this markdown page will be in bolded text. You should respond to them directly within this markdown file. Markdown is effectively a plaintext, lighweight markup language that is designed to be converted into HTML; more simply, it's some text and symbols you can put into a document that will turn into pretty HTML.
Tasks that specify work to do without a written response will be bulleted.
If you're ever confused about what you need to do for a given task, ask.

## Part #1: exploring the node.js project
Study the project you have cloned. Run it according to the instrucitons in the README, including running the tests. Answer the following questions by editing this file.  This will give you a chance to play with markdown.

> Protip: Using Google to gain additional knowledge or support your conjectures about how something works is great! It's important that you think about everything and come to an understanding, though, so don't use Google as a scapegoat to get the questions done quickly or you will regret it!

#####What is the purpose of app.js? Explain what happens when a user is trying to access a page "kittens", when a user is trying to access the page "petForm", and when the user submits a form on "petForm". Explain what a "route" is.

> App.js is a light weight JavaScript UI libary, currently is states that the Page is under construction. When the user trys to acces petForm, it will ask to make a new pet,  it will route the user to petform.html. Route take a post request to move the user to the correct requested html.

#####What is the contents of the "public" folder? What is each of the html files there and how are they referenced in app.js?

> It contains the HTMl files that app.js is trying to use. Each html files refers to its own unique webpage. each page is referred to 'somewebpage.html'

#####In your project change the message that appears when the user is trying to access the page "kittens". Describe what you did and how it worked.

> We changed the text to "page not implemented" and it worked when we accessed http://0.0.0.0:9000/kittens

#####Also change the message that a user sees when they are trying to find a page that doesn't exist.

#####Describe what happens when you submit a form on petForm page. What are the form parameters in petForm? What is the method for the form? Where is the form submission handled in the project? How are parameters extracted? How is the resulting message generated? How is this different from accessing the page petForm the first time (to see the form)?

> Submitting changes the content of petForm to a message that displays the pet name and its string length. The method is post in the app.js file and it is handled there. The parameters come from the text inputted in the submit box which is called newPet. The parameters are extracted from there. It takes the parameters of newPet and extracts it from the html and produces them in console.  Instead of sending the html file it just sends the text about the string length.

#####Where is client-side Javascript defined? Name file(s) in which it is used.

> Under public > javascript as clientjavascript.js. Index.html uses the client javascript

#####Where is server-side Javascript helper file defined? Where can it be used? Add a function to it and experiment with where you can call this function.

> It is in the main repository tab as serverjavascript.js.  It can be used by app.js and other server side javascript files.

#####What is the purpose of package.json file? What's in it, and what does it mean?

>its the data that is required for the npm identify the project also along with the dependencies. The file has a name and Version number, along with other needed information.

#####What's in .gitgnore file? What's the purpose of it?

>git uses it to determine which of the files or directories to ignore when committing, and should also be uploaded to the repository to share with out users.

## Part #2: exploring testing

#####Find the testing file, describe where it is located and what it is testing. Run karma (the testing engine) as specified in the Readme and describe results. Do not edit any files at this time.

> It is in the public > javascript folder.  It is testing if the form is working properly and returns the correct info.  Running karma tells us that 1 test failed.

#####After having set up Travis CI with your forked project, play around the page for your project (build history, settings, branches, etc) and describe at least 3 features you think would be useful when troubleshooting a broken project.

> We could test that our other form addition (the index of the last char in the string) returns the correct value for 'kittens' (6).  Also, we could have tests that tell us if a page isn't loading.  It would also tell us quickly if someone working on it branched the project or committed something before the page being broken.

#####What was the build status of your project right after you got everything set up? Use Travis to find any problems, and describe what failed, if anything. (Which files, what lines, why did failure occur, etc.)

>It failed on line 14 on clientjavascript.spec.js.  It expected 'kittens' to be 'not kittens!'

#####Fix any problems described in the previous question. Describe how you fixed them. Push your fix to GitHub and post a link to the passing build (from build history) here.



- Study jasmine testing syntax. Think of a Javascript function, describe its behavior by writing tests for it (this is test-driven development, or TDD). Add the function, run the tests. (Actually do this. Don't forget to commit your changes!)

## Part #3: adding a GPA calculator

- Add a page to the project (don't forget to add it to git) that has a form for letter grades and credits for three classes.

- In TDD fashion, add tests for functions needed to compute the GPA and then implement the functions themselves. Note, however, that karma doesn't work with exports, so after you have tested the functions, you would need to create copies of them that you are exporting. This is awkward and will be fixed in subsequent node setups. Also make sure to add the file that you are testing to karma.conf.js.

- Add a route to app.js to display the GPA on the resulting page.

- Add the basic html to the send so that the GPA is displayed as an html page. Don't add too much: later we will be using various libraries to take care of generating html.

- As you are working, don't forget to change drivers in pair-programming, practice TDD, write comments, and make frequent commits. As before, at the end just push all the changes to github.

