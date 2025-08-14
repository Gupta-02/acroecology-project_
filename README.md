# 🌾 CropVision - AI-Powered Crop Prediction Platform

<div align="center">

![CropVision Banner](https://img.shields.io/badge/CropVision-AI%20Agriculture-green?style=for-the-badge&logo=sprout)

**Discover the perfect crop for your land with intelligent agricultural analysis**

[![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

*A joint effort by **Swapna Kondapuram** and **Deep Das**, 3rd year undergraduates at **NIT Surat***

</div>

---

## 🌱 Overview

CropVision is an innovative web application that leverages artificial intelligence to provide farmers and agricultural professionals with data-driven crop recommendations. By analyzing multiple environmental and soil parameters, the platform suggests the most suitable crops for specific land conditions, helping optimize agricultural productivity and sustainability.

---

## 📝 Description

CropVision transforms raw agronomic inputs—like rainfall, temperature, humidity, and macronutrient levels—into **clear, actionable recommendations**. The app blends a clean, modern UI with interactive storytelling to guide users through each input, explain *why* it matters, and surface **confidence‑scored predictions** with tips for success. A built‑in dashboard visualizes trends, tracks past predictions, and helps compare how conditions have changed over time. Whether you’re a student, a precision‑ag professional, or a farmer experimenting with field plots, CropVision makes agronomic decision‑making **simple, transparent, and visual**.

---

### ✨ Key Features

- **🔍 Intelligent Crop Analysis** - Advanced algorithm considering 7 critical parameters
- **📊 Comprehensive Dashboard** - Track predictions, success rates, and field analytics
- **📈 Real-time Analytics** - Visual insights into crop distribution and trends
- **👤 User Authentication** - Secure login and personalized experience
- **🎨 Beautiful UI/UX** - Modern, responsive design with smooth animations
- **📱 Mobile Responsive** - Optimized for all device sizes
- **💾 Data Export** - Download prediction data and analytics

---

## 🎯 Goals

- **Enhance decision quality**: Provide reliable, interpretable crop suggestions based on seven core parameters.
- **Make agronomy approachable**: Use friendly UI, tooltips, and micro‑explanations to cut through jargon.
- **Promote sustainability**: Encourage crop choices that suit local conditions, reducing waste and inputs.
- **Support learning and iteration**: Save, compare, and export predictions to study what works best.
- **Be fast and accessible**: Lightweight frontend with responsive design for mobile and rural connectivity.

---

## 🎯 How It Works

CropVision analyzes seven crucial agricultural parameters to make accurate crop predictions:

### 📋 Input Parameters

1. **🌧️ Rainfall (mm)** - Monsoon patterns and water availability
2. **🌡️ Temperature (°C)** - Climate conditions and thermal requirements
3. **💨 Humidity (%)** - Atmospheric moisture levels
4. **⚛️ Phosphorous (kg/ha)** - Root development and flowering nutrients
5. **⚡ Potassium (kg/ha)** - Plant disease resistance and stress tolerance
6. **🧪 Nitrogen (kg/ha)** - Vegetative growth and chlorophyll production
7. **🔬 pH Value (0-14)** - Soil acidity/alkalinity balance

### 🎯 Supported Crops

- **🌾 Rice** - Optimal for high rainfall and warm climates
- **🌾 Wheat** - Perfect for cool temperatures and moderate water
- **🌽 Maize** - Ideal for warm conditions with good nitrogen levels
- **🌿 Cotton** - Suitable for high potassium and warm weather
- **🫘 Soybean** - Thrives in balanced pH and moderate conditions
- **🍅 Tomato** - Requires high nutrients and controlled environment
- **🥬 Mixed Vegetables** - Versatile options for diverse conditions

---

## 🧪 Example

### Sample Input
```
Field: North Plot A
Rainfall: 210 mm
Temperature: 28 °C
Humidity: 75 %
Nitrogen (N): 90 kg/ha
Phosphorous (P): 50 kg/ha
Potassium (K): 80 kg/ha
pH: 6.3
```

### Sample Output (Illustrative)
- **Top Recommendation:** 🌾 **Rice**
- **Confidence:** 0.86
- **Reasoning (excerpt):** High rainfall and warm temperatures favor paddy cultivation; near‑slightly‑acidic pH is suitable; NPK balance supports vegetative growth.
- **Alternatives:** Maize (0.62), Tomato (0.48)
- **Tips:** Maintain standing water during early growth; monitor N top‑dress at tillering.

> *Note:* Outputs depend on your model/weights and may vary based on region/season.

---

## 🧭 Usage Instructions

### 1. Start a New Prediction
- Go to **Predict** → Enter your field/site name.
- Provide the seven parameters (rainfall, temperature, humidity, N, P, K, pH).
- Use on‑screen hints to understand recommended ranges and units.
- Click **Predict Crop**.

### 2. Understand the Results
- Review the **Top Recommended Crop** with a **confidence score**.
- Explore **Why this crop?** to see factor‑by‑factor reasoning.
- View **Growing Tips** (e.g., irrigation, nutrient balance, pH adjustments).

### 3. Track & Compare
- Open the **Dashboard** to see:
  - Recent predictions and outcomes
  - Distribution of recommended crops
  - Trend lines for inputs (e.g., rainfall vs. crop choice)
- Use **Filters** (date range, field, season) to compare scenarios.

### 4. Export & Share
- Click **Export** on the dashboard to download CSV/JSON of predictions and analytics.
- Attach exports to reports or share with collaborators.

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- Modern web browser

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/cropvision.git
   cd cropvision
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🛠️ Technology Stack

### Frontend Framework
- **React 18.3.1** - Modern UI library with hooks
- **TypeScript 5.5.3** - Type-safe JavaScript development
- **Vite 5.4.2** - Fast build tool and development server

### Styling & UI
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **Custom CSS Animations** - Smooth transitions and effects

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS preprocessing
- **Autoprefixer** - CSS vendor prefixing

---

## 📱 Features Deep Dive

### 🎨 Interactive User Experience

- **Storytelling Interface** - Each parameter input tells an agricultural story
- **Real-time Feedback** - Instant insights on soil conditions
- **Animated Transitions** - Smooth, engaging user interactions
- **Progress Tracking** - Visual step-by-step journey

### 📊 Advanced Analytics

- **Prediction Confidence** - AI-calculated accuracy scores
- **Historical Trends** - Track prediction patterns over time
- **Crop Distribution** - Visual breakdown of recommended crops
- **Success Rate Monitoring** - Performance analytics

### 🔐 User Management

- **Secure Authentication** - Email/password login system
- **Profile Management** - Customizable user settings
- **Data Persistence** - Local storage for user preferences
- **Account Export** - Download personal data

### 📈 Dashboard Features

- **Real-time Weather** - Current conditions display
- **Field Management** - Track multiple agricultural areas
- **Recent Predictions** - Quick access to latest recommendations
- **Performance Metrics** - Success rates and statistics

---

## 🌟 Screenshots

### Landing Page
Beautiful, animated landing page with crop-themed visuals and smooth transitions.

### Prediction Journey
Step-by-step parameter input with real-time feedback and agricultural storytelling.

### Crop Recommendations
Detailed analysis results with confidence scores, growing tips, and market insights.

### Analytics Dashboard
Comprehensive data visualization with charts, trends, and performance metrics.

---

## 🤝 Contributing

We welcome contributions to CropVision! Here's how you can help:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. **Push** to the branch (`git push origin feature/amazing-feature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write meaningful commit messages
- Test on multiple browsers
- Ensure responsive design

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👥 Authors

<div align="center">

### 🎓 Student Developers

**Swapna Kondapuram** & **Deep Das**

*3rd Year Undergraduate Students*  
**National Institute of Technology (NIT), Surat**

---

*Bridging the gap between technology and agriculture through innovative solutions*

</div>

---

## 🙏 Acknowledgments

- **NIT Surat** - For providing the educational foundation
- **Agricultural Research Community** - For crop science insights
- **Open Source Community** - For the amazing tools and libraries
- **React & TypeScript Teams** - For the robust development platform

---

## 📞 Contact

For questions, suggestions, or collaboration opportunities:

- 📧 **Email**: [contact@cropvision.app](mailto:contact@cropvision.app)
- 🐙 **GitHub**: [CropVision Repository](https://github.com/your-username/cropvision)
- 🎓 **Institution**: National Institute of Technology, Surat

---

<div align="center">

**Made with ❤️ for sustainable agriculture**

*CropVision - Empowering farmers with AI-driven insights*

![Crop Banner](https://img.shields.io/badge/🌾-Growing%20Tomorrow-green?style=for-the-badge)

</div>
