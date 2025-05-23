export const tasks = [
  {
    id: 1,
    title: "Procure Raspberry Pi Units",
    description: "Order and receive 10 Raspberry Pi 5 units for hardware prototyping.",
    dueDate: "2024-12-20",
    detailedInfo: 
      "Place an order for 10 Raspberry Pi 5 units along with necessary peripherals like SD cards, power adapters, and HDMI cables. Ensure timely delivery for integration with the cost tracker hardware module.",
    status: "completed",
  },
  {
    id: 2,
    title: "Set Up Firebase Backend",
    description: "Initialize Firebase project and configure Firestore database.",
    dueDate: "2024-12-21",
    detailedInfo: 
      "Create a Firebase project, set up Firestore collections for tracking project expenses, user roles, and approval workflows. Configure security rules and test the integration.",
    status: "pending",
  },
  {
    id: 3,
    title: "Design Circuit for Cost Meter",
    description: "Create the circuit design for cost measurement sensors.",
    dueDate: "2024-12-22",
    detailedInfo: 
      "Design the circuit for capturing voltage and current readings from machinery. The circuit will feed data into a microcontroller that syncs with the cost tracking dashboard.",
    status: "pending",
  },
  {
    id: 4,
    title: "Implement Expense Dashboard UI",
    description: "Build the front-end UI to display real-time expense data.",
    dueDate: "2024-12-23",
    detailedInfo: 
      "Develop a responsive React dashboard that lists hardware/software expenses, budget utilization, and approval statuses. Include charts and filters for better UX.",
    status: "completed",
  },
  {
    id: 5,
    title: "Install Sensors on Test Rig",
    description: "Mount and test cost-tracking sensors on prototype setup.",
    dueDate: "2024-12-24",
    detailedInfo: 
      "Physically install the sensors onto the test rig and ensure stable connectivity with the data acquisition unit. Conduct initial testing to validate signal strength and reliability.",
    status: "pending",
  },
  {
    id: 6,
    title: "Generate Cost Reports",
    description: "Implement weekly automated cost reports for stakeholders.",
    dueDate: "2024-12-25",
    detailedInfo: 
      "Create a script or function in the backend that compiles expense data and formats it into a PDF or email summary for weekly reporting to stakeholders.",
    status: "completed",
  },
  {
    id: 7,
    title: "Fix Data Sync Issue",
    description: "Resolve issue with real-time syncing between hardware and dashboard.",
    dueDate: "2024-12-26",
    detailedInfo: 
      "Investigate and fix the problem causing delay in updating cost data from sensors to Firebase. Check microcontroller firmware and API connectivity for bottlenecks.",
    status: "pending",
  },
  {
    id: 8,
    title: "Conduct Final Demo & Feedback",
    description: "Present the final cost tracking system to the team and gather feedback.",
    dueDate: "2024-12-27",
    detailedInfo: 
      "Demo the end-to-end functionality of the cost tracker—hardware setup, real-time dashboard, and reporting. Gather improvement suggestions and evaluate overall project performance.",
    status: "completed",
  },
];

  
  export const statusConverter=(stat)=>{
    console.log(stat,"sssssssssssssssssssssssssss");
    if(stat==="To Do") return "toDo";
    else if(stat==="In Progress") return "inProgress";
    else if(stat==="In Review") return "inReview";
    else return "completed";
  }
export const items = [
  { id: 101, name: "Laptop", cost: 75000, projectId: 1 },
  { id: 102, name: "Monitor", cost: 15000, projectId: 1 },
  { id: 103, name: "Router", cost: 5000, projectId: 2 },
  { id: 104, name: "3D Printer", cost: 60000, projectId: 2 },
  { id: 105, name: "React Admin Template License", cost: 4500, projectId: 3 },
  { id: 106, name: "Raspberry Pi Kit", cost: 8500, projectId: 4 },
  { id: 107, name: "SSD Drive (1TB)", cost: 9000, projectId: 1 },
  { id: 108, name: "Firebase Hosting", cost: 1200, projectId: 3 }
];

export const otherCosts = [
  { id: 201, description: "Shipping", amount: 1500, projectId: 1 },
  { id: 202, description: "Tax", amount: 1200, projectId: 1 },
  { id: 203, description: "Customs Duty", amount: 3200, projectId: 2 },
  { id: 204, description: "Cloud Subscription", amount: 5000, projectId: 3 },
  { id: 205, description: "Packaging Material", amount: 750, projectId: 2 },
  { id: 206, description: "Team Snacks", amount: 850, projectId: 1 },
  { id: 207, description: "Consulting Fee", amount: 10000, projectId: 3 }
];


// export const otherCosts = [
//   { id: 201, name: "Shipping", cost: 1500, projectId: 1 },
//   { id: 202, name: "Tax", cost: 7200, projectId: 2 }
// ];
