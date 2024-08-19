const mobnav = document.querySelector('.mnav-img2');
const dashboard = document.querySelector('.dashboard');
const nav=document.querySelector('.nav-img2')
//Code for Showing and Hiding the Dashboard
nav.addEventListener('click', function() {
    if (dashboard.style.display === 'flex') {
      
        dashboard.style.display = 'none';
    } else {
       
        dashboard.style.display = 'flex';
    }
});
//Dashboard displayig for Mobile
mobnav.addEventListener('click', function() {
    if (dashboard.style.display === 'flex') {
      
        dashboard.style.display = 'none';
        dashboard.style.width = '0'; 
    } else {
       
        dashboard.style.display = 'flex';
        dashboard.style.width = '100%'; 
    }
});

//tasks is an array of objects (JSON format) which store the data for task table 
const tasks = [
    {
        task: "Update Tax Document for Alphalinx..",
        category: "Compliance",
        dueDate: "23/11/23",
        status: "Request"
    },
    {
        task: "Update KYC document",
        category: "Compliance",
        dueDate: "23/11/23",
        status: "Request"
    },
    {
        task: "Add clearer photo for visa application",
        category: "Visa center",
        dueDate: "23/11/23",
        status: "Request"
    },
    {
        task: "Document not clear: please add new file",
        category: "Visa center",
        dueDate: "23/11/23",
        status: "Request"
    }
];

const table = document.querySelector("table");
//Dynamically inserting data into the table in dom
tasks.forEach(task => {
    const row = document.createElement("tr");

    const taskCell = document.createElement("td");
    taskCell.textContent = task.task;
    row.appendChild(taskCell);

    const categoryCell = document.createElement("td");
    categoryCell.textContent = task.category;
    row.appendChild(categoryCell);

    const dueDateCell = document.createElement("td");
    dueDateCell.textContent = task.dueDate;
    row.appendChild(dueDateCell);

    const statusCell = document.createElement("td");
    const statusButton = document.createElement("button");
    statusButton.textContent = task.status;
    statusButton.addEventListener("click", function() {
        this.textContent = "Request Sent";
    });
    statusCell.appendChild(statusButton);
    row.appendChild(statusCell);

    table.appendChild(row);
});
//Showing task in Mobile display
function renderTasks() {
    const container = document.getElementById('tasks-container');
    container.innerHTML = ''; 

    tasks.forEach(task => {
        const taskDiv = document.createElement('div');
        taskDiv.className = 'task-mobile';
        //Html code for showing the task data
        taskDiv.innerHTML = `
            <p>${task.task}</p>
            <div class="cat-date">
                <p><span>Category</span><br><span>Due Date</span></p>
                <p><span>${task.category}<br></span> <span>${task.dueDate}</span></p>
            </div>
            <div>
                <p>Status</p>
                <button>${task.status}</button>
            </div>
        `;
        //Changing the status of request button
        const statusButton = taskDiv.querySelector("button");
        statusButton.addEventListener("click", function() {
            this.textContent = "Request Sent";
        });

        container.appendChild(taskDiv);
    });
}



//if screen size <1200 then only renderTasks() method is called for Mobile 
function checkScreenWidth() {
    if (window.innerWidth < 1200) {
        renderTasks();
    }
}

checkScreenWidth();

window.addEventListener('resize', checkScreenWidth);

//Transaction Table for storing 2nd table details in JSON format

const transactions = [
    {
        id: "#764657759",
        date: "24/01/19",
        amount: "$5.99",
        description: "Subscription"
    },
    {
        id: "#764657760",
        date: "20/01/19",
        amount: "$99",
        description: "Service Charge"
    },
    {
        id: "#764657761",
        date: "18/01/19",
        amount: "$5.99",
        description: "Purchase"
    },
    {
        id: "#764657762",
        date: "15/01/19",
        amount: "$5.99",
        description: "Mailbox"
    },
    {
        id: "#764657763",
        date: "10/01/19",
        amount: "$5.99",
        description: "Maintenance"
    },
    {
        id: "#764657764",
        date: "05/01/19",
        amount: "$5.99",
        description: "Software License"
    }
];

//Rendering transaction table for large screens 
function renderTransactionRows() {
    const table = document.querySelector('#transactions-container table');


    transactions.forEach(transaction => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${transaction.id}</td>
            <td>${transaction.date}</td>
            <td>${transaction.amount}</td>
            <td>${transaction.description}</td>
        `;
        table.appendChild(row);
    });
}
renderTransactionRows();

//Rendering transaction table for Small screens 
function renderTransactionCards() {
    const container = document.getElementById('mobile-transactions-container');
    container.innerHTML = ''; 

    transactions.forEach(transaction => {
        const transactionDiv = document.createElement('div');
        transactionDiv.className = 'mobile-history';

        transactionDiv.innerHTML = `
        <div class="mobile-history-item">
            <div class="history-id">
                <p>${transaction.id}</p>
                <p>
                    ${transaction.amount} <img class="open-span" src="assets/down.svg" onclick="toggleDescription(this)" alt="">
                </p>
            </div>
            <p>${transaction.date}</p>
            <div class="history-des">
                <p>Description</p>
                <p>${transaction.description}</p>
            </div>
            <div>
        `;

        container.appendChild(transactionDiv);
    });
}

renderTransactionCards();
//code for showing description while clicking on the button in mobile screen
function toggleDescription(element) {
    const description = element.closest('.mobile-history').querySelector('.history-des');
    const isVisible = description.style.display === 'block';
    description.style.display = isVisible ? 'none' : 'block';
    element.src = isVisible ? 'assets/down.svg' : 'assets/up.svg';
}
