import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface CopyableCodeProps {
  code: string;
  className?: string;
}

const CopyableCode = ({ code, className = "" }: CopyableCodeProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className={`relative group my-4 ${className}`}>
      <div className="bg-slate-900 rounded-lg p-4">
        <pre className="text-slate-100 overflow-x-auto m-0">
          <code>{code}</code>
        </pre>
      </div>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-6 right-6 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
            onClick={handleCopy}
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-400" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{copied ? "Copied!" : "Copy code"}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default CopyableCode;
