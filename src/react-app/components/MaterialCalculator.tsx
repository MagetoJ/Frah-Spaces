import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/react-app/components/ui/card";
import { Input } from "@/react-app/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/react-app/components/ui/select";
import { Button } from "@/react-app/components/ui/button";
import { Calculator, X, ChevronRight } from "lucide-react";

interface MaterialCalculatorProps {
  onClose?: () => void;
  className?: string;
}

export function MaterialCalculator({ onClose, className }: MaterialCalculatorProps) {
  const [calcType, setCalcType] = useState("flooring");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [subType, setSubType] = useState("60x60");
  const [result, setResult] = useState<{ value: number; unit: string } | null>(null);

  const flooringData: Record<string, number> = {
    "30x30": 1.53,
    "40x40": 1.92,
    "60x60": 1.44,
    "60x120": 1.44,
  };

  const wallingData: Record<string, number> = {
    "9x9 stone": 12.5, // stones per sqm
    "6x9 stone": 18.5,
  };

  const roofingData: Record<string, number> = {
    "Standard Sheet": 0.42, // sheets per sqm roughly
    "Tile Profile": 0.38,
  };

  const calculate = () => {
    const area = parseFloat(length) * parseFloat(width);
    if (!area) return;

    if (calcType === "flooring") {
      const areaPerBox = flooringData[subType] || 1.44;
      const boxesNeeded = Math.ceil((area * 1.1) / areaPerBox);
      setResult({ value: boxesNeeded, unit: "Boxes" });
    } else if (calcType === "walling") {
      const stonesPerSqm = wallingData[subType] || 12.5;
      const stonesNeeded = Math.ceil(area * stonesPerSqm * 1.05);
      setResult({ value: stonesNeeded, unit: "Stones" });
    } else if (calcType === "roofing") {
      const sheetsPerSqm = roofingData[subType] || 0.42;
      const sheetsNeeded = Math.ceil(area * sheetsPerSqm * 1.15); // more waste for roofing
      setResult({ value: sheetsNeeded, unit: "Sheets" });
    }
  };

  return (
    <Card className={`w-full max-w-md mx-auto border-2 shadow-2xl relative overflow-hidden bg-background ${className}`}>
      {onClose && (
        <button 
          onClick={onClose}
          className="absolute right-4 top-4 p-2 hover:bg-muted rounded-full transition-colors z-10"
        >
          <X className="w-4 h-4" />
        </button>
      )}
      <CardHeader className="bg-primary/5 border-b border-primary/10">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Calculator className="w-5 h-5 text-primary" />
          Material Estimator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-6">
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Estimate For</label>
          <Select value={calcType} onValueChange={(val) => {
            setCalcType(val);
            setResult(null);
            if (val === "flooring") setSubType("60x60");
            else if (val === "walling") setSubType("9x9 stone");
            else if (val === "roofing") setSubType("Standard Sheet");
          }}>
            <SelectTrigger className="w-full h-11">
              <SelectValue placeholder="Select material type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="flooring">Flooring Tiles</SelectItem>
              <SelectItem value="walling">Walling Stones</SelectItem>
              <SelectItem value="roofing">Roofing Sheets</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Length (m)</label>
            <Input 
              type="number" 
              value={length} 
              onChange={(e) => setLength(e.target.value)} 
              placeholder="0.00"
              className="h-11"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Width (m)</label>
            <Input 
              type="number" 
              value={width} 
              onChange={(e) => setWidth(e.target.value)} 
              placeholder="0.00"
              className="h-11"
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
            {calcType === "flooring" ? "Tile Size" : calcType === "walling" ? "Stone Size" : "Sheet Type"}
          </label>
          <Select value={subType} onValueChange={setSubType}>
            <SelectTrigger className="w-full h-11">
              <SelectValue placeholder="Select specific type" />
            </SelectTrigger>
            <SelectContent>
              {calcType === "flooring" && Object.keys(flooringData).map((size) => (
                <SelectItem key={size} value={size}>{size} cm</SelectItem>
              ))}
              {calcType === "walling" && Object.keys(wallingData).map((size) => (
                <SelectItem key={size} value={size}>{size}</SelectItem>
              ))}
              {calcType === "roofing" && Object.keys(roofingData).map((size) => (
                <SelectItem key={size} value={size}>{size}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button onClick={calculate} className="w-full h-12 text-md font-bold group">
          Calculate Requirements
          <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Button>

        {result !== null && (
          <div className="mt-4 p-6 bg-primary/5 rounded-2xl text-center border border-primary/20 animate-in zoom-in duration-300">
            <p className="text-xs text-muted-foreground mb-1 font-bold uppercase tracking-[0.2em]">Estimated Quantity</p>
            <div className="flex items-center justify-center gap-2">
              <p className="text-5xl font-black text-primary">{result.value}</p>
              <p className="text-primary font-bold text-xl mt-2">{result.unit}</p>
            </div>
            <p className="text-xs text-muted-foreground mt-3 italic">
              * Includes recommended wastage allowance
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
