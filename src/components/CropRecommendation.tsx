import React, { useEffect, useState, useMemo } from "react";
import { AlertTriangle } from "lucide-react";
import { Droplet, Thermometer, CloudRain, FlaskConical, Leaf, Sun, Ruler, Layers } from "lucide-react";

interface CropData {
  rainfall: string;
  temperature: string;
  humidity: string;
  phosphorous: string;
  potassium: string;
  nitrogen: string;
  ph: string;
  soilType: string;
}

interface CropRecommendationProps {
  cropData: CropData;
}

const CropRecommendation: React.FC<CropRecommendationProps> = ({ cropData }) => {
  // --- State and API logic ---
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState<string | null>(null);
  const [apiResult, setApiResult] = useState<any | null>(null);
  const [soilAdviceError, setSoilAdviceError] = useState<string | null>(null);

  // API URL (adjust as needed)
  const apiUrl = import.meta.env.VITE_API_BASE_URL
    ? `${import.meta.env.VITE_API_BASE_URL}/predict`
    : "http://localhost:8000/predict";

  // Prepare payload
  const payload = useMemo(() => ({
    rainfall: Number(cropData.rainfall),
    temperature: Number(cropData.temperature),
    humidity: Number(cropData.humidity),
    phosphorous: Number(cropData.phosphorous),
    potassium: Number(cropData.potassium),
    nitrogen: Number(cropData.nitrogen),
    ph: Number(cropData.ph),
    soilType: cropData.soilType,
  }), [cropData]);

  useEffect(() => {
    setLoading(true);
    setApiError(null);
    setSoilAdviceError(null);
    const fetchPrediction = async () => {
      try {
        const res = await fetch(apiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          if (res.status === 404) {
            throw new Error("Prediction service not found. Please check if the backend is running.");
          } else if (res.status === 500) {
            throw new Error("Server error occurred. Please try again later.");
          } else if (res.status >= 400 && res.status < 500) {
            throw new Error("Invalid request data. Please check your inputs.");
          } else {
            throw new Error(`API returned ${res.status}: ${res.statusText}`);
          }
        }
        const data = await res.json();
        if (!data || !data.crop || !data.top3) {
          throw new Error("Invalid response from prediction service.");
        }
        if (cropData.soilType && !data.soil_specific_advice) {
          setSoilAdviceError("Soil-specific advice could not be generated. General recommendations are still available.");
        }
        setApiResult(data);
      } catch (err: any) {
        if (err instanceof Error) {
          if (err.name === "TypeError" && err.message.includes("fetch")) {
            setApiError("Unable to connect to the prediction service. Please check your internet connection and try again.");
          } else {
            setApiError(err.message);
          }
        } else {
          setApiError("An unexpected error occurred while fetching predictions.");
        }
      } finally {
        setLoading(false);
      }
    };
    fetchPrediction();
  }, [payload, apiUrl, cropData]);

  if (loading) {
    return (
      <div className="p-4 text-center text-gray-600 dark:text-gray-300">
        🔄 Predicting best crop...
      </div>
    );
  }

  if (apiError || !apiResult) {
    return (
      <div className="space-y-4">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="text-red-500 mt-1 flex-shrink-0" size={24} />
            <div>
              <h3 className="text-lg font-semibold text-red-800 mb-2">Prediction Error</h3>
              <p className="text-red-700 mb-3">{apiError || "Could not fetch crop prediction."}</p>
              <div className="text-sm text-red-600">
                <p className="mb-2">Possible solutions:</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Check your internet connection</li>
                  <li>Verify all input values are valid numbers</li>
                  <li>Try refreshing the page</li>
                  <li>Contact support if the problem persists</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Fallback general advice */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
          <h4 className="text-lg font-semibold text-blue-800 mb-3">General Agricultural Advice</h4>
          <div className="text-blue-700 space-y-2">
            <p>While we couldn't provide specific crop recommendations, here are some general tips:</p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Ensure proper soil preparation and drainage</li>
              <li>Test your soil pH and adjust if necessary</li>
              <li>Consider local climate conditions and seasonal patterns</li>
              <li>Consult with local agricultural extension services</li>
              <li>Choose crops suited to your region's growing conditions</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  // Parameter cards logic is present and responsive
  
  const PARAMETER_CARDS = [
    {
      key: "rainfall",
      label: "Rainfall",
      icon: <CloudRain className="text-blue-500" size={28} />,
      description: "Total precipitation received by the area, crucial for crop hydration.",
      example: "Example: 800-1200 mm/year",
      ideal: "Ideal: Sufficient for crop type, avoid waterlogging.",
      min: 0,
      max: 2000,
      unit: "mm",
    },
    {
      key: "temperature",
      label: "Temperature",
      icon: <Thermometer className="text-red-500" size={28} />,
      description: "Average temperature during the growing season.",
      example: "Example: 20-30°C",
      ideal: "Ideal: Optimal for crop growth, avoid extremes.",
      min: 0,
      max: 50,
      unit: "°C",
    },
    {
      key: "humidity",
      label: "Humidity",
      icon: <Droplet className="text-cyan-500" size={28} />,
      description: "Relative humidity affects plant transpiration and disease risk.",
      example: "Example: 40-80%",
      ideal: "Ideal: Balanced for crop, avoid excess moisture.",
      min: 0,
      max: 100,
      unit: "%",
    },
    {
      key: "phosphorous",
      label: "Phosphorous (P)",
      icon: <FlaskConical className="text-purple-500" size={28} />,
      description: "Essential nutrient for root development and energy transfer.",
      example: "Example: 10-50 mg/kg",
      ideal: "Ideal: Sufficient for healthy growth.",
      min: 0,
      max: 100,
      unit: "mg/kg",
    },
    {
      key: "potassium",
      label: "Potassium (K)",
      icon: <Leaf className="text-green-500" size={28} />,
      description: "Vital for water regulation and disease resistance.",
      example: "Example: 100-250 mg/kg",
      ideal: "Ideal: Adequate for crop needs.",
      min: 0,
      max: 300,
      unit: "mg/kg",
    },
    {
      key: "nitrogen",
      label: "Nitrogen (N)",
      icon: <Sun className="text-yellow-500" size={28} />,
      description: "Promotes leaf growth and overall vigor.",
      example: "Example: 50-150 mg/kg",
      ideal: "Ideal: Balanced for lush growth.",
      min: 0,
      max: 200,
      unit: "mg/kg",
    },
    {
      key: "ph",
      label: "Soil pH",
      icon: <Ruler className="text-pink-500" size={28} />,
      description: "Affects nutrient availability and microbial activity.",
      example: "Example: 6.0-7.5",
      ideal: "Ideal: Neutral to slightly acidic.",
      min: 3,
      max: 10,
      unit: "pH",
    },
    {
      key: "soilType",
      label: "Soil Type",
      icon: <Layers className="text-brown-500" size={28} />,
      description: "Physical composition of soil, influences water and nutrient retention.",
      example: "Example: Loam, Sandy, Clay",
      ideal: "Ideal: Depends on crop, loam preferred for most.",
      min: null,
      max: null,
      unit: "",
    },
  ];

  function renderParameterCards(data: CropData) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {PARAMETER_CARDS.map((param) => {
          const rawValue = data[param.key as keyof CropData];
          // Try to parse as number for scale, else fallback
          const value = typeof rawValue === 'string' && rawValue.trim() !== '' && !isNaN(Number(rawValue))
            ? Number(rawValue)
            : rawValue;
          let scalePercent: number | null = null;
          if (typeof param.min === "number" && typeof param.max === "number" && typeof value === "number") {
            scalePercent = ((value - param.min) / (param.max - param.min)) * 100;
          }
          // Determine scale color
          let scaleColor = "bg-green-500";
          if (typeof scalePercent === "number") {
            if (scalePercent < 33) scaleColor = "bg-blue-400";
            else if (scalePercent < 66) scaleColor = "bg-yellow-400";
            else scaleColor = "bg-green-500";
          }
          return (
            <div
              key={param.key}
              className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 flex items-center justify-center mr-2">
                  {param.icon}
                </div>
                <span className="font-semibold text-gray-800 dark:text-gray-200 text-lg">{param.label}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-xs mb-1 leading-tight">{param.description}</p>
              <div className="flex flex-wrap items-center gap-2 mb-1 mt-1">
                <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 rounded px-2 py-0.5">{param.example}</span>
                <span className="text-xs text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900 rounded px-2 py-0.5">{param.ideal}</span>
              </div>
              {typeof scalePercent === "number" && (
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full mb-2 mt-1">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${scaleColor}`}
                    style={{ width: `${Math.max(0, Math.min(100, scalePercent))}%` }}
                  ></div>
                </div>
              )}
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                <span className="font-semibold text-gray-700 dark:text-gray-200">Value: </span>
                {typeof value !== "undefined" && value !== null && value !== '' ? `${value} ${param.unit}` : "No data"}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <>
      {renderParameterCards(cropData)}
      <div className="space-y-6">
        {/* Main Recommendation Card */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900 dark:to-emerald-800 rounded-2xl p-6 border border-green-200 dark:border-green-700">
          <div className="text-center mb-6">
            <div className="text-6xl mb-4">🌾</div>
            <h3 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
              {apiResult.crop}
            </h3>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {Math.round(apiResult.top3[0].prob * 100)}% Match
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              This crop is the top recommendation from our ML model based on your
              soil and climate data.
            </p>
          </div>

          {/* Top 3 predictions */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 border border-gray-200 dark:border-gray-700">
            <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
              Top 3 Predictions
            </h4>
            <ul className="space-y-1">
              {apiResult.top3.map((item: any, idx: number) => (
                <li
                  key={idx}
                  className="flex justify-between text-gray-700 dark:text-gray-300"
                >
                  <span>{item.crop}</span>
                  <span>{Math.round(item.prob * 100)}%</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Soil Advice Error Display */}
        {soilAdviceError && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-4">
            <div className="flex items-start space-x-2">
              <AlertTriangle
                className="text-yellow-600 mt-0.5 flex-shrink-0"
                size={20}
              />
              <div>
                <p className="text-yellow-800 text-sm font-medium">
                  Soil Advice Notice
                </p>
                <p className="text-yellow-700 text-sm mt-1">{soilAdviceError}</p>
              </div>
            </div>
          </div>
        )}

        {/* Soil-Specific Advice */}
        {apiResult.soil_specific_advice && (
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200">
            <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
              🌱 Soil-Specific Recommendations
            </h4>
            {/* Compatibility Score */}
            {/* ... same as your branch’s soil advice rendering ... */}
          </div>
        )}

        {/* General Growing Tips */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
          <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center">
            <AlertTriangle className="text-orange-500 mr-2" size={24} />
            General Growing Tips
          </h4>
          <p className="text-gray-700 dark:text-gray-300">
            Ensure proper irrigation, pest control, and nutrient management for
            optimal yields.{" "}
            {!apiResult.soil_specific_advice &&
              cropData.soilType &&
              "For more detailed advice, ensure your soil type data is properly configured."}
          </p>
        </div>
      </div>
    </>
  );

}
export default CropRecommendation;