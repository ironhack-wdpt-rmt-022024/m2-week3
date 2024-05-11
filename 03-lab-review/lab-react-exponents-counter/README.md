![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# LAB | React Exponents Counter
<details>
  <summary>
   <h2>Learning Goals</h2>
  </summary>

  This exercise allows you to practice and apply the concepts and techniques taught in class. 

  Upon completion of this exercise, you will be able to:

  - Plan and organize the data flow between the components
  - Lift the state up to the common ancestor component in an existing React app
  - Pass functions as props from a parent component to a child component


  <br>
  <hr> 

</details>

## Introduction

In this lab, you will practice how to lift state up in React. You will work on a small React app that includes a Counter component and several other components that show different exponent values of a number (n², n³, n⁴, n⁵, etc.). Your task will be to lift the state up so that all the components can share and access the same value through a common parent. Let's lift some state up! :muscle:

<br>

<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-exponents-counter/Iteration+3+-+complete.gif" alt="Example - Finished LAB" />
</p>

<br>

## Setup

- Fork this repo
- Clone this repo

```shell
cd lab-react-powers
npm install
npm run dev
```



## Submission

- Upon completion, run the following commands:

  ```
  git add .
  git commit -m "done"
  git push origin master
  ```

- Create a Pull Request and submit your assignment.

  

## Instructions

To help you get started quickly and let you focus only on practicing the concept of lifting state up in React without any distractions, we have provided you with the starter code and all the required components. This means there's no need for you to create any new components.




----

### Iteration 0 | Starter Code

In the `App.jsx`, you will find the `<Counter />` component being rendered at the top. Below it, you will find the components displaying different number exponents:

- `<ExponentTwo />`
- `<ExponentThree />`
- `<ExponentFour />`
- `<ExponentFive />`
- `<ExponentSix />`



These `<Exponent... />` components currently show static (hard-coded) content, but we will change that in the following iterations and make them display the exponents of the number from the `<Counter />`.

<br>

<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-exponents-counter/Iteration+0.png" alt="Iteration 0" />


</p>

<br>

### Iteration 1 | Lift state up to the common parent

The `Counter` component has a state variable `count` used for the counter, and handler functions `increment` and `decrement` used to change the value of the `count`. The other `<Exponent.../>` components don't have access to this state variable, but need it to be able to show the exponent of the number from the `Counter`. 

Your task is to lift the state of the `Counter` (state variable `count`) to the `App` component.



<br>

<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-exponents-counter/Iteration+1.png" alt="Iteration 1" />



</p>

<br>



---



### Iteration 2 | Pass data from the common parent

Now that the `count` variable is available in the common parent (`App`), you can easily share it with all components. Your task is to pass the `count` value as a prop from the `App` to the `<Counter />` and all the `<Exponent... />` components.

Afterward, make sure to update the `<Counter />` and `<Exponent... />` components to show the `count` value coming from the props.

<br>

<br>

<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-exponents-counter/Iteration+2.png" alt="Iteration 1" />



</p>

<br>





---



### Iteration 3 | Move state logic up

If you have correctly passed the `count` value to all components in the previous step, the count should be visible in all components. 

The `Counter` component's functionality is currently broken because the state variable has been separated from the handler functions:

<br>



<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-exponents-counter/Iteration+3+-+counter+broken.gif" alt="counter broken" />
</p>

<br>

As we separated the state variable from the handler functions, the counter is broken and pressing buttons <kbd>+</kbd> and <kbd>-</kbd> doesn't anymore increment the counter. To fix this, you'll need to move the `increment` and `decrement` logic from `Counter` to the parent `App` component, where the state variable resides. 



<br>

<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-exponents-counter/Iteration+3.1.png" alt="Iteration 1" />



</p>

<br>





Once you are done moving the logic to the `App`, pass the `increment` and `decrement` functions as props to the `Counter` and link them to the buttons <kbd>+</kbd> and <kbd>-</kbd>.




<br>

<p align="center">
  <img src="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-exponents-counter/Iteration3.2.png" alt="Iteration 1" />



</p>

<br>



<details>
  <summary><b>See Expected Result</b></summary>


![](https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-react-exponents-counter/Iteration+3+-+complete.gif)

  <br>

</details>




<br>



---



### Bonus: Iteration 4 | Refactor

As you may have noticed, the `<Exponent... />` components share the same structure and logic. Whenever in code we have a duplicated logic and structure, it is a good place to start thinking about refactoring and DRY approach. This is exactly what you should do next.
Refactor the `<Exponent... />` components into one reusable component named `Exponent`. This component should dynamically display exponents and perform calculations. The component should take the following props:

- `num` - Number value that serves as a base on which the exponent is added and calculated
- `exponent` - Number value representing the exponent to be applied to the base `num`.



<br>

**Happy coding!** :blue_heart:

<br>

<br>




## FAQs

<details>
  <summary>I am stuck and don't know how to solve the problem or where to start. What should I do?</summary>

  <br>

If you are stuck in your code and don't know how to solve the problem or where to start, you should take a step back and try to form a clear question about the specific issue you are facing. This will help you narrow down the problem and come up with potential solutions.

For example, is it a concept that you don't understand, or are you receiving an error message that you don't know how to fix? It is usually helpful to try to state the problem as clearly as possible, including any error messages you are receiving. This can help you communicate the issue to others and potentially get help from classmates or online resources.

Once you have a clear understanding of the problem, you will be able to start working toward the solution.

  <br>

[Back to top](#faqs)

</details>

<br>



<details>
  <summary>I am getting an error: "not defined". How do I fix it?</summary>

  <br>

The "ReferenceError: variable is not defined" error in JavaScript occurs when you try to access a variable or a function that has not been defined yet or is out of scope.

To fix the issue, check that you have defined the variable or function that you are trying to use and double-check the spelling to make sure you are using the correct name.

In case the variable or a function is defined in another file, make sure that the file has been imported or loaded correctly.

  <br>

[Back to top](#faqs)

</details>



<br>



<details>
  <summary>I am unable to push changes to the repository. What should I do?</summary>

  <br>

There are a couple of possible reasons why you may be unable to _push_ changes to a Git repository:

1. **You have not committed your changes:** Before you can push your changes to the repository, you need to commit them using the `git commit` command. Make sure you have committed your changes and try pushing again. To do this, run the following terminal commands from the project folder:

   ```shell
   git add .
   git commit -m "Your commit message"
   git push
   ```

<br>

2. **You do not have permission to push to the repository:** If you have cloned the repository directly from the main Ironhack repository without making a _Fork_ first, you do not have write access to the repository.
   To check which remote repository you have cloned, run the following terminal command from the project folder:

   ```shell
   git remote -v
   ```

   <br>

   If the link shown is the same as the main Ironhack repository, you will need to fork the repository to your GitHub account first, and then clone your fork to your local machine to be able to push the changes.

   **Note**: You may want to make a copy of the code you have locally, to avoid losing it in the process.

  <br>

[Back to top](#faqs)

</details>
