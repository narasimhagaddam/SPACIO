import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "@/lib/data";
import { ArrowLeft, Upload, MapPin, Check } from "lucide-react";

const AddSpace = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [durationType, setDurationType] = useState("hourly");

  return (
    <div className="min-h-screen bg-background pb-24 px-4 pt-4 space-y-5">
      <div className="flex items-center gap-3">
        <button onClick={() => navigate(-1)} className="p-2 rounded-full bg-secondary">
          <ArrowLeft className="w-5 h-5 text-foreground" />
        </button>
        <h1 className="text-xl font-bold text-foreground">Add Space ➕</h1>
      </div>

      {/* Image Upload */}
      <div className="border-2 border-dashed border-border rounded-2xl p-8 flex flex-col items-center gap-2 bg-secondary/50">
        <Upload className="w-8 h-8 text-muted-foreground" />
        <p className="text-sm text-muted-foreground">Upload images</p>
      </div>

      {/* Name */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-foreground">Space Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value.slice(0, 100))}
          placeholder="e.g. The Cricket Hub"
          className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Category */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-foreground">Category</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === cat.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-foreground">Price (₹)</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="e.g. 400"
          className="w-full px-4 py-3 rounded-xl bg-secondary text-foreground text-sm outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Duration */}
      <div className="space-y-1.5">
        <label className="text-sm font-medium text-foreground">Duration Type</label>
        <div className="flex gap-2">
          {["hourly", "half-day", "full-day", "daily"].map((d) => (
            <button
              key={d}
              onClick={() => setDurationType(d)}
              className={`flex-1 py-2 rounded-xl text-xs font-medium capitalize transition-all ${
                durationType === d
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      {/* Location */}
      <button className="w-full py-3 rounded-xl bg-secondary text-secondary-foreground font-medium text-sm flex items-center justify-center gap-2">
        <MapPin className="w-4 h-4" /> Set Location on Map
      </button>

      {/* Actions */}
      <div className="flex gap-3 pt-2">
        <button className="flex-1 py-3.5 rounded-2xl gradient-primary text-primary-foreground font-bold text-sm">
          Publish Listing 🚀
        </button>
        <button className="py-3.5 px-6 rounded-2xl bg-secondary text-secondary-foreground font-medium text-sm">
          Clear
        </button>
      </div>
    </div>
  );
};

export default AddSpace;
