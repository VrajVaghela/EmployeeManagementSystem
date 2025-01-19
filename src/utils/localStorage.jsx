

const employees = [
    {
        "id": 1,
        "firstname": "Vikram",
        "email": "employee1@example.com",
        "password": "123",
        "tasks": [
            {
                "taskId": 1,
                "title": "Quarterly Report Review",
                "description": "Review and analyze Q3 financial reports",
                "date": "2024-03-20",
                "category": "Finance",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskId": 2,
                "title": "Client Presentation",
                "description": "Prepare slides for upcoming client meeting",
                "date": "2024-03-22",
                "category": "Sales",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskId": 3,
                "title": "Team Training",
                "description": "Conduct new software training for team",
                "date": "2024-03-15",
                "category": "Training",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 2,
        "firstname": "Aarav",
        "email": "employee2@example.com",
        "password": "123",
        "tasks": [
            {
                "taskId": 1,
                "title": "Database Optimization",
                "description": "Optimize database queries for better performance",
                "date": "2024-03-21",
                "category": "Technical",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskId": 2,
                "title": "Code Review",
                "description": "Review pull requests from junior developers",
                "date": "2024-03-19",
                "category": "Development",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskId": 3,
                "title": "Bug Fixes",
                "description": "Fix reported bugs in production",
                "date": "2024-03-18",
                "category": "Maintenance",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskId": 4,
                "title": "Documentation",
                "description": "Update API documentation",
                "date": "2024-03-17",
                "category": "Documentation",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    },
    {
        "id": 3,
        "firstname": "Rohan",
        "email": "employee3@example.com",
        "password": "123",
        "tasks": [
            {
                "taskId": 1,
                "title": "Marketing Campaign",
                "description": "Launch social media marketing campaign",
                "date": "2024-03-25",
                "category": "Marketing",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskId": 2,
                "title": "Content Creation",
                "description": "Create blog posts for website",
                "date": "2024-03-23",
                "category": "Content",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskId": 3,
                "title": "SEO Optimization",
                "description": "Optimize website content for SEO",
                "date": "2024-03-20",
                "category": "Marketing",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 4,
        "firstname": "Priya",
        "email": "employee4@example.com",
        "password": "123",
        "tasks": [
            {
                "taskId": 1,
                "title": "Budget Planning",
                "description": "Prepare next quarter budget plan",
                "date": "2024-03-28",
                "category": "Finance",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskId": 2,
                "title": "Expense Reports",
                "description": "Process team expense reports",
                "date": "2024-03-24",
                "category": "Finance",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskId": 3,
                "title": "Vendor Payments",
                "description": "Process pending vendor payments",
                "date": "2024-03-21",
                "category": "Finance",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 0
        }
    },
    {
        "id": 5,
        "firstname": "Ananya",
        "email": "employee5@example.com",
        "password": "123",
        "tasks": [
            {
                "taskId": 1,
                "title": "Server Maintenance",
                "description": "Perform routine server maintenance",
                "date": "2024-03-26",
                "category": "IT",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "taskId": 2,
                "title": "Security Audit",
                "description": "Conduct monthly security audit",
                "date": "2024-03-25",
                "category": "Security",
                "active": true,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "taskId": 3,
                "title": "Backup Verification",
                "description": "Verify system backup integrity",
                "date": "2024-03-22",
                "category": "IT",
                "active": false,
                "newTask": false,
                "completed": true,
                "failed": false
            },
            {
                "taskId": 4,
                "title": "Network Update",
                "description": "Update network infrastructure",
                "date": "2024-03-20",
                "category": "IT",
                "active": false,
                "newTask": false,
                "completed": false,
                "failed": true
            }
        ],
        "taskNumbers": {
            "active": 2,
            "newTask": 1,
            "completed": 1,
            "failed": 1
        }
    }
]

const admins = [{
    "id": 1,
    "firstname": "Raj",
    "email": "admin@example.com",
    "password": "123"
}]

export const getLocalStorage = () => {
    try {
        // Initialize if empty
        if (!localStorage.getItem('employees')) {
            localStorage.setItem('employees', JSON.stringify(employees));
            return { employees };
        }
        return { employees: JSON.parse(localStorage.getItem('employees')) };
    } catch (error) {
        console.error('Error reading from localStorage:', error);
        return { employees };
    }
};

export const setLocalStorage = (data) => {
    try {
        localStorage.setItem('employees', JSON.stringify(data.employees));
    } catch (error) {
        console.error('Error writing to localStorage:', error);
    }
};

