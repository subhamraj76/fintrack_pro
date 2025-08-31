import {BarChart3,Receipt,PieChart,CreditCard,} from "lucide-react";

export const statsData = [
  {
    value: "5K+",
    label: "Active Users",
  },
  {
    value: "₹20L+",
    label: "Transactions Tracked",
  },
  {
    value: "50%",
    label: "Upside",
  },
  {
    value: "4/5",
    label: "User Ratings",
  },
];

export const featuresData = [
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "Smart Spending Insights",
    description: "Ever wondered where your money actually goes? Our analytics break down your spending habits in ways that actually make sense, helping you spot those sneaky budget drains."
  },
  {
    icon: <Receipt className="h-8 w-8 text-blue-600" />,
    title: "Receipt Scanner",
    description: "Hate typing in receipts manually? Just snap a photo and we'll pull out all the important stuff automatically. No more squinting at faded receipts or losing track of expenses."
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "Visual Money Stories",
    description: "Numbers are boring, but colorful charts and graphs? Now we're talking! See your spending come to life with beautiful visuals that make sense of your money patterns at a glance."
  },
];

export const howItWorksData = [
  {
    icon: <CreditCard className="h-8 w-8 text-blue-600" />,
    title: "1. Create Your Account",
    description:
      "Get started in minutes with our simple and secure sign-up process",
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-600" />,
    title: "2. Track Your Spending",
    description:
      "Automatically categorize and track your transactions in real-time",
  },
  {
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    title: "3. Get Insights",
    description:
      "Check Your Expenses with the help of Graphs.",
  },
];

