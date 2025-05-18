import React, { useState } from "react";

type Recommendation = {
  name: string;
  address?: string;
  [key: string]: any;
};

type Result = {
  location: string;
  recommendations: Recommendation[];
  caption: string;
  transcript: string;
  ocr_texts: string[];
  hashtags: string[];
};

const ReelAnalyzer: React.FC = () => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const response = await fetch("http://localhost:8000/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
      if (!response.ok) {
        const err = await response.json();
        throw new Error(err.detail || "Something went wrong");
      }
      const data: Result = await response.json();
      setResult(data);
    } catch (e: any) {
      setError(e.message || "Unknown error");
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xl mx-auto my-8 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Instagram Reel Analyzer</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-6">
        <input
          type="url"
          className="border p-2 rounded"
          placeholder="Paste Instagram Reel URL"
          value={url}
          required
          onChange={e => setUrl(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>
      </form>
      {error && (
        <div className="text-red-600 mb-4">{error}</div>
      )}
      {result && (
        <div className="space-y-4">
          <div>
            <strong>Detected Location:</strong> {result.location}
          </div>
          <div>
            <strong>Caption:</strong> <span className="italic">{result.caption}</span>
          </div>
          <div>
            <strong>Transcript:</strong>
            <pre className="bg-gray-100 p-2 rounded mt-1">{result.transcript}</pre>
          </div>
          <div>
            <strong>OCR Texts:</strong>
            <ul className="list-disc ml-5">
              {result.ocr_texts.map((text, i) => (
                <li key={i}>{text}</li>
              ))}
            </ul>
          </div>
          <div>
            <strong>Hashtags:</strong> {result.hashtags.join(", ")}
          </div>
          <div>
            <strong>Travel Recommendations:</strong>
            <ul className="list-disc ml-5">
              {result.recommendations.map((rec, idx) => (
                <li key={idx}>
                  <span className="font-semibold">{rec.name}</span>
                  {rec.address && <span className="ml-2 text-gray-600">{rec.address}</span>}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReelAnalyzer;