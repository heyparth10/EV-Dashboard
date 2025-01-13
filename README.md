##**Overview**
The objective of this assessment is to analyze the provided Electric Vehicle (EV) population data and create a frontend dashboard that visualizes key insights about the dataset. This repository contains the necessary data and instructions for you to demonstrate your analytical and dashboard creation skills.

Prior to the frontend assignment, Exploratory Data Analysis (EDA) was conducted on the dataset to clean, understand, and extract meaningful insights. These findings have guided the design and structure of the dashboard.
Frontend: React, Material-UI, React Router
EDTA : Numpy, Pandas, Seaborn, matplotlib
Charting: Nivo, D3.js, Seaborn (for inspiration from the Python code)
CSV Data Handling: Papa Parse
Styling: CSS-in-JS via Material-UI’s sx prop
Routing: React Router DOM
Build Tool: Webpack, Babel (handled by Create React App)
**Features** : 
Sidebar Navigation: The sidebar allows easy navigation between different pages like the Bar Chart, Line Chart, and Table.
Interactive Charts: The dashboard includes interactive charts that display EV data, such as the top 10 car makes by the number of vehicles.
Data Table: The table provides detailed views of the top 10 car makes, and the user can click on a specific car make to view its models and trends.

**Dataset Highlights:**
Number of Entries: 50,000 rows x 17 columns
Key Features:
Electric Vehicle Type (e.g., Battery Electric Vehicle, Plug-In Hybrid)
Make and Model
Model Year
Electric Range
Base MSRP
County, City, and State
Clean Alternative Fuel Vehicle (CAFV) Eligibility
Note: The dataset has been reduced in size to ensure optimal performance in a frontend environment.

Exploratory Data Analysis (EDA)
Before building the frontend dashboard, the following steps were performed as part of EDA:

Validated data types and handled null values.
Descriptive Statistics:
Summarized key metrics like the distribution of electric vehicle types, model years, and electric ranges.
Key Insights:
Most common electric vehicle type: Battery Electric Vehicle (BEV) (39,461 out of 50,000 entries).
Top counties and cities by EV adoption (e.g., Yakima County leads with Yakima City having the highest EV population).
Trends in electric vehicle affordability based on MSRP and eligibility for CAFV incentives.

User Interaction:
A Download Dataset button allows users to access the dataset directly.
An FAQ Section provides answers to common questions about EV data and trends.
Accessibility:
The dashboard is deployed and publicly accessible for easy sharing and review.
