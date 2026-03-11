import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/react-app/components/ui/card";
import { Input } from "@/react-app/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/react-app/components/ui/select";
import { Button } from "@/react-app/components/ui/button";
import { Calculator } from "lucide-react";

export function MaterialCalculator() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [tileType, setTileType] = useState("60x60");
  const [result, setResult] = useState<number | null>(null);

  // Data from your "Flooring Tiles" CSV
  const tileData: Record<string, number> = {
    "30x30": 1.53,
    "40x40": 1.92,
    "60x60": 1.44,
    "60x120": 1.44,
  };

  const calculateTiles = () => {
    const area = parseFloat(length) * parseFloat(width);
    const areaPerBox = tileData[tileType];
    if (area && areaPerBox) {
      // Adding 10% wastage as recommended in professional estimations
      const boxesNeeded = Math.ceil((area * 1.1) / areaPerBox);
      setResult(boxesNeeded);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto border-2 shadow-xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-primary" />
          Flooring Tile Estimator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Length (m)</label>
            <Input type="number" value={length} onChange={(e) => setLength(e.target.value)} placeholder="0.00" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Width (m)</label>
            <Input type="number" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="0.00" />
          </div>
        </div>
        
        <div className="space-y-2">
          <label className="text-sm font-medium">Tile Size</label>
          <Select value={tileType} onValueChange={setTileType}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              {Object.keys(tileData).map((size) => (
                <SelectItem key={size} value={size}>{size} cm</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button onClick={calculateTiles} className="w-full h-12 text-lg">Calculate Boxes</Button>

        {result !== null && (
          <div className="mt-6 p-6 bg-primary/5 rounded-2xl text-center border border-primary/20 animate-in zoom-in duration-300">
            <p className="text-sm text-muted-foreground mb-1 font-medium">Estimated Boxes Needed</p>
            <p className="text-sm text-muted-foreground mb-3 text-[10px] uppercase tracking-wider">(Includes 10% waste as recommended)</p>
            <p className="text-4xl font-black text-primary">{result}</p>
            <p className="text-primary font-bold mt-1">Boxes</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
