require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

// ✅ Environment variable check
console.log("🔍 Environment Check:");
console.log("PORT:", process.env.PORT || "5000 (default)");
console.log("MONGODB_URI:", process.env.MONGODB_URI ? "✅ Set" : "❌ Missing");
console.log("JWT_SECRET:", process.env.JWT_SECRET ? "✅ Set" : "❌ Missing");
console.log("CLIENT_URL:", process.env.CLIENT_URL || "Not set");

// ✅ CORS configuration with fallback
const allowedOrigins = [
  "http://localhost:5173",
  "https://money-mate-lhit.onrender.com",
  "https://money-mate-plum.vercel.app",
];

// Add CLIENT_URL only if it exists and is valid
if (process.env.CLIENT_URL && process.env.CLIENT_URL.startsWith("http")) {
  allowedOrigins.push(process.env.CLIENT_URL);
}

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.options("*", cors());
app.use(express.json());

// ✅ Connect to database
connectDB();

// ✅ Load routes with error handling
try {
  console.log("📝 Loading routes...");

  const authRoutes = require("./routes/authRoutes");
  console.log("✅ Auth routes loaded");

  const incomeRoutes = require("./routes/incomeRoutes");
  console.log("✅ Income routes loaded");

  const expenseRoutes = require("./routes/expenseRoutes");
  console.log("✅ Expense routes loaded");

  const dashboardRoutes = require("./routes/dashboardRoutes");
  console.log("✅ Dashboard routes loaded");

  // Register routes
  app.use("/api/v1/auth", authRoutes);
  app.use("/api/v1/income", incomeRoutes);
  app.use("/api/v1/expense", expenseRoutes);
  app.use("/api/v1/dashboard", dashboardRoutes);

  console.log("✅ All routes registered successfully");
} catch (error) {
  console.error("❌ Error loading routes:", error.message);
  console.error("Stack trace:", error.stack);
  process.exit(1);
}

// ✅ Static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// ✅ Health check endpoint
app.get("/", (req, res) => {
  res.json({
    message: "Money Mate API is running",
    status: "OK",
    timestamp: new Date().toISOString(),
  });
});

// ✅ 404 handler
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ✅ Global error handler
app.use((err, req, res, next) => {
  console.error("❌ Global error:", err);
  res.status(500).json({
    message: "Internal server error",
    error: process.env.NODE_ENV === "development" ? err.message : undefined,
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
  console.log(`🌍 Environment: ${process.env.NODE_ENV || "development"}`);
});
