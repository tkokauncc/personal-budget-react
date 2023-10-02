import React from 'react';
import BudgetChart from '../BudgetChart/BudgetChart';
import D3BudgetChart from '../D3BudgetChart/D3BudgetChart';
import axios from 'axios';

export default class HomePage extends React.Component {
    state = {
        myMonthlyBudget: []
    }
    componentDidMount() {
        axios.get(`http://localhost:3001/budget`)
        .then(response => { 
            this.myMonthlyBudget = 
            this.setState({
                myMonthlyBudget: response.data.myMonthlyBudget
            })
        })
    }
    render() {
    return (<main className="container center">
            <section className="section-area">
               <article className="text-area">
                   <h1 className="options-area">Stay on track with you budget</h1>
                   <p className="options-area">
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                   </p>
               </article>
               <article className="text-area">
                   <h1 className="options-area">Alerts on over the budget</h1>
                   <p className="options-area">
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                    </p>
               </article>
               <article className="text-area">
                   <h1 className="options-area">Results</h1>
                   <p className="options-area">
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                    </p>
               </article>
               <article className="text-area">
                   <h1 className="options-area">Free Budgeting APP</h1>
                   <p className="options-area">
                    This app is free!!! And you are the only one holding your data!
                   </p>
               </article>
               <article className="text-area">
                   <h1 className="options-area">Stay on track</h1>
                   <p className="options-area">
                    Do you know where you are spending your money? If you really stop to track it down,
                    you would get surprised! Proper budget management depends on real data... and this
                    app will help you with that!
                   </p>
               </article>
               <article className="text-area">
                   <h1 className="options-area">Alerts</h1>
                   <p className="options-area">
                    What if your clothing budget ended? You will get an alert. The goal is to never go over the budget.
                   </p>
               </article>
       
               <article className="text-area">
                   <h1 className="options-area">Results</h1>
                   <p className="options-area" >
                    People who stick to a financial plan, budgeting every expense, get out of debt faster!
                    Also, they to live happier lives... since they expend without guilt or fear... 
                    because they know it is all good and accounted for.
                   </p>
               </article>

               <article className="text-area">
                <h1 className="options-area">Free</h1>
                  <p className="options-area">
                          This app is free!!! And you are the only one holding your data!
                    </p>
                </article>
           </section>
           <BudgetChart />
           <D3BudgetChart/>
          </main>
  );
}
}
